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
  Stack,
} from '@mui/material';
import {
  useAccount,
  useConnect,
  useExecuteProgram,
  PuzzleWalletProvider,
} from '@puzzlehq/sdk';
import { PuzzleWeb3Modal } from '@puzzlehq/sdk';
import { useState } from 'react';

function App() {
  const mdTheme = createTheme();
  const { connect } = useConnect();
  const { account } = useAccount();
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState(""); 
  const [operation, setOperation] = useState("addition"); 

  const {
    execute,
    loading,
    transactionId,
    outputPrivate,
    outputRecords,
    outputPublic,
    outputConstant,
    error,
  } = useExecuteProgram({
    programId: "puzzlecalculator.aleo", 
    functionName: operation, 
    // Aleo program inputs need their types specified, our program takes in 32 bit integers
    // so the inputs should look like "2i32 3i32"
    inputs: firstNumber + "i32 " + secondNumber + "i32",
  });
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Read the form data
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const operation = formJson.operation as string;
    setOperation(operation); 
    execute();
  }
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
                  <form onSubmit={handleSubmit}>
                    <Stack>
                      <label>Enter first number 
                        <input
                          type="text"
                          value={firstNumber}
                          onChange={(e) => setFirstNumber(e.target.value)}
                        />
                      </label>
                      <label>Enter second number  
                        <input
                          type="text"
                          value={secondNumber}
                          onChange={(e) => setSecondNumber(e.target.value)}
                        />
                      </label>
                      <select
                        name="operation"
                        defaultValue="addition"
                        onChange={e => setOperation(e.target.value)}>
                        <option value="addition">Add</option>
                          <option value="subtract">Subtract</option>
                          <option value="multiply">Multiply</option>
                          <option value="divide">Divide</option>
                      </select>
                      <input type="submit" />
                      { loading && (
                        <Typography>Loading...</Typography>
                      )}
                      { outputPrivate && (
                        <Typography>{ "Result:" + outputPrivate.replace("i32", "") }</Typography>
                      )}
                    </Stack>
                  </form>
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
