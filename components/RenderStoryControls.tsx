import { z } from 'zod'
import {
  storyCompSchema,
  coinRowSchema,
  STORY_COMP_NAME,
} from '@/libs/types/constants'
import { useStoryRendering } from '@/libs/helpers/use-story-rendering'
import {
  Box,
  Dropdown,
  Input,
  Select,
  Stack,
  Typography,
  Option,
  Button,
} from '@mui/joy'

export const RenderStoryControls: React.FC<{
  coinRows: z.infer<typeof coinRowSchema>[]
  setCoinRows: React.Dispatch<
    React.SetStateAction<z.infer<typeof coinRowSchema>[]>
  >
  pageHeading: string
  setPageHeading: React.Dispatch<React.SetStateAction<string>>
  inputProps: z.infer<typeof storyCompSchema>
}> = ({ coinRows, setCoinRows, pageHeading, setPageHeading, inputProps }) => {
  const { renderMedia, state } = useStoryRendering(STORY_COMP_NAME, inputProps)

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    textIndex: number
  ) => {
    setCoinRows((prevCoinRows: z.infer<typeof coinRowSchema>[]) => {
      const newCoinRows = prevCoinRows.map(
        (coinRow: z.infer<typeof coinRowSchema>, index: number) => {
          if (index === textIndex) {
            return { ...coinRow, [e.target.name]: e.target.value.toUpperCase() }
          }
          return coinRow
        }
      )
      return newCoinRows
    })
  }

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    textIndex: number,
    name: string
  ) => {
    setCoinRows((prevCoinRows: z.infer<typeof coinRowSchema>[]) => {
      const newCoinRows = prevCoinRows.map(
        (coinRow: z.infer<typeof coinRowSchema>, index: number) => {
          if (index === textIndex && name === e.target.name) {
            return {
              ...coinRow,
              [`${e.target.name}`]: e.target.value,
            }
          }
          return coinRow
        }
      )
      return newCoinRows
    })
  }

  const handleDoubleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    textIndex: number
  ) => {
    setCoinRows((prevCoinRows: z.infer<typeof coinRowSchema>[]) => {
      const newCoinRows = prevCoinRows.map(
        (coinRow: z.infer<typeof coinRowSchema>, index: number) => {
          if (index === textIndex) {
            return {
              ...coinRow,
              [`${e.target.name}`]: Number(e.target.value),
            }
          }
          return coinRow
        }
      )
      return newCoinRows
    })
  }

  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    textIndex: number
  ) => {
    setCoinRows((prevCoinRows: z.infer<typeof coinRowSchema>[]) => {
      const newCoinRows = prevCoinRows.map(
        (coinRow: z.infer<typeof coinRowSchema>, index: number) => {
          if (index === textIndex) {
            return {
              ...coinRow,
              [`${e.target.name}`]: Number(e.target.value),
            }
          }
          return coinRow
        }
      )
      return newCoinRows
    })
  }

  const handleSelect = (e: any, textIndex: number) => {
    setCoinRows((prevCoinRows: z.infer<typeof coinRowSchema>[]) => {
      const newCoinRows = prevCoinRows.map(
        (coinRow: z.infer<typeof coinRowSchema>, index: number) => {
          if (index === textIndex) {
            return { ...coinRow, [e.target.name]: e.target.value }
          }
          return coinRow
        }
      )
      return newCoinRows
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
            />
          </Dropdown>
          {coinRows?.map((coinRow, index) => (
            <Stack key={index}>
              <Dropdown text={`CoinRow${index + 1}`}>
                <Stack>
                  <Typography>Name:</Typography>
                  <Input
                    name='name'
                    value={coinRow.name.toUpperCase()}
                    onChange={(e) => handleNameChange(e, index)}
                  />
                </Stack>

                <Stack>
                  <Typography>Change:</Typography>
                  <Input
                    name='change'
                    value={coinRow.change}
                    type='number'
                    onChange={(e) => handleDoubleChange(e, index)}
                  />
                </Stack>

                <Stack>
                  <Typography>Value:</Typography>
                  <Input
                    name='value'
                    value={coinRow.value}
                    type='number'
                    onChange={(e) => handleValueChange(e, index)}
                  />
                </Stack>

                <Stack>
                  <Typography>Image URL:</Typography>
                  <input
                    name='imageUrl'
                    value={coinRow.imageUrl}
                    onChange={(e) => handleImageChange(e, index, 'imageUrl')}
                  />
                </Stack>

                <Stack>
                  <p>Direction:</p>
                  <Select
                    name='direction'
                    value={coinRow.direction}
                    onChange={(e) => handleSelect(e, index)}
                  >
                    <Option value='up'>up</Option>
                    <Option value='down'>down</Option>
                  </Select>
                </Stack>
              </Dropdown>
            </Stack>
          ))}

          <Stack>
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
