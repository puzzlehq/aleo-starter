export enum RegistrationStep {
  CreateProof,
  Deposit,
  ApproveProof,
  SendProof,
}

export const textForRegistrationStep = (s: number) => {
  switch (s) {
    case 0:
      return 'Create Proof';
    case 1:
      return 'Deposit ETH';
    case 2:
      return 'Approve Proof';
    case 3:
      return 'Send Proof';
    default:
      console.error("say what now?! that registration step doesn't exist!");
  }
};

export type LoadingStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export enum TransactionType {
  AccountRegistered = 'AccountRegistered',
  RegisterSpendingKeys = 'RegisterSpendingKeys',
  Deposit = 'Deposit',
  UserDeposit = 'UserDeposit',
  Withdrawal = 'Withdrawal',
  Send = 'Send',
  Receive = 'Receive',
  DeFi = 'DeFiInteraction',
}

export enum TransactionStatus {
  AwaitingSignatures = 'Awaiting Signatures',
  Rejected = 'Rejected',
  AwaitingExecution = 'Awaiting Execution',
  AwaitingSettlement = 'Awaiting Settlement',
  Settled = 'Settled',
}

export type TransactionMetadata = {
  id: string;
  aztec_txn_id?: string;
  type: TransactionType;
  creator: string; // alias
  description?: string;
  tags: Tag[];
  asset: {
    id: number;
    value: string; // bigint
  };
  created: string; // date string
  executed?: string; // date string
  settled?: string; // date string
  status?: TransactionStatus;
  destination?: string; // GrumpkinAddress
  spendingKeys?: string[]; // GrumpkinAddress[]
  ms_alias: string;
};

export const EmptyTransactionMetadata: TransactionMetadata = {
  id: '',
  type: TransactionType.Deposit,
  creator: '',
  tags: [],
  asset: { id: 0, value: '' },
  created: '',
  status: TransactionStatus.AwaitingSignatures,
  ms_alias: '',
};

export const TagColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
];

export type MultisigListItem = {
  alias: string;
  pubkey: string;
  available: boolean;
  audit: boolean;
};

export type Token = {
  token: string; /// jwt token
  exp: number; /// utc timestamp
};

export type Asset = {
  id: number;
  symbol: string;
  coinMarketCapID: string;
  baseUnits: string; // bigint
  displayValue: string;
  usdValue: number;
};

export const AssetsZero: Asset[] = [
  {
    id: 0,
    symbol: 'ETH',
    coinMarketCapID: '1027',
    baseUnits: '0',
    displayValue: '0',
    usdValue: 0,
  },
  {
    id: 1,
    symbol: 'DAI',
    coinMarketCapID: '4943',
    baseUnits: '0',
    displayValue: '0',
    usdValue: 0,
  },
];
