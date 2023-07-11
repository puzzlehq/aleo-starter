import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Walletconnect from './pages/walletconnect/walletconnect.js';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <PuzzleWalletProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
        <Route path='wc' element={<Walletconnect />} />
      </Routes>
    </BrowserRouter>
  </PuzzleWalletProvider>
);
