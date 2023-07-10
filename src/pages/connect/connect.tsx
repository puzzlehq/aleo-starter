import { MdCheck } from 'react-icons/md';
import { Box, Button, HStack, Text, VStack } from 'ui';
import {
  usePuzzleAccount,
  usePuzzleWallet,
  usePuzzleConnect,
} from '@puzzle/sdk';
import { Outlet } from 'react-router-dom';

const Connect = () => {
  const { connect, data, error, loading } = usePuzzleConnect();
  const { addSession } = usePuzzleWallet();
  const { account } = usePuzzleAccount();

  return (
    <VStack className='h-screen w-screen'>
      <HStack className='gap-4 bg-bg2 p-4'>
        <div className='flex flex-grow' />
        <Button
          intent='secondary'
          className='flex items-center gap-4'
          onClick={async () => {
            const data = await connect();
            addSession(data);
          }}
        >
          Connect Puzzle Wallet
          {account?.address && <MdCheck />}
        </Button>
      </HStack>
      <VStack className='h-full w-full items-center justify-center'>
        {account?.address === undefined ? (
          <Box className='p-4'>
            <Text>Connect your Puzzle wallet to begin</Text>
          </Box>
        ) : (
          <Outlet />
        )}
      </VStack>
    </VStack>
  );
};

export default Connect;
