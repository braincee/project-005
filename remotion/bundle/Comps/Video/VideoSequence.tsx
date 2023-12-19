import { linearTiming, TransitionSeries } from '@remotion/transitions'
import { slide } from '@remotion/transitions/slide'
import { OffthreadVideo, useVideoConfig } from 'remotion'
import { z } from 'zod'

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
  const { width, height } = useVideoConfig()

  return (
    <div style={{ position: 'relative', bottom: '10%' }}>
      <TransitionSeries>
        {segments.map((segment: any, index: number) => (
          <>
            <TransitionSeries.Sequence key={index} durationInFrames={270}>
              <OffthreadVideo
                src={segment.videoUrl}
                style={{ height: height / 2, width: width }}
              />
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              presentation={slide()}
              timing={linearTiming({ durationInFrames: 10 })}
            />
          </>
        ))}
      </TransitionSeries>
    </div>
  )
}
