import React, { useCallback } from 'react'
import { top25Fonts } from './top25Fonts'

export const FontPicker: React.FC<{
  setMyFont: React.Dispatch<React.SetStateAction<any>>
}> = ({ setMyFont }) => {
  const newFonts = top25Fonts

  const onChange = useCallback(
    async (e: React.ChangeEvent<HTMLSelectElement>) => {
      const fonts = newFonts[e.target.selectedIndex]

      // Load font information
      const loaded = await fonts.load()
      loaded.loadFont
      setMyFont(loaded.fontFamily)
      // Load the font itself
      // loaded.loadFont
      // // Or get metadata about the font
      // const info = loaded.getInfo()
      // const styles = Object.keys(info.fonts)
      // console.log('Font', info.fontFamily, ' Styles', styles)
      // for (const style of styles) {
      //   const weightObject = info.fonts[style as keyof typeof info.fonts]
      //   const weights = Object.keys(weightObject)
      //   console.log('- Style', style, 'supports weights', weights)
      //   // for (const weight of weights) {
      //   //   const scripts = Object.keys(weightObject[weight])
      //   //   console.log('-- Weight', weight, 'supports scripts', scripts)
      //   // }
      // }
    },
    [newFonts]
  )

  return (
    <div>
      <select onChange={onChange}>
        {newFonts.map((f) => {
          return (
            <option key={f.family} value={f.family}>
              {f.family}
            </option>
          )
        })}
      </select>
    </div>
  )
}
