# metacrafters-project-6
A metacrafters solana course project

## SPL TOKEN

Token address : ```EPjUSYcivY4tHGDpviWWmys8LhrwuQAa8oFRcsMxW2Ea```

From token account address : ```389bu9fyzan74uFsMNxb1EoAUwFwbA6KEDMJRBkQaaZs```

To token account address : ```AzsFHpx2dKi1mcvYGz1tpoD3RGTjjH5xef67LfZzv8wH```


## NFT

```
ts-node ./src/candy-machine-v2-cli.ts upload 
            -e devnet     
            -k /home/monishwar69/.config/solana/id.json   
            -cp config.json    
            -c example   
            ./assets
```

### ERROR

```
$ ts-node ./src/candy-machine-v2-cli.ts upload      -e devnet      -k /home/monishwar69/.config/solana/id.json      -cp config.json      -c example      ./assets
wallet public key: 5YC16eJ5fJytemM5kk7k4cK49N6VV4nvXYe8YwFpspkE
Using cluster devnet
WARNING: On Devnet, the arweave-sol storage option only stores your files for 1 week. Please upload via Mainnet Beta for your final collection.

Beginning the upload for 10 (img+json) pairs
started at: 1683738091448
initializing candy machine
Candy machine address:  8o4K7fEPfPURvq3TEaq3LX9m7sWKk7sqPWBub1hJ6uiU
Collection metadata address:  8J4xnZnAyWBvveLLgrpKfJufEUcATM9iRZiMLQYXE3qV
Collection metadata authority:  5YC16eJ5fJytemM5kk7k4cK49N6VV4nvXYe8YwFpspkE
Collection master edition address:  49YX9wbWnf5mv8ifUcrfvBRApcJBpv2HnkKk3fdyqGXs
Collection mint address:  4KEQDq8XDMRKNjshVTFCreEdYctXWiukdotJcGtfcgee
Collection PDA address:  7soQHdZmtAWa53kmj17m2p88QnhhmMmQCgub4x5pPk3L
Collection authority record address:  2udxpWpxp9hymPTTYhjEVo36Hx8tKwAU2YvmEZ4igsmV
Rejected via websocket { InstructionError: [ 4, { BorshIoError: 'Unknown' } ] }
Timeout Error caught {
  err: { InstructionError: [ 4, [Object] ] },
  slot: 214902300,
  confirmations: 0
}
Error deploying config to Solana network. Error: Transaction failed: Error: BorshIoError
    at sendSignedTransaction (/home/monishwar69/Desktop/git/metacrafters-project-6/CandyMachine/src/helpers/transactions.ts:136:19)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async sendTransactionWithRetryWithKeypair (/home/monishwar69/Desktop/git/metacrafters-project-6/CandyMachine/src/helpers/transactions.ts:59:26)
    at async setCollection (/home/monishwar69/Desktop/git/metacrafters-project-6/CandyMachine/src/commands/set-collection.ts:192:5)
    at async uploadV2 (/home/monishwar69/Desktop/git/metacrafters-project-6/CandyMachine/src/commands/upload.ts:183:28)
    at async Command.<anonymous> (/home/monishwar69/Desktop/git/metacrafters-project-6/CandyMachine/src/candy-machine-v2-cli.ts:278:7)
upload was not successful, please re-run. Error: Transaction failed: Error: BorshIoError
    at sendSignedTransaction (/home/monishwar69/Desktop/git/metacrafters-project-6/CandyMachine/src/helpers/transactions.ts:136:19)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async sendTransactionWithRetryWithKeypair (/home/monishwar69/Desktop/git/metacrafters-project-6/CandyMachine/src/helpers/transactions.ts:59:26)
    at async setCollection (/home/monishwar69/Desktop/git/metacrafters-project-6/CandyMachine/src/commands/set-collection.ts:192:5)
    at async uploadV2 (/home/monishwar69/Desktop/git/metacrafters-project-6/CandyMachine/src/commands/upload.ts:183:28)
    at async Command.<anonymous> (/home/monishwar69/Desktop/git/metacrafters-project-6/CandyMachine/src/candy-machine-v2-cli.ts:278:7)
```