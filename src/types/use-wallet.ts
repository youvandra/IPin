// src/@types/use-wallet.d.ts
declare module 'use-wallet' {
    import { ReactNode } from 'react';
  
    export interface Wallet {
      account?: string;
      connect: () => void;
      disconnect: () => void;
      // tambahkan properti lain yang Anda butuhkan dari wallet
    }
  
    export function useWallet(): Wallet;
  
    export function WalletProvider({ children }: { children: ReactNode }): JSX.Element;
  }
  