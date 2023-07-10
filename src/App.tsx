import './App.css';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Transfer from './components/Transfer/Transfer.js';
import RootProvider from './providers/root.jsx';

import {
  usePuzzleAccount,
  usePuzzleWallet,
  usePuzzleConnect,
} from '@puzzlehq/sdk';

import { PuzzleWeb3Modal } from '@puzzlehq/sdk';

function App() {
  const mdTheme = createTheme();
  const navigate = useNavigate();
  const { connect, data, error, loading } = usePuzzleConnect();
  const { addSession } = usePuzzleWallet();
  const { account } = usePuzzleAccount();

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        {
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position='fixed' color='default'>
              <Toolbar>
                <Typography
                  component='h1'
                  variant='h6'
                  color='inherit'
                  noWrap
                  sx={{ flexGrow: 1 }}
                  style={{ fontSize: '1.7rem', marginLeft: 70 }}
                >
                  Aleo Demo
                </Typography>
                <Button
                  onClick={async () => {
                    const data = await connect();
                    addSession(data);
                  }}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  {account?.address ?? 'Connect Puzzle Wallet'}
                </Button>
              </Toolbar>
            </AppBar>
            <Box
              component='main'
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
              }}
            >
              <Toolbar />
              <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
                <Routes>
                  <Route path='/' element={<Transfer />} />
                </Routes>
              </Container>
            </Box>
          </Box>
        }
      </ThemeProvider>
      <PuzzleWeb3Modal />
    </>
  );
}

export default App;
