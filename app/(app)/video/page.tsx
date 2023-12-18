'use client'

import {
  DURATION_IN_FRAMES,
  HEIGHT,
  VIDEO_FPS,
  WIDTH,
  defaultVideoCompProps,
  videoCompSchema,
} from '@/libs/types/constants'
import { VideoComp } from '@/remotion/bundle/Comps/Video/VideoComp'
import { Box, Stack, Typography } from '@mui/joy'
import { Player } from '@remotion/player'
import type { NextPage } from 'next'
import React, { useMemo, useState } from 'react'
import { z } from 'zod'


const Video: NextPage = () => {
  const [texts, setTexts] = useState(defaultVideoCompProps.titleTexts)
  const [color, setColor] = useState(defaultVideoCompProps.titleColor)
  const [videoUrls, setVideoUrls] = useState(defaultVideoCompProps.videoUrls)
  const [pageHeading, setPageHeading] = useState(
    defaultVideoCompProps.pageHeading
  )

  const inputProps: z.infer<typeof videoCompSchema> = useMemo(() => {
    return {
      titleTexts: texts,
      titleColor: color,
      pageHeading: pageHeading,
      videoUrls,
    }
  }, [texts, color, pageHeading])

  return (
    <Box>
      <Typography style={{ textAlign: 'center' }}>{pageHeading}</Typography>
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
            component={VideoComp}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={HEIGHT}
            compositionWidth={WIDTH}
            controls={true}
          />
        </Stack>
        <Stack sx={{
            width: '35%',
            padding: '10px',
        }}>
            {/* texts={texts}
            setTexts={setTexts}
            videoUrls={videoUrls}
            setVideoUrls={setVideoUrls}
            inputProps={inputProps}
            color={color}
            setColor={setColor}
            pageHeading={pageHeading}
            setPageHeading={setPageHeading} */}
        </Stack>
    </Box>
  )
}

export default Video
