import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion'
import { TransitionSeries } from '@remotion/transitions'
import { z } from 'zod'
import { useMemo, useState } from 'react'

const myTextSchema = z.object({
  segments: z.array(
    z.object({
      title: z.string(),
      sentences: z.array(z.string()),
      videoUrl: z.string(),
    })
  ),
})

export const Text: React.FC<z.infer<typeof myTextSchema>> = ({ segments }) => {
  const videoConfig = useVideoConfig()
  const frame = useCurrentFrame()
  const [myResult, setMyresult] = useState<React.ReactElement>()

  const textInterval = videoConfig.durationInFrames / segments.length
  const currentTextIndex = Math.floor(frame / textInterval)

  // const segmentIntervals = segments.map((segment, index: number) => {
  //   let value = 90 + segment.sentences.length * 90
  //   return value
  // })

  const interval = 90

  const sentenceInterval =
    Math.floor(frame / interval) %
    (segments[currentTextIndex].sentences.length + 1)

  const translateYX = interpolate(
    frame,
    [
      Math.floor(frame / interval) * interval - 20,
      Math.floor(frame / interval) * interval + 10,
    ],
    [1920, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  // console.log(interval)

  const translateXY = interpolate(
    frame,
    [
      (Math.floor(frame / interval) + 1) * interval - 20,
      (Math.floor(frame / interval) + 1) * interval,
    ],
    [0, 1080],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  // const opacity = interpolate(
  //   frame,
  //   [
  //     Math.floor(frame / interval) * interval - 5,
  //     Math.floor(frame / interval) * interval + 10,
  //   ],
  //   [0, 1],
  //   {
  //     extrapolateLeft: 'clamp',
  //     extrapolateRight: 'clamp',
  //   }
  // )

  const translateX = interpolate(
    frame,
    [
      Math.floor(frame / interval) * interval,
      Math.floor(frame / interval) * interval + 20,
      (Math.floor(frame / interval) + 1) * interval - 20,
      (Math.floor(frame / interval) + 1) * interval,
    ],
    [-1080, 0, 0, 1080],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  const transform =
    frame <= Math.floor(frame / interval) * interval + 20
      ? `translateY(${translateYX}px)`
      : `translateX(${translateXY}px)`

  return (
    <div
      id='myText'
      style={{
        position: 'absolute',
        bottom: '30%',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <TransitionSeries>
        {segments.map((segment) => {
          let segmentInterval = 90 + segment.sentences.length * 90
          console.log(segmentInterval)
          return (
            <TransitionSeries.Sequence durationInFrames={segmentInterval}>
              <div style={{ width: '100%' }}>
                <TransitionSeries>
                  <TransitionSeries.Sequence durationInFrames={90}>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '0 20%',
                        color: '#fff',
                        fontSize: '70px',
                        textAlign: 'center',
                        width: '100%',
                        height: '50%',
                        transform: transform,
                      }}
                    >
                      {segment.title}
                    </p>
                  </TransitionSeries.Sequence>
                  {segment.sentences.map((sentence) => (
                    <TransitionSeries.Sequence durationInFrames={90}>
                      <p
                        style={{
                          color: '#fff',
                          fontSize: '70px',
                          textAlign: 'center',
                          padding: '0 10%',
                          width: '100%',

                          transform: `translate(${translateX}px)`,
                        }}
                      >
                        {sentence}
                      </p>
                    </TransitionSeries.Sequence>
                  ))}
                </TransitionSeries>
              </div>
            </TransitionSeries.Sequence>
          )
        })}
      </TransitionSeries>
    </div>
  )
}
