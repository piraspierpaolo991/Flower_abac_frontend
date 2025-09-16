import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AbacProvider, FlowerProvider } from '@flowerforce/flower-react';
import { Layout } from './components';

createRoot(document.getElementById('root')!).render(
  <FlowerProvider>
    <AbacProvider rulesPath="/rules.json">
      <Layout>
        <App />
      </Layout>
    </AbacProvider>
  </FlowerProvider>
);
