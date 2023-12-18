import { z } from 'zod'
import { zColor } from '@remotion/zod-types'
import { continueRender, delayRender, staticFile } from 'remotion'

export const myTextSchema = z.object({
  titleTexts: z.string(),
  titleColor: zColor(),
})

export const Text: React.FC<z.infer<typeof myTextSchema>> = ({
  titleTexts,
  titleColor,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '42%',
        display: 'flex',
        justifyContent: 'flex-start',
        width: '85%',
        paddingLeft: '10%',
        fontFamily: 'Handel Gothic',
      }}
    >
      <p
        style={{
          color: titleColor,
          fontSize: '100px',
        }}
      >
        {titleTexts}
      </p>
    </div>
  )
}
