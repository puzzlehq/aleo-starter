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
import {
  useAccount,
  useConnect,
  useBalance,
  useExecuteProgram,
  PuzzleWalletProvider,
} from '@puzzlehq/sdk';
import { PuzzleWeb3Modal } from '@puzzlehq/sdk';

function App() {
  const mdTheme = createTheme();
  const navigate = useNavigate();
  const { connect, data, error, loading } = useConnect();
  const { account } = useAccount();
  const { balance } = useBalance(); 

  return (
    <>
    <PuzzleWalletProvider>
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
                  Aleo Starter
                </Typography>
                <Button
                  onClick={async () => {
                    await connect();
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
                <Typography>
                  Balance: {balance}
                </Typography>
              </Container>
            </Box>
          </Box>
        }
      </ThemeProvider>
      </PuzzleWalletProvider>
      <PuzzleWeb3Modal
      dAppName='Puzzle Starter app'
      dAppDescription="Let's Puzzle!"
      dAppUrl='http://localhost:5173'
      dAppIconURL='https://walletconnect.puzzle.online/assets/logo_white-b85ba17c.png'
       />
      </>
  );
}

export default App;
