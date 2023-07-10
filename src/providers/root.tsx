import QueryProvider from './query.js';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
      <QueryProvider>
        <PuzzleWalletProvider>{children}</PuzzleWalletProvider>
      </QueryProvider>
  );
};

export default RootProvider;
