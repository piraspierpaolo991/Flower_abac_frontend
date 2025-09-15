import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { AbacProvider, FlowerProvider } from '@flowerforce/flower-react'


createRoot(document.getElementById('root')!).render(
  <FlowerProvider>
    <AbacProvider rulesPath="/rules.json">
      <App />
    </AbacProvider>
  </FlowerProvider>
)
