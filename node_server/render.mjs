import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { renderStill, selectComposition, renderMedia } from '@remotion/renderer'
import myBundle from '../bundle.mjs'

const PORT = 3000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
const bundleLocation = myBundle

app.post('/api/image', async (req, res) => {
  const { id, inputProps } = req.body

  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id,
    inputProps,
  })
  await renderStill({
    composition: composition,
    serveUrl: bundleLocation,
    output: `out/${id}.png`,
    inputProps,
  })

  res.send({ message: 'Render done' })
})

app.post('/api/video', async (req, res) => {
  const { id, inputProps } = req.body

  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id,
    inputProps,
  })

  await renderMedia({
    composition: composition,
    serveUrl: bundleLocation,
    codec: 'h264',
    outputLocation: `out/${id}.mp4`,
    inputProps,
  })
  res.json({ message: 'Render done' })
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})