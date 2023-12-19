import { linearTiming, TransitionSeries } from '@remotion/transitions'
import { slide } from '@remotion/transitions/slide'
import { useEffect, useMemo, useState } from 'react'
import {
  cancelRender,
  continueRender,
  delayRender,
  Loop,
  OffthreadVideo,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import { getVideoMetadata } from '@remotion/media-utils'
import { z } from 'zod'
import { DURATION_IN_FRAMES } from '@/libs/types/constants'

const urlSchema = z.object({
  segments: z.array(
    z.object({
      title: z.string(),
      sentences: z.array(z.string()),
      videoUrl: z.string(),
    })
  ),
})
export const VideoSequence: React.FC<z.infer<typeof urlSchema>> = ({
  segments,
}) => {
  const { width, height, fps } = useVideoConfig()
  // const [duration, setDuration] = useState<null | number>(null)
  // const [handle] = useState(() => delayRender())
  // const [myIndex, setMyIndex] = useState(-1)
  // const frame = useCurrentFrame()

  // useEffect(() => {
  //   getVideoMetadata(segments[myIndex].videoUrl)
  //     .then(({ durationInSeconds }) => {
  //       setDuration(durationInSeconds)
  //       continueRender(handle)
  //     })
  //     .catch((err) => {
  //       cancelRender(handle)
  //       console.log(err)
  //     })
  // }, [handle, myIndex])

  // const handleIndexChange = useMemo(() => {
  //   if (Math.floor(frame / 270) === frame / 270) {
  //     setMyIndex(myIndex + 1)
  //   }
  //   if (frame === DURATION_IN_FRAMES) {
  //     setMyIndex(-1)
  //   }
  // }, [frame])

  // if (duration === null) {
  //   return null
  // }

  return (
    <div style={{ position: 'relative', bottom: '10%' }}>
      <TransitionSeries>
        {segments.map((segment: any, index: number) => {
          return (
            <>
              <TransitionSeries.Sequence key={index} durationInFrames={270}>
                {/* <Loop durationInFrames={Math.floor(fps * duration)}> */}
                <OffthreadVideo
                  src={segment.videoUrl}
                  style={{ height: height / 2, width: width }}
                />
                {/* </Loop> */}
              </TransitionSeries.Sequence>
              <TransitionSeries.Transition
                presentation={slide()}
                timing={linearTiming({ durationInFrames: 10 })}
              />
            </>
          )
        })}
      </TransitionSeries>
    </div>
  )
}
