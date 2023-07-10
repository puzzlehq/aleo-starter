import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Walletconnect from './pages/walletconnect/walletconnect.js';
import { MetaMaskInpageProvider } from '@metamask/providers';
import RootProvider from './providers/root.tsx';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RootProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
        <Route path='wc' element={<Walletconnect />} />
      </Routes>
    </BrowserRouter>
  </RootProvider>
);
