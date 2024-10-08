// src/lib/ipContract.ts
import Web3 from 'web3';
import { useWallet } from 'use-wallet';
import IPContractABI from './ABI.json'; // Import ABI dari contract Anda

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'); // Sesuaikan dengan provider Anda

const contractAddress = '0x2F2E7b83Feb1C09aC06e32b362c816e1863EC6AF'; // Ganti dengan alamat kontrak Anda
const contract = new web3.eth.Contract(IPContractABI, contractAddress);

export const createIP = async (
  ipName: string,
  creatorName: string,
  citizenship: string,
  publicationDate: Date | null,
  placeOfPublication: string,
  document: string,
  description: string
) => {
  const { account } = useWallet(); // Ambil alamat wallet yang terhubung

  if (!account) {
    throw new Error('Wallet not connected');
  }

  const formattedDate = publicationDate ? Math.floor(publicationDate.getTime() / 1000) : 0; // Ubah tanggal ke timestamp jika diperlukan

  const tx = await contract.methods.createIP(
    ipName,
    creatorName,
    citizenship,
    formattedDate,
    placeOfPublication,
    document,
    description
  ).send({ from: account });

  return tx; // Kembalikan transaksi
};
