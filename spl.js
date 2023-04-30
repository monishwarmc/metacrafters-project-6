import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';


// Step 1: Connect to cluster and generate a new Keypair
const connection = new Connection(clusterApiUrl('devnet'), "confirmed");

const from = Keypair.generate();
const to = Keypair.generate();
console.log("from pubkey  " + from.publicKey);
console.log("to pubkey  "+ to.publicKey);

// Step 2: Airdrop SOL into your from wallet
const airdrop = await connection.requestAirdrop(from.publicKey, 2*LAMPORTS_PER_SOL);

await connection.confirmTransaction(airdrop, {commitment : "confirmed"});
console.log("balance " + await connection.getBalance(from.publicKey) + "\n");

// Step 3: Create new token mint and get the token account of the fromWallet address
//If the token account does not exist, create it
const mint = await createMint(connection, from, from.publicKey, null, 6);
const fromtoken = await getOrCreateAssociatedTokenAccount(connection, from, mint, from.publicKey);
console.log( "from token address " +fromtoken.address);



//Step 4: Mint a new token to the from account
let sign = await mintTo(connection, from, mint, fromtoken.address, from.publicKey, 2*LAMPORTS_PER_SOL);
console.log("from token balance " + await connection.getBalance(fromtoken.address));
console.log("signature " + sign + "\n");


//Step 5: Get the token account of the to-wallet address and if it does not exist, create it
const totoken = await getOrCreateAssociatedTokenAccount(connection, from, mint, to.publicKey);
console.log("to token address " + totoken.address);

//Step 6: Transfer the new token to the to-wallet's token account that was just created
// Transfer the new token to the "toTokenAccount" we just created
sign = await transfer(connection, from, fromtoken.address, totoken.address, from.publicKey, 1000000);
console.log("from token balance " + await connection.getBalance(fromtoken.address));
console.log("to token balance " + await connection.getBalance(totoken.address));
console.log("signature " + sign);
