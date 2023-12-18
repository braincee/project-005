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
import { RenderStoryControls } from '@/components/RenderStoryControls'

const outer: React.CSSProperties = {
  overflow: 'hidden',
  maxHeight: '80vh',
  width: '65%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const player: React.CSSProperties = {
  width: '100%',
}

const control: React.CSSProperties = {
  width: '35%',
  padding: '10px',
}

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
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '24px' }}>{pageHeading}</h1>
      <div className='container'>
        <div style={outer}>
          <Player
            component={StoryComp}
            inputProps={inputProps}
            durationInFrames={420}
            fps={VIDEO_FPS}
            compositionHeight={HEIGHT}
            compositionWidth={WIDTH}
            style={player}
            controls={true}
          />
        </div>
        <div style={control}>
          <RenderStoryControls
            coinRows={coinRows}
            setCoinRows={setCoinRows}
            inputProps={inputProps}
            pageHeading={pageHeading}
            setPageHeading={setPageHeading}
          />
        </div>
      </div>
    </div>
  )
}

export default Video2
