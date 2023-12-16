import { AbsoluteFill, staticFile, useVideoConfig, Img, delayRender, continueRender } from 'remotion'
import { CoinRow } from './CoinRow'
import { video2CompSchema, coinRowSchema } from '@/libs/types/constants'
import { z } from 'zod'
import { Heading } from './Heading'


export const Main: React.FC<z.infer<typeof video2CompSchema>> = ({
  coinRows,
}) => {
  const { width, height } = useVideoConfig()

const waitForFont = delayRender()
const font = new FontFace(
  'Handel Gothic',
  `url('${staticFile('Handel Gothic D Regular.ttf')}') format('truetype')`
)

font
  .load()
  .then(() => {
    document.fonts.add(font)
    continueRender(waitForFont)
  })
  .catch((err) => console.log('Error loading font', err))

  return (
    <AbsoluteFill
      style={{
        width: width,
        height: height,
        backgroundColor: '#030c2b',
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        paddingTop: '120px',
        fontFamily: font.family,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Img
         height='25px'
         src={staticFile('logo_grayscale.png')} 
        />
      </div>
      <Heading titleTexts='Price Action of the day' titleColor='#fff' />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {coinRows?.map((coinRow: z.infer<typeof coinRowSchema>) => (
          <CoinRow
            key={coinRow.name}
            imageUrl={coinRow.imageUrl}
            name={coinRow.name}
            value={coinRow.value}
            change={coinRow.change}
            direction={coinRow.direction}
          />
        ))}
      </div>
    </AbsoluteFill>
  )
}
