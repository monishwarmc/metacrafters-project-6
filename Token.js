const {createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer} = require('@solana/spl-token');
const {Connection, clusterApiUrl, Keypair, PublicKey} = require('@solana/web3.js');


(async () => {

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
const key = [171,113,119,11,202,82,55,116,221,161,79,189,55,19,127,193,211,43,172,115,67,17,160,238,40,57,131,206,163,133,7,103,67,108,49,66,164,16,141,22,93,43,207,246,69,197,132,90,114,75,27,195,83,119,72,246,6,121,11,94,252,22,127,231];
const from = Keypair.fromSecretKey(new Uint8Array(Buffer.from(key, 'hex')));
const fromPub = new PublicKey("5YC16eJ5fJytemM5kk7k4cK49N6VV4nvXYe8YwFpspkE");
const toPub = new PublicKey("9kh1Zfb5zERicrsrYS6QtqeS216Pu9u2vxTviYy6fSdr");
console.log("token");


const mint = await createMint(connection, from, fromPub, null, 9);
const fromToken = await getOrCreateAssociatedTokenAccount(connection, from, mint, fromPub)
console.log("fromToken address", fromToken.address);

let sign = await mintTo(connection, from, mint, fromToken.address, fromPub, 1000000000, []);
console.log("tx mint to fromTok :", sign);

const toToken = await getOrCreateAssociatedTokenAccount(connection, from, mint, toPub);
console.log("toToken address", toToken.address);
sign = await transfer(connection, from, fromToken.address, toToken.address, fromPub, 1000000000, []);
console.log("token transfer :", sign);
})();