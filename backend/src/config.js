require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Knavish Kobolds";
const description = "Kobold minions ready to cause chaos.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 4984,
    layersOrder: [
      { name: "Background" },
      { name: "Wings"},
      { name: "Body" },
      { name: "Tail" },
      { name: "RightHand" },
      { name: "Head" },

      
      
    ],
  },
  {

    growEditionSizeTo: 4985,
    layersOrder: [
      { name: "MonkBG" },
      { name: "MonkBody" },
      { name: "MonkHead" },
      { name: "MonkRh" },
      { name: "MonkTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4986,
    layersOrder: [
      { name: "firebackground" },
      { name: "firewings"},
      { name: "firebody" },
      { name: "firetail" },
      { name: "firerh" },
      { name: "firehead" },

         
    ],
  },
  {

    growEditionSizeTo: 4987,
    layersOrder: [
      { name: "DiamondBG" },
      { name: "Diamondbody" },
      { name: "Diamondtail" },
      { name: "Diamondrh" },
      { name: "Diamondhead" },

         
    ],
  },
  {

    growEditionSizeTo: 4988,
    layersOrder: [
      { name: "ClericBG" },
      { name: "ClericBody" },
      { name: "ClericHead" },
      { name: "ClericRh" },
      { name: "ClericTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4989,
    layersOrder: [
      { name: "ArtificerBG" },
      { name: "ArtificerBody" },
      { name: "ArtificerHead" },
      { name: "ArtificerRh" },
      { name: "ArtificerTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4990,
    layersOrder: [
      { name: "BardBG" },
      { name: "BardBody" },
      { name: "BardHead" },
      { name: "BardRh" },
      { name: "BardTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4991,
    layersOrder: [
      { name: "CoinsBG" },
      { name: "CoinsBody" },
      { name: "CoinsHead" },
      { name: "CoinsRh" },
      { name: "CoinsTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4992,
    layersOrder: [
      { name: "DruidBG" },
      { name: "DruidBody" },
      { name: "DruidHead" },
      { name: "DruidRh" },
      { name: "DruidTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4993,
    layersOrder: [
      { name: "FighterBG" },
      { name: "FighterBody" },
      { name: "FighterHead" },
      { name: "FighterRh" },
      { name: "FighterTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4994,
    layersOrder: [
      { name: "PaladinBG" },
      { name: "PaladinBody" },
      { name: "PaladinHead" },
      { name: "PaladinRh" },
      { name: "PaladinTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4995,
    layersOrder: [
      { name: "RangerBG" },
      { name: "RangerBody" },
      { name: "RangerHead" },
      { name: "RangerRh" },
      { name: "RangerTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4996,
    layersOrder: [
      { name: "RogueBG" },
      { name: "RogueBody" },
      { name: "RogueHead" },
      { name: "RogueRh" },
      { name: "RogueTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4997,
    layersOrder: [
      { name: "SorcererBG" },
      { name: "SorcererBody" },
      { name: "SorcererHead" },
      { name: "SorcererRh" },
      { name: "SorcererTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4998,
    layersOrder: [
      { name: "WarlockBG" },
      { name: "WarlockBody" },
      { name: "WarlockHead" },
      { name: "WarlockRh" },
      { name: "WarlockTail" },

         
    ],
  },
  {

    growEditionSizeTo: 4999,
    layersOrder: [
      { name: "WizardBG" },
      { name: "WizardBody" },
      { name: "WizardHead" },
      { name: "WizardRh" },
      { name: "WizardTail" },

         
    ],
  },
  {

    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "ZombieBG" },
      { name: "ZombieBody" },
      { name: "ZombieHead" },
      { name: "ZombieRh" },
      { name: "ZombieTail" },

         
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://twitter.com/KnavishKobolds", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Knavish Kobolds';
const CONTRACT_SYMBOL = 'KK';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xd135530b6E8cc9CCd334b812e50f5b5eb95280cA';
const TREASURY_ADDRESS = '0xd135530b6E8cc9CCd334b812e50f5b5eb95280cA';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 50; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-07-02T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 750; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xd135530b6E8cc9CCd334b812e50f5b5eb95280cA"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = [0xd135530b6E8cc9CCd334b812e50f5b5eb95280cA]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0x64dF73270BE92D3Fb33B2785cBbeb3f70f596245"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "REPLACE THIS"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
