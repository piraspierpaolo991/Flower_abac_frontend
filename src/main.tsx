import React from 'react'
import { Devtool } from '@flowerforce/devtool'
import { createRoot } from 'react-dom/client'

import { App } from './App'
import { StrictMode } from 'react'
import { AbacProvider, FlowerProvider } from '@flowerforce/flower-react'

// Devtool({
//   port: 8770,
//   host: 'localhost',
//   sessionId: '',
// });

createRoot(document.getElementById('root')!).render(
  <FlowerProvider>
    <AbacProvider rulesPath="/rules.json">
      <App />
    </AbacProvider>
  </FlowerProvider>
)
