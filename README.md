# ts-airdrop-api-boilerplate
A boilerplate project for sending out DCL wearables via API

# Caveats

This project will airdrop a wearable and cost you a transaction fee every time the `/nft/claim` endpoint is hit. It is highly recommended that you set up additional security features. 
Here are some security features that may be of use, depending on your type of airdrop:

 - A centralized database to track which wallet addresses have already claimed a wearable
 - A call to the `balanceOf()` method of the wearable contract to see if a claimee's wallet already owns your wearable
 - A way to limit the number of claims per IP address
 - A service that checks for VPN, proxy, relay, and tor connections, which may be used to circumvent your IP security
  
# Setup

- Create an Ethereum wallet that will *only* be used for minting wearables.

- Designate this wallet as a Minter of your wearable collection at [https://builder.decentraland.org/collections](https://builder.decentraland.org/collections)

- Send some Polygon MATIC to your minting wallet.

- Create a `.env` file from the example files (`.env.dev.example` for development environment, `.env.prod.example` for production.) 

- Within your `.env` file, change `ACCOUNT_PRIVATE_KEY` to the private key for your minting wallet. **Never remove the .env file from your .gitignore file!**

- Create an account on [http://alchemy.com](http://alchemy.com)

- Create a new Polygon app within Alchemy and obtain an API key

- Within your `.env` file, change `ALCHEMY_API_KEY` to the API key for your Alchemy app.

# Running the project

Install npm packages:

`npm install`

To run the project in development mode with hot reloading:

`npm run dev` 

To run the project in production mode:

`npm run start`

To run the project in a docker container:

`docker-compose up`

# Support
Contact **#Unknower#0677** on Discord for additional support.

# Donate
**ETH/ERC20 Tokens:** 

0xc2877b05CFe462E585fE3DE8046F7528998aF6F1

**Bitcoin:** 

3B1zLKAoLyDfWjP4f1sy4TBMptDU3zaT9f
