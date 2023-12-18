'use client'

<<<<<<< HEAD
=======
import { RenderImageControls } from '@/components/RenderImageControls'
>>>>>>> 5ddea2dfee328935d7a870b90ff8d6f3dd0ff80f
import {
  DURATION_IN_FRAMES,
  HEIGHT,
  VIDEO_FPS,
  WIDTH,
  defaultImageCompProps,
  imageCompSchema,
} from '@/libs/types/constants'
import { ImageComp } from '@/remotion/bundle/Comps/Image/ImageComp'
import { Box, Typography, Stack } from '@mui/joy'
import { Player } from '@remotion/player'
import type { NextPage } from 'next'
import React, { useMemo, useState } from 'react'
import { z } from 'zod'


// const control: React.CSSProperties = {
//   width: '35%',
//   padding: '10px',
// }

const Image: NextPage = () => {
  const [text, setText] = useState<string>(defaultImageCompProps.titleTexts)
  const [color, setColor] = useState(defaultImageCompProps.titleColor)
  const [pageHeading, setPageHeading] = useState(
    defaultImageCompProps.pageHeading
  )

  const inputProps: z.infer<typeof imageCompSchema> = useMemo(() => {
    return {
      titleTexts: text,
      titleColor: color,
      pageHeading: pageHeading,
    }
  }, [text, color, pageHeading])

  return (
    <Box>
      <Typography  level="h1" sx={{ textAlign: 'center' }}>{pageHeading}</Typography>
        <Stack sx={{
           overflow: 'hidden',
           maxHeight: '80vh',
           width: '65%',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
        }}>
          <Player
            component={ImageComp}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={HEIGHT}
            compositionWidth={WIDTH}
            controls={true}
          />
<<<<<<< HEAD
        </Stack>
        {/* <div style={control}>
=======
        </div>
        <div style={control}>
>>>>>>> 5ddea2dfee328935d7a870b90ff8d6f3dd0ff80f
          <RenderImageControls
            text={text}
            setText={setText}
            inputProps={inputProps}
            color={color}
            setColor={setColor}
            pageHeading={pageHeading}
            setPageHeading={setPageHeading}
          />
<<<<<<< HEAD
        </div> */}
      </Box>
=======
        </div>
      </div>
    </div>
>>>>>>> 5ddea2dfee328935d7a870b90ff8d6f3dd0ff80f
  )
}

export default Image
