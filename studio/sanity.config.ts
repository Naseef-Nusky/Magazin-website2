import {createElement} from 'react'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

function MagzoneIcon() {
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: '1em',
      height: '1em',
    },
    createElement('rect', {width: '32', height: '32', rx: '2', fill: '#0050a8'}),
    createElement(
      'text',
      {
        x: '50%',
        y: '52%',
        textAnchor: 'middle',
        dominantBaseline: 'middle',
        fill: '#ffffff',
        style: {
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontWeight: 600,
          fontSize: '11px',
        },
      },
      'MZ',
    ),
  )
}

export default defineConfig({
  name: 'default',
  title: 'Magzone',
  icon: MagzoneIcon,

  projectId: 'inhnqxye',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
