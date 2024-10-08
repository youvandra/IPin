// src/lib/ipContract.ts
import Web3 from 'web3';
import { useWallet } from 'use-wallet';
import IPContractABI from './ABI.json'; // Import ABI dari contract Anda

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'); // Sesuaikan dengan provider Anda

const contractAddress = '0x2F2E7b83Feb1C09aC06e32b362c816e1863EC6AF'; // Ganti dengan alamat kontrak Anda
const contract = new web3.eth.Contract(IPContractABI, contractAddress);

// Fungsi untuk membuat IP baru
export const createIP = async (
  ipName: string,
  creatorName: string,
  citizenship: string,
  publicationDate: string,
  placeOfPublication: string,
  document: string,
  description: string,
  category: string
) => {
  const { account } = useWallet(); // Ambil alamat wallet yang terhubung

  if (!account) {
    throw new Error('Wallet not connected');
  }

  const tx = await contract.methods.createIP(
    ipName,
    creatorName,
    citizenship,
    publicationDate,
    placeOfPublication,
    document,
    description,
    category
  ).send({ from: account });

  return tx; // Kembalikan transaksi
};

// Fungsi untuk mengatur harga IP
export const setPrice = async (ipId: number, price: number) => {
  const { account } = useWallet(); // Ambil alamat wallet yang terhubung

  if (!account) {
    throw new Error('Wallet not connected');
  }

  const tx = await contract.methods.setPrice(ipId, price).send({ from: account });
  return tx; // Kembalikan transaksi
};

// Fungsi untuk mendapatkan semua IP yang sedang dijual
export const getAllForSale = async () => {
  const forSaleIPs = await contract.methods.getAllForSale().call();
  return forSaleIPs; // Kembalikan data IP yang sedang dijual
};

// Fungsi untuk membeli IP
export const buyIP = async (ipId: number, price: number) => {
    const { account } = useWallet(); // Ambil alamat wallet yang terhubung
  
    if (!account) {
      throw new Error('Wallet not connected');
    }
  
    // Konversi harga dari number ke string dalam wei
    const priceInWei = Web3.utils.toWei(price.toString(), 'ether');
  
    const tx = await contract.methods.buyIP(ipId).send({ from: account, value: priceInWei });
    return tx; // Kembalikan transaksi
  };
  
// Fungsi untuk mendapatkan IP berdasarkan pengguna
export const getIPsByUser = async (userAddress: string) => {
  const userIPs = await contract.methods.getIPsByUser(userAddress).call();
  return userIPs; // Kembalikan data IP berdasarkan pengguna
};
