'use client'

import {
  HEIGHT,
  VIDEO_FPS,
  WIDTH,
  defaultStoryCompProps,
  defaultVideoCompProps,
  storyCompSchema,
} from '@/libs/types/constants'
import { Player } from '@remotion/player'
import type { NextPage } from 'next'
import React, { useMemo, useState } from 'react'
import { z } from 'zod'
import { continueRender, delayRender, staticFile } from 'remotion'
import { StoryComp } from '@/remotion/bundle/Comps/Story/StoryComp'
import { Box, Stack, Typography } from '@mui/joy'


const Video2: NextPage = () => {
  const [coinRows, setCoinRows] = useState(defaultStoryCompProps.coinRows)
  const [pageHeading, setPageHeading] = useState(
    defaultVideoCompProps.pageHeading
  )
  const inputProps: z.infer<typeof storyCompSchema> = useMemo(() => {
    return {
      coinRows,
    }
  }, [coinRows])

  return (
    <Box>
      <Typography level="h1" sx={{ textAlign: 'center', fontSize: '24px' }}>{pageHeading}</Typography>
        <Stack sx={{
           overflow: 'hidden',
           maxHeight: '90vh',
           width: '65%',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
        }}>
          <Player
            component={StoryComp}
            inputProps={inputProps}
            durationInFrames={420}
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
          {/* <RenderStoryControls
            coinRows={coinRows}
            setCoinRows={setCoinRows}
            inputProps={inputProps}
            pageHeading={pageHeading}
            setPageHeading={setPageHeading}
          /> */}
        </Stack> 
    </Box>
  )
}

export default Video2
