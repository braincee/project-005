'use client'

import { RenderVideoControls } from '@/components/RenderVideoControls'
import {
  DURATION_IN_FRAMES,
  HEIGHT,
  VIDEO_FPS,
  WIDTH,
  defaultVideoCompProps,
  videoCompSchema,
} from '@/libs/types/constants'
import { VideoComp } from '@/remotion/bundle/Comps/Video/VideoComp'
import { Player } from '@remotion/player'
import type { NextPage } from 'next'
import React, { useMemo, useState } from 'react'
import { z } from 'zod'

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
    <div>
      <h1 style={{ textAlign: 'center' }}>{pageHeading}</h1>
      <div className='container'>
        <div style={outer}>
          <Player
            component={VideoComp}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={HEIGHT}
            compositionWidth={WIDTH}
            style={player}
            controls={true}
          />
        </div>
        <div style={control}>
          <RenderVideoControls
            texts={texts}
            setTexts={setTexts}
            videoUrls={videoUrls}
            setVideoUrls={setVideoUrls}
            inputProps={inputProps}
            color={color}
            setColor={setColor}
            pageHeading={pageHeading}
            setPageHeading={setPageHeading}
          />
        </div>
      </div>
    </div>
  )
}

export default Video
