import { z } from 'zod'
import { useVideoRendering } from '@/libs/helpers/use-video-rendering'
import { VIDEO_COMP_NAME, videoCompSchema } from '@/libs/types/constants'
import { Box, Dropdown, Input, Stack, Typography, Button } from '@mui/joy'
import { MyColorPicker } from './MyColorPicker'

const controls: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}

export const RenderVideoControls: React.FC<{
  texts: { title: string; text: string[] }[]
  color: string
  setTexts: React.Dispatch<
    React.SetStateAction<{ title: string; text: string[] }[]>
  >
  setColor: React.Dispatch<React.SetStateAction<string>>
  pageHeading: string
  setPageHeading: React.Dispatch<React.SetStateAction<string>>
  inputProps: z.infer<typeof videoCompSchema>
}> = ({
  texts,
  setTexts,
  setColor,
  color,
  pageHeading,
  setPageHeading,
  inputProps,
}) => {
  const { renderMedia, state, undo } = useVideoRendering(
    VIDEO_COMP_NAME,
    inputProps
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    textIndex: number
  ) => {
    setTexts((prevTexts: { title: string; text: string[] }[]) => {
      const newTexts = prevTexts.map(
        (titleText: { title: string; text: string[] }, index) => {
          if (index === textIndex) {
            return {
              ...titleText,
              title: e.target.value,
            }
          }
          return titleText
        }
      )
      return newTexts
    })
  }

  const handleSentenceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    textIndex: number,
    textidx: number
  ) => {
    setTexts((prevTexts: { title: string; text: string[] }[]) => {
      const newTexts = prevTexts.map(
        (titleText: { title: string; text: string[] }, index) => {
          if (index === textIndex) {
            return {
              ...titleText,
              text: titleText.text.map((ttext, idx) => {
                if (idx === textidx) {
                  return e.target.value
                }
                return ttext
              }),
            }
          }
          return titleText
        }
      )
      return newTexts
    })
  }

  return (
    <Box>
      {state.status === 'init' ||
      state.status === 'invoking' ||
      state.status === 'error' ? (
        <Stack>
          <Dropdown text='Heading'>
            <Input
              value={pageHeading}
              onChange={(e) => setPageHeading(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Dropdown>
          <Dropdown text='Text'>
            {texts?.map((text, index) => (
              <Stack key={index}>
                <Typography>{`Segment${index + 1}`}</Typography>
                <Stack>
                  <Typography>Title</Typography>
                  <Input
                    placeholder='title'
                    value={text.title}
                    onChange={(e) => handleChange(e, index)}
                    sx={{ mb: 2 }}
                  />
                  <Typography>Sentence(s)</Typography>
                  {text.text.length > 0 &&
                    text.text.map((txt: string, idx: number) => (
                      <>
                        <Input
                          key={idx}
                          sx={{ mb: 2 }}
                          placeholder='sentence'
                          value={txt}
                          onChange={(e) => handleSentenceChange(e, index, idx)}
                        />
                      </>
                    ))}
                </Stack>
              </Stack>
            ))}
          </Dropdown>
          <Dropdown text='Color'>
            <MyColorPicker
              initialColor={color}
              description='Text Color'
              setMyColor={setColor}
            />
          </Dropdown>

          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              mt: 2,
            }}
          >
            <Button
              disabled={state.status === 'invoking'}
              loading={state.status === 'invoking'}
              onClick={renderMedia}
            >
              Render video
            </Button>
          </Stack>
          {state.status === 'error' ? (
            <Typography color='danger'>{state.error.message}</Typography>
          ) : null}
        </Stack>
      ) : null}
      {state.status === 'done' ? (
        <>
          <Typography>{state.message}</Typography>
          <Typography>Access Video in (out) folder</Typography>
        </>
      ) : null}
    </Box>
  )
}
