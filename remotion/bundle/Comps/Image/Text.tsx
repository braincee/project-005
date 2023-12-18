import { z } from 'zod'
import { zColor } from '@remotion/zod-types'
import { Typography, Stack } from '@mui/joy'

export const myTextSchema = z.object({
  titleTexts: z.string(),
  titleColor: zColor(),
})

export const Text: React.FC<z.infer<typeof myTextSchema>> = ({
  titleTexts,
  titleColor,
}) => {
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '42%',
        display: 'flex',
        justifyContent: 'flex-start',
        width: '85%',
        paddingLeft: '10%',
      }}
    >
      <Typography
        sx={{
          color: titleColor,
          fontSize: '100px'
        }}
      >
        {titleTexts}
      </Typography>
    </Stack>
  )
}
