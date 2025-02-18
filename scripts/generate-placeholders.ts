import { createCanvas } from 'canvas'
import fs from 'fs'
import path from 'path'

const images = [
  { name: 'logo.png', width: 120, height: 40 },
  { name: 'hero-image.png', width: 600, height: 400 },
  { name: 'workshop.png', width: 400, height: 300 },
  { name: 'research.png', width: 400, height: 300 },
  { name: 'industry.png', width: 400, height: 300 },
]

const generatePlaceholder = (name: string, width: number, height: number) => {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  // Fill background
  ctx.fillStyle = '#f3f4f6'
  ctx.fillRect(0, 0, width, height)

  // Add text
  ctx.fillStyle = '#6b7280'
  ctx.font = '20px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(name, width / 2, height / 2)

  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(path.join(process.cwd(), 'public/images', name), buffer)
}

images.forEach(({ name, width, height }) => {
  generatePlaceholder(name, width, height)
}) 