import { z } from 'zod'
import { Spacing } from './Spacing'
import { DropDown } from './DropDown'
import { Input } from './Input'
import { InputContainer } from './Container'
import { AlignEnd } from './AlignEnd'
import { Button } from './Button/Button'
import {
  VIDEO_COMP_NAME,
  video2CompSchema,
  coinRowSchema,
} from '@/libs/types/constants'
import { ErrorComp } from './Error'
import { useVideo2Rendering } from '@/libs/helpers/use-video2-rendering'

const textarea: React.CSSProperties = {
  resize: 'none',
  lineHeight: 1.7,
  display: 'block',
  width: '100%',
  borderRadius: 'var(--geist-border-radius)',
  backgroundColor: 'var(--background)',
  padding: 'var(--geist-half-pad)',
  color: 'var(--foreground)',
  fontSize: 14,
}

const select: React.CSSProperties = {
  resize: 'none',
  lineHeight: 1.7,
  display: 'block',
  width: '100%',
  borderRadius: 'var(--geist-border-radius)',
  backgroundColor: 'var(--background)',
  padding: 'var(--geist-half-pad)',
  color: 'var(--foreground)',
  fontSize: 14,
}

const controls: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}

export const RenderVideo2Controls: React.FC<{
  coinRows: z.infer<typeof coinRowSchema>[]
  setCoinRows: React.Dispatch<
    React.SetStateAction<z.infer<typeof coinRowSchema>[]>
  >
  pageHeading: string
  setPageHeading: React.Dispatch<React.SetStateAction<string>>
  inputProps: z.infer<typeof video2CompSchema>
}> = ({ coinRows, setCoinRows, inputProps }) => {
  const { renderMedia, state, undo } = useVideo2Rendering(
    VIDEO_COMP_NAME,
    inputProps
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    textIndex: number,
    name: string
  ) => {
    setCoinRows((prevCoinRows: z.infer<typeof coinRowSchema>[]) => {
      const newCoinRows = prevCoinRows.map(
        (coinRow: z.infer<typeof coinRowSchema>, index: number) => {
          if (index === textIndex) {
            return { ...coinRow, [`${name}`]: e.target.value }
          }
          return coinRow
        }
      )
      console.log(newCoinRows)
      return newCoinRows
    })
  }

  const handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    textIndex: number,
    name: string
  ) => {
    setCoinRows((prevCoinRows: z.infer<typeof coinRowSchema>[]) => {
      const newCoinRows = prevCoinRows.map(
        (coinRow: z.infer<typeof coinRowSchema>, index: number) => {
          if (index === textIndex) {
            console.log(e.target.value)
            return { ...coinRow, [`${name}`]: e.target.value }
          }
          return coinRow
        }
      )
      console.log(newCoinRows)
      return newCoinRows
    })
  }

  return (
    <InputContainer>
      {state.status === 'init' ||
      state.status === 'invoking' ||
      state.status === 'error' ? (
        <div style={controls}>
          {coinRows?.map((coinRow, index) => (
            <div key={index}>
              <DropDown text={`CoinRow${index + 1}`}>
                <div>
                  <p>Name:</p>
                  <input
                    style={textarea}
                    value={coinRow.name}
                    onChange={(e) => handleChange(e, index, 'name')}
                  />
                </div>
                <Spacing></Spacing>
                <Spacing></Spacing>
                <div>
                  <p>Change:</p>
                  <input
                    style={textarea}
                    value={coinRow.change}
                    type='number'
                    onChange={(e) => handleChange(e, index, 'change')}
                  />
                </div>
                <Spacing></Spacing>
                <Spacing></Spacing>
                <div>
                  <p>Value:</p>
                  <input
                    style={textarea}
                    value={coinRow.value}
                    type='number'
                    onChange={(e) => handleChange(e, index, 'value')}
                  />
                </div>
                <Spacing></Spacing>
                <Spacing></Spacing>
                <div>
                  <p>Image URL:</p>
                  <input
                    style={textarea}
                    value={coinRow.imageUrl}
                    onChange={(e) => handleChange(e, index, 'imageUrl')}
                  />
                </div>
                <Spacing></Spacing>
                <Spacing></Spacing>
                <div>
                  <p>Direction:</p>
                  <select
                    style={select}
                    value={coinRow.direction}
                    onChange={(e) => handleSelect(e, index, 'direction')}
                  >
                    <option value='up'>up</option>
                    <option value='down'>down</option>
                  </select>
                </div>
              </DropDown>
              <Spacing></Spacing>
              <Spacing></Spacing>
            </div>
          ))}

          <Spacing></Spacing>
          <AlignEnd>
            <Button
              disabled={state.status === 'invoking'}
              loading={state.status === 'invoking'}
              onClick={renderMedia}
            >
              Render video
            </Button>
          </AlignEnd>
          {state.status === 'error' ? (
            <ErrorComp message={state.error.message}></ErrorComp>
          ) : null}
        </div>
      ) : null}
      {state.status === 'done' ? (
        <>
          <p>{state.message}</p>
          <p>Access Video in (out) folder</p>
        </>
      ) : null}
    </InputContainer>
  )
}
