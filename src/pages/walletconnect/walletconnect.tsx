import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  PuzzleWalletClient,
  connectPuzzle,
  ConnectRejMessage,
  ConnectResMessage,
} from '@puzzlehq/sdk'

const Walletconnect = () => {
  let puzzle: PuzzleWalletClient | undefined = window.puzzle;
  const isWalletInstalled = !!puzzle;
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [response, setResponse] = useState<
    ConnectResMessage | ConnectRejMessage
  >();

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const wcUri = params.get('uri');
  const requestId = params.get('requestId');
  const sessionTopic = params.get('sessionTopic');

  useEffect(() => {
    (async () => {
      console.log('Attempting connection');
      if (!isWalletInstalled || !wcUri) return;
      const response = await connectPuzzle({
        wc: {
          uri: wcUri,
          requestId: requestId ?? undefined,
          sessionTopic: sessionTopic ?? undefined,
        },
      });
      setResponse(response);
      setIsRequestSent(true);
    })();
  }, [isWalletInstalled, puzzle]);

  if (isRequestSent && response) {
    window.close();
  }

  if (!isWalletInstalled) {
    return (
      <Typography>
          You need to install the Puzzle wallet, you can do it here... [INSERT
          CHROME EXTENSION STORE URL]
      </Typography>
    );
  }

  return (
    <div>
       {isRequestSent ? 
          <Typography>
            Connection Request sent to your Puzzle Extension Wallet. This window will close after wallet is connected
          </Typography>
         : 
          <Typography>
            Please wait while the connection request is sent to your Puzzle
            Extension Wallet.
          </Typography>
        }
    </div>
  );
};

export default Walletconnect;
