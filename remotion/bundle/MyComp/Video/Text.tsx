import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion'
import { z } from 'zod'
import { videoCompSchema } from '@/libs/types/constants'
import { useEffect, useMemo, useState } from 'react'

export const Text: React.FC<z.infer<typeof videoCompSchema>> = ({
  titleTexts,
  titleColor,
}) => {
  const videoConfig = useVideoConfig()
  const frame = useCurrentFrame()
  const [myResult, setMyresult] = useState<React.ReactElement>()

  const textInterval = videoConfig.durationInFrames / titleTexts.length
  const currentTextIndex = Math.floor(frame / textInterval)

  const interval = textInterval / (titleTexts[currentTextIndex].text.length + 1)

  const textIndex = Math.floor(frame / interval) % 3

  const translateYX = interpolate(
    frame,
    [
      currentTextIndex * textInterval + 10,
      currentTextIndex * textInterval + 20,
    ],
    [400, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  const opacity = interpolate(
    frame,
    [
      currentTextIndex * textInterval + 10,
      currentTextIndex * textInterval + 20,
    ],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  const translateXY = interpolate(
    frame,
    [
      (currentTextIndex + 1) * textInterval - 30,
      (currentTextIndex + 1) * textInterval,
    ],
    [0, 1080],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  const translateX = interpolate(
    frame,
    [
      currentTextIndex * textInterval - 10,
      currentTextIndex * textInterval + 20,
      (currentTextIndex + 1) * textInterval - 30,
      (currentTextIndex + 1) * textInterval,
    ],
    [-1080, 0, 0, 1080],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  )

  const transform =
    frame <= currentTextIndex * textInterval + 30
      ? `translateY(${translateYX}px)`
      : `translateX(${translateXY}px)`

  console.log(textInterval, currentTextIndex)
  console.log(interval, textIndex)

  const test = (item: any) => {
    if (textIndex === 0) {
      setMyresult(
        <p
          style={{
            color: titleColor,
            fontSize: '70px',
            textAlign: 'center',
            width: '70%',
            fontFamily: 'Agbalumo',
            transform: transform,
            // opacity,
          }}
        >
          {item.title}
        </p>
      )
    } else {
      setMyresult(
        <p
          style={{
            color: titleColor,
            fontSize: '70px',
            textAlign: 'center',
            width: '70%',
            fontFamily: 'Agbalumo',
            transform: `translate(${translateX}px)`,
          }}
        >
          {item.text[textIndex - 1]}
        </p>
      )
    }
  }

  useEffect(() => {
    test(titleTexts[currentTextIndex])
  }, [currentTextIndex, textIndex])

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
      {/* {currentTextIndex % 2 === 0 ? (
        <p
          style={{
            color: titleColor,
            fontSize: '70px',
            textAlign: 'center',
            width: '70%',
            fontFamily: 'Agbalumo',
            transform: transform,
            opacity,
          }}
        >
          {titleTexts[currentTextIndex].toUpperCase()}
        </p>
      ) : (
        <p
          style={{
            color: titleColor,
            fontSize: '70px',
            textAlign: 'center',
            width: '70%',
            fontFamily: 'Agbalumo',
            transform: `translate(${translateX}px)`,
          }}
        >
          {titleTexts[currentTextIndex].toUpperCase()}
        </p>
      )} */}
      {myResult}
    </div>
  )
}
