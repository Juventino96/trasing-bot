module.exports = {
  "name": "Polygon Tokens List",
  "version": {
    "major": 3,
    "minor": 0,
    "patch": 0
  },
  "logoURI": "https://wallet-asset.matic.network/img/tokens/matic.svg",
  "keywords": [
    "polygon",
    "default",
    "tokens"
  ],
  "tags": {
    "stablecoin": {
      "name": "Stablecoin",
      "description": "Tokens that are fixed to an external asset, e.g. the US dollar"
    },
    "swapable": {
      "name": "Swapable",
      "description": "Tokens are eligible for swaps"
    },
    "erc20": {
      "name": "erc20",
      "description": "Tokens are of ERC20 token type"
    },
    "pos": {
      "name": "PoS",
      "description": "PoS tokens"
    },
    "plasma": {
      "name": "Plasma",
      "description": "Plasma tokens"
    },
    "metaTx": {
      "name": "MetaTx",
      "description": "Tokens are eligible for meta transactions"
    },
    "customWithdrawEventSig": {
      "name": "Custom Withdraw Event Signature",
      "description": "The token has a custom withdraw event signature"
    },
    "noDeposit": {
      "name": "Deposit Disabled",
      "description": "Tokens are not eligible for deposits"
    },
    "noWithdraw": {
      "name": "Withdraw Disabled",
      "description": "Tokens are not eligible for withdraws"
    }
  },
  "timestamp": "2022-09-23T06:01:01.412Z",
  "tokens": [
    {
      "chainId": 137,
      "name": "Ether - PoS",
      "symbol": "ETH",
      "decimals": 18,
      "address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/eth.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      }
    },
    {
      "chainId": 137,
      "name": "Ether - Plasma",
      "symbol": "ETH",
      "decimals": 18,
      "address": "0x8cc8538d60901d19692f5ba22684732bc28f54a3",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/eth.svg",
      "tags": [
        "plasma",
        "erc20",
        "noDeposit"
      ],
      "extensions": {
        "rootAddress": "0xa45b966996374e9e65ab991c6fe4bfce3a56dde8"
      }
    },
    {
      "chainId": 137,
      "name": "Matic Token",
      "symbol": "MATIC",
      "decimals": 18,
      "address": "0x0000000000000000000000000000000000001010",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/matic.svg",
      "tags": [
        "plasma",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
      }
    },
    {
      "chainId": 137,
      "name": "USD Coin",
      "symbol": "USDC",
      "decimals": 6,
      "address": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/usdc.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable",
        "metaTx",
        "stablecoin"
      ],
      "extensions": {
        "rootAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      }
    },
    {
      "chainId": 137,
      "name": "Tether USD",
      "symbol": "USDT",
      "decimals": 6,
      "address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/usdt.svg",
      "tags": [
        "pos",
        "stablecoin",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7"
      }
    },
    {
      "chainId": 137,
      "name": "Dai - PoS",
      "symbol": "DAI",
      "decimals": 18,
      "address": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dai.svg",
      "tags": [
        "pos",
        "stablecoin",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0x6b175474e89094c44da98b954eedeac495271d0f"
      }
    },
    {
      "chainId": 137,
      "name": "Dai - Plasma",
      "symbol": "DAI",
      "decimals": 18,
      "address": "0x84000b263080bc37d1dd73a29d92794a6cf1564e",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dai.svg",
      "tags": [
        "plasma",
        "stablecoin",
        "erc20",
        "noDeposit"
      ],
      "extensions": {
        "rootAddress": "0x6b175474e89094c44da98b954eedeac495271d0f"
      }
    },
    {
      "chainId": 137,
      "name": "Aave",
      "symbol": "AAVE",
      "decimals": 18,
      "address": "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/aave.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"
      }
    },
    {
      "chainId": 137,
      "name": "ChainLink Token",
      "symbol": "LINK",
      "decimals": 18,
      "address": "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/link.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0x514910771AF9Ca656af840dff83E8264EcF986CA"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped BTC",
      "symbol": "WBTC",
      "decimals": 8,
      "address": "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/wbtc.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
      }
    },
    {
      "chainId": 137,
      "name": "Uniswap",
      "symbol": "UNI",
      "decimals": 18,
      "address": "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/uni.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
      }
    },
    {
      "chainId": 137,
      "name": "SushiToken",
      "symbol": "SUSHI",
      "decimals": 18,
      "address": "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sushi.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
      }
    },
    {
      "chainId": 137,
      "name": "Quickswap",
      "symbol": "QUICK",
      "decimals": 18,
      "address": "0x831753dd7087cac61ab5644b308642cc1c33dc13",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/quick.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f"
      }
    },
    {
      "chainId": 137,
      "name": "QuickSwap - new",
      "symbol": "QUICK",
      "decimals": 18,
      "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/quick.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd2bA23dE8a19316A638dc1e7a9ADdA1d74233368"
      }
    },
    {
      "chainId": 137,
      "name": "Aavegotchi GHST Token",
      "symbol": "GHST",
      "decimals": 18,
      "address": "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
      "logoURI": "https://polygonscan.com/token/images/aavegotchighst_32.png",
      "tags": [
        "pos",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0x3F382DbD960E3a9bbCeaE22651E88158d2791550"
      }
    },
    {
      "chainId": 137,
      "name": "Telcoin",
      "symbol": "TEL",
      "decimals": 2,
      "address": "0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/tel.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0x467bccd9d29f223bce8043b84e8c8b282827790f"
      }
    },
    {
      "chainId": 137,
      "name": "Balancer",
      "symbol": "BAL",
      "decimals": 18,
      "address": "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bal.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xba100000625a3754423978a60c9317c58a424e3d"
      }
    },
    {
      "chainId": 137,
      "name": "EthermonToken",
      "symbol": "EMON",
      "decimals": 18,
      "address": "0xd6a5ab46ead26f49b03bbb1f9eb1ad5c1767974a",
      "logoURI": "https://polygonscan.com/token/images/ethermontoken2_32.png",
      "tags": [
        "pos",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0xd6a5ab46ead26f49b03bbb1f9eb1ad5c1767974a"
      }
    },
    {
      "chainId": 137,
      "name": "Furucombo",
      "symbol": "COMBO",
      "decimals": 18,
      "address": "0x6ddb31002abc64e1479fc439692f7ea061e78165",
      "logoURI": "https://polygonscan.com/token/images/furucombo_32.png",
      "tags": [
        "pos",
        "erc20",
        "swapable",
        "metaTx"
      ],
      "extensions": {
        "rootAddress": "0xffffffff2ba8f66d4e51811c5190992176930278"
      }
    },
    {
      "chainId": 137,
      "name": "Binance USD",
      "symbol": "BUSD",
      "decimals": 18,
      "address": "0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/busd.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4fabb145d64652a948d72533023f6e7a623c7c53"
      }
    },
    {
      "chainId": 137,
      "name": "Mintopoly Money",
      "symbol": "MM",
      "decimals": 8,
      "address": "0xf6a09deadf5a10aa7822d95e3228b2315de8f6fa",
      "logoURI": "https://etherscan.io/token/images/mintopolymoney_32.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf6a09deadf5a10aa7822d95e3228b2315de8f6fa"
      }
    },
    {
      "chainId": 137,
      "name": "Revv",
      "symbol": "REVV",
      "decimals": 18,
      "address": "0x70c006878a5a50ed185ac4c87d837633923de296",
      "logoURI": "https://etherscan.io/token/images/revv_32.png",
      "tags": [
        "pos",
        "erc20",
        "customWithdrawEventSig",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x557b933a7c2c45672b610f8954a3deb39a51a8ca",
        "withdrawEventSig": "0x7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5"
      }
    },
    {
      "chainId": 137,
      "name": "Decentral Games ICE",
      "symbol": "ICE",
      "decimals": 18,
      "address": "0xc6C855AD634dCDAd23e64DA71Ba85b8C51E5aD7c",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ice.svg",
      "tags": [
        "pos",
        "erc20",
        "noDeposit",
        "noWithdraw",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0000000000000000000000000000000000000000"
      }
    },
    {
      "chainId": 137,
      "name": "GAME Credits",
      "symbol": "GAME",
      "decimals": 18,
      "address": "0x8d1566569d5b695d44a9a234540f68D393cDC40D",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "logoURI": "https://svgshare.com/i/fJw.svg",
      "extensions": {
        "rootAddress": "0x63f88A2298a5c4AEE3c216Aa6D926B184a4b2437"
      }
    },
    {
      "chainId": 137,
      "name": "CoinPoker Chips",
      "symbol": "CHP",
      "decimals": 18,
      "address": "0x59B5654a17Ac44F3068b3882F298881433bB07Ef",
      "logoURI": "https://coinpoker.com/assets/img/logox2.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0a6E18fB2842855C3AF925310B0F50a4BfA17909"
      }
    },
    {
      "chainId": 137,
      "name": "Dreamr Platform Token",
      "symbol": "DMR",
      "decimals": 18,
      "address": "0x955ce23f20217a6aa205620b40ede4c9e83d325f",
      "logoURI": "https://gateway.pinata.cloud/ipfs/QmepiCxpZqks5sjB6r55gErgCXqhGdCsbXYpuauG5yxCyB",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf74941046389c78f12fe44784c0ec9ca7ceb7dc2"
      }
    },
    {
      "chainId": 137,
      "name": "Yup",
      "symbol": "YUP",
      "decimals": 18,
      "address": "0x086373fad3447F7F86252fb59d56107e9E0FaaFa",
      "logoURI": "https://i.imgur.com/QC2UG1G.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x69bbc3f8787d573f1bbdd0a5f40c7ba0aee9bcc9"
      }
    },
    {
      "chainId": 137,
      "name": "Paint",
      "symbol": "PAINT",
      "decimals": 18,
      "address": "0x7c28F627eA3aEc8B882b51eb1935f66e5b875714",
      "logoURI": "https://gateway.pinata.cloud/ipfs/QmSqt6RAgNYWq3kJRhEoLquY2xcZ7QXAJGovaeaxmZYCVJ",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4C6eC08CF3fc987c6C4BEB03184D335A2dFc4042"
      }
    },
    {
      "chainId": 137,
      "name": "Swash Token",
      "symbol": "SWASH",
      "decimals": 18,
      "address": "0xbA3CB8329D442E6F9Eb70fafe1E214251df3D275",
      "logoURI": "https://github.com/swashapp/token/blob/main/logo/Logo.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xA130E3a33a4d84b04c3918c4E5762223Ae252F80"
      }
    },
    {
      "chainId": 137,
      "name": "Angel",
      "symbol": "ANGEL",
      "decimals": 18,
      "address": "0xa78da5d9f0c488c51b9712434f0498cbb7bff23d",
      "logoURI": "https://i.imgur.com/I8S1GPZ.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x14d86EaeB7F669a6b84D51E1ac14b3F2723fA08D"
      }
    },
    {
      "chainId": 137,
      "name": "ExSports",
      "symbol": "EXS",
      "decimals": 18,
      "address": "0x11928CFCbC0398b9206C6D57ff7D8201555D6773",
      "logoURI": "https://img.ex-sports.io/imgs/icons/exs.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7331355e2DaD3b55f9ce0fd460D082558952099e"
      }
    },
    {
      "chainId": 137,
      "name": "Royale (PoS)",
      "symbol": "ROYA",
      "decimals": 18,
      "address": "0x0bD820aD2d7Ab7305b5C9538ba824C9b9bEb0561",
      "logoURI": "https://assets.coingecko.com/coins/images/13602/small/roya.png?1636031771",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7eaf9c89037e4814dc0d9952ac7f888c784548db"
      }
    },
    {
      "chainId": 137,
      "name": "PRUF",
      "symbol": "PRUF",
      "decimals": 18,
      "address": "0xAdf72D32E511eE00c6E0FF5D62Cd5C7C40A6aDEA",
      "logoURI": "https://pruf.io/assets/images/prufcircle-1200x1200.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa49811140e1d6f653dec28037be0924c811c4538"
      }
    },
    {
      "chainId": 137,
      "name": "Arch Ethereum Web3",
      "symbol": "WEB3",
      "decimals": 18,
      "address": "0xBcD2C5C78000504EFBC1cE6489dfcaC71835406A",
      "logoURI": "https://arch-finance-basket-logos.s3.amazonaws.com/ETHWEB3.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe8e8486228753E01Dbc222dA262Aa706Bd67e601"
      }
    },
    {
      "chainId": 137,
      "name": "Unlock Discount Token",
      "symbol": "UDT",
      "decimals": 18,
      "address": "0xf7e78d9c4c74df889a83c8c8d6d05bf70ff75876",
      "logoURI": "https://github.com/unlock-protocol/unlock/blob/master/design/brand/1808-Unlock-Identity_Unlock-LogoMark-Circle.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x90de74265a416e1393a450752175aed98fe11517"
      }
    },
    {
      "chainId": 137,
      "name": "Altafin",
      "symbol": "AFN",
      "decimals": 18,
      "address": "0xB4A055786EE8B9c9a09156bb185EBA7B91540eE5",
      "logoURI": "https://images.ctfassets.net/dj2ij87ekk1y/6QLADorHyGFcr804X0spbG/a11f3a582c9f6b40bc7b010d481c9242/AltaFin-Logo-Square-700x.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xE46F290Cd59195a83e757891430d8D517d16b334"
      }
    },
    {
      "chainId": 137,
      "name": "UCT Cash",
      "symbol": "UCTC",
      "decimals": 18,
      "address": "0xD4b42287F1EE04aF246aD792153C39D62733f826",
      "logoURI": "https://www.uct-token.org/wp-content/uploads/2021/06/UCT-token-transp-500-500.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2707ab358B5383D087FE4736Da36c1C70179e3BD"
      }
    },
    {
      "chainId": 137,
      "name": "UCT Token",
      "symbol": "UCT",
      "decimals": 18,
      "address": "0xfd5962484BE2c3574D70131BF5D452CcC7C69F67",
      "logoURI": "https://www.uct-token.org/wp-content/uploads/2021/06/UCT-token-transp-500-500.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xCC7dCc3F649Cb3932857d4edC6268e0eF4960995"
      }
    },
    {
      "chainId": 137,
      "name": "IQ",
      "symbol": "IQ",
      "decimals": 18,
      "address": "0xB9638272aD6998708de56BBC0A290a1dE534a578",
      "logoURI": "https://www.dropbox.com/sh/g97lq77b9mv9lfz/AABRnKWx9aiv6x8KShkIgDgla/Brain%20Logo%20Design-03.png?dl=0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x579CEa1889991f68aCc35Ff5c3dd0621fF29b0C9"
      }
    },
    {
      "chainId": 137,
      "name": "Polytrade (PoS)",
      "symbol": "TRADE",
      "decimals": 18,
      "address": "0x692AC1e363ae34b6B489148152b12e2785a3d8d6",
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/10465.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6e5970dbd6fc7eb1f29c6d2edf2bc4c36124c0c1"
      }
    },
    {
      "chainId": 137,
      "name": "Fleato coin",
      "symbol": "FLEATO",
      "decimals": 18,
      "address": "0x6804b07d883d0169c05233332ccf17aa956424c5",
      "logoURI": "https://www.fleato.com/images/flea120.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xAF4dE4076095A20A37E4E885B255C58f9917366e"
      }
    },
    {
      "chainId": 137,
      "name": "Efinity Token",
      "symbol": "EFI",
      "decimals": 18,
      "address": "0x891254dbb6112cf938d16c1880540b8469df6c0e",
      "logoURI": "https://cdn.efinity.io/static/logo.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x656c00e1bcd96f256f224ad9112ff426ef053733"
      }
    },
    {
      "chainId": 137,
      "name": "Pillar",
      "symbol": "PLR",
      "decimals": 18,
      "address": "0xa6b37fC85d870711C56FbcB8afe2f8dB049AE774",
      "logoURI": "https://etherscan.io/token/images/pillar_32.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe3818504c1B32bF1557b16C238B2E01Fd3149C17"
      }
    },
    {
      "chainId": 137,
      "name": "Equalizer",
      "symbol": "EQZ",
      "decimals": 18,
      "address": "0xEAf631ac57F3CDDDd261770dD47F85066131a156",
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1Da87b114f35E1DC91F72bF57fc07A768Ad40Bb0/logo.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1Da87b114f35E1DC91F72bF57fc07A768Ad40Bb0"
      }
    },
    {
      "chainId": 137,
      "name": "GoBlank Token",
      "symbol": "BLANK",
      "decimals": 18,
      "address": "0xf4C83080E80AE530d6f8180572cBbf1Ac9D5d435",
      "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x41A3Dba3D677E573636BA691a70ff2D606c29666/logo.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x41A3Dba3D677E573636BA691a70ff2D606c29666"
      }
    },
    {
      "chainId": 137,
      "name": "Cryptopia Token",
      "symbol": "CRT",
      "decimals": 18,
      "address": "0x7348565F0A5077252D310392C3CeCD8dB87a7704",
      "logoURI": "https://cryptopia.com/images/icons/icon_CRT.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xABdD22dFE5Db2be20262050523470B650E91F246"
      }
    },
    {
      "chainId": 137,
      "name": "BTU Protocol",
      "symbol": "BTU",
      "decimals": 18,
      "address": "0xfdc26cda2d2440d0e83cd1dee8e8be48405806dc",
      "logoURI": "https://btu-protocol.com/images/log-BTU-256w.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb683D83a532e2Cb7DFa5275eED3698436371cc9f"
      }
    },
    {
      "chainId": 137,
      "name": "Trips",
      "symbol": "TRIPS",
      "decimals": 18,
      "address": "0x77F0F7d657f362C4b703417B800B83B989a288a2",
      "logoURI": "https://gateway.pinata.cloud/ipfs/QmVxZCAvxab8bUhaScwqw6NWABmqz4jmjJ3qnYUbdKweEf/trips_T_logo256x256.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1350fbe8ce27762ec19134bf8fc405a427fe9bf1"
      }
    },
    {
      "chainId": 137,
      "name": "0xMonero",
      "symbol": "0xMR",
      "decimals": 18,
      "address": "0x52ede6bba83b7b4ba1d738df0df713d6a2036b71",
      "logoURI": "https://avatars.githubusercontent.com/u/65775032?v=4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x035df12e0f3ac6671126525f1015e47d79dfeddf"
      }
    },
    {
      "chainId": 137,
      "name": "Ispolink",
      "symbol": "ISP",
      "decimals": 18,
      "address": "0x1e289178612f5b6d32f692e312dcf783c74b2162",
      "logoURI": "https://raw.githubusercontent.com/mikyjo/crypto_assets/main/tokens/ispolink/ispolink_icon_white_400x400.jpg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc8807f0f5ba3fa45ffbdc66928d71c5289249014"
      }
    },
    {
      "chainId": 137,
      "name": "Gistcoin",
      "symbol": "GIST",
      "decimals": 18,
      "address": "0xF6db73D0495Fe4648d494046cCbdc5625F2740F0",
      "logoURI": "https://etherscan.io/token/images/gistcoin_32.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6cd775540cce9adb01872db9f794142f53595c71"
      }
    },
    {
      "chainId": 137,
      "name": "Orbs Token",
      "symbol": "ORBS",
      "decimals": 18,
      "address": "0x614389EaAE0A6821DC49062D56BDA3d9d45Fa2ff",
      "logoURI": "https://raw.githubusercontent.com/orbs-network/graphical-assets/main/orbs/ethereum/token/logo256.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xff56Cc6b1E6dEd347aA0B7676C85AB0B3D08B0FA"
      }
    },
    {
      "chainId": 137,
      "name": "InsurAce",
      "symbol": "INSUR",
      "decimals": 18,
      "address": "0x8a0e8b4b0903929f47C3ea30973940D4a9702067",
      "logoURI": "https://app.insurace.io/asset/token/insur.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x544c42fBB96B39B21DF61cf322b5EDC285EE7429"
      }
    },
    {
      "chainId": 137,
      "name": "MASQ",
      "symbol": "MASQ",
      "decimals": 18,
      "address": "0xee9a352f6aac4af1a5b9f467f6a93e0ffbe9dd35",
      "logoURI": "https://github.com/MASQ-Project/MASQ-contract/raw/master/MASQ%20Logo%20Blue%20Solo%20Transparent.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x06F3C323f0238c72BF35011071f2b5B7F43A054c"
      }
    },
    {
      "chainId": 137,
      "name": "Voltage",
      "symbol": "VOLT",
      "decimals": 18,
      "address": "0xe8a05e85883f9663b18a38d7aa89853deaba56e3",
      "logoURI": "https://assets.coingecko.com/coins/images/18515/small/volt.png?1632219924",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xffbf315f70e458e49229654dea4ce192d26f9b25"
      }
    },
    {
      "chainId": 137,
      "name": "Pinjour",
      "symbol": "PIN",
      "decimals": 18,
      "address": "0x1d5278cbd93ff50260fddc93282e2e67ca3317c9",
      "logoURI": "https://d26jz7p3kula4l.cloudfront.net/static/img/pinjour-192x192.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x76c9a9583bda3ac6440fc153c7ffd89f99823a2c"
      }
    },
    {
      "chainId": 137,
      "name": "Candle",
      "symbol": "CNDL",
      "decimals": 18,
      "address": "0x5423063af146F5abF88Eb490486E6B53FA135eC9",
      "logoURI": "https://i.ibb.co/86yLQRZ/candlelogo.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbc138bD20C98186CC0342C8e380953aF0cb48BA8"
      }
    },
    {
      "chainId": 137,
      "name": "Tower Token",
      "symbol": "TOWER",
      "decimals": 18,
      "address": "0x2bC07124D8dAc638E290f401046Ad584546BC47b",
      "logoURI": "https://crazydefenseheroes.com/static/media/logo-tower.2bca4bdd.svg",
      "tags": [
        "pos",
        "erc20",
        "customWithdrawEventSig",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1C9922314ED1415c95b9FD453c3818fd41867d0B",
        "withdrawEventSig": "0x7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5"
      }
    },
    {
      "chainId": 137,
      "name": "Meeds",
      "symbol": "MEED",
      "decimals": 18,
      "address": "0x6aca77cf3bab0c4e8210a09b57b07854a995289a",
      "logoURI": "https://github.com/Meeds-io/.github/raw/main/profile/meeds-256x256.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8503a7b00b4b52692cc6c14e5b96f142e30547b7"
      }
    },
    {
      "chainId": 137,
      "name": "inSure DeFi",
      "symbol": "SURE",
      "decimals": 18,
      "address": "0xF88332547c680F755481Bf489D890426248BB275",
      "logoURI": "https://insuretoken.net/images/logo-grey-circle.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcb86c6a22cb56b6cf40cafedb06ba0df188a416e"
      }
    },
    {
      "chainId": 137,
      "name": "Beverage Token",
      "symbol": "DRINK",
      "decimals": 18,
      "address": "0x366a39a2f73de32df17cc9bdd027aa054f6ba9cb",
      "logoURI": "https://raw.githubusercontent.com/Beverage-Finance/beverage-docs/main/assets/beverage-token-logos/beverage-200X200.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9257fb8fab616867cEe67C3289547403617B1938"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped CHI",
      "symbol": "WCHI",
      "decimals": 8,
      "address": "0xE79feAAA457ad7899357E8E2065a3267aC9eE601",
      "logoURI": "https://arweave.net/cLtOpcOcgshTnA3aWe8a1lKRG0baZHfWGsi1mq5Cgt4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6DC02164d75651758aC74435806093E421b64605"
      }
    },
    {
      "chainId": 137,
      "name": "Indorse",
      "symbol": "IND",
      "decimals": 18,
      "address": "0x9611452965b63cFeA2C9774e5386AB6D4F0abf16",
      "logoURI": "https://drive.google.com/file/d/1Wbw4t_hibR5zMBdrLysvhfJvSIe34q9N/view?usp=sharing",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf8e386EDa857484f5a12e4B5DAa9984E06E73705"
      }
    },
    {
      "chainId": 137,
      "name": "Germoney",
      "symbol": "GER",
      "decimals": 2,
      "address": "0x03a68f78107d102d26353e5476733b067950bab6",
      "logoURI": "https://www.germoney.cash/static/media/logo.7c3abfc4.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x844Af22fBEC4D1bb9C062F33D29e4Ad8d0EFc01D"
      }
    },
    {
      "chainId": 137,
      "name": "ScaleSwapToken",
      "symbol": "SCA",
      "decimals": 18,
      "address": "0x11a819Beb0AA3327E39f52F90d65Cc9bCA499F33",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1FbD3dF007eB8A7477A1Eab2c63483dCc24EfFD6"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sca.svg"
    },
    {
      "chainId": 137,
      "name": "Megaverse",
      "symbol": "MEGA",
      "decimals": 18,
      "address": "0xD87958D9Cc146aBe382Ee20D1EF278321E61ADe9",
      "logoURI": "https://i.imgur.com/1pDWnjT.jpeg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xCF9b27399447f92462Dad69491edbA304a063591"
      }
    },
    {
      "chainId": 137,
      "name": "RocketX",
      "symbol": "RVF",
      "decimals": 18,
      "address": "0x2ce13e4199443fdfff531abb30c9b6594446bbc7",
      "logoURI": "https://drive.google.com/file/d/106QzWJ-42p2FVsgZQ4pVCw_cTTAudU39/view?usp=sharing",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xdc8af07a7861bedd104b8093ae3e9376fc8596d2"
      }
    },
    {
      "chainId": 137,
      "name": "Forest Knight",
      "symbol": "KNIGHT",
      "decimals": 18,
      "address": "0x4455eF8B4B4A007a93DaA12DE63a47EEAC700D9D",
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/11324.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4455eF8B4B4A007a93DaA12DE63a47EEAC700D9D"
      }
    },
    {
      "chainId": 137,
      "name": "Lepasa",
      "symbol": "LEPA",
      "decimals": 18,
      "address": "0xF9a4BBAa7fA1DD2352F1A47d6d3fcfF259A6D05F",
      "logoURI": "https://www.lepasa.com/assets/img/logo_256.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbBa6C7c7d673c48d90069ad2e9d2fE587fcB6bc3"
      }
    },
    {
      "chainId": 137,
      "name": "Civilization",
      "symbol": "CIV",
      "decimals": 18,
      "address": "0x42F6bdCfd82547e89F1069Bf375aa60e6c6c063d",
      "logoURI": "https://app.civfund.org/CIV_logo_txt_192x192.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x37fE0f067FA808fFBDd12891C0858532CFE7361d"
      }
    },
    {
      "chainId": 137,
      "name": "Move",
      "symbol": "MOVE",
      "decimals": 18,
      "address": "0x521CddC0CBa84F14c69C1E99249F781AA73Ee0BC",
      "logoURI": "https://assets.coingecko.com/coins/images/13719/small/o0KIvs7T_400x400.jpg?1617672818",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3fa729b4548becbad4eab6ef18413470e6d5324c"
      }
    },
    {
      "chainId": 137,
      "name": "Stacker Ventures Token",
      "symbol": "STACK",
      "decimals": 18,
      "address": "0xccBe9B810d6574701d324fD6DbE0A1b68f9d5bf7",
      "logoURI": "https://assets.coingecko.com/coins/images/14218/small/stack.jpg?1615000614",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe0955f26515d22e347b17669993fcefcc73c3a0a"
      }
    },
    {
      "chainId": 137,
      "name": "TRAXX",
      "symbol": "TRAXX",
      "decimals": 18,
      "address": "0xd43be54c1aedf7ee4099104f2dae4ea88b18a249",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd43be54c1aedf7ee4099104f2dae4ea88b18a249"
      }
    },
    {
      "chainId": 137,
      "name": "NOIIRE COIN",
      "symbol": "NOIIRE",
      "decimals": 18,
      "address": "0x92a33f4017eca323f00424a36b3c52598035fc16",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xee93b9479e2fdd9bf58d7c11474ad347f5b1eb09"
      }
    },
    {
      "chainId": 137,
      "name": "VAIOT Token",
      "symbol": "VAI",
      "decimals": 18,
      "address": "0x51738017dc69f23deb5db8de97685cf3b7001e79",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x51738017dc69f23deb5db8de97685cf3b7001e79"
      }
    },
    {
      "chainId": 137,
      "name": "AdBank",
      "symbol": "ADB",
      "decimals": 18,
      "address": "0xb92d60d0ecbef38dee6a125181825567fccd9dc7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2baac9330cf9ac479d819195794d79ad0c7616e3"
      }
    },
    {
      "chainId": 137,
      "name": "SatoMotive Token",
      "symbol": "SV2X",
      "decimals": 18,
      "address": "0x9b9026901999e612bc396bb285e8fbe3dcc7b78e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x37810173b70e86b8435f8c28590e8faceff59044"
      }
    },
    {
      "chainId": 137,
      "name": "Sprocket",
      "symbol": "SPROCKET",
      "decimals": 18,
      "address": "0x0d98eae620491d8f6836a39ac45e54b286fdd2d7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa9364d93a4a6d8dc51781236ded2dc4325b668b8"
      }
    },
    {
      "chainId": 137,
      "name": "UniCandy",
      "symbol": "UCD",
      "decimals": 18,
      "address": "0x546c825f0109353ab4315139e82674f0d86e39d8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb1db366890eeb8f28c2813c6a6084353e0b90713"
      }
    },
    {
      "chainId": 137,
      "name": "CLIK",
      "symbol": "CLIK",
      "decimals": 18,
      "address": "0x76b0ef26d41d55201a7d8c3437c21caef9857149",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf273e3bc6acdf27c01b8b1c35d39c33b067153dd"
      }
    },
    {
      "chainId": 137,
      "name": "Lockable",
      "symbol": "LC",
      "decimals": 18,
      "address": "0x41a7e62e231bad6026b82952c78fab6e61d96958",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x41a7e62e231bad6026b82952c78fab6e61d96958"
      }
    },
    {
      "chainId": 137,
      "name": "Forta",
      "symbol": "FORT",
      "decimals": 18,
      "address": "0x9ff62d1fc52a907b6dcba8077c2ddca6e6a9d3e1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x41545f8b9472d758bb669ed8eaeeecd7a9c4ec29"
      }
    },
    {
      "chainId": 137,
      "name": "MetaMEMO",
      "symbol": "MEMO",
      "decimals": 18,
      "address": "0x2710ed3f5d44268dcb89f549050718aa237c8a47",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xeb8eec5a2dbf6e6f4cc542ad31cce706f8f80419"
      }
    },
    {
      "chainId": 137,
      "name": "InventoryClub Token",
      "symbol": "VNT",
      "decimals": 18,
      "address": "0x2c63b97ec0976e76098371f4300e7fe89f087a02",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe912b8ba2513d7e29b7b2e5b14398dbf77503fb4"
      }
    },
    {
      "chainId": 137,
      "name": "Kevin",
      "symbol": "KEVIN",
      "decimals": 9,
      "address": "0x9720d05952cd56893fc5982aaec4508d46a589cb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc9f1b23074849d5d6de462af57dae5d3309a1ecc"
      }
    },
    {
      "chainId": 137,
      "name": "Hedron",
      "symbol": "HDRN",
      "decimals": 9,
      "address": "0x0a436cfe3190c141c5e910fc217e3b27d44042f3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3819f64f282bf135d62168c1e513280daf905e06"
      }
    },
    {
      "chainId": 137,
      "name": "CERE Network",
      "symbol": "CERE",
      "decimals": 10,
      "address": "0x2da719db753dfa10a62e140f436e1d67f2ddb0d6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2da719db753dfa10a62e140f436e1d67f2ddb0d6"
      }
    },
    {
      "chainId": 137,
      "name": "InnovaMinex",
      "symbol": "MINX",
      "decimals": 6,
      "address": "0x4bf6daa0f3b2f8b338836b29f17b9e7ff0e68b53",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xae353daeed8dcc7a9a12027f7e070c0a50b7b6a4"
      }
    },
    {
      "chainId": 137,
      "name": "THUG",
      "symbol": "THUG",
      "decimals": 18,
      "address": "0xb22ecdfe16bef29ce48a63cde0add3e8b536d122",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb22ecdfe16bef29ce48a63cde0add3e8b536d122"
      }
    },
    {
      "chainId": 137,
      "name": "Coorest",
      "symbol": "CRST",
      "decimals": 18,
      "address": "0x91f0484f9b65dc5187e414dae5ed37ea7a4b8af4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x776aaca47ee579ff63f6c00a921377eb21359e59"
      }
    },
    {
      "chainId": 137,
      "name": "OMI Token",
      "symbol": "OMI",
      "decimals": 18,
      "address": "0x9cd42aed7d44ee801c827a8e5dcf41df534e9e82",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xed35af169af46a02ee13b9d79eb57d6d68c1749e"
      }
    },
    {
      "chainId": 137,
      "name": "Minato",
      "symbol": "MNTO",
      "decimals": 18,
      "address": "0x4c9f66b2806538cf00ef596e09fb05bcb0d17dc8",
      "logoURI": "https://minatodao.com/wp-content/uploads/2022/03/pcs-96x96.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x97a9bac06f90940bce9caec2b880ff17707519e4"
      }
    },
    {
      "chainId": 137,
      "name": "Lucky Races Sliver",
      "symbol": "$SLIVER",
      "decimals": 18,
      "address": "0xa95b410743e8c2f7b64f1373d3ca2b3454864a94",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf5112170ec586385333fbfa15e4a7a4aa9f82cfc"
      }
    },
    {
      "chainId": 137,
      "name": "$ZKP Token",
      "symbol": "$ZKP",
      "decimals": 18,
      "address": "0x9a06db14d639796b25a6cec6a1bf614fd98815ec",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x909e34d3f6124c324ac83dcca84b74398a6fa173"
      }
    },
    {
      "chainId": 137,
      "name": "Banana",
      "symbol": "BANANA",
      "decimals": 18,
      "address": "0xbc91347e80886453f3f8bbd6d7ac07c122d87735",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x94e496474f1725f1c1824cb5bdb92d7691a4f03a"
      }
    },
    {
      "chainId": 137,
      "name": "MetaBillionaireUtilityCoin",
      "symbol": "MBUC",
      "decimals": 18,
      "address": "0xecd3c4f21dceebc8f308af7c3a7f1a4265bb52e9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xecaf45a19565fff9d058257b326e52a253343f78"
      }
    },
    {
      "chainId": 137,
      "name": "Akiverse Governance",
      "symbol": "AKV",
      "decimals": 18,
      "address": "0xf0af7795765273aebfd8a908460b728bdc3fc937",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x08c38d80b45e4c1e3a6bece6b49312e5fc30b0fb"
      }
    },
    {
      "chainId": 137,
      "name": "BRIX Token",
      "symbol": "BRIX",
      "decimals": 18,
      "address": "0xabffedaf784dc40a4c1947f9d5ddb3afe2075353",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8f10eb64923bf30215e7944c416e891d30e742a1"
      }
    },
    {
      "chainId": 137,
      "name": "CRIPTORO COIN",
      "symbol": "CTRO",
      "decimals": 10,
      "address": "0x7dc06244536fc5a86123034ee6d9204e436a3e91",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb3ab2b676a1efdb16a227e151dc31f5bd3856744"
      }
    },
    {
      "chainId": 137,
      "name": "TiqCoin",
      "symbol": "TIQ",
      "decimals": 18,
      "address": "0x124e383a31f871a91b923bbcdbf3b0fae625c691",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb8949b6de0869735d71d0f07d1e899e57f1076d6"
      }
    },
    {
      "chainId": 137,
      "name": "AssaultToken",
      "symbol": "ASLT",
      "decimals": 18,
      "address": "0x4b2dc203d164702d6e453ab2abeccbcae95ee36b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2b8b09ce791a4b1036137cf8ac8260cd1e619f29"
      }
    },
    {
      "chainId": 137,
      "name": "Staked MATIC",
      "symbol": "stMATIC",
      "decimals": 18,
      "address": "0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9ee91f9f426fa633d227f7a9b000e28b9dfd8599"
      }
    },
    {
      "chainId": 137,
      "name": "Metaverse Alliance DAO",
      "symbol": "MAD",
      "decimals": 18,
      "address": "0x158dbdd4820f95698442eac7cd4f70d08f39b3c6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6e35ecbdc138e64a5029c2487296e83bbba6b77c"
      }
    },
    {
      "chainId": 137,
      "name": "BANX",
      "symbol": "BANX",
      "decimals": 18,
      "address": "0x288e8ad3d61e6f931290a5df1ae31f16b8274770",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0e2e120f5e18f2d0a1afd0fab02b09aa37a17f7e"
      }
    },
    {
      "chainId": 137,
      "name": "Flame",
      "symbol": "XFL",
      "decimals": 18,
      "address": "0x8ca608e14934c1e986429d0d3644b8ba3a3e279c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x469861bdfd02e7ebce7cdeb281e8eec53069cf5f"
      }
    },
    {
      "chainId": 137,
      "name": "CybeeDAO",
      "symbol": "CBD",
      "decimals": 18,
      "address": "0x73a79f01c3365b6b50101b47860f428a8c3cebff",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9b812c65529ec7d20ab630235ae20fde022c8ad3"
      }
    },
    {
      "chainId": 137,
      "name": "Babycoin",
      "symbol": "BABYCOIN",
      "decimals": 18,
      "address": "0xcfeda1807147dbbcb1808e2518edde0142f419f5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd2cb4366d8111d65ebff6c29852fef7a1628ae80"
      }
    },
    {
      "chainId": 137,
      "name": "Shina Inu",
      "symbol": "SHI",
      "decimals": 18,
      "address": "0x4ede9608a5d6154cb349f472063f6f0a95f9afc1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x243cacb4d5ff6814ad668c3e225246efa886ad5a"
      }
    },
    {
      "chainId": 137,
      "name": "Democracy",
      "symbol": "DEM",
      "decimals": 18,
      "address": "0xaddffb740019ddf9318699e9fd1be138a311f584",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc589d3d92ae2b4461e9bb2e689b36c4e3c9c4fa3"
      }
    },
    {
      "chainId": 137,
      "name": "PITCH",
      "symbol": "PITCH",
      "decimals": 9,
      "address": "0x4f6b7ffb1427d6312305e23aebce6fc2994d8f91",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x87f56ee356b434187105b40f96b230f5283c0ab4"
      }
    },
    {
      "chainId": 137,
      "name": "EZDEX",
      "symbol": "EZX",
      "decimals": 18,
      "address": "0xe2a1257ac6f49b767fce903686fcbd7713af4a5d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9e8bfe46f9af27c5ea5c9c72b86d71bb86953a0c"
      }
    },
    {
      "chainId": 137,
      "name": "Cask Token",
      "symbol": "CASK",
      "decimals": 18,
      "address": "0xdc185ade9a3362f9203191f136499ffe512527c1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0645314c1afd4d9711d609e3e755265ababc95eb"
      }
    },
    {
      "chainId": 137,
      "name": "Rickle",
      "symbol": "rkl",
      "decimals": 18,
      "address": "0x9fdc23fe295104ac55fef09363c56451d0e37cfa",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0ff80a1708191c0da8aa600fa487f7ac81d7818c"
      }
    },
    {
      "chainId": 137,
      "name": "Doge Pixel (239, 375)",
      "symbol": "DOGPIX",
      "decimals": 18,
      "address": "0xff93b30c021beedab0f6e28a7a08bddd155b15a4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0332713aef01faedbf821473c165ae25079372e0"
      }
    },
    {
      "chainId": 137,
      "name": "MOONEY",
      "symbol": "MOONEY",
      "decimals": 18,
      "address": "0x74ac7664abb1c8fa152d41bb60e311a663a41c7e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x20d4db1946859e2adb0e5acc2eac58047ad41395"
      }
    },
    {
      "chainId": 137,
      "name": "Orbler",
      "symbol": "ORBR",
      "decimals": 18,
      "address": "0xc2fbfab885b9c98ad51edf3b03e2510ff97471b0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xda30f261a962d5aae94c9ecd170544600d193766"
      }
    },
    {
      "chainId": 137,
      "name": "BYTES",
      "symbol": "BYTES",
      "decimals": 18,
      "address": "0x6735d8de3b8f81a08727a1860cc9a68e8ed93b96",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7d647b1a0dcd5525e9c6b3d14be58f27674f8c95"
      }
    },
    {
      "chainId": 137,
      "name": "tokenpartners",
      "symbol": "TOE",
      "decimals": 18,
      "address": "0x32e10b5ae57c9eec97bf5e67e243bf29993c9e71",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcf44278fd9932b76df313f4a278c10618d7726d2"
      }
    },
    {
      "chainId": 137,
      "name": "EnoToken",
      "symbol": "ENO",
      "decimals": 18,
      "address": "0x7f36c54da31b2dd355caffec0249f26da41e3fcd",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xeea509c221c5c6979e974f4501b4829be0ab2f8c"
      }
    },
    {
      "chainId": 137,
      "name": "ICHI",
      "symbol": "ICHI",
      "decimals": 18,
      "address": "0x111111517e4929d3dcbdfa7cce55d30d4b6bc4d6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x111111517e4929d3dcbdfa7cce55d30d4b6bc4d6"
      }
    },
    {
      "chainId": 137,
      "name": "StripCoin",
      "symbol": "STRIP",
      "decimals": 18,
      "address": "0x500ad628a390cd4ce8a062f07f68f63e9ef30362",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe9cb6838902ccf711f16a9ea5a1170f8e9853c02"
      }
    },
    {
      "chainId": 137,
      "name": "Egg n Partners",
      "symbol": "EGGT",
      "decimals": 18,
      "address": "0x74c96c05d87c86cd640de3eeb7b073811006b991",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x096cc1544fe972039353f3401bce92f8e3978693"
      }
    },
    {
      "chainId": 137,
      "name": "CoinWealth",
      "symbol": "CNW",
      "decimals": 6,
      "address": "0x0a307bd521701f9d70fb29bfa9e2e36dc998dadb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x433fce7dfbec729a79999eaf056cb073b2153eba"
      }
    },
    {
      "chainId": 137,
      "name": "Mytrade Token",
      "symbol": "MYT",
      "decimals": 18,
      "address": "0x4535e52cdf3ab787b379b7b72b5990767e6747e4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0bf0d26a527384bcc4072a6e2bca3fc79e49fa2d"
      }
    },
    {
      "chainId": 137,
      "name": "!IdleCDO AA Tranche - idleDAIYield",
      "symbol": "AA_idleDAIYield",
      "decimals": 18,
      "address": "0x36f514bfb1dec83910c8c46752ad2987b7c72c5b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe9ada97bdb86d827ecbaacca63ebcd8201d8b12e"
      }
    },
    {
      "chainId": 137,
      "name": "!IdleCDO BB Tranche - idleDAIYield",
      "symbol": "BB_idleDAIYield",
      "decimals": 18,
      "address": "0x8db0b3ee49348be4e6f3eaab952de2aa7106f7ec",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x730348a54ba58f64295154f0662a08cbde1225c2"
      }
    },
    {
      "chainId": 137,
      "name": "Fancy Games",
      "symbol": "FNC",
      "decimals": 18,
      "address": "0x7f280dac515121dcda3eac69eb4c13a52392cace",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7f280dac515121dcda3eac69eb4c13a52392cace"
      }
    },
    {
      "chainId": 137,
      "name": "solace",
      "symbol": "SOLACE",
      "decimals": 18,
      "address": "0x2857686536f58dd835dbf43c9f549676296ef336",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x501ace9c35e60f03a2af4d484f49f9b1efde9f40"
      }
    },
    {
      "chainId": 137,
      "name": "Dataphora",
      "symbol": "DATAPHORA",
      "decimals": 18,
      "address": "0x8da41a3bc942b19a44d6bdf0e30f058df3ab8ba9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8da41a3bc942b19a44d6bdf0e30f058df3ab8ba9"
      }
    },
    {
      "chainId": 137,
      "name": "VitaDAO Token",
      "symbol": "VITA",
      "decimals": 18,
      "address": "0x6cb02c92611f001f605c891fbfde7d1a26de54b9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x81f8f0bb1cb2a06649e51913a151f0e7ef6fa321"
      }
    },
    {
      "chainId": 137,
      "name": "CubToken",
      "symbol": "CUBT",
      "decimals": 18,
      "address": "0xebbe09afdab74872dbc975d7bda1ddf5595e4c8a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbf9e72eeb5adb8b558334c8672950b7a379d4266"
      }
    },
    {
      "chainId": 137,
      "name": "Medici Token",
      "symbol": "MDC",
      "decimals": 18,
      "address": "0xe1cc4db580022b0185a0208d5830e5b64fa14b86",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x96f5094998a20008839487369012bb4d3c56eafc"
      }
    },
    {
      "chainId": 137,
      "name": "LandOrc",
      "symbol": "LORC",
      "decimals": 18,
      "address": "0x5e2cfc52d1c9166202226fbb0b26b8dc16a8c4e0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x148958884544a8ad7c4895e6ffe2723932e0523a"
      }
    },
    {
      "chainId": 137,
      "name": "iNTROVERSE",
      "symbol": "iNTRO",
      "decimals": 8,
      "address": "0x7df231024f80ca7f63032c25b6232b1cc655df77",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7912c3eff24cb62865e93dbc59264b1a293cc593"
      }
    },
    {
      "chainId": 137,
      "name": "Carchain Coin",
      "symbol": "CCC",
      "decimals": 18,
      "address": "0xe81e0a387d2585fbc5353f56a57afd20331ef12d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb9c72a65cbd593b7942cd65992eca9108a6273a3"
      }
    },
    {
      "chainId": 137,
      "name": "Fweb3",
      "symbol": "FWEB3",
      "decimals": 18,
      "address": "0x4a14ac36667b574b08443a15093e417db909d7a3",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x95cd50f9d591630db85d95c932bbc704dc0ae92a"
      }
    },
    {
      "chainId": 137,
      "name": "Citizen Token",
      "symbol": "CDAO",
      "decimals": 18,
      "address": "0x8a23d240763057432ce048a43f9a3a1b2cc22404",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x57ea7178505f7d33c2bdb4450e041561513dbd9b"
      }
    },
    {
      "chainId": 137,
      "name": "Kromatika",
      "symbol": "KROM",
      "decimals": 18,
      "address": "0x14af1f2f02dccb1e43402339099a05a5e363b83c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789"
      }
    },
    {
      "chainId": 137,
      "name": "PhunToken",
      "symbol": "PHTK",
      "decimals": 18,
      "address": "0x322584098ea29e2127a81322b417ebba356d8f22",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1fee5588cb1de19c70b6ad5399152d8c643fae7b"
      }
    },
    {
      "chainId": 137,
      "name": "Bread Token",
      "symbol": "BRD",
      "decimals": 18,
      "address": "0x11c3eba9851d245221e00e9a8e73e6f1439325d3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x558ec3152e2eb2174905cd19aea4e34a23de9ad6"
      }
    },
    {
      "chainId": 137,
      "name": "BOBL",
      "symbol": "BOBL",
      "decimals": 18,
      "address": "0x9dbdc7b58b4dfcc73daf45fc386b266262d11c41",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xac3a44115560064adfc2d2e90b5bd34f9454cafd"
      }
    },
    {
      "chainId": 137,
      "name": "CoinCasso Exchange Token",
      "symbol": "CCX",
      "decimals": 18,
      "address": "0x357e1bfb47911528965bb9c6916eeea622d4bb27",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x395dc9a82e3eef962b0355a3d4e6819e9af776d2"
      }
    },
    {
      "chainId": 137,
      "name": "Centaurify",
      "symbol": "CENT",
      "decimals": 18,
      "address": "0x7b9c2d37fc0b45a5ec022d2023f18685fda832e7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x08ba718f288c3b12b01146816bef9fa03cc635bc"
      }
    },
    {
      "chainId": 137,
      "name": "The Myth Of America",
      "symbol": "GUMP",
      "decimals": 0,
      "address": "0xaa3622e6c36a95ce8a8d3a66c166ac916a88d9c1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x496f0b5af74e24c6ffdb182d8945f116c7077aba"
      }
    },
    {
      "chainId": 137,
      "name": "Vufi.finance",
      "symbol": "VUFI",
      "decimals": 18,
      "address": "0x5530aa1823573af28b6315d7e75138573eabf6e4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf036c451e6e5b3c89cc86fd6affa877b2809501f"
      }
    },
    {
      "chainId": 137,
      "name": "Syndicate Token",
      "symbol": "SYNR",
      "decimals": 18,
      "address": "0xe6bd67b9e9c1171583d5e13edaaec6d93b05ce96",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbc6e06778708177a18210181b073da747c88490a"
      }
    },
    {
      "chainId": 137,
      "name": "Biznek",
      "symbol": "BIZN",
      "decimals": 18,
      "address": "0x2c763b519ece33bb2c57e63c40e09465dbe7637b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd91d72087f747db1abfda6bda40f4abe034fd03a"
      }
    },
    {
      "chainId": 137,
      "name": "RED MWAT",
      "symbol": "MWAT",
      "decimals": 18,
      "address": "0x2b160eea11604f81d5adbbd2dcfe5b6cd983652b",
      "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/2533.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6425c6be902d692ae2db752b3c268afadb099d3b"
      }
    },
    {
      "chainId": 137,
      "name": "Bay Area Excitement",
      "symbol": "BAE",
      "decimals": 18,
      "address": "0x3df5d4d3926d55df9c10683bf0b0bde7a2dc3851",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd3ba270f82cadabd0596d3d30233448621d561bb"
      }
    },
    {
      "chainId": 137,
      "name": "Kollect",
      "symbol": "KOL",
      "decimals": 18,
      "address": "0xe31c6667537bbc819b1fd7017ed6703cfa8f1871",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1cc30e2eac975416060ec6fe682041408420d414"
      }
    },
    {
      "chainId": 137,
      "name": "Cryptoodles Toodle Token",
      "symbol": "TODL",
      "decimals": 18,
      "address": "0xec97734ed00d65d05d10316d1641c09d1daab96f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x98933f2396dbaabf812b6e6d27da4df109c4c55f"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped XRP",
      "symbol": "WXRP",
      "decimals": 18,
      "address": "0xaef23cee6c50930bae8b4843c9b35c4c293e8906",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x39fbbabf11738317a448031930706cd3e612e1b9"
      }
    },
    {
      "chainId": 137,
      "name": "Test137",
      "symbol": "Test137",
      "decimals": 18,
      "address": "0xcbb975186a8d742561319ecf0e04a6eabeb1853c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3db715989da05c1d17441683b5b41d4510512722"
      }
    },
    {
      "chainId": 137,
      "name": "Zipmex Token",
      "symbol": "ZMT",
      "decimals": 18,
      "address": "0x7d3daeb4ccd6cf0bf95c6420cac6d10438bd5116",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xaa602de53347579f86b996d2add74bb6f79462b2"
      }
    },
    {
      "chainId": 137,
      "name": "Charge",
      "symbol": "CHARGE",
      "decimals": 18,
      "address": "0x36778b659267e74d35dda15a51a5296b3fdaf7a7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0235a4fa8374fd49bb2f01ac953f99748756f3bd"
      }
    },
    {
      "chainId": 137,
      "name": "Biconomy Token",
      "symbol": "BICO",
      "decimals": 18,
      "address": "0x91c89a94567980f0e9723b487b0bed586ee96aa7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf17e65822b568b3903685a7c9f496cf7656cc6c2"
      }
    },
    {
      "chainId": 137,
      "name": "NFTBunny",
      "symbol": "BUN",
      "decimals": 18,
      "address": "0x97116250d81a937e41b70cee60a817705dd7960a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf70209f73aa9716c6a303080687550cccd6d69f5"
      }
    },
    {
      "chainId": 137,
      "name": "Bronze TOWER Chest",
      "symbol": "TWR.BRNZ",
      "decimals": 18,
      "address": "0x3f3190628aaeea6c329559b37e60c6ab471e0a6a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0bb9a88920b6b4dd59c87afb5ee29d6e1c6c8942"
      }
    },
    {
      "chainId": 137,
      "name": "Silver TOWER Chest",
      "symbol": "TWR.SLVR",
      "decimals": 18,
      "address": "0xaa3fbde8b65130bad47a987cfb2dd27e1d9ed75e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x129f772760d569fca9a301d3ed44450eac5fc7a5"
      }
    },
    {
      "chainId": 137,
      "name": "Gold TOWER Chest",
      "symbol": "TWR.GOLD",
      "decimals": 18,
      "address": "0xb58869e737191b4b062dcb1b67c9f92d623c3006",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9b253a5655997e3896e518111f3595c0bd6fed1c"
      }
    },
    {
      "chainId": 137,
      "name": "Rai.Finance",
      "symbol": "SOFI",
      "decimals": 18,
      "address": "0x7cb810ecbfd6125e65f451cfbd8ae657dffdd6b4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb49fa25978abf9a248b8212ab4b87277682301c0"
      }
    },
    {
      "chainId": 137,
      "name": "President Brandon Token",
      "symbol": "XLVI",
      "decimals": 2,
      "address": "0x40dc7491cb56ff50a9913f7228feae802db99920",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9b3007568341382b2de292d056ff7e41870d0a0e"
      }
    },
    {
      "chainId": 137,
      "name": "Presearch",
      "symbol": "PRE",
      "decimals": 18,
      "address": "0x2492e3626b7136be7afb67483a87d716925a61e5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xec213f83defb583af3a000b1c0ada660b1902a0f"
      }
    },
    {
      "chainId": 137,
      "name": "Kitty Party Reward Token",
      "symbol": "KPT",
      "decimals": 18,
      "address": "0x7d369731e3d7f86417aa86ef4be26e309080bd2f",
      "logoURI": "https://bafkreiawezzhlphckhopkolrkxsz4mtayjz4cjxz4bgsvvkjsclqacf2be.ipfs.nftstorage.link/",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x444f20a5d578862bf84b6d14ec3ca0c8be8e555f"
      }
    },
    {
      "chainId": 137,
      "name": "Friends With Benefits Pro",
      "symbol": "FWB",
      "decimals": 18,
      "address": "0xcb016f83d242771a8cda42f9e391f18b93b6ae63",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8"
      }
    },
    {
      "chainId": 137,
      "name": "WIVA",
      "symbol": "WIVA",
      "decimals": 18,
      "address": "0x784641e51c300120a8d15bfdb3b45375d4352748",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa00055e6ee4d1f4169096ecb682f70caa8c29987"
      }
    },
    {
      "chainId": 137,
      "name": "LooksRare Token",
      "symbol": "LOOKS",
      "decimals": 18,
      "address": "0xc3d8222c2f1223df5db3a0ee845eafc3f67e76a3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf4d2888d29d722226fafa5d9b24f9164c092421e"
      }
    },
    {
      "chainId": 137,
      "name": "Chroma",
      "symbol": "CHR",
      "decimals": 6,
      "address": "0x594c984e3318e91313f881b021a0c4203ff5e59f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8a2279d4a90b6fe1c4b30fa660cc9f926797baa2"
      }
    },
    {
      "chainId": 137,
      "name": "GaugeField",
      "symbol": "GAUF",
      "decimals": 18,
      "address": "0x58171d74fc6526df600214ca18dc2ee4895c6f7b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8ce7386fe7688417885adebcbfc01a5445226b2c"
      }
    },
    {
      "chainId": 137,
      "name": "Bitcoin Stable",
      "symbol": "BTST",
      "decimals": 18,
      "address": "0x53cf566cf80e1a26bfc16d055c866a72fdcbaee7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd70804c98ebe9749e3337621eaafbe366cbb1963"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Hachiko",
      "symbol": "WHachiko",
      "decimals": 18,
      "address": "0x4a63428963e18cc2411f43d49826ed09d1bfa0da",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf5ea35fa36bd111adc3b81eef82259d35d88d305"
      }
    },
    {
      "chainId": 137,
      "name": "Convex CRV",
      "symbol": "cvxCRV",
      "decimals": 18,
      "address": "0x6220d3d80020a4023eb29a9f9e206100f7bb581e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7"
      }
    },
    {
      "chainId": 137,
      "name": "Gamma",
      "symbol": "GAMMA",
      "decimals": 18,
      "address": "0x9620330926467ed3279ffcfba8327c24625732ea",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6bea7cfef803d1e3d5f7c0103f7ded065644e197"
      }
    },
    {
      "chainId": 137,
      "name": "FLIP Token",
      "symbol": "FLP",
      "decimals": 18,
      "address": "0x22593803b4c628d8ee2537ac0ffb996ca104ad25",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3"
      }
    },
    {
      "chainId": 137,
      "name": "Flex Ungovernance Token",
      "symbol": "FLX",
      "decimals": 18,
      "address": "0x0f6d1c52ba0bb9e68601632a74d9f4d07afb555f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6243d8cea23066d098a15582d81a598b4e8391f4"
      }
    },
    {
      "chainId": 137,
      "name": "DerivaDAO",
      "symbol": "DDX",
      "decimals": 18,
      "address": "0x26f5fb1e6c8a65b3a873ff0a213fa16eff5a7828",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3a880652f47bfaa771908c07dd8673a787daed3a"
      }
    },
    {
      "chainId": 137,
      "name": "Inuyasha",
      "symbol": "Inuyasha",
      "decimals": 18,
      "address": "0xed49826b1a5a147b612ad16e27f3961d3cdce218",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5bddbfdc228e1bbdb9ef5ca1dc56b54c4d6d6621"
      }
    },
    {
      "chainId": 137,
      "name": "Guzzler",
      "symbol": "GZLR",
      "decimals": 18,
      "address": "0x6c6fcdec44990079baac5c3062e8f0dac5c4ba8e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9f4909cc95fb870bf48c128c1fdbb5f482797632"
      }
    },
    {
      "chainId": 137,
      "name": "BoneShards",
      "symbol": "BONESHARDS",
      "decimals": 18,
      "address": "0x84cf3e9f5ec08a77bbc4c437eaea411b44673cfc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6c716bdb4289283e0ad1926c47b54412bd2c257b"
      }
    },
    {
      "chainId": 137,
      "name": "Temple",
      "symbol": "TEMPLE",
      "decimals": 18,
      "address": "0xee55dd8d0ccbe835b8ef163590c9afeaace5978b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x470ebf5f030ed85fc1ed4c2d36b9dd02e77cf1b7"
      }
    },
    {
      "chainId": 137,
      "name": "Animal Concerts Token",
      "symbol": "ANML",
      "decimals": 18,
      "address": "0xecc4176b90613ed78185f01bd1e42c5640c4f09d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x38b0e3a59183814957d83df2a97492aed1f003e2"
      }
    },
    {
      "chainId": 137,
      "name": "Hotpot Funds",
      "symbol": "HPT",
      "decimals": 18,
      "address": "0xcc0ef74ae3ef3d2c0139558ba2bdafab98ade3ed",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x615d8e5e1344b36a95f6ecd8e6cda020e84dc25b"
      }
    },
    {
      "chainId": 137,
      "name": "OverOneGold",
      "symbol": "OOG",
      "decimals": 18,
      "address": "0xec24c04868da7abba292c2ba46fe77788a3f5f74",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb72a91ac402eec1977a6b2bd02d3f0aa1a261b93"
      }
    },
    {
      "chainId": 137,
      "name": "WorldChainShare",
      "symbol": "WCS",
      "decimals": 0,
      "address": "0xb72a91ac402eec1977a6b2bd02d3f0aa1a261b93",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfd2e95937a9a1b4a87b8c47fd3e9acc123314c0e"
      }
    },
    {
      "chainId": 137,
      "name": "EarnBet Token",
      "symbol": "BET",
      "decimals": 4,
      "address": "0x134257dd9a557b8083c4a196b4a259bbbd1146a6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfdd4e938bb067280a52ac4e02aaf1502cc882ba6"
      }
    },
    {
      "chainId": 137,
      "name": "\"Ethereum Push Notification Service",
      "symbol": "PUSH",
      "decimals": 18,
      "address": "0x58001cc1a9e17a20935079ab40b1b8f4fc19efd1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf418588522d5dd018b425e472991e52ebbeeeeee"
      }
    },
    {
      "chainId": 137,
      "name": "FeelGrid Token",
      "symbol": "GFEE",
      "decimals": 18,
      "address": "0x19fcab6c824570c82a3508ee0b520686cde62fcc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa2d17610a0106f3106d8ff0e2d88ab7b9e51b71b"
      }
    },
    {
      "chainId": 137,
      "name": "Screenist Token",
      "symbol": "NIS",
      "decimals": 8,
      "address": "0xfd2e95937a9a1b4a87b8c47fd3e9acc123314c0e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb316c4057202cfa2c94d01f06a2a930a4b0cd83b"
      }
    },
    {
      "chainId": 137,
      "name": "Convex FXS",
      "symbol": "cvxFXS",
      "decimals": 18,
      "address": "0xe145524abf229cce1d536623d32bf4794bb02a61",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfeef77d3f69374f66429c91d732a244f074bdf74"
      }
    },
    {
      "chainId": 137,
      "name": "GratitudeCoin",
      "symbol": "GRTFUL",
      "decimals": 18,
      "address": "0x01a8d35b2fd85dd2e73760d4e6300f1bdd47a118",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6563b5d8925ad3684bdb5923d56b0b24044eb90f"
      }
    },
    {
      "chainId": 137,
      "name": "Faith Tribe",
      "symbol": "FTRB",
      "decimals": 18,
      "address": "0xc3f56d567e7663e8932e65d85ae4be7eb5575ca7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2596825a84888e8f24b747df29e11b5dd03c81d7"
      }
    },
    {
      "chainId": 137,
      "name": "Dopex Governance Token",
      "symbol": "DPX",
      "decimals": 18,
      "address": "0x025a1405e9f917313a4e17fd365d0611cccf43e1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xeec2be5c91ae7f8a338e1e5f3b5de49d07afdc81"
      }
    },
    {
      "chainId": 137,
      "name": "Tokemak",
      "symbol": "TOKE",
      "decimals": 18,
      "address": "0xe1708abde4847b4929b70547e5197f1ba1db2250",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2e9d63788249371f1dfc918a52f8d799f4a38c94"
      }
    },
    {
      "chainId": 137,
      "name": "MarvelousNFT",
      "symbol": "MNFT",
      "decimals": 18,
      "address": "0xd281af594cbb99e8469f3591d57a0c72eb725bdb",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x33be7644c0e489b3a0c639d103392d4f3e338158"
      }
    },
    {
      "chainId": 137,
      "name": "Pupper",
      "symbol": "PUP",
      "decimals": 18,
      "address": "0x2cbf640e8f0301e86392ecf8009a034178ef2415",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x81dbc1c8e40c3095071949eda9800c2209a7279a"
      }
    },
    {
      "chainId": 137,
      "name": "Polygon Dev Wrapper",
      "symbol": "WDEV",
      "decimals": 18,
      "address": "0xa5577d1cec2583058a6bd6d5deac44797c205701",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4a5df63b0c37b38515e4ee51baf40edd420bf7d5"
      }
    },
    {
      "chainId": 137,
      "name": "The Rise Of The Aztecs - Gold",
      "symbol": "ROAG",
      "decimals": 18,
      "address": "0xe465128cd5316c4a08e879c32cc89d8f794c02e4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe465128cd5316c4a08e879c32cc89d8f794c02e4"
      }
    },
    {
      "chainId": 137,
      "name": "Swee Token",
      "symbol": "SWEE",
      "decimals": 18,
      "address": "0xd813b1500db50c755a37850ab29ca7a6ce24b25b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x83d7d7315b918bc002376f73fcd07ea0708e44ef"
      }
    },
    {
      "chainId": 137,
      "name": "YourGamify Token",
      "symbol": "GAM",
      "decimals": 18,
      "address": "0x0fdfee86a85cf73c1eced1e2f8d8a358c5c7127d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x05e4de681283bdf7c35ef7de4b87e465e80a6216"
      }
    },
    {
      "chainId": 137,
      "name": "Aquest Token",
      "symbol": "AQU",
      "decimals": 18,
      "address": "0xa68c10cb0bf5c45f223a9db23ffc1f5614388287",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7756edf05ef3c2b321a85d77b5cbf7c8a9a7c247"
      }
    },
    {
      "chainId": 137,
      "name": "EnkronosToken",
      "symbol": "ENK",
      "decimals": 18,
      "address": "0xa810289daa9235aff550fbacc68703c2ffc3cd80",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x92b914f1ddcbb1d117a718e83c9ed7eb32fc44d1"
      }
    },
    {
      "chainId": 137,
      "name": "wxBTRFLY",
      "symbol": "wxBTRFLY",
      "decimals": 18,
      "address": "0x3c7681320cc5d558480a8ff2f19a01c312535364",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x186e55c0bebd2f69348d94c4a27556d93c5bd36c"
      }
    },
    {
      "chainId": 137,
      "name": "NFT Worlds",
      "symbol": "WRLD",
      "decimals": 18,
      "address": "0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9"
      }
    },
    {
      "chainId": 137,
      "name": "Sipher Token",
      "symbol": "SIPHER",
      "decimals": 18,
      "address": "0x2eca05abf0adf9f208e973d4682503fb6ae8f942",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9f52c8ecbee10e00d9faaac5ee9ba0ff6550f511"
      }
    },
    {
      "chainId": 137,
      "name": "RAYS",
      "symbol": "RAYS",
      "decimals": 18,
      "address": "0x2d027e55b85429e9f205930a8aff6d8e6c8c3021",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6db5f284660b3129ce2e8f563bf849c59f372f61"
      }
    },
    {
      "chainId": 137,
      "name": "ERC20",
      "symbol": "ERC20",
      "decimals": 18,
      "address": "0x9300169b33a02f968e5c2a00607e0ece26248752",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea"
      }
    },
    {
      "chainId": 137,
      "name": "SWARM",
      "symbol": "SWM",
      "decimals": 18,
      "address": "0x3505f494c3f0fed0b594e01fa41dd3967645ca39",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3505f494c3f0fed0b594e01fa41dd3967645ca39"
      }
    },
    {
      "chainId": 137,
      "name": "ECX Token",
      "symbol": "ECX",
      "decimals": 18,
      "address": "0x90b9597bbfdcbc86253d27d6b9a13079c5155f9f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9c8071c501c8226ab906a68d9ef9da6e0bd3a8ba"
      }
    },
    {
      "chainId": 137,
      "name": "B.Protocol",
      "symbol": "BPRO",
      "decimals": 18,
      "address": "0x0c560bf15acccca2892053589b1805b5ef18a21f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbbbbbbb5aa847a2003fbc6b5c16df0bd1e725f61"
      }
    },
    {
      "chainId": 137,
      "name": "Arke Token",
      "symbol": "ARKES",
      "decimals": 18,
      "address": "0x0784d958ee09ff8e876a82d3c6e798912c0f0a11",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xaeab9861bd9479daaa538a2d7f57d5e1d1c86c5e"
      }
    },
    {
      "chainId": 137,
      "name": "unification.com/xfund",
      "symbol": "xFUND",
      "decimals": 9,
      "address": "0x77a3840f78e4685afaf9c416b36e6eae6122567b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x892a6f9df0147e5f079b0993f486f9aca3c87881"
      }
    },
    {
      "chainId": 137,
      "name": "FiscoCoin",
      "symbol": "FSCC",
      "decimals": 8,
      "address": "0x5ccfefd833ed1f648d227b32ff96f045a0d2fa8d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0789dbae94fb18e5789b8e4489bcb7a1adb58622"
      }
    },
    {
      "chainId": 137,
      "name": "Theranos Coin",
      "symbol": "LIZ",
      "decimals": 18,
      "address": "0x6094a3ced47335b068efba7789ea578af1434947",
      "logoURI": "https://www.theranosco.in/logo.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x102e941b77bcaa7e35d368cafe51ef8f79c8d1ef"
      }
    },
    {
      "chainId": 137,
      "name": "DePo Token",
      "symbol": "DEPO",
      "decimals": 18,
      "address": "0xe854d408482319bae8e3e3965c2eee9135e936c2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa5def515cfd373d17830e7c1de1639cb3530a112"
      }
    },
    {
      "chainId": 137,
      "name": "DegenArts.com Coin",
      "symbol": "DAC",
      "decimals": 18,
      "address": "0xbe69e683c56c2816d3eeec1183c882dd73ea5914",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8281ee37f164c0e26e6b6f87e7695baac256df07"
      }
    },
    {
      "chainId": 137,
      "name": "hyfi.token",
      "symbol": "HyFi",
      "decimals": 18,
      "address": "0x5cf6e36dcf6e6132e251ca0f5590bb7c8055bb3d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x79a1ca1768fe91867be916efa2b1630c7fc83422"
      }
    },
    {
      "chainId": 137,
      "name": "Let's Go Brandon",
      "symbol": "LGB",
      "decimals": 18,
      "address": "0xc712f8e6ffd1b6a40eb8735c8d2db2a55612268c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x21e783bcf445b515957a10e992ad3c8e9ff51288"
      }
    },
    {
      "chainId": 137,
      "name": "CXD Token",
      "symbol": "CXD",
      "decimals": 18,
      "address": "0x178745ca4ba60b22e25cf92df47f177a7db7b4f8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xefa815c439c1697dbb6b88d1434153f67697e0b8"
      }
    },
    {
      "chainId": 137,
      "name": "Zenith",
      "symbol": "ZENX",
      "decimals": 18,
      "address": "0x9cd44af7fb46a946484ebe377bb2712eabb610ad",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x67f7e5e9dbed6c52dc52d7a83ac3608ad2648e12"
      }
    },
    {
      "chainId": 137,
      "name": "YUGEN",
      "symbol": "YGN",
      "decimals": 18,
      "address": "0xa33aaa07853038943ef2c32cde73a094cf993ee0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x397e10ee5e315f69b23cb6c8a913a589b5850c80"
      }
    },
    {
      "chainId": 137,
      "name": "Gas DAO",
      "symbol": "GAS",
      "decimals": 18,
      "address": "0x7a9568ae827cd28bf8365fd51baa2dbcd7d3f465",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6bba316c48b49bd1eac44573c5c871ff02958469"
      }
    },
    {
      "chainId": 137,
      "name": "Domination Finance Token",
      "symbol": "DOM",
      "decimals": 18,
      "address": "0xc8aaee7f1deac631259b8bf2c65e71207cc53b0c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xef5fa9f3dede72ec306dfff1a7ea0bb0a2f7046f"
      }
    },
    {
      "chainId": 137,
      "name": "PlannerDAO Opportunity Index",
      "symbol": "PDAO",
      "decimals": 18,
      "address": "0x2b4fa97b84698dc1540d13d33754757bac3c8115",
      "logoURI": "https://uploads-ssl.webflow.com/6096909a9f570cf818e33cf5/61e658c8fb13b00b5a4c40c2_Untitled%20design.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa025f41f1a973e6649931f3ac96979071bda4c9f"
      }
    },
    {
      "chainId": 137,
      "name": "Anime Coin",
      "symbol": "ANME",
      "decimals": 18,
      "address": "0x60ff7b0744d5981d8a3dfb8b84716f381652508d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5c77583c1d729c94baac79579c26ff70c46145b5"
      }
    },
    {
      "chainId": 137,
      "name": "bHome",
      "symbol": "bHOME",
      "decimals": 6,
      "address": "0x58743aabed5bb772845d1a779f7ea592ac744023",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb8919522331c59f5c16bdfaa6a121a6e03a91f62"
      }
    },
    {
      "chainId": 137,
      "name": "Bankless DeFi Innovation Index",
      "symbol": "GMI",
      "decimals": 18,
      "address": "0x7fb27ee135db455de5ab1ccec66a24cbc82e712d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x47110d43175f7f2c2425e7d15792acc5817eb44f"
      }
    },
    {
      "chainId": 137,
      "name": "Plush",
      "symbol": "PLSH",
      "decimals": 18,
      "address": "0x33044d2c29686795228b89b11d2d34727b8df9bc",
      "logoURI": "https://raw.githubusercontent.com/PlushFamily/plush-design-assets/main/logos/plush/svg/plush-logo.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x26a22c97dd308657ada714d9ee0c08233b05fd48"
      }
    },
    {
      "chainId": 137,
      "name": "Diabolo",
      "symbol": "DCASH",
      "decimals": 10,
      "address": "0x74ba6a10978f643a84c0b37fcb599081079811cb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcf8f32e032f432b02393636b2092a6bef975fbf9"
      }
    },
    {
      "chainId": 137,
      "name": "Venice Coin",
      "symbol": "VENICE",
      "decimals": 18,
      "address": "0xc4b00de48c795666c2b0ad0ed4b9ac7e22fd10e1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf6d4fbc3b86811df25d829a14dae0269a3ee5462"
      }
    },
    {
      "chainId": 137,
      "name": "Spheroid",
      "symbol": "SPH",
      "decimals": 18,
      "address": "0x2c9d233914f46b88e9ae08326fa60e40ea3faa12",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa0cf46eb152656c7090e769916eb44a138aaa406"
      }
    },
    {
      "chainId": 137,
      "name": "LogiTron",
      "symbol": "LTR",
      "decimals": 18,
      "address": "0x7d29968f96d475186a479e4be99b43b8b8a20dbc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa4c7963b98838e8f958cf7b87a039249044fe2db"
      }
    },
    {
      "chainId": 137,
      "name": "XPOP Entertainment",
      "symbol": "XPOP",
      "decimals": 18,
      "address": "0x0ae1daf8329923cce587e994df500a8f1dd5fc6f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0f3a02baec9607f2b52b3ab629cbcea2047e1124"
      }
    },
    {
      "chainId": 137,
      "name": "BIOS",
      "symbol": "BIOS",
      "decimals": 18,
      "address": "0xe20d2df5041f8ed06976846470f727295cdd4d23",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xaaca86b876ca011844b5798eca7a67591a9743c8"
      }
    },
    {
      "chainId": 137,
      "name": "Simracer Coin",
      "symbol": "SRC",
      "decimals": 18,
      "address": "0xf0c3c4ac63be272a94712bccc39490a159cd0d7c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x16587cf43f044aba0165ffa00acf412631194e4b"
      }
    },
    {
      "chainId": 137,
      "name": "Nemesis Downfall",
      "symbol": "NMSIS",
      "decimals": 18,
      "address": "0x3f5b2063e500492463589b17f9ea9cf2af9771cf",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7b6bbbeac6a7f5681ec8e250b9aeb45a42bdc2cf"
      }
    },
    {
      "chainId": 137,
      "name": "Matic-PTY",
      "symbol": "MPTY",
      "decimals": 18,
      "address": "0xfa8cf47d8bc10f6f7272f2b9b0ed042e8b8e120d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x959f71f60333d05856a35cb000fb42829b1ec1c1"
      }
    },
    {
      "chainId": 137,
      "name": "MOI",
      "symbol": "MOI",
      "decimals": 18,
      "address": "0x42b171dee4a4a4c918eb53e438346df47b07c6f2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xce78fe539ef8b6c77b5726113c7b2e78f71dc6ab"
      }
    },
    {
      "chainId": 137,
      "name": "SENATE",
      "symbol": "SENATE",
      "decimals": 18,
      "address": "0x18428bb593f8a1ec3fb80418e4844439b03f5001",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x34be5b8c30ee4fde069dc878989686abe9884470"
      }
    },
    {
      "chainId": 137,
      "name": "Vader",
      "symbol": "VADER",
      "decimals": 18,
      "address": "0x13e5f8e18376d51203156a47a809254c717cf9b7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2602278ee1882889b946eb11dc0e810075650983"
      }
    },
    {
      "chainId": 137,
      "name": "Qawalla Token",
      "symbol": "QWLA",
      "decimals": 18,
      "address": "0x4fafad147c8cd0e52f83830484d164e960bdc6c3",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1d96fd43ee07aa79f8fd003cbdf404fb5ce41ad2"
      }
    },
    {
      "chainId": 137,
      "name": "ASYAGRO",
      "symbol": "ASY",
      "decimals": 18,
      "address": "0x7e4413ed294a9fb86d6534edbcc46355a83c1ef7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x017b584acfd16d767541ae9e80cdc702f4527b0b"
      }
    },
    {
      "chainId": 137,
      "name": "SOS",
      "symbol": "SOS",
      "decimals": 18,
      "address": "0x8c059898ca6274750b6bf1cf38f2848347c490cc",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3b484b82567a09e2588a13d54d032153f0c0aee0"
      }
    },
    {
      "chainId": 137,
      "name": "Polylend Token",
      "symbol": "PCOIN",
      "decimals": 18,
      "address": "0x86589a8fa4945657a41ed013633ff26ca9a26a2b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x12393ba26e2c5dafeb81c803d0be7beb50971cc1"
      }
    },
    {
      "chainId": 137,
      "name": "LEEDO Project ERC20",
      "symbol": "LEEDO",
      "decimals": 18,
      "address": "0x94576423d85b47575bba515a1f328a265e6318e6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3eede143adb9a80c6a44c63dad76269d33e2c8d1"
      }
    },
    {
      "chainId": 137,
      "name": "microETH",
      "symbol": "uETH",
      "decimals": 18,
      "address": "0x40eebe8541ac5a232e5897226aa3491677bfa9dd",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbb7be7cc5abb65d3a29d7982236481ddf4f10b09"
      }
    },
    {
      "chainId": 137,
      "name": "Black Abyss",
      "symbol": "BLYS",
      "decimals": 18,
      "address": "0x0142666baa520bc49b32ad44c505421346c69164",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2e3dd59619efa2afa811236235648f0607e0ee66"
      }
    },
    {
      "chainId": 137,
      "name": "DogeGF",
      "symbol": "DOGEGF",
      "decimals": 18,
      "address": "0x0e7252706393470ffb0629da2caa39fc9340f2d4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfb130d93e49dca13264344966a611dc79a456bc5"
      }
    },
    {
      "chainId": 137,
      "name": "Trazable",
      "symbol": "TRZ",
      "decimals": 18,
      "address": "0x9d0be2730a8af6061f058ce2c951d52e4f886f18",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x394a16744dcd805bb0ca7252e70691f0dcac56aa"
      }
    },
    {
      "chainId": 137,
      "name": "renDGB",
      "symbol": "renDGB",
      "decimals": 8,
      "address": "0x6d54d243f144e16b6489a295f100146e11286ec0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe3cb486f3f5c639e98ccbaf57d95369375687f80"
      }
    },
    {
      "chainId": 137,
      "name": "ScallopX",
      "symbol": "SCLP",
      "decimals": 18,
      "address": "0x2fc711518aae7c87d7002566c5d43b0e5d2b1932",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3f6d1649a1366b0e82173d33e365953f9f1cc84c"
      }
    },
    {
      "chainId": 137,
      "name": "Amasa Token",
      "symbol": "AMAS",
      "decimals": 18,
      "address": "0xc4d6d290bf5f28278fe30f5e28b0a482eac330f0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x65a8fba02f641a13bb7b01d5e1129b0521004f52"
      }
    },
    {
      "chainId": 137,
      "name": "TNodeOrange",
      "symbol": "TNO",
      "decimals": 8,
      "address": "0x2ea3e8f750cbc55c293e6008e8b5a654ebbd0600",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x992d6ef73506a28d084dd092722f686fb5570e38"
      }
    },
    {
      "chainId": 137,
      "name": "Niftify",
      "symbol": "NIFT",
      "decimals": 18,
      "address": "0x4a1d542b52a95ad01ddc70c2e7df0c7bbaadc56f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4a1d542b52a95ad01ddc70c2e7df0c7bbaadc56f"
      }
    },
    {
      "chainId": 137,
      "name": "Mondo Community Coin",
      "symbol": "MNDCC",
      "decimals": 18,
      "address": "0x78c192f6b1260d53d7ff871d267364f334897f08",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcdb9d30a3ba48cdfcb0ecbe19317e6cf783672f1"
      }
    },
    {
      "chainId": 137,
      "name": "Rotharium",
      "symbol": "RTH",
      "decimals": 18,
      "address": "0xb9abdd78a153b8b59d09dfc196254718145f3a20",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3fd8f39a962efda04956981c31ab89fab5fb8bc8"
      }
    },
    {
      "chainId": 137,
      "name": "Chase",
      "symbol": "Chase",
      "decimals": 6,
      "address": "0x6484117fbdc339c99c973bde96650039f3469c09",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x77b9b390f88b5eafd7ceb8d233535cfd8e6b62a2"
      }
    },
    {
      "chainId": 137,
      "name": "Burp",
      "symbol": "BURP",
      "decimals": 18,
      "address": "0x538d47d142f6993038a667e9d6210d3735749b36",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x33f391f4c4fe802b70b77ae37670037a92114a7c"
      }
    },
    {
      "chainId": 137,
      "name": "CannaSwap",
      "symbol": "NOID",
      "decimals": 18,
      "address": "0x80387ff8b58c82fbaf385a3380d4627234763659",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x42624903735dc6396643200242f7f7b6c7b619ea"
      }
    },
    {
      "chainId": 137,
      "name": "ParaSwap",
      "symbol": "PSP",
      "decimals": 18,
      "address": "0x42d61d766b85431666b39b89c43011f24451bff6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcafe001067cdef266afb7eb5a286dcfd277f3de5"
      }
    },
    {
      "chainId": 137,
      "name": "Terrapass Coin",
      "symbol": "TPSC",
      "decimals": 18,
      "address": "0x0a2a95978ce57395dbf33696d34e222e1eacde4e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x88d8da2a8d0fa5b1f4e38030ac486ade0afa2798"
      }
    },
    {
      "chainId": 137,
      "name": "Outernet Players Token",
      "symbol": "OPT",
      "decimals": 18,
      "address": "0x8338bd2dbcc83f1f0190be068779aca296380209",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0FaB50cfEf9919cA35D0831b376d4d96b033230e"
      }
    },
    {
      "chainId": 137,
      "name": "MetaBrands",
      "symbol": "MAGE",
      "decimals": 18,
      "address": "0xb044d04c406952c0927579e153c49c222ef2c870",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd52aae39a2b5cc7812f7b9450ebb61dfef702b15"
      }
    },
    {
      "chainId": 137,
      "name": "Neighbourhoods Token",
      "symbol": "NHT",
      "decimals": 18,
      "address": "0x84342e932797fc62814189f01f0fb05f52519708",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x84342e932797FC62814189f01F0Fb05F52519708"
      }
    },
    {
      "chainId": 137,
      "name": "GP",
      "symbol": "GP",
      "decimals": 18,
      "address": "0xD10bCCDd789fa11239D903FeA93DB2C8c92CfbE7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x38Ec27c6F05a169e7eD03132bcA7d0cfeE93C2C5"
      }
    },
    {
      "chainId": 137,
      "name": "Whales Game Islands",
      "symbol": "ISLAND",
      "decimals": 18,
      "address": "0x96f57e3f4f1e11b8c5fdc98ab45f5843ab66821f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xE0Be84ca5c7bEaA2051057f02449ECB0495Bf50e"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Whales",
      "symbol": "wWH",
      "decimals": 18,
      "address": "0xca69c315b644a45a35b25fe23fbaf6620599a063",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xD0c99622c3f0C09b4B08f5f13Dd28BeE13f6E3c7"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Fishermen",
      "symbol": "wFM",
      "decimals": 18,
      "address": "0xdeba42d0a9da63697eaf745b2863393e02505a3a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcE113e6e2386197917D70d58DDdE148bfA4F58Ca"
      }
    },
    {
      "chainId": 137,
      "name": "Swarm Markets",
      "symbol": "SMT",
      "decimals": 18,
      "address": "0xE631DABeF60c37a37d70d3B4f812871df663226f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xB17548c7B510427baAc4e267BEa62e800b247173"
      }
    },
    {
      "chainId": 137,
      "name": "Mobilum Token",
      "symbol": "MBM",
      "decimals": 18,
      "address": "0x5A98291b9A7643448f5366Fe4a4918f7cb566912",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x281F5B914b0D589F8193cd5e711c6920874E00C8"
      }
    },
    {
      "chainId": 137,
      "name": "Kounotori",
      "symbol": "KTO",
      "decimals": 9,
      "address": "0xbf59a84274f57C6ab3a5F3aD4864dE0dF3faff4E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x616ef40d55c0d2c506f4d6873bda8090b79bf8fc"
      }
    },
    {
      "chainId": 137,
      "name": "EVE Exchange",
      "symbol": "EVE",
      "decimals": 18,
      "address": "0xaE29AC47A9E3b0a52840E547aDf74B912999F7fc",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0f628641d0ea1ecab9341e58d4982c0018a51c6b"
      }
    },
    {
      "chainId": 137,
      "name": "Searching for Satoshi",
      "symbol": "S4S",
      "decimals": 18,
      "address": "0x7bfC8637B8fDb2b13291639bA65C25A22A9e59f0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8091CBDF4bF6D449b0fCd3c797d4990E4229A820"
      }
    },
    {
      "chainId": 137,
      "name": "MYCE PLATFORM",
      "symbol": "MYCE",
      "decimals": 18,
      "address": "0xDcC1F05C5Ad40972ce9FBaF2841cbedE6f933b07",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xE9966C1184f8552Fcb16F65addba9Dd08fe8f4EA"
      }
    },
    {
      "chainId": 137,
      "name": "GenomesDAO Governance",
      "symbol": "GNOME",
      "decimals": 18,
      "address": "0x6E8a8726639d12935b3219892155520bdC57366B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xE58Eb0Bb13a71d7B95c4C3cBE6Cb3DBb08f9cBFB"
      }
    },
    {
      "chainId": 137,
      "name": "GenomesDAO",
      "symbol": "GENE",
      "decimals": 18,
      "address": "0x34667ED7C36cBBbF2d5d5c5c8d6Eb76a094EDb9F",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x21413c119b0C11C5d96aE1bD328917bC5C8ED67E"
      }
    },
    {
      "chainId": 137,
      "name": "Nitro",
      "symbol": "NITRO",
      "decimals": 18,
      "address": "0x695FC8B80F344411F34bDbCb4E621aA69AdA384b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0335A7610D817aeCA1bEBbEfbd392ecC2eD587B8"
      }
    },
    {
      "chainId": 137,
      "name": "PlannerDAO",
      "symbol": "PLAN",
      "decimals": 18,
      "address": "0xaf28b7702e239e7ed107b6e036851f56e0415188",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8D7acC5d07818f187ab70b6033c690FD67C96D98"
      }
    },
    {
      "chainId": 137,
      "name": "Daniel Token 2",
      "symbol": "DAN2",
      "decimals": 6,
      "address": "0xa35816AD75206102812363541dfb9C88E8bB1A8f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x55E9d73f7bF359Ab7C2e6F441f425E212aD615e8"
      }
    },
    {
      "chainId": 137,
      "name": "Materia",
      "symbol": "GIL",
      "decimals": 18,
      "address": "0xBE6159775a9050E5c4CBF81718390818702bf801",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x020810d775fc019480cd56ecb960389d3477039d"
      }
    },
    {
      "chainId": 137,
      "name": "PYLNT",
      "symbol": "PYLNT",
      "decimals": 18,
      "address": "0xE411D55Fb9D8d9d2A0b4161F08AdF768b23A584B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xD8924385CD46e6AF6F377871C732BDe2F8e9dD18"
      }
    },
    {
      "chainId": 137,
      "name": "Wurstcoin",
      "symbol": "WURST",
      "decimals": 18,
      "address": "0xd71951630e7afb497ee6F9d9B4510a8614869A59",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x67e74603df95cabbebc6795478c2402a01ea1517"
      }
    },
    {
      "chainId": 137,
      "name": "MetaWorld",
      "symbol": "METW",
      "decimals": 18,
      "address": "0x1B042246d67C44a745dc8BaD735c84059A1Fa0a7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x18cdc8ecad3DA54AcA6bE823B1eA29F514d4856d"
      }
    },
    {
      "chainId": 137,
      "name": "Metaverse",
      "symbol": "MV",
      "decimals": 18,
      "address": "0xA3c322Ad15218fBFAEd26bA7f616249f7705D945",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xAE788F80F2756A86aa2F410C651F2aF83639B95b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mv.svg"
    },
    {
      "chainId": 137,
      "name": "NFTWiki Token",
      "symbol": "NFTK",
      "decimals": 18,
      "address": "0x514267D21BcB99b43657eF4Ed80b26E18ca9E8f0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xCCb4dFdb4f95697ab5c389185f0Ba9042A78576F"
      }
    },
    {
      "chainId": 137,
      "name": "Veritaseum",
      "symbol": "VERI",
      "decimals": 18,
      "address": "0xA8FC7CD1ea3A65574368fAddB4B1190aa3Fd6560",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/veri.svg"
    },
    {
      "chainId": 137,
      "name": "ThunderDAO",
      "symbol": "TDAO",
      "decimals": 18,
      "address": "0x6C3Ec80Fae6F067cC5F0222eFd957101b626291e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x13bb3586478f7725b0e7b404c97939cc2cbc530d"
      }
    },
    {
      "chainId": 137,
      "name": "Vufi Shares",
      "symbol": "VUFIS",
      "decimals": 18,
      "address": "0xf0533E7Ef9d9aA5d5554be649e60315E528Ce3a7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x36417d9f5a927b3af2f03fe8c8d4fde715601b83"
      }
    },
    {
      "chainId": 137,
      "name": "Degen$ Farm Bags",
      "symbol": "BAGZ",
      "decimals": 0,
      "address": "0x345DF42b1E4963d70909E09935b9a1f7ef832114",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xBABA0d970e735c7E48bba07C1164c4e0449AE9b8"
      }
    },
    {
      "chainId": 137,
      "name": "Genesis Mechanism",
      "symbol": "GeM",
      "decimals": 18,
      "address": "0x2f911F789d9D599B34D403a2cFc0C5B3f7E8cE7a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xebc27d9bd8ac268934784dcdf1eaa10dfaf97a9f"
      }
    },
    {
      "chainId": 137,
      "name": "CosplayToken",
      "symbol": "COT",
      "decimals": 18,
      "address": "0x8d520c8E66091cfD6743fe37Fbe3A09505616C4b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5cac718a3ae330d361e39244bf9e67ab17514ce8"
      }
    },
    {
      "chainId": 137,
      "name": "PAWER Network",
      "symbol": "PAWR",
      "decimals": 18,
      "address": "0xd9ce16aC93B783e069353a57220bf0E9C5315daf",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7693A7D03D35808b75742D33d6fbB000359E693c"
      }
    },
    {
      "chainId": 137,
      "name": "BitDegree Token",
      "symbol": "BDG",
      "decimals": 18,
      "address": "0x293b3B56cCf37FCE9bd4d8A3E276ff6c24Bc72B4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1961B3331969eD52770751fC718ef530838b6dEE"
      }
    },
    {
      "chainId": 137,
      "name": "Smoke",
      "symbol": "SMOKE",
      "decimals": 18,
      "address": "0xc54a5024b6c5e565772729b783021f60a8f9139c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x67725FB3751c257920a88c543ba9b4BA8CfbfA5D"
      }
    },
    {
      "chainId": 137,
      "name": "Ember NFT Index",
      "symbol": "ENFTI",
      "decimals": 18,
      "address": "0xE50C778924604B2AA3e66Fb5C2D378D5FC15FcD5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3c6591ceDD3d60C022f6dA4F83B36d23A633b512"
      }
    },
    {
      "chainId": 137,
      "name": "GAMESTA",
      "symbol": "GSG",
      "decimals": 18,
      "address": "0x778949e707A0eb6c32ca20b1F9E0Db9685d18024",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x55cd00764e85aa3b6b34130c983fff9eb458250c"
      }
    },
    {
      "chainId": 137,
      "name": "DecentraWeb",
      "symbol": "DWEB",
      "decimals": 18,
      "address": "0x8839e639F210B80ffea73AedF51baed8DAc04499",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xE7f58A92476056627f9FdB92286778aBd83b285F"
      }
    },
    {
      "chainId": 137,
      "name": "Limelight",
      "symbol": "LMLT",
      "decimals": 18,
      "address": "0x1F435c17d7Ff631218827F9BA43a696650a9D512",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5eA1dd3f3F3685C32D771B2E89A70d9c5cCf8A0C"
      }
    },
    {
      "chainId": 137,
      "name": "dHealth",
      "symbol": "DHP",
      "decimals": 18,
      "address": "0x194Dd5b6b7225C9d2F2e2b2aF7a4FfC8e77fd479",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc40F23A3E9613E012944f7957edCe97899Fa920d"
      }
    },
    {
      "chainId": 137,
      "name": "ROTTSCHILD.com",
      "symbol": "ROTTS",
      "decimals": 9,
      "address": "0x510379859D138d1854E925C7472674F4A827296a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfb40e79e56cc7d406707b66c4fd175e07eb2ae3c"
      }
    },
    {
      "chainId": 137,
      "name": "P125 Token",
      "symbol": "P125",
      "decimals": 18,
      "address": "0x83000597e8420aD7e9EDD410b2883Df1b83823cF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xA9033952ac045168243A1A50c889516445247618"
      }
    },
    {
      "chainId": 137,
      "name": "Shiblon Moon",
      "symbol": "SHIBLONMOON",
      "decimals": 18,
      "address": "0xbCC4a4dc490500161A4d91bC1ccE5929224EC385",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2cCEa629BA92490136B2206379809737C57AC409"
      }
    },
    {
      "chainId": 137,
      "name": "Ooki Token",
      "symbol": "OOKI",
      "decimals": 18,
      "address": "0xCd150B1F528F326f5194c012f32Eb30135C7C2c9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0De05F6447ab4D22c8827449EE4bA2D5C288379B"
      }
    },
    {
      "chainId": 137,
      "name": "Moss Carbon Credit",
      "symbol": "MCO2",
      "decimals": 18,
      "address": "0xaa7dbd1598251f856c12f63557a4c4397c253cea",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfc98e825a2264d890f9a1e68ed50e1526abccacd"
      }
    },
    {
      "chainId": 137,
      "name": "Element 69",
      "symbol": "EL69",
      "decimals": 18,
      "address": "0xAC05696A96fbF947200876ABb8e71b9e18Ef3D6A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa1fF4Ee88b53124b73eE16b315F61623CDacc987"
      }
    },
    {
      "chainId": 137,
      "name": "Team Clean Seas",
      "symbol": "TCS",
      "decimals": 9,
      "address": "0xCDCB83ff608E7DEcb66ff597dA9d438F8896BdB1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x592f77f18893c8657cbf7cfc93e3f7cf7b02662d"
      }
    },
    {
      "chainId": 137,
      "name": "Auditchain",
      "symbol": "AUDT",
      "decimals": 18,
      "address": "0x91c5A5488c0dEcde1Eacd8a4F10e0942fb925067",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xB90cb79B72EB10c39CbDF86e50B1C89F6a235f2e"
      }
    },
    {
      "chainId": 137,
      "name": "Krill Token",
      "symbol": "KRILL",
      "decimals": 18,
      "address": "0xDa9f97B9dE8509938c65DB0F0CB0ff9Ea425E9a0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf59BfEED034092E399Cc43Ff79EdAb15e2e18735"
      }
    },
    {
      "chainId": 137,
      "name": "Polygen",
      "symbol": "PGEN",
      "decimals": 18,
      "address": "0x01d35cbC2070a3B76693Ce2b6364Eae24eb88591",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf6719e1A8fcBB1B9c290019E37e004966A8916C9"
      }
    },
    {
      "chainId": 137,
      "name": "Sunder Goverance Token",
      "symbol": "Sunder",
      "decimals": 18,
      "address": "0xaE36Df61954A67c88ea8e0b8a9B0aF378abB013b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbDbf245c690d54b67C6e610A28486A2C6dE08bE6"
      }
    },
    {
      "chainId": 137,
      "name": "Gold Fever Native Gold",
      "symbol": "NGL",
      "decimals": 18,
      "address": "0xF95c5f961CF676ae927DfF05342a0741b99E3564",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2653891204F463fb2a2F4f412564b19e955166aE"
      }
    },
    {
      "chainId": 137,
      "name": "Phantasma Stake",
      "symbol": "SOUL",
      "decimals": 8,
      "address": "0xE79378Aaf2386452960a365fB8D720AC888c9614",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x79c75e2e8720b39e258f41c37cc4f309e0b0ff80"
      }
    },
    {
      "chainId": 137,
      "name": "Forsan Coin",
      "symbol": "FORS",
      "decimals": 18,
      "address": "0x56a25375e6930114Fe0B428df5CCDc753db99898",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa5Bd86e212097F95415AfF92B7F0752BAe39F7e5"
      }
    },
    {
      "chainId": 137,
      "name": "$",
      "symbol": "$",
      "decimals": 18,
      "address": "0x5B3dcB07244dCCBd22A42080AE8b35E7a7593ED3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xDd3892eacc10c3E6A56EB29Fa0cdC18C4E4bF9Ae"
      }
    },
    {
      "chainId": 137,
      "name": "Data Transaction Token",
      "symbol": "XD",
      "decimals": 18,
      "address": "0x9a0e65942615DE1eb5f5dD0CCB89090719231410",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x24dcc881e7dd730546834452f21872d5cb4b5293"
      }
    },
    {
      "chainId": 137,
      "name": "Agrolot Token",
      "symbol": "AGLT",
      "decimals": 18,
      "address": "0x136B7098a3FE98cbB8Eb00f5cfed393E96E317E3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x72c9Fb7ED19D3ce51cea5C56B3e023cd918baaDf"
      }
    },
    {
      "chainId": 137,
      "name": "UniX Gaming",
      "symbol": "UNIX",
      "decimals": 18,
      "address": "0x8C4476DFEC8e7EEdf2DE3e9E9461B7c14C828d46",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xddd6a0ecc3c6f6c102e5ea3d8af7b801d1a77ac8"
      }
    },
    {
      "chainId": 137,
      "name": "Fodl",
      "symbol": "FODL",
      "decimals": 18,
      "address": "0x5314bA045a459f63906Aa7C76d9F337DcB7d6995",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3"
      }
    },
    {
      "chainId": 137,
      "name": "MonoX Token",
      "symbol": "MONO",
      "decimals": 18,
      "address": "0x05323017c00874198Cf1b0832922074BeEA0db83",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2920f7d6134f4669343e70122cA9b8f19Ef8fa5D"
      }
    },
    {
      "chainId": 137,
      "name": "KOROMARU",
      "symbol": "KOROMARU",
      "decimals": 9,
      "address": "0x0b80BFcfd006c446aF4157b87aA7D7F13c8F549A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd0d42005e7b3c0812b1268f0e5faf97ff2423651"
      }
    },
    {
      "chainId": 137,
      "name": "Bluemel",
      "symbol": "BLUEMEL",
      "decimals": 18,
      "address": "0x1F7826D9562F42e745823BdBB690902E00D995f6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe921401d18ed1ea4d64169d1576c32f9a7439694"
      }
    },
    {
      "chainId": 137,
      "name": "KwikTrust",
      "symbol": "KTX",
      "decimals": 18,
      "address": "0x60E6895184448f3e8EF509D083e3cC3AC31F82Fd",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6CA8F7f73599834FeE845EF884562bb5479318a0"
      }
    },
    {
      "chainId": 137,
      "name": "TattooMoney",
      "symbol": "TAT2",
      "decimals": 18,
      "address": "0x2596A8B90D39EB89d5668ca5B6deE54E9ae3d4C0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb487d0328b109e302b9d817b6f46cbd738ea08c2"
      }
    },
    {
      "chainId": 137,
      "name": "Signata",
      "symbol": "SATA",
      "decimals": 18,
      "address": "0x2E0f9A07d0ef445dB402d1c656ea6b71af81cb65",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3ebb4A4e91Ad83BE51F8d596533818b246F4bEe1"
      }
    },
    {
      "chainId": 137,
      "name": "Mechanium",
      "symbol": "$MECHA",
      "decimals": 18,
      "address": "0xaCd4E2d936Be9B16c01848A3742A34B3D5A5bDfa",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc5bcc8ba3f33ab0d64f3473e861bdc0685b19ef5"
      }
    },
    {
      "chainId": 137,
      "name": "BeverageBar",
      "symbol": "xDRINK",
      "decimals": 18,
      "address": "0x5a7aAdDD5F1d343fA4248c3e2A02d8a18626b9d0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf6344740921c858229c7b39be530d6cb2b704f7a"
      }
    },
    {
      "chainId": 137,
      "name": "ANGLE",
      "symbol": "ANGLE",
      "decimals": 18,
      "address": "0x900F717EA076E1E7a484ad9DD2dB81CEEc60eBF1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x31429d1856ad1377a8a0079410b297e1a9e214c2"
      }
    },
    {
      "chainId": 137,
      "name": "agEUR",
      "symbol": "agEUR",
      "decimals": 18,
      "address": "0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1a7e4e63778b4f12a199c062f3efdd288afcbce8"
      }
    },
    {
      "chainId": 137,
      "name": "Decentral Games Governance",
      "symbol": "xDG",
      "decimals": 18,
      "address": "0xc6480Da81151B2277761024599E8Db2Ad4C388C8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4f81c790581b240a5c948afd173620ecc8c71c8d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/xdg.svg"
    },
    {
      "chainId": 137,
      "name": "DoubleDice Token",
      "symbol": "DODI",
      "decimals": 18,
      "address": "0x5B03aC408938C97e50db3bC5675d182606A01377",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4E08F03079c5CD3083eA331Ec61bCC87538B7665"
      }
    },
    {
      "chainId": 137,
      "name": "Decentral Games",
      "symbol": "DG",
      "decimals": 18,
      "address": "0xef938b6da8576a896f6E0321ef80996F4890f9c4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4b520c812e8430659fc9f12f6d0c39026c83588d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dg.svg"
    },
    {
      "chainId": 137,
      "name": "AWACOIN",
      "symbol": "AWA",
      "decimals": 18,
      "address": "0xb915894B10e0C30B8A9c8bf2a0c521961bb18593",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdeccdc7fc3f0959e9e384db33e87086208701e2c"
      }
    },
    {
      "chainId": 137,
      "name": "Hub Token",
      "symbol": "HUB",
      "decimals": 18,
      "address": "0xA4f40Bd861431186aA0648B9c57aF0313d2d2f57",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xba358B6f5b4c0215650444B8C30D870B55050D2D"
      }
    },
    {
      "chainId": 137,
      "name": "Shibnobi",
      "symbol": "SHINJA",
      "decimals": 9,
      "address": "0x184BC6A6040F139027e9659dC2b87BFcfde4a39e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xab167e816e4d76089119900e941befdfa37d6b32"
      }
    },
    {
      "chainId": 137,
      "name": "MultiChainCapital",
      "symbol": "MCC",
      "decimals": 9,
      "address": "0xE499140A7362927bB23889c4D60A6B9b3347F8ca",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1a7981d87e3b6a95c1516eb820e223fe979896b3"
      }
    },
    {
      "chainId": 137,
      "name": "#The Wanderers — Down The Wormhole",
      "symbol": "WDW",
      "decimals": 18,
      "address": "0x822c03792acd5274237B031EC8e48456f48E1211",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf021ed0785812c1b74365b7ee4395cd1b274d95b"
      }
    },
    {
      "chainId": 137,
      "name": "Reach Four the Stars",
      "symbol": "R4S",
      "decimals": 18,
      "address": "0x1B0cC1A5D296fda5971d582dbb87B07fB120B92c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8c930c8574f9c3a6f1252e5a2e912dc69b463a0c"
      }
    },
    {
      "chainId": 137,
      "name": "X Guardian Marks the Spot",
      "symbol": "XGMTS",
      "decimals": 18,
      "address": "0xD53cb20f90187636bbA1b08B4f96a018a141dE63",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2950f509ce6db2294e9a7f61b1e3d96bcd5b1138"
      }
    },
    {
      "chainId": 137,
      "name": "Sniper Squad 17",
      "symbol": "SS17",
      "decimals": 18,
      "address": "0xC226374dd015445084A2b4c348Bde4aFfd950Ad9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc795ed2ab78ad1c451af4a6db87d878760b9072e"
      }
    },
    {
      "chainId": 137,
      "name": "Sniper Squad 16",
      "symbol": "SS16",
      "decimals": 18,
      "address": "0xaEF7E3Da2bb3438D8540A6AbE27095EA89f3B3B0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa958f28358771ac95a570d2921cf410f51d176c2"
      }
    },
    {
      "chainId": 137,
      "name": "MAX Token",
      "symbol": "MAX",
      "decimals": 18,
      "address": "0x9634aF3af2f392505369fCFe56691790CEa345B4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe7976c4efc60d9f4c200cc1bcef1a1e3b02c73e7"
      }
    },
    {
      "chainId": 137,
      "name": "BBGO",
      "symbol": "BBG",
      "decimals": 18,
      "address": "0x3Afe98235d680e8d7A52e1458a59D60f45F935C0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3Afe98235d680e8d7A52e1458a59D60f45F935C0"
      }
    },
    {
      "chainId": 137,
      "name": "VMart Token",
      "symbol": "VMC",
      "decimals": 18,
      "address": "0x2694e54166a1Aa849131781273Cd3bf214309642",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x715c218A882bb4fa3627D4CE15a6324716D3CDFA"
      }
    },
    {
      "chainId": 137,
      "name": "LUXY",
      "symbol": "LUXY",
      "decimals": 18,
      "address": "0xD4945a3D0De9923035521687D4bf18cC9B0c7c2A",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5e0fDcDb61Ec98D5Ed4E23b3d539Fb3722C940A6"
      }
    },
    {
      "chainId": 137,
      "name": "Simarglum",
      "symbol": "GLUM",
      "decimals": 8,
      "address": "0x481791e5c37cF831Ed03742C7C5B5cFFA83A27D4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xddbe9cc1dfd7e305df1f70b69590ada38878024f"
      }
    },
    {
      "chainId": 137,
      "name": "Request Token",
      "symbol": "REQ",
      "decimals": 18,
      "address": "0xAdf2F2Ed91755eA3f4bcC9107a494879f633ae7C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8f8221afbb33998d8584a2b05749ba73c37a938a"
      }
    },
    {
      "chainId": 137,
      "name": "Luffy Inu",
      "symbol": "LUFFY",
      "decimals": 9,
      "address": "0x8449d85Fc7989Ad7F34F8dA986F512aEa9E6920E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc1bfccd4c29813ede019d00d2179eea838a67703"
      }
    },
    {
      "chainId": 137,
      "name": "PROTEIN",
      "symbol": "PRTN",
      "decimals": 18,
      "address": "0x67561239d0fd07A37B5621ae7C2b2F1413491033",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfec2fa7edd428171103e8f81911af5be9d31eeba"
      }
    },
    {
      "chainId": 137,
      "name": "Unbox.Art",
      "symbol": "UBA",
      "decimals": 18,
      "address": "0xE24C8E7c61d4545eB69f13Dc9b1f40Cff679bA07",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x817e2aDdceAA4907623666A7800b1553Ca21192d"
      }
    },
    {
      "chainId": 137,
      "name": "I Bet You",
      "symbol": "IBY",
      "decimals": 18,
      "address": "0x059eb35959B5Ad5A37Ce9198726CAB84824fd690",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6a68de599e8e0b1856e322ce5bd11c5c3c79712b"
      }
    },
    {
      "chainId": 137,
      "name": "Lattice Token",
      "symbol": "LTX",
      "decimals": 8,
      "address": "0x641675a002021f645117287c92A20059b6A347F9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa393473d64d2F9F026B60b6Df7859A689715d092"
      }
    },
    {
      "chainId": 137,
      "name": "Verse",
      "symbol": "VERSE",
      "decimals": 18,
      "address": "0xa67C1CC2ADF4969667980811b65A456D204D7Ce5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe18841d7a75866688e291703bde66c3378bd74a3"
      }
    },
    {
      "chainId": 137,
      "name": "Aidi Inu",
      "symbol": "AIDI",
      "decimals": 9,
      "address": "0x5BA499a413E6AfCAFc7a79A73AaCE4bd94a8a33A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xda1e53e088023fe4d1dc5a418581748f52cbd1b8"
      }
    },
    {
      "chainId": 137,
      "name": "Tuo Luo BlockChain",
      "symbol": "TLBC",
      "decimals": 2,
      "address": "0x3FC98379bB51bBefDfb882bE2Bb928D118a1990A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3fca60965bb0035d38b95cb528ef231ed8905911"
      }
    },
    {
      "chainId": 137,
      "name": "TLB",
      "symbol": "TLB",
      "decimals": 8,
      "address": "0xd4744644449c47FE07b110B53aB0c5415b2Ec346",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x317aB43DE10c70802De1A5e79E7C6A745520ceB0"
      }
    },
    {
      "chainId": 137,
      "name": "Refraction",
      "symbol": "REFRACT",
      "decimals": 18,
      "address": "0x1c483C609fa8BB24a27d97752876a9Fb9FBDB749",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc6e86dad13ece397f23c6ab3ed85f894daab6884"
      }
    },
    {
      "chainId": 137,
      "name": "Sarcophagus",
      "symbol": "SARCO",
      "decimals": 18,
      "address": "0x80Ae3B3847E4e8Bd27A389f7686486CAC9C3f3e8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a"
      }
    },
    {
      "chainId": 137,
      "name": "Follow",
      "symbol": "FOLO",
      "decimals": 18,
      "address": "0xeF205F99bD869e74b16050199d54327a0eCd343D",
      "logoURI": "https://etherscan.io/token/images/alphaimpact_32.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb2a63a5dd36c91ec2da59b188ff047f66fac122a"
      }
    },
    {
      "chainId": 137,
      "name": "SHAMAN KING INU",
      "symbol": "SHAMAN",
      "decimals": 9,
      "address": "0x353bb01c07e5DcA9819bf7b004c2a3465D29851f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf98e38c3f287304a1f2d4879e741d2bf55474e84"
      }
    },
    {
      "chainId": 137,
      "name": "Hokage Inu",
      "symbol": "HOKAGE",
      "decimals": 9,
      "address": "0x83CC0e81467ED905DfF9b3621f570D01906AcBd5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1a90bb2a0024b35b54c8b8c6b5313c32470c134b"
      }
    },
    {
      "chainId": 137,
      "name": "EtherDoge",
      "symbol": "EDOGE",
      "decimals": 18,
      "address": "0x303B2d090E5aE3A9AAFAe3551F2fF3837820c296",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8a7b7b9b2f7d0c63f66171721339705a6188a7d5"
      }
    },
    {
      "chainId": 137,
      "name": "Edge",
      "symbol": "EDGE",
      "decimals": 18,
      "address": "0x439207292E5452F82ABeD7D5b74089e2b46C85c5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4ec1b60b96193a64acae44778e51f7bff2007831"
      }
    },
    {
      "chainId": 137,
      "name": "Safe Shield",
      "symbol": "SFSHLD",
      "decimals": 9,
      "address": "0xB08AdF932641B1E99250150ff3287f45B30685F0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x11a605d7e12b64d713e93c487277d819a1d14b99"
      }
    },
    {
      "chainId": 137,
      "name": "DeFI Trade Token",
      "symbol": "DTT",
      "decimals": 18,
      "address": "0x1214D61f3dAA45Af4a5f301075C58fBE57c8E6d7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1214d61f3daa45af4a5f301075c58fbe57c8e6d7"
      }
    },
    {
      "chainId": 137,
      "name": "Vault Hill City",
      "symbol": "VHC",
      "decimals": 18,
      "address": "0x51b5619F5180e333d18b6310C8D540AEa43a0371",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x60E14651d0Df26D114E5B55be970B76eC9f3eF74"
      }
    },
    {
      "chainId": 137,
      "name": "IGRY Coin",
      "symbol": "IGRY",
      "decimals": 18,
      "address": "0xAFbABAa1591d1Afa0F62935E95265cb937C2facF",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xaeF9F1e06805201fc4644267ee05Ac0905F767b9"
      }
    },
    {
      "chainId": 137,
      "name": "Saitama Inu",
      "symbol": "SAITAMA",
      "decimals": 9,
      "address": "0x7582a64734f40c1eAa23144Fc43cA1a748723527",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8B3192f5eEBD8579568A2Ed41E6FEB402f93f73F"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Anchor UST Token",
      "symbol": "aUST",
      "decimals": 18,
      "address": "0x522a3Bd54d5D6a9CC67592e31Cc1A745630daF50",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa8de3e3c934e2a1bb08b010104ccabbd4d6293ab"
      }
    },
    {
      "chainId": 137,
      "name": "PICIPO",
      "symbol": "PICIPO",
      "decimals": 18,
      "address": "0xD49E6e4Ea56eB71e45809ff208eaFD053653D95C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1e05f68B29b286FB3BbAd3c688D7e2ABda549b80"
      }
    },
    {
      "chainId": 137,
      "name": "ZUG",
      "symbol": "ZUG",
      "decimals": 18,
      "address": "0x9582b02d5AC3eb6940AE02E6d4ab220c3ca9d317",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfEE5F54e1070e7eD31Be341e0A5b1E847f6a84Ab"
      }
    },
    {
      "chainId": 137,
      "name": "Tiger King",
      "symbol": "TKING",
      "decimals": 18,
      "address": "0xc79745bf7C00D7D78cF7A3713c798fAee8f7DC45",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x24e89bdf2f65326b94e36978a7edeac63623dafa"
      }
    },
    {
      "chainId": 137,
      "name": "Seed",
      "symbol": "SEED",
      "decimals": 18,
      "address": "0xEAeCC18198a475c921B24b8A6c1C1f0f5F3F7EA0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x30cf203b48edaa42c3b4918e955fed26cd012a3f"
      }
    },
    {
      "chainId": 137,
      "name": "DOG COLLAR",
      "symbol": "COLLAR",
      "decimals": 18,
      "address": "0xd5fa77A860FeA9cFf31DA91BbF9e0FaEa9538290",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9783b81438c24848f85848f8df31845097341771"
      }
    },
    {
      "chainId": 137,
      "name": "CANDI",
      "symbol": "CANDI",
      "decimals": 18,
      "address": "0xa06657B69bD9462a468ad6533B4B819CAeE8B29E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3aa1bd53318a73d2fc41a1dd5de1aa9a0206a5d8"
      }
    },
    {
      "chainId": 137,
      "name": "Sustainable Opportunity Matrix",
      "symbol": "SOM",
      "decimals": 9,
      "address": "0x10C5A602c7661E916a863B3BD164796D6CdD3d72",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4Cb5108603BC702F951A7a1D777Ee24E21303B95"
      }
    },
    {
      "chainId": 137,
      "name": "Zombie Inu",
      "symbol": "ZINU",
      "decimals": 9,
      "address": "0xbF979592FB6B57B4293D0D7EEd0E093478a5C890",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc50ef449171a51fbeafd7c562b064b6471c36caa"
      }
    },
    {
      "chainId": 137,
      "name": "JAX Token",
      "symbol": "JAX",
      "decimals": 18,
      "address": "0x5cfDF4CCa482d419dA979C10B70039c28F2a1f08",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xE34f533f537b0BdfC2FDDC6fF2a85fF0cb1A75D1"
      }
    },
    {
      "chainId": 137,
      "name": "BitcoinVend",
      "symbol": "BCVT",
      "decimals": 18,
      "address": "0x07fcd81Bf6156e49c64f0ba70f962A9F5111D39d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8d717ab5eac1016b64c2a7fd04720fd2d27d1b86"
      }
    },
    {
      "chainId": 137,
      "name": "AXIA COIN",
      "symbol": "AXC",
      "decimals": 18,
      "address": "0x83Ce0b442Ec51CfA62310Aa1789210CFE2c5556E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x37c430c2b5f9Ff85e534873C715871818Ab1623E"
      }
    },
    {
      "chainId": 137,
      "name": "Shiryo-Inu",
      "symbol": "Shiryo-Inu",
      "decimals": 9,
      "address": "0xBB812fd66b98A38f2bF6A22759462f0993C1DBBE",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1E2F15302B90EddE696593607b6bD444B64e8F02"
      }
    },
    {
      "chainId": 137,
      "name": "Dogs Of Elon",
      "symbol": "DOE",
      "decimals": 18,
      "address": "0x07D496919669c88CCeC363c55df98d494fd4D796",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf8e9f10c22840b613cda05a0c5fdb59a4d6cd7ef"
      }
    },
    {
      "chainId": 137,
      "name": "Kitty Inu",
      "symbol": "kitty",
      "decimals": 9,
      "address": "0xCBEa86af7581594d85d44469429bC6A273F9B562",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x044727e50ff30DB57fad06Ff4F5846eAb5eA52a2"
      }
    },
    {
      "chainId": 137,
      "name": "Ethereum Name Service",
      "symbol": "ENS",
      "decimals": 18,
      "address": "0xbD7A5Cf51d22930B8B3Df6d834F9BCEf90EE7c4f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72"
      }
    },
    {
      "chainId": 137,
      "name": "WhaleStreet $hrimp Token",
      "symbol": "$HRIMP",
      "decimals": 18,
      "address": "0xb8218785cb4d14dBdD94Bf314F361542579b4815",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9077f9e1efe0ea72867ac89046b2a6264cbcaef5"
      }
    },
    {
      "chainId": 137,
      "name": "SOCIETY OF GALACTIC EXPLORATION",
      "symbol": "SGE",
      "decimals": 9,
      "address": "0x6041551eca4fDcB55e3Fb91fe8d9f460C4Ddeca7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xab456bdb0a373bbac6c4a76176e9f159cacd5752"
      }
    },
    {
      "chainId": 137,
      "name": "RDomainToken For 0xac2c11ea5d4a4826f418d3befbf0537de7f13572d2a433edfe4a7314ea5dc896",
      "symbol": "ac2c11ea",
      "decimals": 18,
      "address": "0x31168476A4a722f639C2EDB69281E0B2585eefCF",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc4911f7eed42aef8e4cf24020f63f5e8b7b56372"
      }
    },
    {
      "chainId": 137,
      "name": "National Bank of Coin",
      "symbol": "NBC",
      "decimals": 18,
      "address": "0x4Fb19d9Cc639c556Db433e7cb63722ceB2289AF0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x96E12Ec9e0D333a52f87713ee03f23fB715FC228"
      }
    },
    {
      "chainId": 137,
      "name": "Finiko",
      "symbol": "FNK",
      "decimals": 18,
      "address": "0x2ca402536721Db44286564dC0Dd807aeaB60cec5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb5fe099475d3030dde498c3bb6f3854f762a48ad"
      }
    },
    {
      "chainId": 137,
      "name": "Kiba Inu",
      "symbol": "KIBA",
      "decimals": 9,
      "address": "0x73Bee5D745dA8b0c39437Df8EAf64CE0589A6575",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4b2c54b80b77580dc02a0f6734d3bad733f50900"
      }
    },
    {
      "chainId": 137,
      "name": "Gods Unchained",
      "symbol": "GODS",
      "decimals": 18,
      "address": "0xF88fc6b493eda7650E4bcf7A290E8d108F677CfE",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xccc8cb5229b0ac8069c51fd58367fd1e622afd97"
      }
    },
    {
      "chainId": 137,
      "name": "StarLink",
      "symbol": "STARL",
      "decimals": 18,
      "address": "0xe8b6f80454B9c2e6905FE2b1BD5DB5223657Fa21",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24"
      }
    },
    {
      "chainId": 137,
      "name": "Nolly Coin",
      "symbol": "NOLLY",
      "decimals": 18,
      "address": "0x350c8db3E569D4445dD81AD0F1C628f7f6e0187f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb69096a89389638518725adfcf279f3f82efa2de"
      }
    },
    {
      "chainId": 137,
      "name": "Lith Token",
      "symbol": "LITH",
      "decimals": 18,
      "address": "0xFd75cd593AacE53731f240F32Ec4756A957b3344",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf8a4a419c2d7140e49ef952a7e7ae1bd4a8b6b9c"
      }
    },
    {
      "chainId": 137,
      "name": "Dobermann",
      "symbol": "DOBE",
      "decimals": 18,
      "address": "0x24705371bE6eE97E5780646fb60B8396058C1798",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe7ab45162f5979f09b0bda1cc7dfc97c270ea3d5"
      }
    },
    {
      "chainId": 137,
      "name": "BitSpawn Token",
      "symbol": "SPWN",
      "decimals": 18,
      "address": "0xD882b0ac8cCc38c88eB1486B6Ce8486f102FE3Ac",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe516d78d784c77d479977be58905b3f2b1111126"
      }
    },
    {
      "chainId": 137,
      "name": "KickToken",
      "symbol": "KICK",
      "decimals": 10,
      "address": "0xE64ACF4ec1dc9a112Ab705ad927ccB17427aEFb5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x824a50df33ac1b41afc52f4194e2e8356c17c3ac"
      }
    },
    {
      "chainId": 137,
      "name": "BankSocial",
      "symbol": "BSL",
      "decimals": 8,
      "address": "0xE439273659B86e33716BCF7Ad22408B541df50B1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0af55d5ff28a3269d69b98680fd034f115dd53ac"
      }
    },
    {
      "chainId": 137,
      "name": "Somnium Space Cubes",
      "symbol": "CUBE",
      "decimals": 8,
      "address": "0x276C9cbaa4BDf57d7109a41e67BD09699536FA3d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdf801468a808a32656d2ed2d2d80b72a129739f4"
      }
    },
    {
      "chainId": 137,
      "name": "Derived Ether",
      "symbol": "dEth",
      "decimals": 18,
      "address": "0xB8e89dCd3025b05784cc5DaeA3108b697Ffb6697",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x51863Ec92BA14ede7B17fb2B053145C90E215A57"
      }
    },
    {
      "chainId": 137,
      "name": "Value Network Token",
      "symbol": "VNTW",
      "decimals": 18,
      "address": "0xFBa8a25156c33FEcbE84f57c2d45C1d50f5afcd0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd0f05d3d4e4d1243ac826d8c6171180c58eaa9bc"
      }
    },
    {
      "chainId": 137,
      "name": "MatrixETF DAO Finance",
      "symbol": "MDF",
      "decimals": 18,
      "address": "0x700B9dE93E2Fd5455cB91C474DAd6cfEa6598F64",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1a57367c6194199e5d9aea1ce027431682dfb411"
      }
    },
    {
      "chainId": 137,
      "name": "Illuvium",
      "symbol": "ILV",
      "decimals": 18,
      "address": "0xFA46dAf9909e116DBc40Fe1cC95fC0Bb1f452aBE",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x767fe9edc9e0df98e07454847909b5e959d7ca0e"
      }
    },
    {
      "chainId": 137,
      "name": "BlueSparrowToken",
      "symbol": "BlueSparrow",
      "decimals": 9,
      "address": "0x3c6D9c9296f8a87BE0Cb639167E152D46c831087",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4d67edef87a5ff910954899f4e5a0aaf107afd42"
      }
    },
    {
      "chainId": 137,
      "name": "Phantasma Energy",
      "symbol": "KCAL",
      "decimals": 10,
      "address": "0xEf101840250783B6F1004510333c7a6F37B1452a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x14EB60F5f270B059B0c788De0Ddc51Da86f8a06d"
      }
    },
    {
      "chainId": 137,
      "name": "Blastoise Inu",
      "symbol": "BLAST",
      "decimals": 9,
      "address": "0x95f3B277b5A688f78Ab0047bD298f09fB263E089",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5167f7cdeb771417d8722e654ccc3e1734a01878"
      }
    },
    {
      "chainId": 137,
      "name": "Feisty Doge NFT",
      "symbol": "NFD",
      "decimals": 18,
      "address": "0x0A5926027d407222F8fe20f24cB16e103f617046",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xdfdb7f72c1f195c5951a234e8db9806eb0635346"
      }
    },
    {
      "chainId": 137,
      "name": "Alpha Fund",
      "symbol": "AVA",
      "decimals": 18,
      "address": "0x422361E0E97CbfD5f95d5A50f50598A6fC4D8ce6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa16001dd47f505b7b7c5639c710a52209e4e8904"
      }
    },
    {
      "chainId": 137,
      "name": "the metaverse game hub",
      "symbol": "MGH",
      "decimals": 18,
      "address": "0xc3C604F1943B8C619c5D65cd11A876e9C8eDCF10",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8765b1a0eb57ca49be7eacd35b24a574d0203656"
      }
    },
    {
      "chainId": 137,
      "name": "gameswap.org",
      "symbol": "GSWAP",
      "decimals": 18,
      "address": "0xB6Ff0EAaC1b4b415a5175803f16896b09B2Db175",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xaac41ec512808d64625576eddd580e7ea40ef8b2"
      }
    },
    {
      "chainId": 137,
      "name": "DefiOptions",
      "symbol": "DOD",
      "decimals": 18,
      "address": "0x7E6663D14F058880FAD199BCb745a81c46407809",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfc7e3cFA47fbF90310ec203F46fEe1af2771548c"
      }
    },
    {
      "chainId": 137,
      "name": "THX Network",
      "symbol": "THX",
      "decimals": 18,
      "address": "0x2934b36ca9A4B31E633C5BE670C8C8b28b6aA015",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe632ea2ef2cfd8fc4a2731c76f99078aef6a4b31"
      }
    },
    {
      "chainId": 137,
      "name": "Popcorn",
      "symbol": "POP",
      "decimals": 18,
      "address": "0xC5B57e9a1E7914FDA753A88f24E5703e617Ee50c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd0cd466b34a24fcb2f87676278af2005ca8a78c4"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pop.svg"
    },
    {
      "chainId": 137,
      "name": "ChilliSwap Token",
      "symbol": "CHLI",
      "decimals": 18,
      "address": "0x12b54baA8FFcFd6679CcF1AE618ca3006cFcc2aC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x12b54baA8FFcFd6679CcF1AE618ca3006cFcc2aC"
      }
    },
    {
      "chainId": 137,
      "name": "Piccolo Inu",
      "symbol": "PINU",
      "decimals": 9,
      "address": "0x298018eEEC6D4A38Aa33AB73Bf4954b9D1af68fC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3a1311b8c404629e38f61d566cefefed083b9670"
      }
    },
    {
      "chainId": 137,
      "name": "Mononoke Inu",
      "symbol": "Mononoke-Inu",
      "decimals": 9,
      "address": "0x0e857076EA922630C844A047f4bB7342f2ED59e2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4da08a1bff50be96bded5c7019227164b49c2bfc"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Kagra",
      "symbol": "WKGR",
      "decimals": 18,
      "address": "0xfAf25C39eA29c3Aa4A0bFbdbcf2dd99845192695",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xEb6D29A33D129407a734C2824288e6A0a6a5EF12"
      }
    },
    {
      "chainId": 137,
      "name": "GOL",
      "symbol": "GOL",
      "decimals": 8,
      "address": "0x700481409de3f632F61a2AC9BFd76138357714da",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x48094ebe2266cb1cbe5d3ec81933784e2e9561d8"
      }
    },
    {
      "chainId": 137,
      "name": "THIS",
      "symbol": "THIS",
      "decimals": 18,
      "address": "0x1b89c7E4C0967E7052144b446FA6cD4Ac94abd2B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xDe03B301C22613EAc93a74526d55D40D6a8B923b"
      }
    },
    {
      "chainId": 137,
      "name": "Sandclock",
      "symbol": "QUARTZ",
      "decimals": 18,
      "address": "0xA91FE5a535967F52D3abEBDFFb3B306D964ace13",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbA8A621b4a54e61C442F5Ec623687e2a942225ef"
      }
    },
    {
      "chainId": 137,
      "name": "PIXA Token",
      "symbol": "PIXA",
      "decimals": 0,
      "address": "0xcA8C6dEa40a6De9BE3b4C73a1AeFAafdb4754f73",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xeaf211cD484118a23AD71C3F9073189C43d1311c"
      }
    },
    {
      "chainId": 137,
      "name": "sUKHI",
      "symbol": "sUKH",
      "decimals": 18,
      "address": "0x6BD9da80D6A7AA03D739353096df36Ec18738C99",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x538429C057c8695c62194028c57B540C4Bf13a6c"
      }
    },
    {
      "chainId": 137,
      "name": "bUKHI",
      "symbol": "bUKH",
      "decimals": 18,
      "address": "0xef3943736181F259A4e94D9D6D8658996fB9F785",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xeFe2aFB5f2a9EA8Ec6D8a57FE88fEBCFE29db813"
      }
    },
    {
      "chainId": 137,
      "name": "MerchDAO",
      "symbol": "MRCH",
      "decimals": 18,
      "address": "0x4dF071FB2D145bE595b767f997C91818694A6CE1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbed4ab0019ff361d83ddeb74883dac8a70f5ea1e"
      }
    },
    {
      "chainId": 137,
      "name": "holon",
      "symbol": "HLN",
      "decimals": 18,
      "address": "0xfb57dc345cB5e155B0437A71B5e28557B557488a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1aAE3148F5B5F576159835c4C56fF844a7Da4f7e"
      }
    },
    {
      "chainId": 137,
      "name": "Nexity Network",
      "symbol": "NXT",
      "decimals": 18,
      "address": "0x76B032370987e91c515d1b96eBD04DE059BeC534",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xebeef419bb5a347e3d98f7d2168055214d12cbdb"
      }
    },
    {
      "chainId": 137,
      "name": "Sesamers",
      "symbol": "SESAME",
      "decimals": 18,
      "address": "0xadA94b6C6D263807070AB7378FCA3dfA45ec8E4c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x69d0391F9fE3f29BB226814c27896fc0558B370E"
      }
    },
    {
      "chainId": 137,
      "name": "ASIA COIN",
      "symbol": "ASIA",
      "decimals": 18,
      "address": "0x50bCBC40306230713239Ae1BdDD5eefEEaa273Dc",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xF519381791C03DD7666C142D4E49Fd94d3536011"
      }
    },
    {
      "chainId": 137,
      "name": "BitcoinSoV",
      "symbol": "BSOV",
      "decimals": 8,
      "address": "0x955afB81880f439A2Db194f051aFEd078Fb2Ec2E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x26946ada5ecb57f3a1f91605050ce45c482c9eb1"
      }
    },
    {
      "chainId": 137,
      "name": "Nemesis",
      "symbol": "NMS",
      "decimals": 18,
      "address": "0xf41DF3B8084f1bcbf8D72C8366392170E7a0cFFD",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x77252494c25444f8598a0c74ffc90adc535291a9"
      }
    },
    {
      "chainId": 137,
      "name": "Tribe",
      "symbol": "TRIBE",
      "decimals": 18,
      "address": "0x8676815789211E799a6DC86d02748ADF9cF86836",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b"
      }
    },
    {
      "chainId": 137,
      "name": "Tanks",
      "symbol": "TANKS",
      "decimals": 18,
      "address": "0xf4BF1B42181198c1c2E12e24e3e57c8d70b89411",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf604d1e51122592e0babe63ac334c0e647222f2d"
      }
    },
    {
      "chainId": 137,
      "name": "Crypto Nijigen",
      "symbol": "NGN",
      "decimals": 10,
      "address": "0x4C2C04E6f0ec30EbD60b2fFbE11814C3d59910f7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2b5C21578594F7988C7c80D258d0C927C756a848"
      }
    },
    {
      "chainId": 137,
      "name": "Unique Utility Token",
      "symbol": "UNQT",
      "decimals": 18,
      "address": "0x3bEeff1b01122F11149B11604a2bC4f9e33D77aF",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa80f2C8f61c56546001f5FC2eb8D6E4e72c45d4C"
      }
    },
    {
      "chainId": 137,
      "name": "Mork",
      "symbol": "MORK",
      "decimals": 4,
      "address": "0xa707734BD310883e133e0ca23F6C166AEB2A1A7a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf552b656022c218c26dad43ad88881fc04116f76"
      }
    },
    {
      "chainId": 137,
      "name": "UNCL",
      "symbol": "UNCL",
      "decimals": 18,
      "address": "0x97C415D4c8ea982aaabCBb65506D37FA6631C351",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49"
      }
    },
    {
      "chainId": 137,
      "name": "AGAIN",
      "symbol": "AGAIN",
      "decimals": 18,
      "address": "0x05bE4f635b558E791b68B500FD9210f60E4f3Db8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc01a327e30b0fbf32861333f238b5c36a60abc09"
      }
    },
    {
      "chainId": 137,
      "name": "LikeCoin",
      "symbol": "LIKE",
      "decimals": 9,
      "address": "0x522250b17AdcaECE287E9dA25dC1dDAd742213C0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7588fEFd8D087A7EE3F568087190209F7B449b28"
      }
    },
    {
      "chainId": 137,
      "name": "BakedToken",
      "symbol": "BAKED",
      "decimals": 18,
      "address": "0x32515ffdc3a84cfbf9AD4dB14EF8f0A535c7Afd6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa4cb0dce4849bdcad2d553e9e68644cf40e26cce"
      }
    },
    {
      "chainId": 137,
      "name": "Sandalwood",
      "symbol": "Sandalwood",
      "decimals": 18,
      "address": "0xe99e95ec6DCae4c85806F13CDf1351aE0FEf55Be",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4FA80013F5d13DB10f2c5DC2987081cb48c7c069"
      }
    },
    {
      "chainId": 137,
      "name": "BLOCKS",
      "symbol": "BLOCKS",
      "decimals": 18,
      "address": "0x983C0083127b9b65000E918b10d65A0F5d7500F5",
      "tags": [
        "pos",
        "erc20"
      ],
      "logoURI": "https://changenow.io/images/sprite/currencies/blocks.svg",
      "extensions": {
        "rootAddress": "0x8a6d4c8735371ebaf8874fbd518b56edd66024eb"
      }
    },
    {
      "chainId": 137,
      "name": "Genesis Worlds",
      "symbol": "GENESIS",
      "decimals": 18,
      "address": "0x51869836681BcE74a514625c856aFb697a013797",
      "logoURI": "https://svgshare.com/i/fJk.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6b6F09997EbFa93F4E111c33825da3b938462FF1"
      }
    },
    {
      "chainId": 137,
      "name": "Euro Tether",
      "symbol": "EURT",
      "decimals": 6,
      "address": "0x7BDF330f423Ea880FF95fC41A280fD5eCFD3D09f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc581b735a1688071a1746c968e0798d642ede491"
      }
    },
    {
      "chainId": 137,
      "name": "NZD Stablecoin",
      "symbol": "NZDS",
      "decimals": 6,
      "address": "0xeaFE31Cd9e8E01C8f0073A2C974f728Fb80e9DcE",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xDa446fAd08277B4D2591536F204E018f32B6831c"
      }
    },
    {
      "chainId": 137,
      "name": "Matic Mike Juice",
      "symbol": "HGH",
      "decimals": 18,
      "address": "0xE97a60f5D34dA4f68bc1f1b9CE2C19Ec1A33E928",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x45fFdeC3fc3b475220c0Fdd3e80c3692bc711E0e"
      }
    },
    {
      "chainId": 137,
      "name": "CRE8R DAO",
      "symbol": "CRE8R",
      "decimals": 18,
      "address": "0x079202AD852ccc46d8E73815f10Ff055049D3916",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xaa61d5dec73971cd4a026ef2820bb87b4a4ed8d6"
      }
    },
    {
      "chainId": 137,
      "name": "Wallstreetbets",
      "symbol": "WSB",
      "decimals": 18,
      "address": "0x4CB9050EA02395a8941715ceeffe0cDf60c59f07",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8DF586aa346c3d9d1c99A21316A2735d71355eC8"
      }
    },
    {
      "chainId": 137,
      "name": "Virtual Cash",
      "symbol": "vCASH",
      "decimals": 18,
      "address": "0x7621eE0CE0F686b88dD70551B05F90dd3C04d6e9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x532D7ebE4556216490c9d03460214b58e4933454"
      }
    },
    {
      "chainId": 137,
      "name": "HashRush",
      "symbol": "RUSH",
      "decimals": 8,
      "address": "0x8e8f8DF6dcE311A011A5B09788ddA689A82d9F37",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcfcd43d7ee21416a71c2eb9888587d52716fc77a"
      }
    },
    {
      "chainId": 137,
      "name": "Enjinstarter",
      "symbol": "EJS",
      "decimals": 18,
      "address": "0x71A6e3D6A6629F700D1A4D79D326e2A3F74eDd5f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x96610186F3ab8d73EBEe1CF950C750f3B1Fb79C2"
      }
    },
    {
      "chainId": 137,
      "name": "Bored Banana Token",
      "symbol": "$BANANA",
      "decimals": 0,
      "address": "0x6393c0a63712601e3Dda577dc5Bfaf0189e89169",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe17093967e43D37Ad615a64cb86aE11826D6e58b"
      }
    },
    {
      "chainId": 137,
      "name": "Daily COP",
      "symbol": "DLYCOP",
      "decimals": 18,
      "address": "0x1659fFb2d40DfB1671Ac226A0D9Dcc95A774521A",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1659fFb2d40DfB1671Ac226A0D9Dcc95A774521A"
      }
    },
    {
      "chainId": 137,
      "name": "SushiBar",
      "symbol": "xSUSHI",
      "decimals": 18,
      "address": "0x6811079E3c63ED96Eb005384d7E7ec8810E3D521",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272"
      }
    },
    {
      "chainId": 137,
      "name": "Folder Coin",
      "symbol": "FOL",
      "decimals": 18,
      "address": "0xA8F0634F1Ab83Bc31e4cE33905db29E36958C5cc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa8580f3363684d76055bdc6660caefe8709744e1"
      }
    },
    {
      "chainId": 137,
      "name": "Bollycoin",
      "symbol": "BOLLY",
      "decimals": 18,
      "address": "0x7Dc47Cfb674bEb5827283F6140F635680A5cE992",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6bd361e10c1afed0d95259e7C0115f3A60e4ea99"
      }
    },
    {
      "chainId": 137,
      "name": "Ojamu Token",
      "symbol": "OJA",
      "decimals": 18,
      "address": "0x26373EC913876C9e6d38494dde458Cb8649cb30c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0aa7efe4945db24d95ca6e117bba65ed326e291a"
      }
    },
    {
      "chainId": 137,
      "name": "NIFTSY",
      "symbol": "NIFTSY",
      "decimals": 18,
      "address": "0x432cdbC749FD96AA35e1dC27765b23fDCc8F5cf1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7728cd70b3dD86210e2bd321437F448231B81733"
      }
    },
    {
      "chainId": 137,
      "name": "Dexmex",
      "symbol": "DEXM",
      "decimals": 18,
      "address": "0xd9C774a5BB7fdE18c3e03a59c40d7c77d0B90910",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0020d80229877b495D2bf3269a4c13f6f1e1B9D3"
      }
    },
    {
      "chainId": 137,
      "name": "Entropy",
      "symbol": "ERP",
      "decimals": 18,
      "address": "0x28accA4ed2F6186c3D93e20e29e6e6a9Af656341",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0a0e3bfD5a8cE610E735D4469Bc1b3b130402267"
      }
    },
    {
      "chainId": 137,
      "name": "Nexen",
      "symbol": "NXN",
      "decimals": 18,
      "address": "0x4E6A6cE59Ca7AA0CBc52dbD81aB2dEA89D7ECcF2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbec8d5c639778652dc2440da996a6bcf43f07746"
      }
    },
    {
      "chainId": 137,
      "name": "MovieBizCoin",
      "symbol": "MBZ",
      "decimals": 8,
      "address": "0xf932A6F93432517192C71db155bE3d9C7402fbbA",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd8b110beee01e74dba9be687fc247c550a41cffe"
      }
    },
    {
      "chainId": 137,
      "name": "Human Token",
      "symbol": "HMT",
      "decimals": 18,
      "address": "0xc748B2A084F8eFc47E086ccdDD9b7e67aEb571BF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd1ba9bac957322d6e8c07a160a3a8da11a0d2867"
      }
    },
    {
      "chainId": 137,
      "name": "ethbox Token",
      "symbol": "EBOX",
      "decimals": 18,
      "address": "0x8c48aC62F1ECd20EC72f0B1a9a3Bc33eb4B93828",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x33840024177a7daca3468912363bed8b425015c5"
      }
    },
    {
      "chainId": 137,
      "name": "OBORTECH",
      "symbol": "OBOT",
      "decimals": 18,
      "address": "0x3522898a74959A16C43F59055392b2Fce48727d0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xedadeb5faa413e6c8623461849dfd0b7c3790c32"
      }
    },
    {
      "chainId": 137,
      "name": "50MM",
      "symbol": "50MM",
      "decimals": 18,
      "address": "0xE4e8056A49E35dbDe67384bEdCEE310B9693D4d6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3239ebFA182B04DfCA2A15ccf81AF97C024ce0e0"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped PECO",
      "symbol": "PECO",
      "decimals": 18,
      "address": "0x13607B1ca022368c81f2f2709b181ee8e0f42dD6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9d3EE6B64e69Ebe12a4bF0b01D031CB80F556eE4"
      }
    },
    {
      "chainId": 137,
      "name": "MaidCoin",
      "symbol": "$MAID",
      "decimals": 18,
      "address": "0xCf9F8BBfB65BA5F7491e61e542c72F00Ff4DACc4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4Af698B479D0098229DC715655c667Ceb6cd8433"
      }
    },
    {
      "chainId": 137,
      "name": "KingToken",
      "symbol": "$KING",
      "decimals": 18,
      "address": "0xB31BAc3b0Ff9F588fD07B00859555F7970950015",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd2057d71fe3f5b0dc1e3e7722940e1908fc72078"
      }
    },
    {
      "chainId": 137,
      "name": "MOE Token",
      "symbol": "MOE",
      "decimals": 18,
      "address": "0x3be6601208c404a022612d06bfc8db5c88c8217c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6d9cf12482b14888453b63a0821b7b0e854f59a2"
      }
    },
    {
      "chainId": 137,
      "name": "Safaia Gabanansu",
      "symbol": "GABA",
      "decimals": 5,
      "address": "0xD1e3F2FE09D92E47868F6fEb653344932bCF5091",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc9e823929b74720990f0e3914ef718c37480494f"
      }
    },
    {
      "chainId": 137,
      "name": "Weird",
      "symbol": "WEIRD",
      "decimals": 18,
      "address": "0xcB8BCDb991B45bF5D78000a0b5C0A6686cE43790",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xff5a1a18650fac5afa7c94a8dcb3ebf73b00ddb7"
      }
    },
    {
      "chainId": 137,
      "name": "Junø",
      "symbol": "JUNO",
      "decimals": 6,
      "address": "0xc6bdB9dD7F33FF11EfDD3A84b2C1c99b8CC93052",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x413e8196E7D6d2C02A6BCcc46366F881017ea479"
      }
    },
    {
      "chainId": 137,
      "name": "BitCanna",
      "symbol": "BCNA",
      "decimals": 6,
      "address": "0xbcAe3a93bFa5258fEDB78758d45E03e3C2bda3E8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xeB5Bea778339e5F0C8D9419cf9891445af823A29"
      }
    },
    {
      "chainId": 137,
      "name": "e-Money EUR",
      "symbol": "EEUR",
      "decimals": 6,
      "address": "0x2D27E0E31f86bd8889300E5D8148BA7b231Cf1c1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x714bfD06Da6EB24fAc379f0d9DEBFa85261bF439"
      }
    },
    {
      "chainId": 137,
      "name": "Microtick",
      "symbol": "TICK",
      "decimals": 6,
      "address": "0x4305fF9f3714C8bEFE7854D401c4C2e395662Db4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcf9902B43D01D7C6cd5c12e0c1112cc2C4FC4Ec5"
      }
    },
    {
      "chainId": 137,
      "name": "e-Money",
      "symbol": "NGM",
      "decimals": 6,
      "address": "0xc54FF1b09Ab25B01275cD1093c2Ba311A18c00Eb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x56667705DF047677A15D3D417A138b10B6ed62C4"
      }
    },
    {
      "chainId": 137,
      "name": "ixo",
      "symbol": "IXO",
      "decimals": 6,
      "address": "0x4a8D681bF9FC7A32d8284B6f2d869eb1CB14A7f0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8Ea2645CD39D5e0C901bCA25dF8d0998a6926cf2"
      }
    },
    {
      "chainId": 137,
      "name": "Certik",
      "symbol": "CTK",
      "decimals": 6,
      "address": "0x799a88F32EBB23aA9Ef440a7A1cb37653af74422",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4c67B8392fC17892338d590e5AE1aB7BE485BE50"
      }
    },
    {
      "chainId": 137,
      "name": "Starname",
      "symbol": "IOV",
      "decimals": 6,
      "address": "0x6ec60377b874782408EA493BeCCCce39347A911A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3dE8006B2c571eBC19a5d3a85a0940A7a9339470"
      }
    },
    {
      "chainId": 137,
      "name": "TrailerPark",
      "symbol": "PARK",
      "decimals": 18,
      "address": "0xD6CC9119650b5591dc44a761754aFC83F259ab41",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6a2523c3eb9159fe4321ca70c06cbc04b3732a63"
      }
    },
    {
      "chainId": 137,
      "name": "Anyswap",
      "symbol": "ANY",
      "decimals": 18,
      "address": "0x99Cd301508Ac0020AA2D5E4572f846590C5aB3AD",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf99d58e463a2e07e5692127302c20a191861b4d6"
      }
    },
    {
      "chainId": 137,
      "name": "PreKlima",
      "symbol": "pKLIMA",
      "decimals": 18,
      "address": "0x0aF5deE6678869201924930D924a435F6E4839c9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc497b856b1b8e952521154d24f9e951b758ed84d"
      }
    },
    {
      "chainId": 137,
      "name": "WFAIR Token",
      "symbol": "WFAIR",
      "decimals": 18,
      "address": "0xb6B5CDF74606181a1b05bfC0B9F17fC2A64B0cD5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xC6065B9fc8171Ad3D29bad510709249681758972"
      }
    },
    {
      "chainId": 137,
      "name": "Alkemi_Network_DAO_Token",
      "symbol": "ALK",
      "decimals": 18,
      "address": "0x3F3713030d836A0E1B774f1428c1F1f2148DaB64",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6c16119b20fa52600230f074b349da3cb861a7e3"
      }
    },
    {
      "chainId": 137,
      "name": "Direwolftoken.com",
      "symbol": "DIREWOLF",
      "decimals": 2,
      "address": "0x8135532bC7765818eFECF49A295FEA4262121e36",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xBdea5bB640DBFC4593809DEeC5CdB8F99b704Cd2"
      }
    },
    {
      "chainId": 137,
      "name": "CryptoQuantumTradingFund",
      "symbol": "CQTF",
      "decimals": 18,
      "address": "0xcCBBA38E41d5428FD82cf42efE5385AEF6f80826",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4e2721c261C056D2F7bD6F6b2388C6853D22dA78"
      }
    },
    {
      "chainId": 137,
      "name": "pTokens ORE",
      "symbol": "ORE",
      "decimals": 18,
      "address": "0xD52f6CA48882Be8fbaa98ce390db18e1dbe1062d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4f640F2529ee0cF119A2881485845FA8e61A782A"
      }
    },
    {
      "chainId": 137,
      "name": "Fly Dollar",
      "symbol": "FUSD",
      "decimals": 18,
      "address": "0x5973aC9378d0D3e982A37Cc43D480d455C19ae8a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2ee7d743d97173bacd150f3d06e7c4518d393918"
      }
    },
    {
      "chainId": 137,
      "name": "Witch Token",
      "symbol": "WITCH",
      "decimals": 18,
      "address": "0x842e4B170021cE14c9c1b7859f3452a63b4f6841",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdc524e3c6910257744c1f93cf15e9f472b5bd236"
      }
    },
    {
      "chainId": 137,
      "name": "QuiverX",
      "symbol": "QRX",
      "decimals": 18,
      "address": "0x0cC013A6971fAF2Ec8beEe2cd6AdccA6F801a29c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8"
      }
    },
    {
      "chainId": 137,
      "name": "Ino Coin",
      "symbol": "INO",
      "decimals": 0,
      "address": "0xba19a5b5029AEa6Fe018742E6eFc5a204a58c14d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc9859fccC876e6b4B3C749C5D29EA04F48aCb74F"
      }
    },
    {
      "chainId": 137,
      "name": "Adaptech Design Co",
      "symbol": "ADCO",
      "decimals": 18,
      "address": "0xd8A805447b1ce5BAE810f029dF5536A57F71b91C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x83cc32d627C66e70C69f86f13Ad836FeA07d7407"
      }
    },
    {
      "chainId": 137,
      "name": "Pozzle Planet",
      "symbol": "POZ",
      "decimals": 18,
      "address": "0x701fD77F1B00547BE745957Ddf1cc92F9D088B6B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x099945992A6678A724a64CE96B3D348259d17e45"
      }
    },
    {
      "chainId": 137,
      "name": "Orbitum",
      "symbol": "ORBTM",
      "decimals": 18,
      "address": "0xE93C4431494B45115ea656274ea75B987f541B17",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x93ca2df0bf96936bd0b59e3ceff0162180574ebc"
      }
    },
    {
      "chainId": 137,
      "name": "ARTM",
      "symbol": "ARTM",
      "decimals": 18,
      "address": "0xcBEA63B905d62bAd6506e2C47b1Ea00C56D8f93d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x19ebaa7f212b09de2aee2a32d40338553c70e2e3"
      }
    },
    {
      "chainId": 137,
      "name": "FlyCoin",
      "symbol": "FLY",
      "decimals": 18,
      "address": "0x486FFAf06A681bf22B5209e9fFCE722662A60E8C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4e568ab95F029E8dF1e39b30c9d6D076eaA15945"
      }
    },
    {
      "chainId": 137,
      "name": "Sekuritance",
      "symbol": "SKRT",
      "decimals": 18,
      "address": "0xE51E88dD08499762B8e4EB3a9f3Da9b8e79608c3",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x887168120cb89fb06f3e74dc4af20d67df0977f6"
      }
    },
    {
      "chainId": 137,
      "name": "Empty Set Share",
      "symbol": "ESS",
      "decimals": 18,
      "address": "0x5362dAf94A6bd0E9078aC3070f575861F12A2E77",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x24ae124c4cc33d6791f8e8b63520ed7107ac8b3e"
      }
    },
    {
      "chainId": 137,
      "name": "Digital Standard Unit",
      "symbol": "DSU",
      "decimals": 18,
      "address": "0x777211c3C0b03D9fF2Aaa288a016b1a3b64DDB8C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x605d26fbd5be761089281d5cec2ce86eea667109"
      }
    },
    {
      "chainId": 137,
      "name": "Global Digital Content",
      "symbol": "GDC",
      "decimals": 18,
      "address": "0x2e8FaF0f7918c4914E890716E22A74E675115D52",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x301c755ba0fca00b1923768fffb3df7f4e63af31"
      }
    },
    {
      "chainId": 137,
      "name": "Eliot",
      "symbol": "ELIOT",
      "decimals": 18,
      "address": "0xB83a45Bbb5699ae47B39c32B20A145b28B446fCa",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf17E3bD04465f2b60aB31A42414fB7474E52D62D"
      }
    },
    {
      "chainId": 137,
      "name": "Goji",
      "symbol": "GOJ",
      "decimals": 10,
      "address": "0x3Ee21b6d44a3879EeF12084423B4C7a9A286D00D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xec4a1c7a4e9fdc7cc621b548a931c92bc08a679a"
      }
    },
    {
      "chainId": 137,
      "name": "Mia Neko",
      "symbol": "MIA",
      "decimals": 10,
      "address": "0x424EB54e29868E15e44FdA6BD17F55D1Ac5EcFb5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8d52061af43c52204c717d0610ea8f52f955ce0b"
      }
    },
    {
      "chainId": 137,
      "name": "Fair Trader",
      "symbol": "FTP",
      "decimals": 18,
      "address": "0x8AC24ae89cd33BA285A65d3A7039de3B23C9f83e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6B71cDc52B6B5e007E9e018D65B233AbeD8589C7"
      }
    },
    {
      "chainId": 137,
      "name": "GTS Coin",
      "symbol": "GTS",
      "decimals": 18,
      "address": "0xa6BE18a7870D464c97c76a457d965CB74bE0dB3f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xebD8af559699136EF01c3f06fdD1131Fd64EFA87"
      }
    },
    {
      "chainId": 137,
      "name": "PureFi Token",
      "symbol": "UFI",
      "decimals": 18,
      "address": "0x3c205C8B3e02421Da82064646788c82f7bd753B9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcDa4e840411C00a614aD9205CAEC807c7458a0E3"
      }
    },
    {
      "chainId": 137,
      "name": "UnirisToken",
      "symbol": "UCO",
      "decimals": 18,
      "address": "0x3C720206bFaCB2d16fA3ac0ed87D2048Dbc401Fc",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8a3d77e9d6968b780564936d15b09805827c21fa"
      }
    },
    {
      "chainId": 137,
      "name": "BlockTV",
      "symbol": "BLTV",
      "decimals": 18,
      "address": "0x2C1084a041B976b96B769d1C250562864317c1Aa",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe08854b668958657064fa20f309F6BA7a19D5Af2"
      }
    },
    {
      "chainId": 137,
      "name": "AurusGOLD",
      "symbol": "AWG",
      "decimals": 18,
      "address": "0xAEe0ffb690B37449B7f1C49B199E1E3ec6084490",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x696acc2de564b48682d71d0847b3632f87c9a402"
      }
    },
    {
      "chainId": 137,
      "name": "XMANNA TOKEN",
      "symbol": "XMAN",
      "decimals": 18,
      "address": "0x6db9dd7342e9aE835Ed498d141A85970813F1E9c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9Fff5F700196269079cA4dAbC9Ff7319346e6DbF"
      }
    },
    {
      "chainId": 137,
      "name": "Web4",
      "symbol": "WEB4",
      "decimals": 18,
      "address": "0x362d55939b3b914BDAe5992F7e80FA03d4Df2B15",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x75239ba45ccd3ec2e25f1b44e7e56f2edf0f80a8"
      }
    },
    {
      "chainId": 137,
      "name": "Rentible",
      "symbol": "RNB",
      "decimals": 18,
      "address": "0x4D53d5CF63ed51DDA047B363F3a6F62677d37613",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2a039b1d9bbdccbb91be28691b730ca893e5e743"
      }
    },
    {
      "chainId": 137,
      "name": "VectorspaceAI",
      "symbol": "VXV",
      "decimals": 18,
      "address": "0x5DecD638E9E6C7b3533Ef40788094b5e6231826a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7D29A64504629172a429e64183D6673b9dAcbFCe"
      }
    },
    {
      "chainId": 137,
      "name": "ACY",
      "symbol": "ACY",
      "decimals": 18,
      "address": "0x8b1f836491903743fE51ACd13f2CC8Ab95b270f6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xaf9db9e362e306688af48c4acb9618c06db38ac3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/acy.svg"
    },
    {
      "chainId": 137,
      "name": "Strong",
      "symbol": "STRONG",
      "decimals": 18,
      "address": "0xf4487f1FF4f7e38c640AeA91d7bb47AeA98c09a7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x990f341946a3fdb507ae7e52d17851b87168017c"
      }
    },
    {
      "chainId": 137,
      "name": "Olympus",
      "symbol": "OHM",
      "decimals": 9,
      "address": "0xfA49101D56734aF877AA312a6a40f634d4E3729d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x383518188c0c6d7730d91b2c03a03c837814a899"
      }
    },
    {
      "chainId": 137,
      "name": "Hue",
      "symbol": "HUE",
      "decimals": 4,
      "address": "0xd9Cc6BC0569c22a16d804B46e6774611A93dD90B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdcfe18bc46f5a0cd0d3af0c2155d2bcb5ade2fc5"
      }
    },
    {
      "chainId": 137,
      "name": "SRSC Chiz Token",
      "symbol": "CHIZ",
      "decimals": 18,
      "address": "0x383180a2f52c8F2C67a5a10e2f0752276274E442",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5c761c1a21637362374204000e383204d347064c"
      }
    },
    {
      "chainId": 137,
      "name": "Gian Ferrer",
      "symbol": "GIAN",
      "decimals": 18,
      "address": "0x8527aBEf4EDE978af2B753543f8864EC85FD55c6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xC48752b8e1DC43F9d70504099b5C17c4380Ac605"
      }
    },
    {
      "chainId": 137,
      "name": "AlchemistKlima",
      "symbol": "alKLIMA",
      "decimals": 18,
      "address": "0xd50EC6360f560a59926216Eafb98395AC430C9fD",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0f92565e9ba96918b2db48537616dd9d0b09502b"
      }
    },
    {
      "chainId": 137,
      "name": "GGToken",
      "symbol": "GGTK",
      "decimals": 18,
      "address": "0x49B1bE61A8Ca3f9A9F178d6550e41E00D9162159",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfa99a87b14b02e2240c79240c5a20f945ca5ef76"
      }
    },
    {
      "chainId": 137,
      "name": "Compound USD Coin",
      "symbol": "cUSDC",
      "decimals": 8,
      "address": "0xd871B40646E1a6dbDED6290B6B696459a69C68A0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x39AA39c021dfbaE8faC545936693aC917d5E7563"
      }
    },
    {
      "chainId": 137,
      "name": "Harrison First",
      "symbol": "FIRST",
      "decimals": 4,
      "address": "0x25B3A129907B675E19cE6Dd3F2A6db50023eCF80",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9903A4Cd589DA8e434f264deAFc406836418578E"
      }
    },
    {
      "chainId": 137,
      "name": "AurusDeFi",
      "symbol": "AWX",
      "decimals": 18,
      "address": "0x56a0efefc9f1fbb54fbd25629ac2aa764f1b56f7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa51fc71422a30fa7ffa605b360c3b283501b5bf6"
      }
    },
    {
      "chainId": 137,
      "name": "Dogira",
      "symbol": "DOGIRA",
      "decimals": 9,
      "address": "0x23274CD85642068B22EbF61Ff64402CF4252c7f5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xD8C1232FcD219286E341271385bd70601503B3D7"
      }
    },
    {
      "chainId": 137,
      "name": "FastArgmag20L1N",
      "symbol": "FastArgmag20L1S",
      "decimals": 18,
      "address": "0xc9b7Bc25AaA5D2a26e508eb0cB0b3AF08a4cA6F8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xA494e64fe7a4E329C23aD961ad16dF983e322c62"
      }
    },
    {
      "chainId": 137,
      "name": "vEmpire Gamer Token",
      "symbol": "VEMP",
      "decimals": 18,
      "address": "0x7Fb7DdB3a3ec90e1c7A3E58Ff6670DA82F73c1cF",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcfeb09c3c5f0f78ad72166d55f9e6e9a60e96eec"
      }
    },
    {
      "chainId": 137,
      "name": "RevolutionPopuli ERC20 Token",
      "symbol": "RVP",
      "decimals": 18,
      "address": "0x120cA63f5F79B6760324B1ddE6BeA4C7F01FBa0E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x17ef75aa22dd5f6c2763b8304ab24f40ee54d48a"
      }
    },
    {
      "chainId": 137,
      "name": "Argmag20L1Name",
      "symbol": "Argmag20L1Sym",
      "decimals": 18,
      "address": "0x1fB39C88Df91c9fDB83D0e8761c8D2D2A4Ab5335",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7235a194451B9cb6D7c2F1E4ED3976C2aDAe7E22"
      }
    },
    {
      "chainId": 137,
      "name": "+Blockchain Cuties Universe Governance Token",
      "symbol": "BCUG",
      "decimals": 18,
      "address": "0xbd3859443377e0882dc58812E1f7C9EE057B64Be",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af"
      }
    },
    {
      "chainId": 137,
      "name": "LGCY Network",
      "symbol": "LGCY",
      "decimals": 18,
      "address": "0x834dfb4Df4425BDeC02F2A1CAFdf0cc39c3c0A59",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xae697f994fc5ebc000f8e22ebffee04612f98a0d"
      }
    },
    {
      "chainId": 137,
      "name": "LeftHouse",
      "symbol": "LEFT",
      "decimals": 4,
      "address": "0xeB4a74e9882273B7D9d985098d7b7C7512001c31",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4804FB55e75BD1c32aB06CD053C5510c1b80Fd26"
      }
    },
    {
      "chainId": 137,
      "name": "THEOS",
      "symbol": "THEOS",
      "decimals": 18,
      "address": "0xDb982a636807B3ACD9FD28a99410B68c2159Fb32",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9e10f61749c4952c320412a6b26901605ff6da1d"
      }
    },
    {
      "chainId": 137,
      "name": "Continuum",
      "symbol": "UM",
      "decimals": 18,
      "address": "0x3B1A0c9252ee7403093fF55b4a5886d49a3d837a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb19Dd661F076998e3B0456935092a233e12C2280"
      }
    },
    {
      "chainId": 137,
      "name": "AlphaKlima",
      "symbol": "aKLIMA",
      "decimals": 18,
      "address": "0xEb935614447185eeea0aBC756Ff2ddC99FBB9047",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6b4d5e9ec2aceA23D4110F4803Da99E25443c5Df"
      }
    },
    {
      "chainId": 137,
      "name": "Quant",
      "symbol": "QNT",
      "decimals": 18,
      "address": "0x36B77a184bE8ee56f5E81C56727B20647A42e28E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4a220e6096b25eadb88358cb44068a3248254675"
      }
    },
    {
      "chainId": 137,
      "name": "AqarChain",
      "symbol": "AQR",
      "decimals": 18,
      "address": "0x7467afa7C48132e8f8C90A919fC2ebA041207195",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7467afa7C48132e8f8C90A919fC2ebA041207195"
      }
    },
    {
      "chainId": 137,
      "name": "Scam Inu",
      "symbol": "SINU",
      "decimals": 18,
      "address": "0xe99eF864CC6035a68e6eb4A813FbC6c034277cAc",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xDB6F6C8b940110617cf66E50c271E2278c8a32Df"
      }
    },
    {
      "chainId": 137,
      "name": "NFTicket Token",
      "symbol": "NTT",
      "decimals": 18,
      "address": "0x8B0180f2101c8260d49339abfEe87927412494B4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x023ecaebc57fae26579ae395dcd431d63c072339"
      }
    },
    {
      "chainId": 137,
      "name": "Ripio Coin",
      "symbol": "RPC",
      "decimals": 18,
      "address": "0xe1e516Ed179E8f448f5ebD5eca4F2A892368b78b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xEd025A9Fe4b30bcd68460BCA42583090c2266468"
      }
    },
    {
      "chainId": 137,
      "name": "DIGITAL FITNESS",
      "symbol": "DEFIT",
      "decimals": 18,
      "address": "0xb070d0166A4CE2D47d8af1178847886aA240895D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x84cffa78B2fBbeeC8c37391d2B12A04d2030845e"
      }
    },
    {
      "chainId": 137,
      "name": "IMPULSEVEN",
      "symbol": "i7",
      "decimals": 18,
      "address": "0xF8d7195eEB28c7449f7ef8557fF9A4Da86da0c64",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x560cC7De81B2A594F6518713cBE122bCF297A6E8"
      }
    },
    {
      "chainId": 137,
      "name": "NEUY",
      "symbol": "NEUY",
      "decimals": 18,
      "address": "0x62a872d9977Db171d9e213A5dc2b782e72ca0033",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa80505c408C4DEFD9522981cD77e026f5a49FE63"
      }
    },
    {
      "chainId": 137,
      "name": "HoboNickels",
      "symbol": "HOBO",
      "decimals": 8,
      "address": "0x36FF415d0BcEdF976d60E85c72E01D19230FBd29",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6Ee2AbfBF98D85c7090B5459103334a3638649c4"
      }
    },
    {
      "chainId": 137,
      "name": "Seed Of The Universe",
      "symbol": "SOTU",
      "decimals": 18,
      "address": "0xb89FB010b3a409929E5e4a99F7cd0BEec18e0bC4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa91c82b6933105c23298e631a0c1be751d239162"
      }
    },
    {
      "chainId": 137,
      "name": "Tuschay Coin",
      "symbol": "TSHY",
      "decimals": 18,
      "address": "0xD8f9a909649BA317175A4f2F5416958Af64a0BFC",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xCa9FEEb9f20F0c61a2e2c5C24897BD0206dD899A"
      }
    },
    {
      "chainId": 137,
      "name": "Mobius Token",
      "symbol": "MOT",
      "decimals": 18,
      "address": "0x2db0Db271a10661e7090b6758350E18F6798a49D",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1E02cdbbA6729B6470de81Ad4D2cCA4c514521b9"
      }
    },
    {
      "chainId": 137,
      "name": "UNIC",
      "symbol": "UNIC",
      "decimals": 18,
      "address": "0x21CE5251d47AA72d2d1dc849b1Bcce14d2467D1b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x94e0bab2f6ab1f19f4750e42d7349f2740513ad5"
      }
    },
    {
      "chainId": 137,
      "name": "Amun Wrapped Weth",
      "symbol": "AWW",
      "decimals": 18,
      "address": "0x229F692adA2f4405789D5AEEac832877e4C0750E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x229F692adA2f4405789D5AEEac832877e4C0750E"
      }
    },
    {
      "chainId": 137,
      "name": "EMotiveToken",
      "symbol": "EMOT",
      "decimals": 18,
      "address": "0x23DB3a5dF58eb5EB74b79fF1c64Cf200B07De5ee",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x176b7f05b31ee23cea1c934ed68bc0c3dff43f46"
      }
    },
    {
      "chainId": 137,
      "name": "CRYPTOPUNT Token",
      "symbol": "PUN",
      "decimals": 18,
      "address": "0x908435624Fc23130fDA2d07b10C91cA2B6A57abA",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x31903E333809897eE57Af57567f4377a1a78756c"
      }
    },
    {
      "chainId": 137,
      "name": "Cashpayz Token",
      "symbol": "CPC",
      "decimals": 8,
      "address": "0xe0B4Af6c2E9cb2E43DFe5A357a00CED16da4547b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x28ea81fac7b1719138cbf61267198155b433e00e"
      }
    },
    {
      "chainId": 137,
      "name": "ChilliTest Token",
      "symbol": "CHLITEST",
      "decimals": 18,
      "address": "0x8c7f28BD18ee3BBe766b2036c9E8A8357B07CACa",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8c7f28bd18ee3bbe766b2036c9e8a8357b07caca"
      }
    },
    {
      "chainId": 137,
      "name": "RADIAN",
      "symbol": "RADI",
      "decimals": 18,
      "address": "0x57a0E527611Bcd7e466407a621ce02Bf923C0d15",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8cd0bdeef4a97f788fa8cb5d21185ae10c74dcfa"
      }
    },
    {
      "chainId": 137,
      "name": "BITE POINT",
      "symbol": "BITEPT",
      "decimals": 18,
      "address": "0x5c1A50c4Cd26AD2a3A156c2F4B1A8826E7f3a4e0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1a31c79C54214537cd893A572314996bB6fe472C"
      }
    },
    {
      "chainId": 137,
      "name": "Floki Kishu Inu",
      "symbol": "FLOKII",
      "decimals": 9,
      "address": "0x3EcE64186c05f47e41657ccBf3F9419F76505377",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xFf4DB8E71a8e2655e9295C2C817aC86e65767db1"
      }
    },
    {
      "chainId": 137,
      "name": "Etherlands Playtest Token",
      "symbol": "HOAP",
      "decimals": 18,
      "address": "0x9e416F2FCE870b8eDd91fc23C9280A77f4c4A928",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7d60fc2f2219537c2605b827fb08f00d8ead44ae"
      }
    },
    {
      "chainId": 137,
      "name": "IRISnet",
      "symbol": "IRIS",
      "decimals": 6,
      "address": "0x3dc6052a693E4a2fc28Eb2Ea12fe0CfD3BD221D1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x76C4A2B59523eaE19594c630aAb43288dBB1463f"
      }
    },
    {
      "chainId": 137,
      "name": "Persistence",
      "symbol": "XPRT",
      "decimals": 6,
      "address": "0xb3b9c016AD1E9f7EFdAE451b04EF696e05658b32",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xae837EacBAE2a6bA166ce0DEd5C72340f212835c"
      }
    },
    {
      "chainId": 137,
      "name": "HARD Protocol",
      "symbol": "HARD",
      "decimals": 6,
      "address": "0x8bdC1239840D4a0DB234F2E7D65dF83164D18e49",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1C700F95Df53fc31e83D89AC89e5DD778D4cD310"
      }
    },
    {
      "chainId": 137,
      "name": "Osmosis",
      "symbol": "OSMO",
      "decimals": 6,
      "address": "0x8C7a56F2F2fD97DA0f5b4FAde180Fa8DC3fbEa8D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x93A62Ccfcf1EfCB5f60317981F71ed6Fb39F4BA2"
      }
    },
    {
      "chainId": 137,
      "name": "Regen Network",
      "symbol": "REGEN",
      "decimals": 6,
      "address": "0xEc482De9569a5EA3Dd9779039b79e53F15791fDE",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xeEE10b3736d5978924f392ED67497cfAE795128B"
      }
    },
    {
      "chainId": 137,
      "name": "Ion",
      "symbol": "ION",
      "decimals": 6,
      "address": "0x68b741416153bBf5CB4FaEe0aA447f918fE5C322",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xee59B43149CEAD680aedF8778163ce8CB8c8A6fB"
      }
    },
    {
      "chainId": 137,
      "name": "Kava.io",
      "symbol": "KAVA",
      "decimals": 6,
      "address": "0x87D32F2C0A3D6D091772890C81E321026454a125",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0C356B7fD36a5357E5A017EF11887ba100C9AB76"
      }
    },
    {
      "chainId": 137,
      "name": "Polybius Token",
      "symbol": "PLBT",
      "decimals": 6,
      "address": "0x65885a2Aa8888d2891246B9d811b0a8E15d75d48",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0affa06e7fbe5bc9a764c979aa66e8256a631f02"
      }
    },
    {
      "chainId": 137,
      "name": "10Set Token",
      "symbol": "10SET",
      "decimals": 18,
      "address": "0x602C6690A6cb2D2Fce95AD50Fe81d731dF0AD6ed",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7FF4169a6B5122b664c51c95727d87750eC07c84"
      }
    },
    {
      "chainId": 137,
      "name": "CHARLI3",
      "symbol": "C3",
      "decimals": 18,
      "address": "0xc73594aA7593182a516331e712fEA2d8C49FF8DD",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf1a91c7d44768070f711c68f33a7ca25c8d30268"
      }
    },
    {
      "chainId": 137,
      "name": "GeroWallet",
      "symbol": "GERO",
      "decimals": 18,
      "address": "0x99aB67C6D0b9BF4201cd9AAd66F84F5F524e0018",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3431f91b3a388115f00c5ba9fdb899851d005fb5"
      }
    },
    {
      "chainId": 137,
      "name": "Zks",
      "symbol": "ZKS",
      "decimals": 18,
      "address": "0x70B7B259001c1aF1583fc466C27f49105f38fbFd",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe4815ae53b124e7263f08dcdbbb757d41ed658c6"
      }
    },
    {
      "chainId": 137,
      "name": "Zero.Exchange Token",
      "symbol": "ZERO",
      "decimals": 18,
      "address": "0x96fEbBC05Bb00F83bb5A3F20DD97940454EC3b7d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf0939011a9bb95c3b791f0cb546377ed2693a574"
      }
    },
    {
      "chainId": 137,
      "name": "SmartKey",
      "symbol": "Skey",
      "decimals": 8,
      "address": "0x2B642B8289780cA28ec283f2ab1932436d82AC02",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x06a01a4d579479dd5d884ebf61a31727a3d8d442"
      }
    },
    {
      "chainId": 137,
      "name": "Hanu Yokia",
      "symbol": "HANU",
      "decimals": 12,
      "address": "0x709A4B6217584188DDb93c82f5d716D969accE1C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x72e5390edb7727e3d4e3436451dadaff675dbcc0"
      }
    },
    {
      "chainId": 137,
      "name": "Cosmos",
      "symbol": "ATOM",
      "decimals": 6,
      "address": "0xac51C4c48Dc3116487eD4BC16542e27B5694Da1b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8D983cb9388EaC77af0474fA441C4815500Cb7BB"
      }
    },
    {
      "chainId": 137,
      "name": "wLitiCapital",
      "symbol": "wLITI",
      "decimals": 18,
      "address": "0x3674fFe94d5a306DdA2CDcdC0D735561E4E79bC8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0b63128c40737b13647552e0c926bcfeccc35f93"
      }
    },
    {
      "chainId": 137,
      "name": "XEND",
      "symbol": "XEND",
      "decimals": 18,
      "address": "0x4A2B3c1527cf704D959390c0063FcF2A9E2bD9c1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xE4CFE9eAa8Cdb0942A80B7bC68fD8Ab0F6D44903"
      }
    },
    {
      "chainId": 137,
      "name": "Andy Coin",
      "symbol": "ANDY",
      "decimals": 18,
      "address": "0xcB816bEdd44D1d04870d4A171A2CD93903356960",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1465140fac1cf3760093f1ea2c78289f6b0e432f"
      }
    },
    {
      "chainId": 137,
      "name": "The Doge NFT",
      "symbol": "DOG",
      "decimals": 18,
      "address": "0x4d7d6e43ED36298Bfe287711a48c1018D87f272c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xBAac2B4491727D78D2b78815144570b9f2Fe8899"
      }
    },
    {
      "chainId": 137,
      "name": "The 4th Pillar Token",
      "symbol": "FOUR",
      "decimals": 18,
      "address": "0x48cBc913dE09317dF2365e6827Df50dA083701D5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0"
      }
    },
    {
      "chainId": 137,
      "name": "USDP Stablecoin",
      "symbol": "USDP",
      "decimals": 18,
      "address": "0xD778beF166D19548799E5f4A5D6354b22883563d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1456688345527be1f37e9e627da0837d6f08c925"
      }
    },
    {
      "chainId": 137,
      "name": "Proxy",
      "symbol": "PRXY",
      "decimals": 18,
      "address": "0x1441729568ab2A9871677edfeb13fBFCc7157a26",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x22acaee85ddb83a3a33b7f0928a0e2c3bfdb6a4f"
      }
    },
    {
      "chainId": 137,
      "name": "Wolves Of Wall Street",
      "symbol": "WOWS",
      "decimals": 18,
      "address": "0x9661c0614A80319c8Be0FF360079902350aD547D",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x672EF7E4Fe230B5cA1466C5fDD40588d30FdF90a"
      }
    },
    {
      "chainId": 137,
      "name": "ZKCHAOS",
      "symbol": "CHAOS",
      "decimals": 18,
      "address": "0x6B3C5075c01771d6E083D150212b3653030D4da4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb53de031602cd825febe9f2eedf962cd8cc3805d"
      }
    },
    {
      "chainId": 137,
      "name": "\"Silicon Valley Entrepreneurs Token",
      "symbol": "SVET",
      "decimals": 18,
      "address": "0xF5499D8714e55DCf4E84C861cA1C8358e7E69cBA",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x434CE605FC30C456c178B5B5842e54fE7C023633"
      }
    },
    {
      "chainId": 137,
      "name": "VENT",
      "symbol": "VENT",
      "decimals": 18,
      "address": "0xd116d8EA4dE1225D3F903FdA43493E93eb4b1D54",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5f0bc16d50f72d10b719dbf6845de2e599eb5624"
      }
    },
    {
      "chainId": 137,
      "name": "+Wrapped Smart Advertising Transaction Token",
      "symbol": "WSATT",
      "decimals": 18,
      "address": "0x4B6D775B7EA8E66499CB80777E65B895474f5C86",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x70A6395650b47D94A77dE4cFEDF9629f6922e645"
      }
    },
    {
      "chainId": 137,
      "name": "xIMX",
      "symbol": "Staked IMX",
      "decimals": 18,
      "address": "0xfF52775dE813D060aA5854657055fB19b3a3DDa5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x363B2DEaC84F0100d63C7427335F8350f596bf59"
      }
    },
    {
      "chainId": 137,
      "name": "MileShare",
      "symbol": "MILE",
      "decimals": 18,
      "address": "0xBbc8cCC5d47E9EFfC15F0c71A4e0eE8046546385",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x925d53524783fA6883dE2FABCCB1eC466ee4E20b"
      }
    },
    {
      "chainId": 137,
      "name": "Torum",
      "symbol": "XTM",
      "decimals": 18,
      "address": "0xE1C42BE9699Ff4E11674819c1885D43Bd92E9D15",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xCd1fAFf6e578Fa5cAC469d2418C95671bA1a62Fe"
      }
    },
    {
      "chainId": 137,
      "name": "Hypersign Identity Token",
      "symbol": "HID",
      "decimals": 18,
      "address": "0x87847703D4bb4FCD42DB887FfdcB94496e77e3ab",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb14ebf566511b9e6002bb286016ab2497b9b9c9d"
      }
    },
    {
      "chainId": 137,
      "name": "Dorayaki",
      "symbol": "DORA",
      "decimals": 18,
      "address": "0x66147c74ABf6323A22C33e039DC761c07Df05878",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbc4171f45ef0ef66e76f979df021a34b46dcc81d"
      }
    },
    {
      "chainId": 137,
      "name": "UniArts Network Token",
      "symbol": "UART",
      "decimals": 12,
      "address": "0xf244E91A46A9cdd48da295cA5d0B27894f8032B1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x507BDe03A87a6aA134d16634545E3D79c11c137D"
      }
    },
    {
      "chainId": 137,
      "name": "Dugg",
      "symbol": "DUGG",
      "decimals": 18,
      "address": "0x4e0dD84d8D5CBd7753407D82824a344CE380fCDe",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x20ba4069294db3429d249fc4bc59b25b860a9ad1"
      }
    },
    {
      "chainId": 137,
      "name": "Polinate",
      "symbol": "POLI",
      "decimals": 18,
      "address": "0x6fb54Ffe60386aC33b722be13d2549dd87BF63AF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa1a36D3537bBe375Cc9694795F663DDC8D516Db9"
      }
    },
    {
      "chainId": 137,
      "name": "Lionverse Juice",
      "symbol": "LVJ",
      "decimals": 18,
      "address": "0x42f2fcb9A26ac8cDd3E96e51b89134c3d4Dc509f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x87cdbe3c31F2A9E1c506DC2F827A02472A0660cE"
      }
    },
    {
      "chainId": 137,
      "name": "Snook",
      "symbol": "SNK",
      "decimals": 18,
      "address": "0x689f8e5913C158fFB5Ac5aeb83b3C875F5d20309",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xF9a3b62C2c9faD5aEC118c706323cED3242c9551"
      }
    },
    {
      "chainId": 137,
      "name": "Pinkslip Finance",
      "symbol": "PSLIP",
      "decimals": 18,
      "address": "0xdC92de2CDbE69FEA9B1E4939D934f7F5195Bb1c9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x36ce7a52cda404b8fa87a98d0d17ec7dd0b144ed"
      }
    },
    {
      "chainId": 137,
      "name": "Adventure Gold",
      "symbol": "AGLD",
      "decimals": 18,
      "address": "0x6a6bD53d677F8632631662C48bD47b1D4D6524ee",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x32353a6c91143bfd6c7d363b546e62a9a2489a20"
      }
    },
    {
      "chainId": 137,
      "name": "IPv6Token.com",
      "symbol": "IPV6",
      "decimals": 18,
      "address": "0x06a0462e6b25793f306828C20033a7DB6E926394",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf44217cadef3316e01c5d7b2a2401b5b7ab82e8b"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Ether IOU",
      "symbol": "iWETH",
      "decimals": 18,
      "address": "0x3DA47Ba3528FDcA867b94496027c65d504eef8e6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3DA47Ba3528FDcA867b94496027c65d504eef8e6"
      }
    },
    {
      "chainId": 137,
      "name": "Page",
      "symbol": "PAGE",
      "decimals": 8,
      "address": "0x9ceE70895726B0ea14E6019C961dAf32222a7C2f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x60e683c6514edd5f758a55b6f393bebbafaa8d5e"
      }
    },
    {
      "chainId": 137,
      "name": "dotmoovs",
      "symbol": "MOOV",
      "decimals": 18,
      "address": "0xe46F5128B933e5A6F907Fe73EcE80059c222DB0A",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x24ec2ca132abf8f6f8a6e24a1b97943e31f256a7"
      }
    },
    {
      "chainId": 137,
      "name": "MCF token",
      "symbol": "MCF",
      "decimals": 10,
      "address": "0x15E5C5C8CeFa0AafebeF55B1A43Db5d2c9A4B6AE",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe33ae4e795114279721047484e5ad5cc7df24fcb"
      }
    },
    {
      "chainId": 137,
      "name": "DOGZ",
      "symbol": "DOGZ",
      "decimals": 18,
      "address": "0x29198A281fe6ED6a49AbE32A5d6864aDcCD7E89e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x82A77710495A35549D2aDD797412b4a4497D33eF"
      }
    },
    {
      "chainId": 137,
      "name": "PIGX",
      "symbol": "PIGX",
      "decimals": 18,
      "address": "0x0eF2603Cd156E1934E19D0B07Cd64F415e1E7940",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x47e820df943170b0e31f9e18ecd5bdd67b77ff1f"
      }
    },
    {
      "chainId": 137,
      "name": "Z.com USD",
      "symbol": "ZUSD",
      "decimals": 6,
      "address": "0x83a3b215b256df3f2Bc97DD0Fe1Fe32aF0d66D19",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc56c2b7e71B54d38Aab6d52E94a04Cbfa8F604fA"
      }
    },
    {
      "chainId": 137,
      "name": "GMO JPY",
      "symbol": "GYEN",
      "decimals": 6,
      "address": "0x482bc619eE7662759CDc0685B4E78f464Da39C73",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xC08512927D12348F6620a698105e1BAac6EcD911"
      }
    },
    {
      "chainId": 137,
      "name": "indaHash Coin",
      "symbol": "IDH",
      "decimals": 6,
      "address": "0x95a54B74a4891A7f41f7f72f3713e1764eEFCd4B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5136c98a80811c3f46bdda8b5c4555cfd9f812f0"
      }
    },
    {
      "chainId": 137,
      "name": "Knit Finance",
      "symbol": "KFT",
      "decimals": 18,
      "address": "0xdf6843eeAEC6213625bC85E6E2C3AEa0782a9748",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xEF53462838000184F35f7D991452e5f25110b207"
      }
    },
    {
      "chainId": 137,
      "name": "Neonious Token",
      "symbol": "MDSIM",
      "decimals": 18,
      "address": "0xE454034b75Bb9D017f21228e61b9Ddbc889623C0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xda48c42517affb3bf3fc13ce26561092e1a61a80"
      }
    },
    {
      "chainId": 137,
      "name": "DaTa eXchange Token",
      "symbol": "DTX",
      "decimals": 18,
      "address": "0x3f717919deF69f81d17b80839bf8af35697ccbFa",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x765f0c16d1ddc279295c1a7c24b0883f62d33f75"
      }
    },
    {
      "chainId": 137,
      "name": "BITTOKEN",
      "symbol": "BITT",
      "decimals": 18,
      "address": "0xfd0cbdDec28a93bB86B9db4A62258F5EF25fEfdE",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9F9913853f749b3fE6D6D4e16a1Cc3C1656B6D51"
      }
    },
    {
      "chainId": 137,
      "name": "Shine",
      "symbol": "SHN",
      "decimals": 18,
      "address": "0x53D76f967De13E7F95e90196438DCe695eCFA957",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1C7ede23b1361acC098A1e357C9085D131b34a01"
      }
    },
    {
      "chainId": 137,
      "name": "PolkaBridge",
      "symbol": "PBR",
      "decimals": 18,
      "address": "0x0D6ae2a429df13e44A07Cd2969E085e4833f64A0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x298d492e8c1d909d3f63bc4a36c66c64acb3d695"
      }
    },
    {
      "chainId": 137,
      "name": "TknERC721Name",
      "symbol": "TknERC721Sym",
      "decimals": 18,
      "address": "0x3b82319eF9e45c16621CC6F6b588324f5719a882",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2e16ba24F298dC205aC58791e0dab4141E79f3D4"
      }
    },
    {
      "chainId": 137,
      "name": "ELDORADO TOKEN",
      "symbol": "ERD",
      "decimals": 2,
      "address": "0x2df2DC62Cc1dFAc66867524942E83439D558D8b9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x12dc767728105aa415dd720dfbd0ea1d85841172"
      }
    },
    {
      "chainId": 137,
      "name": "CelerToken",
      "symbol": "CELR",
      "decimals": 18,
      "address": "0x91a4635F620766145C099E15889Bd2766906A559",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667"
      }
    },
    {
      "chainId": 137,
      "name": "TORG",
      "symbol": "TORG",
      "decimals": 18,
      "address": "0xe9993763E0B7f7d915A62A5f22A6E151F91d98A8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcfa0885131f602d11d4da248d2c65a62063567a9"
      }
    },
    {
      "chainId": 137,
      "name": "THE TRUTH",
      "symbol": "UFO",
      "decimals": 18,
      "address": "0x57194feaca970A4E98A19C365FE144fB54F657DB",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b"
      }
    },
    {
      "chainId": 137,
      "name": "Float Protocol: FLOAT",
      "symbol": "FLOAT",
      "decimals": 18,
      "address": "0xF0Ae1EFdE60BAb0a830673747138F12367858e8D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb05097849bca421a3f51b249ba6cca4af4b97cb9"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Navcoin",
      "symbol": "WNAV",
      "decimals": 8,
      "address": "0x1a6872038B633Bc9EbD2ea36df3f81eAcd9b8823",
      "logoURI": "https://navcoin.org/images/nav-logo-border.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x75571a52de30e2d7160af134798acfb80cc9c0be"
      }
    },
    {
      "chainId": 137,
      "name": "Party Of The Living Dead",
      "symbol": "DEAD",
      "decimals": 18,
      "address": "0xeEEdf2960cdDA52cf2a5B3477B171B9F8b13d700",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0c7060bf06a78aaaab3fac76941318a52a3f4613"
      }
    },
    {
      "chainId": 137,
      "name": "VERA",
      "symbol": "VRA",
      "decimals": 18,
      "address": "0x0769C9a377a285DBCb5a66326fA90aE330E5F6D3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf411903cbc70a74d22900a5de66a2dda66507255"
      }
    },
    {
      "chainId": 137,
      "name": "Drops Ownership Power",
      "symbol": "DOP",
      "decimals": 18,
      "address": "0x4f2b262AC2D30e88371ddf45690F0C10e9c7807E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6bB61215298F296C55b19Ad842D3Df69021DA2ef"
      }
    },
    {
      "chainId": 137,
      "name": "NFTMart Token",
      "symbol": "NMT",
      "decimals": 18,
      "address": "0xCC12201E4b21B2ad0071b729F2dCC2f1E95977C5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd81b71cbb89b2800cdb000aa277dc1491dc923c3"
      }
    },
    {
      "chainId": 137,
      "name": "StaFi rMATIC",
      "symbol": "rMATIC",
      "decimals": 18,
      "address": "0x9f28e2455f9FFcFac9EBD6084853417362bc5dBb",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3dbb00c9be5a327e25caf4f650844c5dba81e34b"
      }
    },
    {
      "chainId": 137,
      "name": "MetaFactory",
      "symbol": "ROBOT",
      "decimals": 18,
      "address": "0x540EBA0ab20E9d77998f9a26e75079317703D76d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfb5453340c03db5ade474b27e68b6a9c6b2823eb"
      }
    },
    {
      "chainId": 137,
      "name": "Miguel Piedrafita",
      "symbol": "MIGUEL",
      "decimals": 18,
      "address": "0x4B9D66B1d0343EB2f16ebc427270718b7E010f78",
      "logoURI": "https://miguelpiedrafita.com/images/_site/logo.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9eeab5dacad364017c400bfbf717543a0e3c35cb"
      }
    },
    {
      "chainId": 137,
      "name": "Plexus Coin",
      "symbol": "PLEXUS",
      "decimals": 18,
      "address": "0x0B6643f87c37280f5006808Ad4766C34FBF0996C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcFed2d8316D794426a4699a719Bcf18cecF36787"
      }
    },
    {
      "chainId": 137,
      "name": "Unreal Governance Token",
      "symbol": "UGT",
      "decimals": 18,
      "address": "0xBa4c54Ea2d66b904C82847A7d2357d22B857E812",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9cf98eb8a8b28c83e8612046cf55701ce3eb0063"
      }
    },
    {
      "chainId": 137,
      "name": "Yield Guild Games Token",
      "symbol": "YGG",
      "decimals": 18,
      "address": "0x82617aA52dddf5Ed9Bb7B370ED777b3182A30fd1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x25f8087ead173b73d6e8b84329989a8eea16cf73"
      }
    },
    {
      "chainId": 137,
      "name": "SPANK",
      "symbol": "SPANK",
      "decimals": 18,
      "address": "0xfc574229a88292A0dcfd957Ad31B360495403723",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x42d6622dece394b54999fbd73d108123806f6a18"
      }
    },
    {
      "chainId": 137,
      "name": "IDEAOLOGY",
      "symbol": "IDEA",
      "decimals": 18,
      "address": "0xD290C81dC2f51Cf8eEdc8C5FEAFE35e9003A0475",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5d3a4F62124498092Ce665f865E0b38fF6F5FbEa"
      }
    },
    {
      "chainId": 137,
      "name": "Cryptomeda",
      "symbol": "TECH",
      "decimals": 18,
      "address": "0x6286A9e6f7e745A6D884561D88F94542d6715698",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6286A9e6f7e745A6D884561D88F94542d6715698"
      }
    },
    {
      "chainId": 137,
      "name": "Metis Token",
      "symbol": "Metis",
      "decimals": 18,
      "address": "0x1B9D40715E757Bdb9bdEC3215B898E46d8a3b71a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9e32b13ce7f2e80a01932b42553652e053d6ed8e"
      }
    },
    {
      "chainId": 137,
      "name": "Couchain",
      "symbol": "COU",
      "decimals": 18,
      "address": "0xB6027769f15bde8cFB29F3B14dE2e5622405Aa4C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf091cf09c51811819db705710e9634b8bf18f164"
      }
    },
    {
      "chainId": 137,
      "name": "Automata",
      "symbol": "ATA",
      "decimals": 18,
      "address": "0x0df0f72EE0e5c9B7ca761ECec42754992B2Da5BF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa2120b9e674d3fc3875f415a7df52e382f141225"
      }
    },
    {
      "chainId": 137,
      "name": "ALICE",
      "symbol": "ALICE",
      "decimals": 6,
      "address": "0x50858d870FAF55da2fD90FB6DF7c34b5648305C6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xAC51066d7bEC65Dc4589368da368b212745d63E8"
      }
    },
    {
      "chainId": 137,
      "name": "Covalent Query Token",
      "symbol": "CQT",
      "decimals": 18,
      "address": "0x93B0fF1C8828F6eB039D345Ff681eD735086d925",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xD417144312DbF50465b1C641d016962017Ef6240"
      }
    },
    {
      "chainId": 137,
      "name": "JustBet",
      "symbol": "WINR",
      "decimals": 18,
      "address": "0x6d470424afaf9cC6476ce8A5d709B7b35F7Cc790",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x27460aac4b005de72e2326bd8391c27fb41780f8"
      }
    },
    {
      "chainId": 137,
      "name": "Pendle",
      "symbol": "PENDLE",
      "decimals": 18,
      "address": "0x1D47e931F82bb9F8D967F0Cc3288268449835806",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x808507121b80c02388fad14726482e061b8da827"
      }
    },
    {
      "chainId": 137,
      "name": "SinCity",
      "symbol": "SINS",
      "decimals": 18,
      "address": "0x2FAb6278BdfaEB333E4fCF99053349F4111246e5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x59A9aD833d55783a266E098290E679cE987204da"
      }
    },
    {
      "chainId": 137,
      "name": "FREEDOMX",
      "symbol": "FRDMX",
      "decimals": 18,
      "address": "0x3F9b2dF1e7F28E046F32aC97F6bdC2e1eEE5CB6a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1c8504180fcef6ce332c7736707582f661d1a019"
      }
    },
    {
      "chainId": 137,
      "name": "Tipcoin",
      "symbol": "TIP",
      "decimals": 18,
      "address": "0x098eABED893edbA2b7a1855130F1B1fb181f132c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7d7df208e470a328c5768779a04ba456f1618bc4"
      }
    },
    {
      "chainId": 137,
      "name": "WheyTokenV2",
      "symbol": "WHEYV2",
      "decimals": 18,
      "address": "0x0cfbBb89Fd58F6B49B7bF5665397ddc84003d47c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x072cFb8233680B7B196fC8bA6E1aF76CBB5c49E6"
      }
    },
    {
      "chainId": 137,
      "name": "DAOventuresDeFi",
      "symbol": "DVD",
      "decimals": 18,
      "address": "0xaa5eD3C460C38eB71fba089B853d0a91C0e71DD5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x77dcE26c03a9B833fc2D7C31C22Da4f42e9d9582"
      }
    },
    {
      "chainId": 137,
      "name": "BurningDAO",
      "symbol": "BURN",
      "decimals": 18,
      "address": "0x6562Ba24D787DBb6739786a3dF06553018Ec029F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfE9205D6943087B3317D5cF3D393C67d9E15Fec5"
      }
    },
    {
      "chainId": 137,
      "name": "ETH Price Action Candlestick Set",
      "symbol": "ETHPA",
      "decimals": 18,
      "address": "0x3915905289344feDB847d4799D5422f74209Aba9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x09e4bdfb273245063ef5e800d891eff7d04f9b83"
      }
    },
    {
      "chainId": 137,
      "name": "Alligator + Fractal Set",
      "symbol": "GATOR",
      "decimals": 18,
      "address": "0x30dC1ebcbA423368c7Dfc0b2A5192890C7d7ce5B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf5c0e24aca5217bcbae662871cae1a86873f02db"
      }
    },
    {
      "chainId": 137,
      "name": "BTC RSI Crossover Yield Set",
      "symbol": "BTCRSIAPY",
      "decimals": 18,
      "address": "0xDe08FF1Df4CB0bEfcF85E3802490CAeeF10aF60B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x924E26fEe8E10c20726006CC2Bd307A538B0eBE5"
      }
    },
    {
      "chainId": 137,
      "name": "Chad Link Set",
      "symbol": "CHADLINK",
      "decimals": 18,
      "address": "0x134D934Bc4C05C11e19B03342E5E01aBC4C5f27C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x19F4a2f8E21915376F1429C26a3A9B9b1db5FF5A"
      }
    },
    {
      "chainId": 137,
      "name": "BURNS",
      "symbol": "BURNING DAO",
      "decimals": 18,
      "address": "0x61C147570165c53Cf5e60a0B5E6A9e8791619Eb9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9B1Cc775292a42fBE9a224d076819B539507D029"
      }
    },
    {
      "chainId": 137,
      "name": "CryptoCat",
      "symbol": "MEOW",
      "decimals": 18,
      "address": "0x0d7fB73C39411210088Bb76C0E0dB36816e7A951",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x68cd750e0617da0777f34a3c5e848a2471460e73"
      }
    },
    {
      "chainId": 137,
      "name": "Trace Token",
      "symbol": "TRAC",
      "decimals": 18,
      "address": "0xA7b98d63a137bF402b4570799ac4caD0BB1c4B1c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped OMI Token",
      "symbol": "wOMI",
      "decimals": 18,
      "address": "0xAAF165e75B4C9370d22b971AF08c630e76Bfa70c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x04969cd041c0cafb6ac462bd65b536a5bdb3a670"
      }
    },
    {
      "chainId": 137,
      "name": "CFF",
      "symbol": "CFF",
      "decimals": 4,
      "address": "0x770A1864921bAfb324810a2362f7DeF4AFeb1d53",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe3049c12daca3e7c1ce05f2a8d3dce30860c3794"
      }
    },
    {
      "chainId": 137,
      "name": "BASENJI",
      "symbol": "BSJ",
      "decimals": 18,
      "address": "0xF6a38Ce301700e28e0d0a3b021BaE6D4Fa1b5d1b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x43901e05f08f48546fff8d6f8df108f60570498b"
      }
    },
    {
      "chainId": 137,
      "name": "Spell Token",
      "symbol": "SPELL",
      "decimals": 18,
      "address": "0xcdB3C70CD25FD15307D84C4F9D37d5C043B33Fb2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x090185f2135308bad17527004364ebcc2d37e5f6"
      }
    },
    {
      "chainId": 137,
      "name": "MatrixSwapToken",
      "symbol": "MATRIX",
      "decimals": 18,
      "address": "0x211F4e76fcB811ed2B310A232a24B3445d95E3bC",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc8D3DCb63C38607Cb0c9d3F55E8eccE628A01C36"
      }
    },
    {
      "chainId": 137,
      "name": "BDPToken",
      "symbol": "BDP",
      "decimals": 18,
      "address": "0xa88Bebd0DF613eaCa1D8109A803736645a502961",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e"
      }
    },
    {
      "chainId": 137,
      "name": "I HOUSE TOKEN",
      "symbol": "IHT",
      "decimals": 18,
      "address": "0x8a06bF3FAA72f7dcf796608d4Fd54ABb83461eC3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xeda8b016efa8b1161208cf041cd86972eee0f31e"
      }
    },
    {
      "chainId": 137,
      "name": "Token for Television",
      "symbol": "TTV",
      "decimals": 18,
      "address": "0xaFBb5E3873dE55dB4f2708A08A90677c7a685a6E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa838be6e4b760e6061d4732d6b9f11bf578f9a76"
      }
    },
    {
      "chainId": 137,
      "name": "xWIN Token from BSC",
      "symbol": "XWIN",
      "decimals": 18,
      "address": "0xC2B6200a9ced47B12f95587f3e1E2640893a26D6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x95d6bd26351ebc9fdb23555d2abf990cd17c6a46"
      }
    },
    {
      "chainId": 137,
      "name": "NOAH DECENTRALIZED STATE COIN",
      "symbol": "NOAHP",
      "decimals": 18,
      "address": "0xA01749C95b876148c47A6F1FfB7Ea88C8e72903c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x41b3F18c6384Dc9A39c33AFEcA60d9b8e61eAa9F"
      }
    },
    {
      "chainId": 137,
      "name": "BRL Coin",
      "symbol": "BRLC",
      "decimals": 6,
      "address": "0x3aDdA29B608418Cc63385138F990A754901291e8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x153799b3D83941B9301674f1F147506c91711c25"
      }
    },
    {
      "chainId": 137,
      "name": "Cook Token",
      "symbol": "COOK",
      "decimals": 18,
      "address": "0x35BB0DB8210a2A6A333EF81aF92E9ebe4AAdC456",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xff75ced57419bcaebe5f05254983b013b0646ef5"
      }
    },
    {
      "chainId": 137,
      "name": "Amongus.finance",
      "symbol": "AMONG",
      "decimals": 18,
      "address": "0xD74CE620dDF70E7c143aF75519712e8eaDA541f3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xF841D292c1141cbF1460A1E2010916565a010cc8"
      }
    },
    {
      "chainId": 137,
      "name": "Pudgy Penguin #4815",
      "symbol": "PENG4815",
      "decimals": 18,
      "address": "0x69377cC6f2929bd19039E88A54103FBC10BC4fA9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x40f7b17cc65b90feda698d7c7e1572c0cbc06499"
      }
    },
    {
      "chainId": 137,
      "name": "The Crowd",
      "symbol": "CROWD",
      "decimals": 18,
      "address": "0x7f556fcB59a27b3E0046E3EA400A425a6ad2040D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7ce217b011ab060196128ab86a27be7763802fbc"
      }
    },
    {
      "chainId": 137,
      "name": "Day By Day Token",
      "symbol": "DBD",
      "decimals": 18,
      "address": "0x72b9f88e822cf08B031c2206612B025a82fb303C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa5f1dbb0e55bc31f32c6d032bee330288490e722"
      }
    },
    {
      "chainId": 137,
      "name": "Taraxa Coin",
      "symbol": "TARA",
      "decimals": 18,
      "address": "0xBEd23818D193B3573CFe651792ED6AD484dCC629",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf001937650bb4f62b57521824b2c20f5b91bea05"
      }
    },
    {
      "chainId": 137,
      "name": "Opacity",
      "symbol": "OPCT",
      "decimals": 18,
      "address": "0xce6bF09e5c7A3E65B84F88DcC6475c88d38BA5eF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xDb05EA0877A2622883941b939f0bb11d1ac7c400"
      }
    },
    {
      "chainId": 137,
      "name": "#Smart Advertising Transaction Token",
      "symbol": "SATT",
      "decimals": 18,
      "address": "0xF9137CF627878a1C7e2b0EEb1e91e64BbdbcFd27",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdf49c9f599a0a9049d97cff34d0c30e468987389"
      }
    },
    {
      "chainId": 137,
      "name": "ChartEx",
      "symbol": "CHART",
      "decimals": 18,
      "address": "0xa09E1BF2205CDb1FBf57023258f3e731c5311b4d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1d37986f252d0e349522ea6c3b98cb935495e63e"
      }
    },
    {
      "chainId": 137,
      "name": "Cirus",
      "symbol": "CIRUS",
      "decimals": 18,
      "address": "0x2a82437475A60BebD53e33997636fadE77604fc2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa01199c61841fce3b3dafb83fefc1899715c8756"
      }
    },
    {
      "chainId": 137,
      "name": "Ethereum Money",
      "symbol": "ETHMNY",
      "decimals": 2,
      "address": "0x96f99063ECF25B72cEf4ed1473438AA623D27b82",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbf4a2ddaa16148a9d0fa2093ffac450adb7cd4aa"
      }
    },
    {
      "chainId": 137,
      "name": "Presail",
      "symbol": "PRESAIL",
      "decimals": 18,
      "address": "0x566BE1AE21A925896A7d267A80ffCA5501653F14",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x232A6D2B6ea24676209905f77d5706e395c271C1"
      }
    },
    {
      "chainId": 137,
      "name": "NFT Zoo",
      "symbol": "ZOOBY",
      "decimals": 18,
      "address": "0x755Df36E63e6452FaB42DB97490cd09f3958A8d7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xccddbab85426b81b6b2d5d804510aae07cb0d7e1"
      }
    },
    {
      "chainId": 137,
      "name": "bns.finance",
      "symbol": "BNSD",
      "decimals": 18,
      "address": "0xFe457497A2A71bCE1eb93eA9e6a685057dd93dEe",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x668DbF100635f593A3847c0bDaF21f0a09380188"
      }
    },
    {
      "chainId": 137,
      "name": "BNS Token",
      "symbol": "BNS",
      "decimals": 8,
      "address": "0x350bf84b899E3A7abC9048F28d25eaEBde8E9916",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x695106Ad73f506f9D0A9650a78019A93149AE07C"
      }
    },
    {
      "chainId": 137,
      "name": "yfii Tether USD",
      "symbol": "iUSDT",
      "decimals": 6,
      "address": "0x6A3E4008aF5DCFc416e1B17130783dAEE13AB694",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x72cf258c852dc485a853370171d46b9d29fd3184"
      }
    },
    {
      "chainId": 137,
      "name": "DigitexFutures",
      "symbol": "DGTX",
      "decimals": 18,
      "address": "0xE749Ea14A2D18E361eD092EbefbA64D77a8B4EaC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc666081073e8dff8d3d1c2292a29ae1a2153ec09"
      }
    },
    {
      "chainId": 137,
      "name": "Clover",
      "symbol": "CLV",
      "decimals": 6,
      "address": "0x468041079d9d99c87F5a17b44Be6D6a529B5F597",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x22222c03318440305ac3e8a7820563d6a9fd777f"
      }
    },
    {
      "chainId": 137,
      "name": "AlphaToken",
      "symbol": "ALPHA",
      "decimals": 18,
      "address": "0x3AE490db48d74B1bC626400135d4616377D0109f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa1faa113cbe53436df28ff0aee54275c13b40975"
      }
    },
    {
      "chainId": 137,
      "name": "Osinachi",
      "symbol": "OSINA",
      "decimals": 4,
      "address": "0x574b21E8f0322acC3C9c31f4d291fD363867fbEe",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x39ad22c916f42af5f67371d6f2fb0dab42321a89"
      }
    },
    {
      "chainId": 137,
      "name": "Afrofuture",
      "symbol": "AFTR",
      "decimals": 8,
      "address": "0x228a22bf6da9353Abbe37a31cf85c02dfC432456",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x56dfa98f363edb99240b63f8a5141d8b64cfaf6e"
      }
    },
    {
      "chainId": 137,
      "name": "Convex Token",
      "symbol": "CVX",
      "decimals": 18,
      "address": "0x4257EA7637c355F81616050CbB6a9b709fd72683",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b"
      }
    },
    {
      "chainId": 137,
      "name": "dYdX",
      "symbol": "DYDX",
      "decimals": 18,
      "address": "0x4C3bF0a3DE9524aF68327d1D2558a3B70d17D42a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x92d6c1e31e14520e676a687f0a93788b716beff5"
      }
    },
    {
      "chainId": 137,
      "name": "Toshi Token",
      "symbol": "TOSHI",
      "decimals": 18,
      "address": "0xfE31a87c001c7B0FcDF4c480621222d4FE793364",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf136d7b0b7ae5b86d21e7b78dfa95375a7360f19"
      }
    },
    {
      "chainId": 137,
      "name": "GLOBALTRUSTFUND TOKEN",
      "symbol": "GTF",
      "decimals": 8,
      "address": "0x8cB96E95C714E0996e6D299F617F518D965E352E",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x87befc1d367190f2b9cbe9b689e0e5ca658e3b71"
      }
    },
    {
      "chainId": 137,
      "name": "XCAD Token",
      "symbol": "XCAD",
      "decimals": 18,
      "address": "0xA55870278d6389ec5B524553D03C04F5677c061E",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7659ce147d0e714454073a5dd7003544234b6aa0"
      }
    },
    {
      "chainId": 137,
      "name": "AllyFocus",
      "symbol": "XYR",
      "decimals": 18,
      "address": "0x85BD0Db4F1B8bAE55a6Dc741D332b18bFb26A13e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x56910520988c1d3edfdeae2acbe965d819b2e26d"
      }
    },
    {
      "chainId": 137,
      "name": "ORO Token",
      "symbol": "ORO",
      "decimals": 18,
      "address": "0x2651b9C63290E543902dA4eb63c34029382FF552",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc3eb2622190c57429aac3901808994443b64b466"
      }
    },
    {
      "chainId": 137,
      "name": "GridZone.io",
      "symbol": "ZONE",
      "decimals": 18,
      "address": "0x5Ab64dAAAa458d8f2019C0a3F2275FDc27e498D1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xC1D9B5A0776d7C8B98b8A838e5a0DD1Bc5Fdd53C"
      }
    },
    {
      "chainId": 137,
      "name": "OddzToken",
      "symbol": "ODDZ",
      "decimals": 18,
      "address": "0xC1e2ca002E03207F933d358DbDEcBaD108C4191a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6"
      }
    },
    {
      "chainId": 137,
      "name": "Epicenter Token",
      "symbol": "ECR",
      "decimals": 18,
      "address": "0x89606fA5d084edA5E9949F7b8F750c65c609eB46",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x62De7d65739d2ac81C12CC30BBB1223c88753C23"
      }
    },
    {
      "chainId": 137,
      "name": "EtherCats.io",
      "symbol": "ECAT",
      "decimals": 18,
      "address": "0xa1D6Cd1a37f82813Ac9852cd7E96f909cbccEa06",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x120cBc99bb2a713872C6B8d06306Ddb79c55E96f"
      }
    },
    {
      "chainId": 137,
      "name": "WIPcoin",
      "symbol": "WIPC",
      "decimals": 18,
      "address": "0x8Cd9524406e9571EF524DBE8dFaCC7743fA72507",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xab47fbe8A0b75Baa4Ef846E99f6bB3b52007A115"
      }
    },
    {
      "chainId": 137,
      "name": "Kwikswap",
      "symbol": "KWIK",
      "decimals": 18,
      "address": "0x8DF74088b3aeCfd0cB97BcFd053B173782f01e3A",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x286C0936c7Eaf6651099Ab5DAb9ee5A6cB5d229D"
      }
    },
    {
      "chainId": 137,
      "name": "Etherdieum",
      "symbol": "ED",
      "decimals": 8,
      "address": "0x7Dadd73F6AE9e4cE0bA50d8818ebd8A7eC578b11",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x502d9bd338486432c3eddfd3d578e9dc9f0e6372"
      }
    },
    {
      "chainId": 137,
      "name": "HHKcoin",
      "symbol": "HHK",
      "decimals": 18,
      "address": "0x82f735270cfcCbCbceA08141f93Ed1816B779874",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc7b54f6d4d240aa2589d64f1e4608e614c84d60d"
      }
    },
    {
      "chainId": 137,
      "name": "GODL",
      "symbol": "GODL",
      "decimals": 18,
      "address": "0xb233c90A0ebe7E19C30dB979B602803715cDB398",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7f509465c38b66bdecec2cfdc842e11809cc8357"
      }
    },
    {
      "chainId": 137,
      "name": "Hot Cross Token",
      "symbol": "HOTCROSS",
      "decimals": 18,
      "address": "0x3b737a181f7d2532cF49864f8050b3465a310593",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4297394c20800e8a38a619a243e9bbe7681ff24e"
      }
    },
    {
      "chainId": 137,
      "name": "DAO Invest",
      "symbol": "VEST",
      "decimals": 18,
      "address": "0x381caf412B45dAc0f62FBEeC89DE306D3eABE384",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1f19f83fC9a25F3C861260143E36c17706257986"
      }
    },
    {
      "chainId": 137,
      "name": "IDEX Token",
      "symbol": "IDEX",
      "decimals": 18,
      "address": "0x9Cb74C8032b007466865f060ad2c46145d45553D",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae"
      }
    },
    {
      "chainId": 137,
      "name": "SMART TRADE NETWORKS 5",
      "symbol": "STN5",
      "decimals": 18,
      "address": "0xE4f0EefC8b184d9AFDD5Cfb6e4281ec27B6f3095",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x55150E8378B81F930f310d4B62AB7e1252c30B9B"
      }
    },
    {
      "chainId": 137,
      "name": "Bankless BED Index",
      "symbol": "BED",
      "decimals": 18,
      "address": "0xeEDa694439C6FB56CbAA011cC849650b7273285B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2af1df3ab0ab157e1e2ad8f88a7d04fbea0c7dc6"
      }
    },
    {
      "chainId": 137,
      "name": "SW Capital",
      "symbol": "SWC",
      "decimals": 18,
      "address": "0x01aE14B9643a720Dc3181abfA05e65c528b5A30F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8dca21c5c8165886ea1fa800ff9321ec74fde2c0"
      }
    },
    {
      "chainId": 137,
      "name": "Wasabi",
      "symbol": "WASABI",
      "decimals": 18,
      "address": "0x167F8C8A1AF9A4c851C8E541BA0f9939D395cCF1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x896e145568624a498c5a909187363AE947631503"
      }
    },
    {
      "chainId": 137,
      "name": "Atlas Rising",
      "symbol": "rising",
      "decimals": 18,
      "address": "0xa83D20E7B0e5c3483bbF65091c3591cEB7f75D97",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf4383b0aeb7f6c3ad411dc5f3d83594592646b11"
      }
    },
    {
      "chainId": 137,
      "name": "ARPA Token",
      "symbol": "ARPA",
      "decimals": 18,
      "address": "0xEE800B277A96B0f490a1A732e1D6395FAD960A26",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xba50933c268f567bdc86e1ac131be072c6b0b71a"
      }
    },
    {
      "chainId": 137,
      "name": "Nsure Network Token",
      "symbol": "Nsure",
      "decimals": 18,
      "address": "0x2D61F243d1a4c16640c3961100f50222679EC89E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x20945cA1df56D237fD40036d47E866C7DcCD2114"
      }
    },
    {
      "chainId": 137,
      "name": "Blockchain Certified Data Token",
      "symbol": "BCDT",
      "decimals": 18,
      "address": "0xe7789178ddC4Edb3b038115B1826c66640C57Ecc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5"
      }
    },
    {
      "chainId": 137,
      "name": "Tyrannical",
      "symbol": "TIN",
      "decimals": 8,
      "address": "0xEF6B7E511c18B5fC0099e680f17AE5C3b7601d26",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xA52360d0e1290023100D0787623faA0b1784E7ff"
      }
    },
    {
      "chainId": 137,
      "name": "Aragon Network Token",
      "symbol": "ANT",
      "decimals": 18,
      "address": "0x2b8504ab5eFc246d0eC5Ec7E74565683227497de",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa117000000f279d81a1d3cc75430faa017fa5a2e"
      }
    },
    {
      "chainId": 137,
      "name": "Dragon",
      "symbol": "DRGN",
      "decimals": 18,
      "address": "0xE69Fa47DFe3aA7F5e5F5642110901f917513459b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e"
      }
    },
    {
      "chainId": 137,
      "name": "Cindicator Token",
      "symbol": "CND",
      "decimals": 18,
      "address": "0x7f4e5fC5D43D1EB91447011AC83957F673e31E9A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd4c435f5b09f855c3317c8524cb1f586e42795fa"
      }
    },
    {
      "chainId": 137,
      "name": "UnoRe",
      "symbol": "UNO",
      "decimals": 18,
      "address": "0xb7403EdAA4Ff25Fd05E5b8ee83DeE53F15C4DB39",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x474021845c4643113458ea4414bdb7fb74a01a77"
      }
    },
    {
      "chainId": 137,
      "name": "Bitcoin Black",
      "symbol": "BLACK",
      "decimals": 18,
      "address": "0xEE619a5bC09d6FAC8eB05B1031e5B3379f92F29E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf7ae0daa230bf3fb3c0e5e01e7a6e0a142c6cf7e"
      }
    },
    {
      "chainId": 137,
      "name": "OpenOcean",
      "symbol": "OOE",
      "decimals": 18,
      "address": "0x9d5565dA88e596730522CbC5a918d2A89dbC16d9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7778360f035c589fce2f4ea5786cbd8b36e5396b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ooe.svg"
    },
    {
      "chainId": 137,
      "name": "Wirex Token",
      "symbol": "WXT",
      "decimals": 18,
      "address": "0xC4d094E246B69BB1F2EeDde1e5026BEba532248e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa02120696c7B8fE16C09C749E4598819b2B0E915"
      }
    },
    {
      "chainId": 137,
      "name": "Gen Shards",
      "symbol": "GS",
      "decimals": 18,
      "address": "0xBfa05E530f42999AAfC5F15F98AfdF0667e312Bc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe0B9a2C3E9f40CF74B2C7F591B2b0CCa055c3112"
      }
    },
    {
      "chainId": 137,
      "name": "$Poolz Finance",
      "symbol": "POOLZ",
      "decimals": 18,
      "address": "0xa052EFCDd44F02073B1FDC42bF06017A0234ae03",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x69a95185ee2a045cdc4bcd1b1df10710395e4e23"
      }
    },
    {
      "chainId": 137,
      "name": "BasketDAO DeFi Index",
      "symbol": "BDI",
      "decimals": 18,
      "address": "0x76b1575482BcAA7815964Ed6759FE4bc4b0eB8b2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0309c98B1bffA350bcb3F9fB9780970CA32a5060"
      }
    },
    {
      "chainId": 137,
      "name": "Sheesha Finance",
      "symbol": "SHEESHA",
      "decimals": 18,
      "address": "0xAE8948Bc6b4ec35FfE7Decc6BEb205Ea6d077b57",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x232FB065D9d24c34708eeDbF03724f2e95ABE768"
      }
    },
    {
      "chainId": 137,
      "name": "GamyFi",
      "symbol": "GFX",
      "decimals": 18,
      "address": "0x99aC53C1ab08BAA7c83f444Ebf442d0fcbb09DB6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xE4fA3C576c31696322e8d7165C5965d5a1F6A1A5"
      }
    },
    {
      "chainId": 137,
      "name": "Cover Protocol Governance Token",
      "symbol": "COVER",
      "decimals": 18,
      "address": "0x708CCa2f9EdED49918865Fd45442eF733155CAcb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4688a8b1F292FDaB17E9a90c8Bc379dC1DBd8713"
      }
    },
    {
      "chainId": 137,
      "name": "Lido DAO Token",
      "symbol": "LDO",
      "decimals": 18,
      "address": "0xC3C7d422809852031b44ab29EEC9F1EfF2A58756",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"
      }
    },
    {
      "chainId": 137,
      "name": "Base Protocol",
      "symbol": "BASE",
      "decimals": 9,
      "address": "0xd4E3F03095A252323506Dd589810Dc78cEa0A923",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x07150e919B4De5fD6a63DE1F9384828396f25fDC"
      }
    },
    {
      "chainId": 137,
      "name": "DODO bird",
      "symbol": "DODO",
      "decimals": 18,
      "address": "0xe4Bf2864ebeC7B7fDf6Eeca9BaCAe7cDfDAffe78",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd"
      }
    },
    {
      "chainId": 137,
      "name": "Ferrum Network Token",
      "symbol": "FRM",
      "decimals": 6,
      "address": "0x0cdf14B01692c57fD8d066A053B3A0FA0Aa2Fc11",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C"
      }
    },
    {
      "chainId": 137,
      "name": "DLP Duck Token",
      "symbol": "DUCK",
      "decimals": 18,
      "address": "0x2B34c0efB7Eeb5bEd0A7253581dB085171dAcB71",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F"
      }
    },
    {
      "chainId": 137,
      "name": "StorjToken",
      "symbol": "STORJ",
      "decimals": 8,
      "address": "0xd72357dAcA2cF11A5F155b9FF7880E595A3F5792",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC"
      }
    },
    {
      "chainId": 137,
      "name": "OKB",
      "symbol": "OKB",
      "decimals": 18,
      "address": "0x8F94400CDeF837F388100cfE56D7ebB8a3A3fb44",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x75231F58b43240C9718Dd58B4967c5114342a86c"
      }
    },
    {
      "chainId": 137,
      "name": "renBCH",
      "symbol": "renBCH",
      "decimals": 8,
      "address": "0x627C50aa6A384933d6354448f70476D3BD02Fcc8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf"
      }
    },
    {
      "chainId": 137,
      "name": "renZEC",
      "symbol": "renZEC",
      "decimals": 8,
      "address": "0x6f0CAd28165121Ab60d3D5504A702e77d644E367",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2"
      }
    },
    {
      "chainId": 137,
      "name": "Morpheus Infrastructure Token",
      "symbol": "MITx",
      "decimals": 18,
      "address": "0x31042A4E66eDa0d12143ffc8cC1552D611dA4cbA",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4a527d8fc13C5203AB24BA0944F4Cb14658D1Db6"
      }
    },
    {
      "chainId": 137,
      "name": "ASSY Index",
      "symbol": "ASSY",
      "decimals": 18,
      "address": "0xd6d8fFC109a3EE48b0c1163a062eaD5Fcc83416e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xFA2562da1Bba7B954f26C74725dF51fb62646313"
      }
    },
    {
      "chainId": 137,
      "name": "Shadows Network",
      "symbol": "DOWS",
      "decimals": 18,
      "address": "0xf3681947a43F180ea68a8b949F5E7A18df946a09",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x661Ab0Ed68000491d98C796146bcF28c20d7c559"
      }
    },
    {
      "chainId": 137,
      "name": "Ampleforth",
      "symbol": "AMPL",
      "decimals": 9,
      "address": "0x688AB7562301b3B58B67bEB614986B51ad3698eB",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xD46bA6D942050d489DBd938a2C909A5d5039A161"
      }
    },
    {
      "chainId": 137,
      "name": "yffi.finance",
      "symbol": "YFFI",
      "decimals": 18,
      "address": "0xf862E6a988d0B7B7Bf2f87b8E28454fAfc5A4237",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xCee1d3c3A02267e37E6B373060F79d5d7b9e1669"
      }
    },
    {
      "chainId": 137,
      "name": "DuckDaoDime",
      "symbol": "DDIM",
      "decimals": 18,
      "address": "0x0a5e1dE30E943421Ed9faAeC815125B6BdF9383e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20"
      }
    },
    {
      "chainId": 137,
      "name": "TrueFi",
      "symbol": "TRU",
      "decimals": 8,
      "address": "0x5b77bCA482bd3E7958b1103d123888EfCCDaF803",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784"
      }
    },
    {
      "chainId": 137,
      "name": "BitMax token",
      "symbol": "BTMX",
      "decimals": 18,
      "address": "0xf6a0277582919ea0A78078F54CD11a4bcCfd6Ac7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcca0c9c383076649604eE31b20248BC04FdF61cA"
      }
    },
    {
      "chainId": 137,
      "name": "TenX Pay Token",
      "symbol": "PAY",
      "decimals": 18,
      "address": "0x163e9c8DF744B38Fe1975fBED2Eb3d9005c6655F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xB97048628DB6B661D4C2aA833e95Dbe1A905B280"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pay.svg"
    },
    {
      "chainId": 137,
      "name": "Perlin",
      "symbol": "PERL",
      "decimals": 18,
      "address": "0xB121FCD122DAAa153bB8a102754127b2682645CB",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xeca82185adCE47f39c684352B0439f030f860318"
      }
    },
    {
      "chainId": 137,
      "name": "Compound 0x",
      "symbol": "cZRX",
      "decimals": 8,
      "address": "0x62059c1F748CD663798CEe1B31e86ce28bA73eC2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407"
      }
    },
    {
      "chainId": 137,
      "name": "Monolith TKN",
      "symbol": "TKN",
      "decimals": 8,
      "address": "0xD98DeFAC38214426Ef58Cf7996DE8b373933f902",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a"
      }
    },
    {
      "chainId": 137,
      "name": "LoomToken",
      "symbol": "LOOM",
      "decimals": 18,
      "address": "0x66EfB7cC647e0efab02eBA4316a2d2941193F6b3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/loom.svg"
    },
    {
      "chainId": 137,
      "name": "StableUSD",
      "symbol": "USDS",
      "decimals": 6,
      "address": "0xb09C87726059f2a3d6b795cc7252A225292A53E1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xA4Bdb11dc0a2bEC88d24A3aa1E6Bb17201112eBe"
      }
    },
    {
      "chainId": 137,
      "name": "Pundi X Token",
      "symbol": "NPXS",
      "decimals": 18,
      "address": "0x8d42eCce45f4B30ff2435bD19a983f7616adD16e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xA15C7Ebe1f07CaF6bFF097D8a589fb8AC49Ae5B3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/npxs.svg"
    },
    {
      "chainId": 137,
      "name": "Orion Protocol",
      "symbol": "ORN",
      "decimals": 8,
      "address": "0x0EE392bA5ef1354c9bd75a98044667d307C0e773",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a"
      }
    },
    {
      "chainId": 137,
      "name": "APYSwap",
      "symbol": "APYS",
      "decimals": 18,
      "address": "0x0FfC26BEDf1EB59B27479f0b79D95f61DCFB200C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf7413489c474ca4399eeE604716c72879Eea3615"
      }
    },
    {
      "chainId": 137,
      "name": "DIAToken",
      "symbol": "DIA",
      "decimals": 18,
      "address": "0x993f2CafE9dbE525243f4A78BeBC69DAc8D36000",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419"
      }
    },
    {
      "chainId": 137,
      "name": "Geeq",
      "symbol": "GEEQ",
      "decimals": 18,
      "address": "0x3Ea044a788fF278d4150CE1741c888fFed6Ce44F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6B9f031D718dDed0d681c20cB754F97b3BB81b78"
      }
    },
    {
      "chainId": 137,
      "name": "SIRIN",
      "symbol": "SRN",
      "decimals": 18,
      "address": "0xb37Dc3620b3ed0D09bBD43BCB9ceF277a6a0f49B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x68d57c9a1C35f63E2c83eE8e49A64e9d70528D25"
      }
    },
    {
      "chainId": 137,
      "name": "POA ERC20 on Foundation",
      "symbol": "POA20",
      "decimals": 18,
      "address": "0xFc192E1943289d6731Ae72850da167f4c194ab91",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6758B7d441a9739b98552B373703d8d3d14f9e62"
      }
    },
    {
      "chainId": 137,
      "name": "Synth sETH",
      "symbol": "sETH",
      "decimals": 18,
      "address": "0x53c1AB7a25F1A44921dE8BF479F5528845fc1254",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb"
      }
    },
    {
      "chainId": 137,
      "name": "Compound Dai",
      "symbol": "cDAI",
      "decimals": 8,
      "address": "0x6fe9C1631b37a2b438CFD3d67409E15503Ddd535",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643"
      }
    },
    {
      "chainId": 137,
      "name": "Digix Gold Token",
      "symbol": "DGX",
      "decimals": 9,
      "address": "0xEd29195ecd25Da21E8942884C5fAebAfD4E07dab",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF"
      }
    },
    {
      "chainId": 137,
      "name": "VIDT Datalink",
      "symbol": "VIDT",
      "decimals": 18,
      "address": "0x9aAcb53AF37FE363E462A72Bc30F35a4d20f285f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfeF4185594457050cC9c23980d301908FE057Bb1"
      }
    },
    {
      "chainId": 137,
      "name": "Civic",
      "symbol": "CVC",
      "decimals": 8,
      "address": "0x66Dc5A08091d1968e08C16aA5b27BAC8398b02Be",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x41e5560054824ea6b0732e656e3ad64e20e94e45"
      }
    },
    {
      "chainId": 137,
      "name": "XinFin XDCE",
      "symbol": "XDCE",
      "decimals": 18,
      "address": "0xfdCA275366efac9204D2d8D3D7A9428CA947307B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2"
      }
    },
    {
      "chainId": 137,
      "name": "FunFair",
      "symbol": "FUN",
      "decimals": 8,
      "address": "0x2c14C84D08b35a8135f57338816f5FcBEac08d35",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x419d0d8bdd9af5e606ae2232ed285aff190e711b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/fun.svg"
    },
    {
      "chainId": 137,
      "name": "BiLira",
      "symbol": "TRYB",
      "decimals": 6,
      "address": "0x4Fb71290Ac171E1d144F7221D882BECAc7196EB5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2c537e5624e4af88a7ae4060c022609376c8d0eb"
      }
    },
    {
      "chainId": 137,
      "name": "AirSwap Token",
      "symbol": "AST",
      "decimals": 4,
      "address": "0x04bEa9FCE76943E90520489cCAb84E84C0198E29",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x27054b13b1b798b345b591a4d22e6562d47ea75a"
      }
    },
    {
      "chainId": 137,
      "name": "DEXTools",
      "symbol": "DEXT",
      "decimals": 18,
      "address": "0xff835562C761205659939B64583dd381a6AA4D92",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfb7b4564402e5500db5bb6d63ae671302777c75a"
      }
    },
    {
      "chainId": 137,
      "name": "Reserve",
      "symbol": "RSV",
      "decimals": 18,
      "address": "0xE1444fa4b5c530E46b79A47bA1a8DFE252B8A1c0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x196f4727526eA7FB1e17b2071B3d8eAA38486988"
      }
    },
    {
      "chainId": 137,
      "name": "Reputation",
      "symbol": "REPv2",
      "decimals": 18,
      "address": "0x6563c1244820CfBd6Ca8820FBdf0f2847363F733",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x221657776846890989a759BA2973e427DfF5C9bB"
      }
    },
    {
      "chainId": 137,
      "name": "Numeraire",
      "symbol": "NMR",
      "decimals": 18,
      "address": "0x0Bf519071b02F22C17E7Ed5F4002ee1911f46729",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671"
      }
    },
    {
      "chainId": 137,
      "name": "uDOO",
      "symbol": "uDOO",
      "decimals": 18,
      "address": "0x0C2ea0623E1C19bfB984Dce137404671a95f3478",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x12f649A9E821F90BB143089a6e56846945892ffB"
      }
    },
    {
      "chainId": 137,
      "name": "XIO Network",
      "symbol": "XIO",
      "decimals": 18,
      "address": "0x9C81077ffdd65b7E3833dd576AA94bf4B49b00F0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0f7f961648ae6db43c75663ac7e5414eb79b5704"
      }
    },
    {
      "chainId": 137,
      "name": "Rari Governance Token",
      "symbol": "RGT",
      "decimals": 18,
      "address": "0x3b9dB434F08003A89554CDB43b3e0b1f8734BdE7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xD291E7a03283640FDc51b121aC401383A46cC623"
      }
    },
    {
      "chainId": 137,
      "name": "Moss Coin",
      "symbol": "MOC",
      "decimals": 18,
      "address": "0x4Ded021C6f02dB04C9e9A97b898d36348094B9b8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x865ec58b06bF6305B886793AA20A2da31D034E68"
      }
    },
    {
      "chainId": 137,
      "name": "DOS Network Token",
      "symbol": "DOS",
      "decimals": 18,
      "address": "0x0597a52b14B0DCA2158665d6961572E371Ff5678",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0a913bead80f321e7ac35285ee10d9d922659cb7"
      }
    },
    {
      "chainId": 137,
      "name": "MATH Token",
      "symbol": "MATH",
      "decimals": 18,
      "address": "0x347ACCAFdA7F8c5BdeC57fa34a5b663CBd1aeca7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x08d967bb0134F2d07f7cfb6E246680c53927DD30"
      }
    },
    {
      "chainId": 137,
      "name": "Uptrennd",
      "symbol": "1UP",
      "decimals": 18,
      "address": "0x77266e2B73adb5605D9877fE3d86b217eFA5cB49",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x07597255910a51509CA469568B048F2597E72504"
      }
    },
    {
      "chainId": 137,
      "name": "Liquidity Dividends Protocol",
      "symbol": "LID",
      "decimals": 18,
      "address": "0xA9ADe7b8C8252b1E17cAFa53BF46FF1319F8532D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0417912b3a7AF768051765040A55BB0925D4DDcF"
      }
    },
    {
      "chainId": 137,
      "name": "PieDAO BTC++",
      "symbol": "BTC++",
      "decimals": 18,
      "address": "0x6B3d5099c4827a3fC7C858865c1Cea15c3fe58ee",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0327112423F3A68efdF1fcF402F6c5CB9f7C33fd"
      }
    },
    {
      "chainId": 137,
      "name": "Stox",
      "symbol": "STX",
      "decimals": 18,
      "address": "0xB36e3391B22a970d31A9b620Ae1A414C6c256d2a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45"
      }
    },
    {
      "chainId": 137,
      "name": "NXM",
      "symbol": "NXM",
      "decimals": 18,
      "address": "0xB2B613b771e5A5DDa496733B4024d34f309CC03d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b"
      }
    },
    {
      "chainId": 137,
      "name": "Compound USDT",
      "symbol": "cUSDT",
      "decimals": 8,
      "address": "0x61B3c650154f9525dad3c1010de959fc6e2218F3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Centrifuge",
      "symbol": "wCFG",
      "decimals": 18,
      "address": "0x90bb6fEB70A9a43CfAaA615F856BA309FD759A90",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc221b7e65ffc80de234bbb6667abdd46593d34f0"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped ANC Token",
      "symbol": "ANC",
      "decimals": 18,
      "address": "0x60E68D032deB4c238c2ba580EC0F22516ebcbc13",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0f3adc247e91c3c50bc08721355a41037e89bc20"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped MIR Token",
      "symbol": "MIR",
      "decimals": 18,
      "address": "0x1C5cccA2CB59145A4B25F452660cbA6436DDce9b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x09a3ecafa817268f77be1283176b946c4ff2e608"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror AAPL Token",
      "symbol": "mAAPL",
      "decimals": 18,
      "address": "0x7E4e3923005aC2942745480D96751Ca9DEc5C9B6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd36932143F6eBDEDD872D5Fb0651f4B72Fd15a84"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror GOOGL Token",
      "symbol": "mGOOGL",
      "decimals": 18,
      "address": "0x41970f24B738aA21152fDF05d65a688A9A3C63c7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x59A921Db27Dd6d4d974745B7FfC5c33932653442"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror NFLX Token",
      "symbol": "mNFLX",
      "decimals": 18,
      "address": "0xB261387f5188c81DdD543e2A75c89309aB1bfD2C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xC8d674114bac90148d11D3C1d33C61835a0F9DCD"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror QQQ Token",
      "symbol": "mQQQ",
      "decimals": 18,
      "address": "0x20269A36538fbD3f33f1688919776E2220455567",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x13B02c8dE71680e71F0820c996E4bE43c2F57d15"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror TWTR Token",
      "symbol": "mTWTR",
      "decimals": 18,
      "address": "0x5c7d670637CBAc5Cd71ddF3DF7DECee2A46dbFE2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xEdb0414627E6f1e3F082DE65cD4F9C693D78CCA9"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror MSFT Token",
      "symbol": "mMSFT",
      "decimals": 18,
      "address": "0xc4483AfED7159AF6b7D2eF41a18BC82F5081C063",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x41BbEDd7286dAab5910a1f15d12CBda839852BD7"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror AMZN Token",
      "symbol": "mAMZN",
      "decimals": 18,
      "address": "0xC46e5F28f1A7AdeAC72b0d2bC0c710dF865776F1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0cae9e4d663793c2a2A0b211c1Cf4bBca2B9cAa7"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror BABA Token",
      "symbol": "mBABA",
      "decimals": 18,
      "address": "0x0959CAD1298a204277C1b5C00F62D9F2cb0b6756",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x56aA298a19C93c6801FDde870fA63EF75Cc0aF72"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror IAU Token",
      "symbol": "mIAU",
      "decimals": 18,
      "address": "0xB38B63CbcCd3239D72AB133771382BBbcf4BEd02",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1d350417d9787E000cc1b95d70E9536DcD91F373"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror USO Token",
      "symbol": "mUSO",
      "decimals": 18,
      "address": "0xe861920768dA0310B125C27A44ADDA11532ab838",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x31c63146a635EB7465e5853020b39713AC356991"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror FB Token",
      "symbol": "mFB",
      "decimals": 18,
      "address": "0xcDb3ff438D8fbC7B09a70311178eC68Ef4EAff00",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0e99cC0535BB6251F6679Fa6E65d6d3b430e840B"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror COIN Token",
      "symbol": "mCOIN",
      "decimals": 18,
      "address": "0x14c36A063414Ee9BfA9Ef2bD0e1FdFAE690512be",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1e25857931F75022a8814e0B0c3a371942A88437"
      }
    },
    {
      "chainId": 137,
      "name": "DeversiFi Token",
      "symbol": "DVF",
      "decimals": 18,
      "address": "0x02c46650701dD6b83dceC3472fC3fD69eA1a5ab7",
      "logoURI": "https://deversifi.com/wp-content/uploads/2022/03/dvf.d8ad4805.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdddddd4301a082e62e84e43f474f044423921918"
      }
    },
    {
      "chainId": 137,
      "name": "RAKUN",
      "symbol": "RAKU",
      "decimals": 18,
      "address": "0x2e02D3C4b81498177783584b842821864245cE50",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x51bc0deaf7bbe82bc9006b0c3531668a4206d27f"
      }
    },
    {
      "chainId": 137,
      "name": "Origin Dollar",
      "symbol": "OUSD",
      "decimals": 18,
      "address": "0x655BD74cd109ebDd0b030Eb4609B9214028f7729",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86"
      }
    },
    {
      "chainId": 137,
      "name": "Inverse BTC Volatility Index",
      "symbol": "iBTCV",
      "decimals": 18,
      "address": "0x89b1F5DB1797f82af33dED6e6B50623a83aE84fA",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2590F1fD14Ef8Bb0A46C7A889c4CBc146510f9C3"
      }
    },
    {
      "chainId": 137,
      "name": "BTC Volatility Index",
      "symbol": "BTCV",
      "decimals": 18,
      "address": "0xE52F979590067637120004D188771b4aE48807Ee",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x51B0bcBEFf204B39Ce792D1E16767Fe6F7631970"
      }
    },
    {
      "chainId": 137,
      "name": "Inverse ETH Volatility Index",
      "symbol": "iETHV",
      "decimals": 18,
      "address": "0x39cDBd331c94d781D4B50802346152549689B1e5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3A707d56D538e85B783E8CE12B346e7fB6511F90"
      }
    },
    {
      "chainId": 137,
      "name": "ETH Volatility Index",
      "symbol": "ETHV",
      "decimals": 18,
      "address": "0x3Dbd2A88627566306AE9f5F5FB466B498535aF21",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xC53342fd7575f572b0fF4569e31941A5B821aC76"
      }
    },
    {
      "chainId": 137,
      "name": "Resardis Token",
      "symbol": "RSD",
      "decimals": 18,
      "address": "0x542af0d2Ec7f5a92F9caddaDD4e33B75d15F800c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x73627974adea82397bcf7fac5848207cce88938d"
      }
    },
    {
      "chainId": 137,
      "name": "BitBase",
      "symbol": "BTBS",
      "decimals": 18,
      "address": "0x921cfe00bDc605c452412079b315Ead661983B10",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x32e6c34cd57087abbd59b5a4aecc4cb495924356"
      }
    },
    {
      "chainId": 137,
      "name": "Roxel DAO",
      "symbol": "ROX",
      "decimals": 18,
      "address": "0x7767Ba7fB74082E02b821C341f9565Ce6440Fb26",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf4284a849c918ef676f54ed938703f2eeed3e058"
      }
    },
    {
      "chainId": 137,
      "name": "Infinity Diamond",
      "symbol": "INF",
      "decimals": 18,
      "address": "0xcbEF7a4B4385Db4747362b900b6f6f8051B152c0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x506c6fc9d6f764338a4e1eed5f526ab440d0cc05"
      }
    },
    {
      "chainId": 137,
      "name": "Happy Monkey  🐵🐵🐵🐵🐵🐵🐵🐵",
      "symbol": "HAPPY",
      "decimals": 18,
      "address": "0x3b7377F91F9682335C6d959E91b107d313C397cC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfb36b29cb225f564030024d329c837f0bf959daf"
      }
    },
    {
      "chainId": 137,
      "name": "Crypto Excellence",
      "symbol": "CE",
      "decimals": 18,
      "address": "0x5dC70fAE21c9e21d47E1be6Cb01bBEb0c4d12CA3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8f12dfc7981de79a8a34070a732471f2d335eece"
      }
    },
    {
      "chainId": 137,
      "name": "Ultra Token",
      "symbol": "UOS",
      "decimals": 4,
      "address": "0x1dce4a8b459A50F450EE91Fb5e6c86d161aA22f8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c"
      }
    },
    {
      "chainId": 137,
      "name": "MoonEdge",
      "symbol": "MOONED",
      "decimals": 18,
      "address": "0x7E4c577ca35913af564ee2a24d882a4946Ec492B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7E4c577ca35913af564ee2a24d882a4946Ec492B"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mooned.svg"
    },
    {
      "chainId": 137,
      "name": "Melon Token",
      "symbol": "MLN",
      "decimals": 18,
      "address": "0xa9f37d84c856fda3812ad0519dad44fa0a3fe207",
      "logoURI": "https://user-images.githubusercontent.com/28834887/157407476-6a64c697-341b-479c-be97-ce6aadc1a8fa.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xec67005c4e498ec7f55e092bd1d35cbc47c91892"
      }
    },
    {
      "chainId": 137,
      "name": "loser coin",
      "symbol": "lowb",
      "decimals": 18,
      "address": "0x1C0a798B5a5273a9e54028eb1524fD337B24145F",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x69e5c11a7c30f0bf84a9faecbd5161aa7a94deca"
      }
    },
    {
      "chainId": 137,
      "name": "JUMP",
      "symbol": "$JUMP",
      "decimals": 18,
      "address": "0xEd558Bb8881163AFdC9F3BdBa5F43Fd527c39Af8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xE650b007529F445EaE83bc931Abaa9bb1eFECA6f"
      }
    },
    {
      "chainId": 137,
      "name": "DeepGo Token",
      "symbol": "DGT",
      "decimals": 18,
      "address": "0x839d8Cc21F51ddDcB635064f8d11166e6D0053c5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xC8eEC1277B84fC8a79364D0add8C256b795C6727"
      }
    },
    {
      "chainId": 137,
      "name": "SAUNALAND",
      "symbol": "SAUNA",
      "decimals": 18,
      "address": "0xea9D32bf641ee72bA1f301512891fBc96d39e6B2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x82b666f1d7d6439b32f580335e492cb31a07bff5"
      }
    },
    {
      "chainId": 137,
      "name": "CodeCoin",
      "symbol": "CODE",
      "decimals": 18,
      "address": "0x9FF32E82C4c80499266cA26776c535458B758369",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9adaba9ffda15e3a043c907d390f645147eb532a"
      }
    },
    {
      "chainId": 137,
      "name": "Matching Cards",
      "symbol": "MATCH",
      "decimals": 18,
      "address": "0x82Ea80b9E021E8CB4a2b20e1BE60fe2CA04c9621",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9217c19e72e4ab9e1015ebe9098285a6ef1761c3"
      }
    },
    {
      "chainId": 137,
      "name": "Convertible Phoenix Token",
      "symbol": "cPHX",
      "decimals": 18,
      "address": "0x54a02FD4AeFc77aA97Cd3d30322F3E7a7D875a27",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xBdD50c7B6c871D9aFB278445d5b74fDc4705a234"
      }
    },
    {
      "chainId": 137,
      "name": "DinoSwap",
      "symbol": "DINO",
      "decimals": 18,
      "address": "0xAa9654BECca45B5BDFA5ac646c939C62b527D394",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2701E1D67219a49F5691C92468Fe8D8ADc03e609"
      }
    },
    {
      "chainId": 137,
      "name": "BOWIE",
      "symbol": "BOWIE",
      "decimals": 9,
      "address": "0x8f6A1c0C10B72c1218270c81B0D5740aaE71f91d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x077e06ad69983b12fc4e83b51260b894c7841d1e"
      }
    },
    {
      "chainId": 137,
      "name": "Marvin Coin",
      "symbol": "MARVIN",
      "decimals": 18,
      "address": "0x268c4a88208B5b22993D1E56D5Fc039A28d1a18C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4bb12e64be9310d61f9a7950f4c3de50eb4c9807"
      }
    },
    {
      "chainId": 137,
      "name": "CatNorris Revenge",
      "symbol": "$CATNORRIS",
      "decimals": 9,
      "address": "0xe7C83848aD3d46B002E6F0DFA135aeFC16D8A30f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x920fbc929bb5940fc44dd722577d542caa0cd6d8"
      }
    },
    {
      "chainId": 137,
      "name": "Cryptid",
      "symbol": "CID",
      "decimals": 18,
      "address": "0xb8DD82E944354B7bf9e9E0744ba5fF786581d372",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4599836c212cd988eaccc54c820ee9261cdaac71"
      }
    },
    {
      "chainId": 137,
      "name": "Tartarus",
      "symbol": "TAR",
      "decimals": 8,
      "address": "0x2cf15C001A2A5dA76bf213D17763e5C856aE3632",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc567bca531992352166252ea5121e535432e81ed"
      }
    },
    {
      "chainId": 137,
      "name": "ChiHuaHua Finance",
      "symbol": "CHUA",
      "decimals": 18,
      "address": "0xdD5E426362ef1B524d156335901be65F4573FF8E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb8dbce6859ba9a46e8072bc2b5bf0d8c6b751fcd"
      }
    },
    {
      "chainId": 137,
      "name": "Yuán 猿",
      "symbol": "YUAN",
      "decimals": 9,
      "address": "0x1ddD49dF0097700479D89b361384ACFAF21f9621",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4f8cc34bfdd972bdbeaf4cc5118fba1382abb550"
      }
    },
    {
      "chainId": 137,
      "name": "Melalie",
      "symbol": "MEL",
      "decimals": 18,
      "address": "0xb9784E05C7af6068FC82A80730a599fE17Ca2aDf",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xed0889f7e1c7c7267407222be277e1f1ef4d4892"
      }
    },
    {
      "chainId": 137,
      "name": "VNDC",
      "symbol": "VNDC",
      "decimals": 0,
      "address": "0xC87DC7474DB6cdb9D37cc38A227DCd7b12289F22",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1f3f677ecc58f6a1f9e2cf410df4776a8546b5de"
      }
    },
    {
      "chainId": 137,
      "name": "Adshares",
      "symbol": "ADS",
      "decimals": 11,
      "address": "0x598e49f01bEfeB1753737934a5b11fea9119C796",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a"
      }
    },
    {
      "chainId": 137,
      "name": "EdgeTest",
      "symbol": "EDGT",
      "decimals": 18,
      "address": "0x24F8A7bB3190039b4Cf0F96Cd72e2EA3a2D82256",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9D7e326b8C87E48b84dE6d300D7Bee3Ce42EfC37"
      }
    },
    {
      "chainId": 137,
      "name": "Ins3.Finance Coin",
      "symbol": "ITF",
      "decimals": 18,
      "address": "0x0921FE2ad25266df4C078C051f7AD1c2298E89FC",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa329e8944426b32c16b33d754149fe524a32b348"
      }
    },
    {
      "chainId": 137,
      "name": "OT Compound Dai 29DEC2022",
      "symbol": "OT-cDAI-29DEC2022",
      "decimals": 8,
      "address": "0x1997FC07b67E7962cddD6E4db84E3C7315Bf4EB0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3d4e7f52efafb9e0c70179b688fc3965a75bcfea"
      }
    },
    {
      "chainId": 137,
      "name": "OT Aave interest bearing USDC 29DEC2022",
      "symbol": "OT-aUSDC-29DEC2022",
      "decimals": 6,
      "address": "0x778Ba5C85c48C695228aF7e4CE3e8Ea96A50870c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8fcb1783bf4b71a51f702af0c266729c4592204a"
      }
    },
    {
      "chainId": 137,
      "name": "Valencoin",
      "symbol": "VALOU",
      "decimals": 0,
      "address": "0xb91c05cf30A973a58295C8Db9248D0911CF091E5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb91c05cf30A973a58295C8Db9248D0911CF091E5"
      }
    },
    {
      "chainId": 137,
      "name": "VIQYY",
      "symbol": "VIQYY",
      "decimals": 18,
      "address": "0xa0715b961daabafCb7a8A2Bc1146541a21aa56C1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8756c7f30a3b33f6412adeda21f627c93e599c14"
      }
    },
    {
      "chainId": 137,
      "name": "GIX Coin",
      "symbol": "GIX",
      "decimals": 18,
      "address": "0xf4426F20E0956e91B75217A0F6B0e747213DaC75",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbd434a09191d401da3283a5545bb3515d033b8c4"
      }
    },
    {
      "chainId": 137,
      "name": "TradeStars TSX",
      "symbol": "TSX",
      "decimals": 18,
      "address": "0xF11de26883EB2EBF9877a01703DDC1eB619094E6",
      "tags": [
        "pos",
        "erc20",
        "noDeposit"
      ],
      "extensions": {
        "rootAddress": "0x734c90044a0ba31b3f2e640c10dc5d3540499bfd"
      }
    },
    {
      "chainId": 137,
      "name": "Peri Finance Token",
      "symbol": "PERI",
      "decimals": 18,
      "address": "0xDC0E17eAE3B9651875030244b971fa0223a1764f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5d30aD9C6374Bf925D0A75454fa327AACf778492"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/peri.svg"
    },
    {
      "chainId": 137,
      "name": "Singularity Dao",
      "symbol": "SDAO",
      "decimals": 18,
      "address": "0x59e991B37b35Ac2187113dFdB5D60D2e887eEec1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x993864e43caa7f7f12953ad6feb1d1ca635b875f"
      }
    },
    {
      "chainId": 137,
      "name": "Shibies Treats",
      "symbol": "TREATS",
      "decimals": 18,
      "address": "0x21364671fD823BBda8Ba1f40a24171DeCBdB3D54",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0B5Afdc93A86062A49063EA96AE944D7F966B6AE"
      }
    },
    {
      "chainId": 137,
      "name": "Aegis",
      "symbol": "aDAO",
      "decimals": 18,
      "address": "0x76D431cCC4A1696996C4F282284e8998f7315eD8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x926dbd499d701c61eabe2d576e770eccf9c7f4f3"
      }
    },
    {
      "chainId": 137,
      "name": "Fear NFTs",
      "symbol": "FEAR",
      "decimals": 18,
      "address": "0xa2CA40DBe72028D3Ac78B5250a8CB8c404e7Fb8C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x88a9a52f944315d5b4e917b9689e65445c401e83"
      }
    },
    {
      "chainId": 137,
      "name": "Love",
      "symbol": "LOVE",
      "decimals": 18,
      "address": "0x69bdE563680f580A2da5b5d4E202ecA4FDF35664",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x12E57F85b847baDE37F37cdE3442f00Dc33b9982"
      }
    },
    {
      "chainId": 137,
      "name": "Attrace",
      "symbol": "ATTR",
      "decimals": 18,
      "address": "0x0335DeFC8A1977b99488e0b5f5c6bc3D44fAcdD4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x44e2dec86b9f0e0266e9aa66e10323a2bd69cf9a"
      }
    },
    {
      "chainId": 137,
      "name": "ZEUZ",
      "symbol": "ZEUZ",
      "decimals": 18,
      "address": "0x2f3CcE940815daacE6d8f773A1a4f8c6Cb22AE00",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xFf729170f0C793cc1a28Ea3c30d88c219743D0a6"
      }
    },
    {
      "chainId": 137,
      "name": "Radicle",
      "symbol": "RAD",
      "decimals": 18,
      "address": "0x2f81e176471CC57fDC76f7d332FB4511bF2bebDD",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x31c8eacbffdd875c74b94b077895bd78cf1e64a3"
      }
    },
    {
      "chainId": 137,
      "name": "Cfoforum Token",
      "symbol": "CFO",
      "decimals": 6,
      "address": "0x0E2a70C08e884eA76116fccdC8b8be559162f08e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xB8981aCbBF7DA95A8fF6Df79Aab935cE63434fC8"
      }
    },
    {
      "chainId": 137,
      "name": "USDT-LP",
      "symbol": "USDT-LP",
      "decimals": 18,
      "address": "0xA15a8e5743D15ba1B2fD857C4E1937Dbf1727bd6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe0437BeB5bb7Cf980e90983f6029033d710bd1da"
      }
    },
    {
      "chainId": 137,
      "name": "BabyFloki",
      "symbol": "BabyFloki",
      "decimals": 9,
      "address": "0x892fC8D2b2d6252cDd91Ed29AE08d89C03c5E0b2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdf35988d795d90711e785b488bb2127692e6f956"
      }
    },
    {
      "chainId": 137,
      "name": "WaifuToken",
      "symbol": "WAIFU",
      "decimals": 18,
      "address": "0x690e822b6f26AC835432b05908A8c0D7C9DB76e9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x50d812bd2728e1bd7c7f57d97819e0bdc486d6ff"
      }
    },
    {
      "chainId": 137,
      "name": "Kilroy",
      "symbol": "KROY",
      "decimals": 18,
      "address": "0x8454498Ce328D7D3FC35B743301f52De67eB9Fdc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa85784108dbdcf8fe6564c7657a24c4765a2413f"
      }
    },
    {
      "chainId": 137,
      "name": "Bella",
      "symbol": "BEL",
      "decimals": 18,
      "address": "0x28C388FB1F4fa9F9eB445f0579666849EE5eeb42",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa91ac63d040deb1b7a5e4d4134ad23eb0ba07e14"
      }
    },
    {
      "chainId": 137,
      "name": "Ripio Credit Network Token",
      "symbol": "RCN",
      "decimals": 18,
      "address": "0x89C296Be2F904F3e99a6125815b4B78F5388d2dd",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6"
      }
    },
    {
      "chainId": 137,
      "name": "MIMO Parallel Governance Token",
      "symbol": "MIMO",
      "decimals": 18,
      "address": "0xADAC33f543267c4D59a8c299cF804c303BC3e4aC",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x90b831fa3bebf58e9744a14d638e25b4ee06f9bc"
      }
    },
    {
      "chainId": 137,
      "name": "INDI CORPS",
      "symbol": "INDI",
      "decimals": 18,
      "address": "0x883Ec81B5dBCb9bcEAFe0c101893487c88B167bF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd9276198cf1b9261a25f61f0ff28eee2fb36dd5a"
      }
    },
    {
      "chainId": 137,
      "name": "PantherSwap Token",
      "symbol": "PANTHER",
      "decimals": 18,
      "address": "0xC7BDAbDe06cd7a873D8f3db47c42AB6146403b05",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9C972AF892F91B06455b4aB3c4359DE51DE36B9C"
      }
    },
    {
      "chainId": 137,
      "name": "GateChainToken",
      "symbol": "GT",
      "decimals": 18,
      "address": "0x8da74b5450576998a5Bc499cb80AE3FE66eBb023",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xE66747a101bFF2dBA3697199DCcE5b743b454759"
      }
    },
    {
      "chainId": 137,
      "name": "Hokkaidu Inu",
      "symbol": "HOKK",
      "decimals": 9,
      "address": "0x5B4d05223A14AEB6160f8400DcBbdD0A84aF60f7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e"
      }
    },
    {
      "chainId": 137,
      "name": "Tesla Inu",
      "symbol": "TESINU",
      "decimals": 9,
      "address": "0xD68468a1c2255FF4b13279752D68b5915Bd84860",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xff69e48af1174da7f15d0c771861c33d3f19ed8a"
      }
    },
    {
      "chainId": 137,
      "name": "Dogecaps",
      "symbol": "dcaps",
      "decimals": 9,
      "address": "0x08912AA55D5eb104107c929cD4F48840D287613E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0bafa383ea3726982fcf0507f63c9c3d02f28eec"
      }
    },
    {
      "chainId": 137,
      "name": "uBitcoin",
      "symbol": "uBTC",
      "decimals": 18,
      "address": "0x7DF29b5e0F2c7895F4B4FA4a20E759F8AbC1ba91",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x49766c22dcbc885f993ffeae547a79b5508aa9ec"
      }
    },
    {
      "chainId": 137,
      "name": "Bailey Building & Loans",
      "symbol": "BBL",
      "decimals": 18,
      "address": "0xE6a823862eE153168C772Cf494e9DfF77140C696",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8abcEbDa80cE8C1fCF0105EF8d5d7fC5b26b0Cd0"
      }
    },
    {
      "chainId": 137,
      "name": "EmiSwap - EmiDao Token",
      "symbol": "ESW",
      "decimals": 18,
      "address": "0xd2A2a353D28e4833FAFfC882f6649c9c884a7D8f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5a75A093747b72a0e14056352751eDF03518031d"
      }
    },
    {
      "chainId": 137,
      "name": "Mask Network",
      "symbol": "MASK",
      "decimals": 18,
      "address": "0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x69af81e73a73b40adf4f3d4223cd9b1ece623074"
      }
    },
    {
      "chainId": 137,
      "name": "Phoenix Token",
      "symbol": "PHX",
      "decimals": 18,
      "address": "0x9C6BfEdc14b5C23E3900889436Edca7805170f01",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xAeC65404DdC3af3C897AD89571d5772C1A695F22"
      }
    },
    {
      "chainId": 137,
      "name": "Charged Particles - IONX",
      "symbol": "IONX",
      "decimals": 18,
      "address": "0x01b317bC5eD573FAa112eF64DD029F407CecB155",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x02d3a27ac3f55d5d91fb0f52759842696a864217"
      }
    },
    {
      "chainId": 137,
      "name": "RUNCOIN",
      "symbol": "RUN",
      "decimals": 18,
      "address": "0x648A372552725EE4ABFC8E8F3006d80124D63B44",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x66eb3d45949f161d4f0bc6eb1e1678e6ff0a0ca1"
      }
    },
    {
      "chainId": 137,
      "name": "1PLANET Carbon Credit",
      "symbol": "1PLCO2",
      "decimals": 18,
      "address": "0x14B5eD5dc05e9F7d35104D035719BD65a7EE93E0",
      "logoURI": "https://1planet.app/images/1PL_Token_Logo.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2E8891AA76743ee96547AcB764a69b87872423f8"
      }
    },
    {
      "chainId": 137,
      "name": "Tokenart",
      "symbol": "OKNA",
      "decimals": 18,
      "address": "0xf00eCE8EDF75Db1aD4c8640EA44537fCCDF6E7a4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6FD6171442ae34bA5C9CE2bb9b1E0CF543c4F6f1"
      }
    },
    {
      "chainId": 137,
      "name": "Synth sUSD",
      "symbol": "sUSD",
      "decimals": 18,
      "address": "0xF81b4Bec6Ca8f9fe7bE01CA734F55B2b6e03A7a0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"
      }
    },
    {
      "chainId": 137,
      "name": "HK Monetary Token",
      "symbol": "HKMT",
      "decimals": 6,
      "address": "0xE368e30C2b0F58EF216e12073141E07a875fbA6d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc8c97d9B0aF219c2329a0179f6AB8C7a55B39fc1"
      }
    },
    {
      "chainId": 137,
      "name": "IBIZA Token",
      "symbol": "IBZ",
      "decimals": 18,
      "address": "0x428aC1de3FC08c0F3A47745C964f7d677716981F",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5aa7c403c7de4b3bb0cc07079a03e389671a4771"
      }
    },
    {
      "chainId": 137,
      "name": "Aurox Token",
      "symbol": "URUS",
      "decimals": 18,
      "address": "0xa3E6ac447c6A65e738AdBdA36034b54E2bC9603b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6c5fbc90e4d78f70cc5025db005b39b03914fc0c"
      }
    },
    {
      "chainId": 137,
      "name": "Siberian Husky",
      "symbol": "SHUSKY",
      "decimals": 9,
      "address": "0x941f59F9577451530EE38287e5F146bd42cda258",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x236d53148f83706c3d670064809577385f923a75"
      }
    },
    {
      "chainId": 137,
      "name": "ShibaCoin",
      "symbol": "SHIBA",
      "decimals": 18,
      "address": "0x141b8B6834fB2D24F9205AD262326DbC699Defa4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x321bd6fa7696e0e4ba082e454b6e87b6c8372b27"
      }
    },
    {
      "chainId": 137,
      "name": "Moon Pug",
      "symbol": "MOONPUG",
      "decimals": 9,
      "address": "0x14f2aF758c62Aa1dE8c9e48e1DE363826b087453",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x856710ea0007af7bdc387fe54f64db51dddaf0a2"
      }
    },
    {
      "chainId": 137,
      "name": "Golden Pineapple 🍍🪙🍍🪙🍍🪙",
      "symbol": "GOLDENPINE",
      "decimals": 18,
      "address": "0x95894e4286bf4618eDd3824dD5b38a082a431953",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe6f7466cb27d3072cf9dda358596b1a165cf5ce1"
      }
    },
    {
      "chainId": 137,
      "name": "Shiva 🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼",
      "symbol": "SHIVA",
      "decimals": 18,
      "address": "0x137E8f56BB8B4DA5720E912DB15D45b01ac3C3ad",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x002f46770160ffb092bc15699fb035526b0b65d7"
      }
    },
    {
      "chainId": 137,
      "name": "brotDAO",
      "symbol": "BROT",
      "decimals": 18,
      "address": "0xCEb082Ab7c63d68476797223a84f49e0284e9B29",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc6287874391410C77E3fD73748C735f9381b8859"
      }
    },
    {
      "chainId": 137,
      "name": "TRASH",
      "symbol": "TRSH",
      "decimals": 18,
      "address": "0xa73eACB2955fF636F8FE16F6BE35FC11D8D61f9E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0f46eba0Bafe2739d9F3C43A48BB84BEE1f6644f"
      }
    },
    {
      "chainId": 137,
      "name": "The SporkDAO Token",
      "symbol": "SPORK",
      "decimals": 18,
      "address": "0x9CA6a77C8B38159fd2dA9Bd25bc3E259C33F5E39",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb624FdE1a972B1C89eC1dAD691442d5E8E891469"
      }
    },
    {
      "chainId": 137,
      "name": "UMA Voting Token v1",
      "symbol": "UMA",
      "decimals": 18,
      "address": "0x3066818837c5e6eD6601bd5a91B0762877A6B731",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828"
      }
    },
    {
      "chainId": 137,
      "name": "CULTURE",
      "symbol": "CULTURE",
      "decimals": 18,
      "address": "0x98F39821b479eb32F0659734a3CA0BB717A4dD4a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xEeA1dd32b4c4DfD16D200AC2cb286b28F7402728"
      }
    },
    {
      "chainId": 137,
      "name": "American Akita",
      "symbol": "USKITA",
      "decimals": 9,
      "address": "0xe7eA6564f85CC4F98D8B20a6888B877b3362D6ab",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc18e7a03f8986798323658dd8645f93aa79ac5c9"
      }
    },
    {
      "chainId": 137,
      "name": "Fat Doge",
      "symbol": "FOGE",
      "decimals": 9,
      "address": "0x20583A26a27a81C0c5387521A6FF443E6806Be75",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x76851a93977bea9264c32255b6457882035c7501"
      }
    },
    {
      "chainId": 137,
      "name": "TREKS",
      "symbol": "TREKS",
      "decimals": 18,
      "address": "0xa65d74f1f047596b2DaFedFdfA327Ccbd499Aa9e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x15492208Ef531EE413BD24f609846489a082F74C"
      }
    },
    {
      "chainId": 137,
      "name": "CC Token",
      "symbol": "CC",
      "decimals": 18,
      "address": "0xb3fb97019e9F69d0fD2e76fBD113ec6960a5389a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd6860c96b5e1452811573b499d0c6aeddada4f23"
      }
    },
    {
      "chainId": 137,
      "name": "xFORCE",
      "symbol": "xFORCE",
      "decimals": 18,
      "address": "0x27Ca65acd4397a6Ade56ac2a5d63587c14a46F0f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe7f445b93eb9cdabfe76541cc43ff8de930a58e6"
      }
    },
    {
      "chainId": 137,
      "name": "Jomon Shiba",
      "symbol": "JSHIBA",
      "decimals": 9,
      "address": "0x0F44C5CD9cF957Ce0C7dEa558A765e81E8378b37",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1426cc6d52d1b14e2b3b1cb04d57ea42b39c4c7c"
      }
    },
    {
      "chainId": 137,
      "name": "Free Coin",
      "symbol": "FREE",
      "decimals": 18,
      "address": "0x7cef6ed1e07079e174601d39066AD0856cB47988",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd"
      }
    },
    {
      "chainId": 137,
      "name": "Based Loans Ownership",
      "symbol": "BLO",
      "decimals": 18,
      "address": "0x9737399FaB00754FDc8BEe48FCB0697CE85C7DE5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x68481f2c02be3786987ac2bc3327171c5d05f9bd"
      }
    },
    {
      "chainId": 137,
      "name": "PIKA TOKEN",
      "symbol": "PKAT",
      "decimals": 18,
      "address": "0xB45d03F97357F7c5018c0235830aB802E29dBD0d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5622fc0bd7ef3f07b2d1b05097dff6f50cc0b2f5"
      }
    },
    {
      "chainId": 137,
      "name": "Myōbu",
      "symbol": "MYOBU",
      "decimals": 9,
      "address": "0x2efd9Dab50cF55C8A9FDB7a24dD2034dcaA1Ec29",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x75d12e4f91df721fafcae4c6cd1d5280381370ac"
      }
    },
    {
      "chainId": 137,
      "name": "Raze Network",
      "symbol": "RAZE",
      "decimals": 18,
      "address": "0xA947239ADC5D53Aa03E5f661a2e16d7B009fC5A6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5Eaa69B29f99C84Fe5dE8200340b4e9b4Ab38EaC"
      }
    },
    {
      "chainId": 137,
      "name": "The Tokenized Bitcoin",
      "symbol": "imBTC",
      "decimals": 8,
      "address": "0x897f86e22A5F5782c439118D68338f4FC420E59C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3212b29E33587A00FB1C83346f5dBFA69A458923"
      }
    },
    {
      "chainId": 137,
      "name": "MahaDAO",
      "symbol": "MAHA",
      "decimals": 18,
      "address": "0xeDd6cA8A4202d4a36611e2fff109648c4863ae19",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb4d930279552397bba2ee473229f89ec245bc365"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/maha.svg"
    },
    {
      "chainId": 137,
      "name": "Yieldly",
      "symbol": "YLDY",
      "decimals": 18,
      "address": "0x07280d3143311b012ad268a74F2aa791713952eA",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x88cb253d4c8cab8cdf7948a9251db85a13669e23"
      }
    },
    {
      "chainId": 137,
      "name": "Roseon token",
      "symbol": "ROSN",
      "decimals": 18,
      "address": "0x1B2a3C1417C69DA16bb9193268d0AAbFe54b3b39",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x651cd665bd558175a956fb3d72206ea08eb3df5b"
      }
    },
    {
      "chainId": 137,
      "name": "CryptoChefs AROMA Token",
      "symbol": "AROMA",
      "decimals": 18,
      "address": "0x444DBcb15Ea0d706C04DaB615374a11759E07A25",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x444DBcb15Ea0d706C04DaB615374a11759E07A25"
      }
    },
    {
      "chainId": 137,
      "name": "Conceal - Wrapped CCX ",
      "symbol": "wCCX",
      "decimals": 6,
      "address": "0xeB9069218E171C62CEfAACa1581efEa3e9D57a31",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x21686f8ce003a95c99acd297e302faacf742f7d4"
      }
    },
    {
      "chainId": 137,
      "name": "UCASH",
      "symbol": "UCASH",
      "decimals": 8,
      "address": "0xA94880d3A4b39746E90Cdb57f8De3732c984DE14",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x92e52a1a235d9a103d970901066ce910aacefd37"
      }
    },
    {
      "chainId": 137,
      "name": "SpiderDAO Token",
      "symbol": "SPDR",
      "decimals": 18,
      "address": "0x916dC64C5BCa5DA97A354bBD3998771A26545E09",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbcd4b7de6fde81025f74426d43165a5b0d790fdd"
      }
    },
    {
      "chainId": 137,
      "name": "BIRB",
      "symbol": "BRB",
      "decimals": 8,
      "address": "0xB5CEdF3a2aD0aad7cf43F6cF4Cb9FBE01130d684",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x216d7636b791Ed93BFD56BF696b35A14115416ab"
      }
    },
    {
      "chainId": 137,
      "name": "Bluzelle Token",
      "symbol": "BLZ",
      "decimals": 18,
      "address": "0x438B28C5AA5F00a817b7Def7cE2Fb3d5d1970974",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5732046a883704404f284ce41ffadd5b007fd668"
      }
    },
    {
      "chainId": 137,
      "name": "Aluna",
      "symbol": "ALN",
      "decimals": 18,
      "address": "0xa8fcEe762642f156b5D757b6FabC36E06b6d4A1A",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8185bc4757572da2a610f887561c32298f1a5748"
      }
    },
    {
      "chainId": 137,
      "name": "The Force Token",
      "symbol": "FOR",
      "decimals": 18,
      "address": "0x546b4c391520E6652897c65153074088BFC0A909",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1FCdcE58959f536621d76f5b7FfB955baa5A672F"
      }
    },
    {
      "chainId": 137,
      "name": "Deri",
      "symbol": "DERI",
      "decimals": 18,
      "address": "0x3D1D2aFd191b165D140e3E8329E634665fFB0E5e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9"
      }
    },
    {
      "chainId": 137,
      "name": "Gnarcoin",
      "symbol": "GNAR",
      "decimals": 18,
      "address": "0x8dfe9e53F920D43C2D59133804Aff6540B4e05fF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x017429367d6e4f9fa7b673bdb2247887bd9233e8"
      }
    },
    {
      "chainId": 137,
      "name": "Geyser",
      "symbol": "GYSR",
      "decimals": 18,
      "address": "0xc48F61a288A08F1B80c2edd74652e1276B6A168c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab"
      }
    },
    {
      "chainId": 137,
      "name": "Newscrypto",
      "symbol": "NWC",
      "decimals": 18,
      "address": "0x968F6f898a6Df937fC1859b323aC2F14643e3fED",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x968f6f898a6df937fc1859b323ac2f14643e3fed"
      }
    },
    {
      "chainId": 137,
      "name": "PairX Token",
      "symbol": "PAIRX",
      "decimals": 18,
      "address": "0x7a51028299AE19B4C56BF8d66B42Fd53e42F43aB",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7a51028299AE19B4C56BF8d66B42Fd53e42F43aB"
      }
    },
    {
      "chainId": 137,
      "name": "X-Cash",
      "symbol": "XCASH",
      "decimals": 18,
      "address": "0x03678f2c2c762DC63c2Bb738c3a837D366eDa560",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x235328f864f38a91f0d2282159ea7c7b7c9f7c62"
      }
    },
    {
      "chainId": 137,
      "name": "Oiler",
      "symbol": "OIL",
      "decimals": 18,
      "address": "0x65DfA90171e1bd9060209405026C4E1f4A8E58df",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0275E1001e293C46CFe158B3702AADe0B99f88a5"
      }
    },
    {
      "chainId": 137,
      "name": "ReillyCoin",
      "symbol": "REILLY",
      "decimals": 18,
      "address": "0x0a6cb35d3C309578aB3AE19c06Af9a77A045F18b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x12D0545F7f74a17C84432e9552D8E4eb62b59DCD"
      }
    },
    {
      "chainId": 137,
      "name": "Dollar",
      "symbol": "DOLLAR",
      "decimals": 18,
      "address": "0x432167928d23C378B316B78Dfa378Baa4a84F25a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe0ea460dc00d4cc62f539550d8dc9861dfd460fd"
      }
    },
    {
      "chainId": 137,
      "name": "penny",
      "symbol": "PENNY",
      "decimals": 18,
      "address": "0x61FE6d0Ee83A5614822bE14599Ee99c621190a60",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x53bfb267aae3ca9d41febe271b7b8ea5dcffacfa"
      }
    },
    {
      "chainId": 137,
      "name": "super veggie burrito",
      "symbol": "SVB",
      "decimals": 18,
      "address": "0xA5f7EA46EBDC3F192c19e900012B3c4a2D6E11a0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa2dddf1755603e209392dd987a1eb8689277b2c6"
      }
    },
    {
      "chainId": 137,
      "name": "funkyninja *❄✲❄* spacerobots",
      "symbol": "SPACEFUNK",
      "decimals": 18,
      "address": "0x9656cfbbdDc777f15341F4bd1733f5eEC6B5Feb4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc3dff9e16f76d15beaa0959af135a06df78ac0e1"
      }
    },
    {
      "chainId": 137,
      "name": "baby love",
      "symbol": "BABY",
      "decimals": 18,
      "address": "0x7717f1EFA5E36205527A2374603004968aBb480a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x39Ffb0C8Ff3DEa288D3056b43f9fBedBBe996B86"
      }
    },
    {
      "chainId": 137,
      "name": "friends",
      "symbol": "FRIENDS",
      "decimals": 18,
      "address": "0xb4cA879d4AC2eee3ae0f42488106f2b242cD0462",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x57E15f54E11D28a5c42f1a0376F2E6c05adBe930"
      }
    },
    {
      "chainId": 137,
      "name": "Magic Internet Money",
      "symbol": "MIM",
      "decimals": 18,
      "address": "0x01288e04435bFcd4718FF203D6eD18146C17Cd4b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3"
      }
    },
    {
      "chainId": 137,
      "name": "The Employment Commons Work Token",
      "symbol": "WORK",
      "decimals": 18,
      "address": "0x6002410dDA2Fb88b4D0dc3c1D562F7761191eA80",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1482295Df16e7761d128B9823B61785D43CA038B"
      }
    },
    {
      "chainId": 137,
      "name": "Lunar Token",
      "symbol": "LUNAR",
      "decimals": 18,
      "address": "0xbDe7EEF06Fa6Cb25883268207eed61b29C9B9fC6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5Ef874AB47aBbd72A6502ec17a1e3d046f5D5739"
      }
    },
    {
      "chainId": 137,
      "name": "UNIFARM Token",
      "symbol": "UFARM",
      "decimals": 18,
      "address": "0xA7305Ae84519fF8Be02484CdA45834C4E7D13Dd6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x40986a85b4cfcdb054a6cbfb1210194fee51af88"
      }
    },
    {
      "chainId": 137,
      "name": "Gaimin Token",
      "symbol": "GMRX",
      "decimals": 18,
      "address": "0x73F56124a34E0214067B7e5F42A132b3eA072014",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfbb21d217e23a73aa8c1c7d39e43a6971d35e0e2"
      }
    },
    {
      "chainId": 137,
      "name": "ramen.bet",
      "symbol": "RMN",
      "decimals": 18,
      "address": "0x77777FDFaac9FAbCdb0851EF574b84C2B7777777",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x77777FDFaac9FAbCdb0851EF574b84C2B7777777"
      }
    },
    {
      "chainId": 137,
      "name": "HyperDaonew",
      "symbol": "HADO",
      "decimals": 18,
      "address": "0x0d202214527E82231867CC045308C1C1Ee7A1056",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x78f7126d488E7A1F0f1b47aEA1384A9BbFE93D59"
      }
    },
    {
      "chainId": 137,
      "name": "Delta Exchange Token",
      "symbol": "DETO",
      "decimals": 18,
      "address": "0xb6dd51D3852A174D4Dbe045e77DF2ED84942ae6f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xab93df617f51e1e415b5b4f8111f122d6b48e55c"
      }
    },
    {
      "chainId": 137,
      "name": "SupremeX Token",
      "symbol": "SXC",
      "decimals": 18,
      "address": "0x46d3EC8CE3eC767414F16FE12176De23E3E5B46A",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x01B0086a5bBB25FE081629C232950c7aff660E2d"
      }
    },
    {
      "chainId": 137,
      "name": "Agave",
      "symbol": "AGVE",
      "decimals": 18,
      "address": "0x75EB9Fd8608E2ff9418821062398E4F4B8d53644",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0b006e475620af076915257c6a9e40635abdbbad"
      }
    },
    {
      "chainId": 137,
      "name": "CAD Coin",
      "symbol": "CADC",
      "decimals": 18,
      "address": "0x5d146d8B1dACb1EBBA5cb005ae1059DA8a1FbF57",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcadc0acd4b445166f12d2c07eac6e2544fbe2eef"
      }
    },
    {
      "chainId": 137,
      "name": "XSGD",
      "symbol": "XSGD",
      "decimals": 6,
      "address": "0x769434dcA303597C8fc4997Bf3DAB233e961Eda2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x70e8de73ce538da2beed35d14187f6959a8eca96"
      }
    },
    {
      "chainId": 137,
      "name": "Cream",
      "symbol": "CREAM",
      "decimals": 18,
      "address": "0x04f3C4cF2e806da6DF31e80E8A5D121F98eDD61d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2ba592F78dB6436527729929AAf6c908497cB200"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Ribbits",
      "symbol": "wRBT",
      "decimals": 18,
      "address": "0xA5d447757daC8C5FaAB1858B13DA4aF701aDf4bb",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xaAF49D386bd44E31fF22EDF723F40EE3e4dA53cd"
      }
    },
    {
      "chainId": 137,
      "name": "Minty Art",
      "symbol": "MINTY",
      "decimals": 18,
      "address": "0x474Ba20088174612427cf8440ac5712e98652AD2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb6c6920327b33f8eec26786c7462c5f4098d47e3"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Leviathan",
      "symbol": "WLEV",
      "decimals": 18,
      "address": "0xEB7f7955730A7DBA1427A6567950eb4a98DfCbdF",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa2482ccff8432ee68b9a26a30fcdd2782bd81bed"
      }
    },
    {
      "chainId": 137,
      "name": "HuobiToken",
      "symbol": "HT",
      "decimals": 18,
      "address": "0xFAD65Eb62a97fF5Ed91B23aFD039956aaCa6e93b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6f259637dcd74c767781e37bc6133cd6a68aa161"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ht.svg"
    },
    {
      "chainId": 137,
      "name": "extraDNA",
      "symbol": "xDNA",
      "decimals": 18,
      "address": "0x0378566d2979AdCfB80316b2491757C99a44ED45",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8e57c27761EBBd381b0f9d09Bb92CeB51a358AbB"
      }
    },
    {
      "chainId": 137,
      "name": "BaoBoShiCoin",
      "symbol": "BBSC",
      "decimals": 18,
      "address": "0xE2aFF5409F0a5d66879f6905dFc832cbdb59919F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf89ba2862dfae69bc2546568d56b087d7454c9c9"
      }
    },
    {
      "chainId": 137,
      "name": "HUSD",
      "symbol": "HUSD",
      "decimals": 8,
      "address": "0x2088C47Fc0c78356c622F79dBa4CbE1cCfA84A91",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdf574c24545e5ffecb9a659c229253d4111d87e1"
      }
    },
    {
      "chainId": 137,
      "name": "infinite peace protocol",
      "symbol": "----------",
      "decimals": 18,
      "address": "0xC95F5D57C482a9eE5bEd594e065ac0A2A81aAF6C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbe74D4CA0441fB8C6c8B3122d24BDFEcA1622D63"
      }
    },
    {
      "chainId": 137,
      "name": "pizza",
      "symbol": "PIZZA",
      "decimals": 18,
      "address": "0x541f3deD0B7b6Dcd5ac1F44ad2f2fD99ba8E667d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x183fb2d55120d75af601fb714f2fadda61fed49e"
      }
    },
    {
      "chainId": 137,
      "name": "UBX",
      "symbol": "UBX",
      "decimals": 0,
      "address": "0xae64D44AA6bd7536005E663c48197d9631D4b3eB",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf5b5efc906513b4344ebabcf47a04901f99f09f3"
      }
    },
    {
      "chainId": 137,
      "name": "Zum Token",
      "symbol": "ZUM",
      "decimals": 8,
      "address": "0x0191297c4Bf40B31031152c06FE804ba5af5fEc1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe0b9bcd54bf8a730ea5d3f1ffce0885e911a502c"
      }
    },
    {
      "chainId": 137,
      "name": "EthereumPay",
      "symbol": "EPAY",
      "decimals": 18,
      "address": "0xef8480105b325D4bB7df87fC9a665Cf9bFC3807b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2b5ca2f9510cf1e3595ff219f24d75d4244585ea"
      }
    },
    {
      "chainId": 137,
      "name": "FEGtoken",
      "symbol": "FEG",
      "decimals": 9,
      "address": "0xF391F574C63d9b8764B7a1F56D6383762E07B75B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x389999216860ab8e0175387a0c90e5c52522c945"
      }
    },
    {
      "chainId": 137,
      "name": "New Guinea Singing Dog Inu",
      "symbol": "NEWINU",
      "decimals": 9,
      "address": "0x7C254df221993A8a2E703c3351c528f05E329595",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1997830b5beb723f5089bb8fc38766d419a0444d"
      }
    },
    {
      "chainId": 137,
      "name": "Instadapp",
      "symbol": "INST",
      "decimals": 18,
      "address": "0xf50D05A1402d0adAfA880D36050736f9f6ee7dee",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6f40d4A6237C257fff2dB00FA0510DeEECd303eb"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/inst.svg"
    },
    {
      "chainId": 137,
      "name": "Trace Network",
      "symbol": "TRACE",
      "decimals": 18,
      "address": "0x4287F07CBE6954f9F0DecD91d0705C926d8d03A4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9F7fC686CfD64aA5Ae15b351d03071e91533094b"
      }
    },
    {
      "chainId": 137,
      "name": "DeSpace Protocol",
      "symbol": "DES",
      "decimals": 18,
      "address": "0x4837C6AdB831cC3C0a5b3992bd8aE16549c9B672",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x634239cfA331Df0291653139d1a6083B9cf705e3"
      }
    },
    {
      "chainId": 137,
      "name": "Fight Token",
      "symbol": "FIGHT",
      "decimals": 18,
      "address": "0x656010c92127623AD59991b392F9b9CF1D5B4C7a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2ba55a162a86c005b900c9cc63be0336e2bb8305"
      }
    },
    {
      "chainId": 137,
      "name": "ramen.bet Trial",
      "symbol": "RMNT",
      "decimals": 18,
      "address": "0x77777777740Ccbda196b7d0b83dBFD6c00bad7e4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x77777777740ccbda196b7d0b83dbfd6c00bad7e4"
      }
    },
    {
      "chainId": 137,
      "name": "MarginSwap",
      "symbol": "MFI",
      "decimals": 18,
      "address": "0x7Bc429a2fA7d71C4693424FDcaB5a2521b9FD343",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xaa4e3edb11afa93c41db59842b29de64b72e355b"
      }
    },
    {
      "chainId": 137,
      "name": "DoggittyDoGG",
      "symbol": "DOGG",
      "decimals": 18,
      "address": "0x652879Fc10c16B56A00568879A91dddABf45B211",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8230A4634fafd27764833e19FB618E3396749C18"
      }
    },
    {
      "chainId": 137,
      "name": "DeFiPIE Token",
      "symbol": "PIE",
      "decimals": 18,
      "address": "0x5E12f36bF1739A3A740D5916A8b22B0F5275F717",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x607c794cda77efb21f8848b7910ecf27451ae842"
      }
    },
    {
      "chainId": 137,
      "name": "YGGDRASH",
      "symbol": "YEED",
      "decimals": 18,
      "address": "0x45A5dF3109fa4723c745Cea20548A66796870f01",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xca2796f9f61dc7b238aab043971e49c6164df375"
      }
    },
    {
      "chainId": 137,
      "name": "Ethereum Meta",
      "symbol": "ETHM",
      "decimals": 18,
      "address": "0xbE624349C80576f6b5714BFb6DF0b5Be526719f6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfd957f21bd95e723645c07c48a2d8acb8ffb3794"
      }
    },
    {
      "chainId": 137,
      "name": "Centralex Token",
      "symbol": "CenX",
      "decimals": 18,
      "address": "0x7c922aa6820b206C938D92522Bb2D5Ba1bc4dc17",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x504cde95dbc5d90d09b802f43b371971adbecf79"
      }
    },
    {
      "chainId": 137,
      "name": "Milf Token",
      "symbol": "MILF",
      "decimals": 18,
      "address": "0xDC3b7CB4FEC9542CC518161b8C0B9a7969302C5E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0Dd1989e4B0E82f154b729FF47F8c9a4f4b2cC1C"
      }
    },
    {
      "chainId": 137,
      "name": "Nocturne",
      "symbol": "XNOCT",
      "decimals": 18,
      "address": "0x0a86DB0Ad46C1201aa73D07497A5dBaa5B9Ed2c4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc00a57c49247106dac598912d514fcaee37db213"
      }
    },
    {
      "chainId": 137,
      "name": "Coinspaid",
      "symbol": "CPD",
      "decimals": 18,
      "address": "0x1cE4A2C355F0DcC24E32A9Af19F1836D6F4f98ae",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9b31bb425D8263fA1b8B9d090b83CF0C31665355"
      }
    },
    {
      "chainId": 137,
      "name": "Cat Token",
      "symbol": "CAT",
      "decimals": 18,
      "address": "0x32EFCa87e441A654B00640D9578DF8Ad28c2Df72",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x56015BBE3C01fE05bc30A8a9a9Fd9A88917e7dB3"
      }
    },
    {
      "chainId": 137,
      "name": "AGA Carbon Credit",
      "symbol": "AGAc",
      "decimals": 18,
      "address": "0x669ddc70273084Ea30e6cd4f28CA6e2C70735065",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xF2032813Aa3c8feEf7973e44A92E68ab11eE8021"
      }
    },
    {
      "chainId": 137,
      "name": "EXMOCoin",
      "symbol": "EXM",
      "decimals": 8,
      "address": "0x54371579945270DEB92a9F6f1a4e33bb2A7090c5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x83869de76b9ad8125e22b857f519f001588c0f62"
      }
    },
    {
      "chainId": 137,
      "name": "Fusion Token",
      "symbol": "FSN",
      "decimals": 18,
      "address": "0xFA1171334CB3a0f0A91E8cA6765F10e9638D1cBF",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd0352a019e9ab9d757776f532377aaebd36fd541"
      }
    },
    {
      "chainId": 137,
      "name": "PANDA",
      "symbol": "PANDA",
      "decimals": 18,
      "address": "0xcD7ECB53e78564C09e024bEEac51F611ad92C618",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x73efe5e41f70bdcde2b88bda860c98f996884246"
      }
    },
    {
      "chainId": 137,
      "name": "Endor Protocol Token",
      "symbol": "EDR",
      "decimals": 18,
      "address": "0x1Ac417f1dD23504aAC2076D854581f03196403Fd",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc528c28fec0a90c083328bc45f587ee215760a0f"
      }
    },
    {
      "chainId": 137,
      "name": "superkittens",
      "symbol": "SKITS",
      "decimals": 18,
      "address": "0x5357De35CF517e6CEcD91B269eA551caEE4D171C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6ad053f0a9BFEC8B2e9f91EbCc07e679977bdA76"
      }
    },
    {
      "chainId": 137,
      "name": "Cryption Network Token",
      "symbol": "CNT",
      "decimals": 18,
      "address": "0xD1e6354fb05bF72A8909266203dAb80947dcEccF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x429876c4a6f89fb470e92456b8313879df98b63c"
      }
    },
    {
      "chainId": 137,
      "name": "Polymath",
      "symbol": "POLY",
      "decimals": 18,
      "address": "0xcB059C5573646047D6d88dDdb87B745C18161d3b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/poly.svg"
    },
    {
      "chainId": 137,
      "name": "SafeMoon Inu",
      "symbol": "SMI",
      "decimals": 8,
      "address": "0x196DE3b89083ADcaD83FE49A308de24a96194731",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcd7492db29e2ab436e819b249452ee1bbdf52214"
      }
    },
    {
      "chainId": 137,
      "name": "VUSD",
      "symbol": "VUSD",
      "decimals": 18,
      "address": "0x28F4F063C2405922d8792B04fF24983d6eE7a4b4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x677ddbd918637e5f2c79e164d402454de7da8619"
      }
    },
    {
      "chainId": 137,
      "name": "BNB",
      "symbol": "BNB",
      "decimals": 18,
      "address": "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bnb.svg"
    },
    {
      "chainId": 137,
      "name": "DeFi SISMO",
      "symbol": "SISMO",
      "decimals": 18,
      "address": "0x6681fe034aE21917fac759B087684de5335efD3A",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x686dDECeCC39e1Ff33EAdfB4Bfd059A44cC700Ca"
      }
    },
    {
      "chainId": 137,
      "name": "Trism",
      "symbol": "TRISM",
      "decimals": 18,
      "address": "0x10Bc8bf16308f63F1b4852b2522F22bfD59d4392",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x56b4f8c39e07d4d5d91692acf9d0f6d4d3493763"
      }
    },
    {
      "chainId": 137,
      "name": "ALAN",
      "symbol": "ALAN",
      "decimals": 18,
      "address": "0xa6E99049d3DC5fA94292c86E67742d7CD2ebE561",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8c9952fb855346a752190234261f74dad13c26fa"
      }
    },
    {
      "chainId": 137,
      "name": "BracebridgeGolfClub",
      "symbol": "BGC",
      "decimals": 0,
      "address": "0xEBd0E6B73a0e0D231DA8C91bdD60c09C9C0875c3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa6dc5e47ed08aa8e642ff07b0a3685f41f9f437b"
      }
    },
    {
      "chainId": 137,
      "name": "MoonTools.io",
      "symbol": "MOONS",
      "decimals": 18,
      "address": "0x6F7362AD5656Beb11D94f4e608f2045e2fAD9dC2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x260e63d91fccc499606bae3fe945c4ed1cf56a56"
      }
    },
    {
      "chainId": 137,
      "name": "FLAPP",
      "symbol": "FLAP",
      "decimals": 18,
      "address": "0x594F9D6F09a17f9CAF2dC3c8705a487433412f69",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xCfb72ED3647cC8E7FA52E4F121eCdAbEfC305e7f"
      }
    },
    {
      "chainId": 137,
      "name": "CBK",
      "symbol": "CBK",
      "decimals": 18,
      "address": "0x53f8036e43b2EF39cFCD0C5f26C1257a85D5A3B2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x87761e886399ef8e1624cb0db3230b075a322c88"
      }
    },
    {
      "chainId": 137,
      "name": "Octett",
      "symbol": "OCTT",
      "decimals": 18,
      "address": "0x37B5f741371ABf2207D236B6309d7D2015Bd64e9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x06da6213683a01201b38ee1b39f56090a3cc5703"
      }
    },
    {
      "chainId": 137,
      "name": "XY Oracle",
      "symbol": "XYO",
      "decimals": 18,
      "address": "0xd2507e7b5794179380673870d88B22F94da6abe0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x55296f69f40ea6d20e478533c15a6b08b654e758"
      }
    },
    {
      "chainId": 137,
      "name": "DegenVC",
      "symbol": "DGVC",
      "decimals": 18,
      "address": "0x55CeBfa4504124272D4D5464479E8878d822a8A1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x26E43759551333e57F073bb0772F50329A957b30"
      }
    },
    {
      "chainId": 137,
      "name": "KatanaToken",
      "symbol": "KATANA",
      "decimals": 18,
      "address": "0x90c98Ee97B8bf9A3F8dC402EACc7Bb41028A5D93",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe6410569602124506658ff992f258616ea2d4a3d"
      }
    },
    {
      "chainId": 137,
      "name": "Collective",
      "symbol": "CO2",
      "decimals": 18,
      "address": "0xd9b452421913D014EaEd2588ac57E941A1078C18",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x75739d5944534115d7c54ee8c73f186d793bae02"
      }
    },
    {
      "chainId": 137,
      "name": "Gitcoin",
      "symbol": "GTC",
      "decimals": 18,
      "address": "0xdb95f9188479575F3F718a245EcA1B3BF74567EC",
      "logoURI": "https://user-images.githubusercontent.com/9419140/164305478-c13be380-142e-4fe8-9adf-ac2c09e8f8d8.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f"
      }
    },
    {
      "chainId": 137,
      "name": "Orchid",
      "symbol": "OXT",
      "decimals": 18,
      "address": "0x9880e3dDA13c8e7D4804691A45160102d31F6060",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb"
      }
    },
    {
      "chainId": 137,
      "name": "Options.Market",
      "symbol": "OSM",
      "decimals": 18,
      "address": "0x7392B03A2b8441a108C253f49bDfaCd40853Cc02",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9b75848172677042269c63365b57b0a51c21d031"
      }
    },
    {
      "chainId": 137,
      "name": "renBTC",
      "symbol": "renBTC",
      "decimals": 8,
      "address": "0xD6C23852b94FEde6AB571e4b4cFdb745b49Dc9EB",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D"
      }
    },
    {
      "chainId": 137,
      "name": "Nftfy Token",
      "symbol": "NFTFY",
      "decimals": 18,
      "address": "0xBf6Ff49FfD3d104302Ef0AB0F10f5a84324c091c",
      "logoURI": "https://gateway.ipfs.io/ipfs/QmS3W7dsYiMUqJdPofjetJPoiUTYjicZVjT2kSAiWZwJLh",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xBf6Ff49FfD3d104302Ef0AB0F10f5a84324c091c"
      }
    },
    {
      "chainId": 137,
      "name": "EthereumMax",
      "symbol": "eMax",
      "decimals": 18,
      "address": "0x2f3D902baC71430DEdf5307E9041382dF911B1Af",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x15874d65e649880c2614e7a480cb7c9A55787FF6"
      }
    },
    {
      "chainId": 137,
      "name": "Foundry Logistics Token",
      "symbol": "FRY",
      "decimals": 18,
      "address": "0x48D3a72230e65380f63a05eE41A7BE31773c44b4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6c972b70c533E2E045F333Ee28b9fFb8D717bE69"
      }
    },
    {
      "chainId": 137,
      "name": "Crypto puzzles",
      "symbol": "CPTE",
      "decimals": 18,
      "address": "0x0833E165255E21a9e81f2D4D6bD10C43973c6526",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xE0bDFe2CE51F44556309665D59818CCb541ff067"
      }
    },
    {
      "chainId": 137,
      "name": "Assets of Steve Bayer",
      "symbol": "XASB",
      "decimals": 18,
      "address": "0xE898695409ef54080518ECC568C6CE618E7818e1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6c7d4eD524C14C36048F00dc5f9bBA5848314f39"
      }
    },
    {
      "chainId": 137,
      "name": "Unifty",
      "symbol": "NIF",
      "decimals": 18,
      "address": "0xB6Be3449C6A4b8AB082733F715788d94e78D60Ff",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7e291890b01e5181f7ecc98d79ffbe12ad23df9e"
      }
    },
    {
      "chainId": 137,
      "name": "Panda Token",
      "symbol": "PT",
      "decimals": 18,
      "address": "0xa053517276ae28D46b09dA0023dFCB6E1FC8e13f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd8164b8d21d2e97484de89bfff787d792c95ef2d"
      }
    },
    {
      "chainId": 137,
      "name": "Media Licensing Token",
      "symbol": "MLT",
      "decimals": 18,
      "address": "0x078f0cD6ec0BeD408E9244EecE9fAc05bb4052a7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9506d37f70eB4C3d79C398d326C871aBBf10521d"
      }
    },
    {
      "chainId": 137,
      "name": "Student Coin",
      "symbol": "STC",
      "decimals": 18,
      "address": "0x779b299eA455D35A44FE9baC48648be22C08DEa2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x15b543e986b8c34074dfc9901136d9355a537e7e"
      }
    },
    {
      "chainId": 137,
      "name": "Fetch",
      "symbol": "FET",
      "decimals": 18,
      "address": "0x7583FEDDbceFA813dc18259940F76a02710A8905",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85"
      }
    },
    {
      "chainId": 137,
      "name": "Uniqly",
      "symbol": "UNIQ",
      "decimals": 18,
      "address": "0xABEb34C52292c5f3EE96396E02D8a77c8A903a4F",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3758e00b100876c854636ef8db61988931bb8025"
      }
    },
    {
      "chainId": 137,
      "name": "rainbowpuffpuff",
      "symbol": "RPP",
      "decimals": 18,
      "address": "0xea9306Bbe5fEE6D501282b34e9Db2C25415662DD",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x22E38592d99102FfdAE1AE79A5bbF42DDf92818F"
      }
    },
    {
      "chainId": 137,
      "name": "Pod USD Coin",
      "symbol": "pUSDC",
      "decimals": 6,
      "address": "0x96d161cbf38FACCeD333851A9cEf20936DDA88F4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x386EB78f2eE79AddE8Bdb0a0e27292755ebFea58"
      }
    },
    {
      "chainId": 137,
      "name": "Pod Dai Stablecoin",
      "symbol": "pDAI",
      "decimals": 18,
      "address": "0x18C4315847Cf73D5028c8A98EAd16e862450E618",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2f994e2E4F3395649eeE8A89092e63Ca526dA829"
      }
    },
    {
      "chainId": 137,
      "name": "HappyPay",
      "symbol": "HPAY",
      "decimals": 18,
      "address": "0xF9774f6D13F96b0b7f8C35E86755E1337eCEbC3C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xEeE690AAA67d1eE33365c02C3Bf477A93867052f"
      }
    },
    {
      "chainId": 137,
      "name": "Fortune Cat Coin",
      "symbol": "FCAT",
      "decimals": 18,
      "address": "0x0f4044F4475B7eC4bdE170146ad02A9cD3ad4853",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xB1525E3DbB9F70DA3CF6880839dE62D75E3Ce529"
      }
    },
    {
      "chainId": 137,
      "name": "eWit",
      "symbol": "EWIT",
      "decimals": 9,
      "address": "0xe19958a47432e839932541859B639A8fB4f11232",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x56EE175FE37CD461486cE3c3166e0CaFCcd9843f"
      }
    },
    {
      "chainId": 137,
      "name": "RIOT",
      "symbol": "RIOT",
      "decimals": 18,
      "address": "0x4FF0b68ABc2b9E4e1401E9b691DBa7d66B264AC8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf56408077487cB879c992909C5b5C66D68c02Eb4"
      }
    },
    {
      "chainId": 137,
      "name": "EVO",
      "symbol": "EVO",
      "decimals": 18,
      "address": "0x4237302A7db5dfD04d1FfF5Fd93a6F09bdE8F08C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3fEa51dAab1672d3385f6AF02980e1462cA0687b"
      }
    },
    {
      "chainId": 137,
      "name": "Marlin POND",
      "symbol": "POND",
      "decimals": 18,
      "address": "0x73580A2416A57f1C4b6391DBA688A9e4f7DBECE0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x57b946008913b82e4df85f501cbaed910e58d26c"
      }
    },
    {
      "chainId": 137,
      "name": "kittenMATIC",
      "symbol": "kiMATIC",
      "decimals": 18,
      "address": "0xaba7d7454175D549a21a6318831fde7f5046C303",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4313D2669b73987433C82aA8Df318a39DA9e3209"
      }
    },
    {
      "chainId": 137,
      "name": "BlackPool Token",
      "symbol": "BPT",
      "decimals": 18,
      "address": "0x6863BD30C9e313B264657B107352bA246F8Af8e0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0eC9F76202a7061eB9b3a7D6B59D36215A7e37da"
      }
    },
    {
      "chainId": 137,
      "name": "BCLTjack",
      "symbol": "jack",
      "decimals": 0,
      "address": "0x11CC08D7831F50a1359ff5f30E4cB7d309272E48",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x074bF09d5859AA9DBA6c8f093255d7c01c3e7baD"
      }
    },
    {
      "chainId": 137,
      "name": "Mute.io",
      "symbol": "MUTE",
      "decimals": 18,
      "address": "0x147Ee2488d2ede60b2443B22b245F6B4825F020f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa49d7499271ae71cd8ab9ac515e6694c755d400c"
      }
    },
    {
      "chainId": 137,
      "name": "bZx Protocol Token",
      "symbol": "BZRX",
      "decimals": 18,
      "address": "0x54cFe73f2c7d0c4b62Ab869B473F5512Dc0944D2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x56d811088235F11C8920698a204A5010a788f4b3"
      }
    },
    {
      "chainId": 137,
      "name": "Sake",
      "symbol": "SAK3",
      "decimals": 18,
      "address": "0xeeE92219b7C4Dc9B8Aa31da1C071bc4932e6CE99",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe9F84dE264E91529aF07Fa2C746e934397810334"
      }
    },
    {
      "chainId": 137,
      "name": "Klee Kai",
      "symbol": "KLEE",
      "decimals": 9,
      "address": "0xf137d1744F050De7A610Db728E1cdd77C2aAa755",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x382f0160c24f5c515a19f155bac14d479433a407"
      }
    },
    {
      "chainId": 137,
      "name": "Mainframe Token",
      "symbol": "MFT",
      "decimals": 18,
      "address": "0x91cA694d2B293f70Fe722fbA7d8A5259188959c3",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xDF2C7238198Ad8B389666574f2d8bc411A4b7428"
      }
    },
    {
      "chainId": 137,
      "name": "SIREN",
      "symbol": "SI",
      "decimals": 18,
      "address": "0x54585aAc4353ac2B30022797915ef81D152D5223",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd23ac27148af6a2f339bd82d0e3cff380b5093de"
      }
    },
    {
      "chainId": 137,
      "name": "SamoSwap",
      "symbol": "SAMOZ",
      "decimals": 18,
      "address": "0x7d3fA4bAD8220d927A23F29aa70866Ea97bBF313",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7BE4060ffF13360301E0123D676A2705149964D7"
      }
    },
    {
      "chainId": 137,
      "name": "Penky",
      "symbol": "PENKY",
      "decimals": 18,
      "address": "0x3A35e98cC7390A15d458Bb85f9a12823e2eF25eD",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf8939164a46fbe9fc923f837221eb541e3c7e7b0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/penky.svg"
    },
    {
      "chainId": 137,
      "name": "Pteria",
      "symbol": "PTERIA",
      "decimals": 18,
      "address": "0xc844e334cC96435e71869Fb2F7AD26961A010821",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x02Eca910CB3A7D43eBC7e8028652ed5C6b70259B"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pteria.svg"
    },
    {
      "chainId": 137,
      "name": "Museum of Crypto Art",
      "symbol": "MOCA",
      "decimals": 18,
      "address": "0xcE899f26928a2B21c6a2Fddd393EF37c61dbA918",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9Ac07635DDBDE5db18648c360DEFb00F5f22537e"
      }
    },
    {
      "chainId": 137,
      "name": "Future of Finance Fund",
      "symbol": "FFF",
      "decimals": 18,
      "address": "0x9aCeB6f749396d1930aBc9e263eFc449E5e82c13",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xabafa52d3d5a2c18a4c1ae24480d22b831fc0413"
      }
    },
    {
      "chainId": 137,
      "name": "Zoo Token",
      "symbol": "ZOOT",
      "decimals": 9,
      "address": "0x698619687Dcc9DBE01739D15DfA47e04b0d22443",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1341a2257fa7b770420ef70616f888056f90926c"
      }
    },
    {
      "chainId": 137,
      "name": "Hanzo Inu",
      "symbol": "HNZO",
      "decimals": 9,
      "address": "0xfd66114337Ec9c1021f774aF01f81c56148D938B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x239dc02a28a0774738463e06245544a72745d5c5"
      }
    },
    {
      "chainId": 137,
      "name": "Highly Regarded Token",
      "symbol": "RTRD",
      "decimals": 18,
      "address": "0x5B0c10270Ae2Ee3DC1003BB1E5Cb63E93306131C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5aaddb423d184b4f84b1c07022a1ba1168f83575"
      }
    },
    {
      "chainId": 137,
      "name": "FalconSwap Token",
      "symbol": "FSW",
      "decimals": 18,
      "address": "0xad5dc12E88C6534Eea8cFe2265851D9d4A1472AD",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB"
      }
    },
    {
      "chainId": 137,
      "name": "Etherland",
      "symbol": "ELAND",
      "decimals": 18,
      "address": "0xb0f61C597BBcc29f3f38396B01f9C0f0C2e8BFf0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x33e07f5055173cf8febede8b21b12d1e2b523205"
      }
    },
    {
      "chainId": 137,
      "name": "validator-Eth2",
      "symbol": "vETH2",
      "decimals": 18,
      "address": "0x2fBB41B5Bb01cbFa1cf14473B136666a08Db4AdF",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x898bad2774eb97cf6b94605677f43b41871410b1"
      }
    },
    {
      "chainId": 137,
      "name": "DeHive.finance",
      "symbol": "DHV",
      "decimals": 18,
      "address": "0x6362Bd3Bd1a217bbf6Afa810eaA63f2d55620e2e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x62dc4817588d53a056cbbd18231d91ffccd34b2a"
      }
    },
    {
      "chainId": 137,
      "name": "Bytom minted",
      "symbol": "mBTM",
      "decimals": 8,
      "address": "0xA16EbA3b7562FC92597579A80Fe53a92DCab7122",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9288a57d6c5644b25569e9d1d5e9e328228d26c6"
      }
    },
    {
      "chainId": 137,
      "name": "Koji",
      "symbol": "KOJI",
      "decimals": 18,
      "address": "0x6E94662b2f78DF1f014Dafa7464Bded57F1481B2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1c8266a4369af6d80df2659ba47b3c98f35cb8be"
      }
    },
    {
      "chainId": 137,
      "name": "CargoX Token",
      "symbol": "CXO",
      "decimals": 18,
      "address": "0xf2ae0038696774d65E67892c9D301C5f2CbbDa58",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb6ee9668771a79be7967ee29a63d4184f8097143"
      }
    },
    {
      "chainId": 137,
      "name": "ExoPlanets",
      "symbol": "XPL",
      "decimals": 18,
      "address": "0x8A95d35dF832F03e99ED8Ee86E9d5F6Dd2641e81",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb12e260275bcd28e6f8820666ba02c67c9600843"
      }
    },
    {
      "chainId": 137,
      "name": "Metric.exchange",
      "symbol": "METRIC",
      "decimals": 18,
      "address": "0x9f1Aeb72d5F38f2852b2a0f610bFb0391a6a9aB4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac"
      }
    },
    {
      "chainId": 137,
      "name": "BitSong",
      "symbol": "BTSG",
      "decimals": 18,
      "address": "0xc5946F0c9b521f72658b658fC1260D04ea7fBE73",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x05079687d35b93538cbd59fe5596380cae9054a9"
      }
    },
    {
      "chainId": 137,
      "name": "AMIS",
      "symbol": "AMIS",
      "decimals": 9,
      "address": "0x6f57Ec3C983a04C9Bf9958C9E908c39a3cD0870d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x949bed886c739f1a3273629b3320db0c5024c719"
      }
    },
    {
      "chainId": 137,
      "name": "Spice",
      "symbol": "SFI",
      "decimals": 18,
      "address": "0x35b937583F04A24963eb685F728a542240f28Dd8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb753428af26e81097e7fd17f40c88aaa3e04902c"
      }
    },
    {
      "chainId": 137,
      "name": "NETVRK",
      "symbol": "NTVRK",
      "decimals": 18,
      "address": "0xe4eF793a4bFe292D7eb229dF804FAb5BDc2c51E8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfc0d6cf33e38bce7ca7d89c0e292274031b7157a"
      }
    },
    {
      "chainId": 137,
      "name": "Oraichain Token",
      "symbol": "ORAI",
      "decimals": 18,
      "address": "0xF4310Adb83694Bc4808e0C5ca8F7027C6127921D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4c11249814f11b9346808179cf06e71ac328c1b5"
      }
    },
    {
      "chainId": 137,
      "name": "Archer DAO Governance Token",
      "symbol": "ARCH",
      "decimals": 18,
      "address": "0x15c310F7Af0F5379D84dfBA2fbF41b127023C784",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1f3f9d3068568f8040775be2e8c03c103c61f3af"
      }
    },
    {
      "chainId": 137,
      "name": "Bird.Money",
      "symbol": "BIRD",
      "decimals": 18,
      "address": "0x464F540Ef8c72bBBEC620dFb12Fcb55d1989d861",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x70401dfd142a16dc7031c56e862fc88cb9537ce0"
      }
    },
    {
      "chainId": 137,
      "name": "Meta",
      "symbol": "MTA",
      "decimals": 18,
      "address": "0xF501dd45a1198C2E1b5aEF5314A68B9006D842E0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2"
      }
    },
    {
      "chainId": 137,
      "name": "AllianceBlock Token",
      "symbol": "ALBT",
      "decimals": 18,
      "address": "0x60098a09fe0436eA7099F0444F05A36bEB71cB09",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x00a8b738e453ffd858a7edf03bccfe20412f0eb0"
      }
    },
    {
      "chainId": 137,
      "name": "Hegic",
      "symbol": "HEGIC",
      "decimals": 18,
      "address": "0xb54E928297F1Bf5740FF345811443de0F6FCd48b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x584bc13c7d411c00c01a62e8019472de68768430"
      }
    },
    {
      "chainId": 137,
      "name": "ROOK",
      "symbol": "ROOK",
      "decimals": 18,
      "address": "0xF92501c8213da1D6C74A76372CCc720Dc8818407",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfa5047c9c78b8877af97bdcb85db743fd7313d4a"
      }
    },
    {
      "chainId": 137,
      "name": "CRO",
      "symbol": "CRO",
      "decimals": 8,
      "address": "0xAdA58DF0F643D959C2A47c9D4d4c1a4deFe3F11C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
      }
    },
    {
      "chainId": 137,
      "name": "Voyager",
      "symbol": "VGX",
      "decimals": 8,
      "address": "0x054c42b6414747F5263b4A86f21B1aFAD00326Bf",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5af2be193a6abca9c8817001f45744777db30756"
      }
    },
    {
      "chainId": 137,
      "name": "Serum",
      "symbol": "SRM",
      "decimals": 6,
      "address": "0x6Bf2eb299E51Fc5DF30Dec81D9445dDe70e3F185",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff"
      }
    },
    {
      "chainId": 137,
      "name": "Phala",
      "symbol": "PHA",
      "decimals": 18,
      "address": "0x3Dee6CeB3F1E0061793510D21F2CCdE2941CB612",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6c5ba91642f10282b576d91922ae6448c9d52f4e"
      }
    },
    {
      "chainId": 137,
      "name": "Carbon",
      "symbol": "CRBN",
      "decimals": 18,
      "address": "0x89eF0900b0A6b5548ab2FF58EF588F9433b5fCf5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcdeee767bed58c5325f68500115d4b722b3724ee"
      }
    },
    {
      "chainId": 137,
      "name": "Collateral",
      "symbol": "COLL",
      "decimals": 18,
      "address": "0x7C68ad908D4Da363c2379D2D58E718093b9Bf970",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x957891c11616d3e0b0a76a76fb42724c382e0ef3"
      }
    },
    {
      "chainId": 137,
      "name": "LQTY",
      "symbol": "LQTY",
      "decimals": 18,
      "address": "0x8Ab2Fec94d17ae69FB90E7c773f2C85Ed1802c01",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d"
      }
    },
    {
      "chainId": 137,
      "name": "Plasma",
      "symbol": "PPAY",
      "decimals": 18,
      "address": "0x08158A6b5d4018340387d1A302f882E98a8bC5b4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2"
      }
    },
    {
      "chainId": 137,
      "name": "Healthcare Administration Token",
      "symbol": "SOLVE",
      "decimals": 8,
      "address": "0x00A49A868d3FB149483A69045e1Ed01e8C812FF0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x446c9033e7516d820cc9a2ce2d0b7328b579406f"
      }
    },
    {
      "chainId": 137,
      "name": "Pogcoin",
      "symbol": "POG",
      "decimals": 2,
      "address": "0xE9124Da8d008774283467b2D618624D287dE0339",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9DF38Ad87D02b006F93424C6815BA0B2B3e3AEF8"
      }
    },
    {
      "chainId": 137,
      "name": "DAO1",
      "symbol": "DAO1",
      "decimals": 18,
      "address": "0x3c5D1617C30BA71972adD4b0C9A6B9848f2afeeD",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xce3f6f6672616c39d8b6858f8dac9902eca42c84"
      }
    },
    {
      "chainId": 137,
      "name": "SafeSwap",
      "symbol": "SSGT",
      "decimals": 18,
      "address": "0x914034f0FF781c430Aa9594851cC95806fd19dc6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2ECc48ba346A73d7d55aa5a46b5E314d9DAA6161"
      }
    },
    {
      "chainId": 137,
      "name": "Value Coin",
      "symbol": "VALUE",
      "decimals": 18,
      "address": "0x6B0a55D19Af4F16F98965A5B85a308383D8bE55f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6997a08DE139F0b99444506f333A04Cf657832a1"
      }
    },
    {
      "chainId": 137,
      "name": "ShroomTopia SPOR Token",
      "symbol": "SPOR",
      "decimals": 18,
      "address": "0xdc87ED1b972d42c5B218503A542d438B7fc65B7B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x80b70ec7ed638b5f7b4ecf0edbe6c2feebde9d02"
      }
    },
    {
      "chainId": 137,
      "name": "Tacos",
      "symbol": "TACO",
      "decimals": 18,
      "address": "0x09450784A86A083041F5773836dCA457531ea00b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x00d1793d7c3aae506257ba985b34c76aaf642557"
      }
    },
    {
      "chainId": 137,
      "name": "THORChain ETH.RUNE",
      "symbol": "RUNE",
      "decimals": 18,
      "address": "0x722Eb54CD20D13938dF8E792A5849a2391C8463F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3155ba85d5f96b2d030a4966af206230e46849cb"
      }
    },
    {
      "chainId": 137,
      "name": "PieDAO DOUGH v2",
      "symbol": "DOUGH",
      "decimals": 18,
      "address": "0x990F860968714c2D16e91Ec0cd9709A94264Cf64",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xad32a8e6220741182940c5abf610bde99e737b2d"
      }
    },
    {
      "chainId": 137,
      "name": "TestScaleSwapToken",
      "symbol": "TSCA",
      "decimals": 18,
      "address": "0x2242973E0D9CACAda96372A9E23C96F15776B96b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc5e9be63ab9473280c4ff9ff789ca584958e0494"
      }
    },
    {
      "chainId": 137,
      "name": "Yearn Ecosystem Pie",
      "symbol": "YPIE",
      "decimals": 18,
      "address": "0xd3F0cd30a2D3aEFb180D23f3F38Aa1C4e0B1c98A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x17525e4f4af59fbc29551bc4ece6ab60ed49ce31"
      }
    },
    {
      "chainId": 137,
      "name": "PieDAO DEFI Large Cap",
      "symbol": "DEFI+L",
      "decimals": 18,
      "address": "0xE90777bd6c84bf4762565eD83bc5784cc9FAf8C4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x78f225869c08d478c34e5f645d07a87d3fe8eb78"
      }
    },
    {
      "chainId": 137,
      "name": "PieDAO DEFI Small Cap",
      "symbol": "DEFI+S",
      "decimals": 18,
      "address": "0x986d3EA4089488f77469697c50517eE12F36E1bC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c"
      }
    },
    {
      "chainId": 137,
      "name": "PieDAO DEFI++",
      "symbol": "DEFI++",
      "decimals": 18,
      "address": "0x5b6ab5078Bd2bbF1A215fFFBa16a94b7DF7F639d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8d1ce361eb68e9e05573443c407d4a3bed23b033"
      }
    },
    {
      "chainId": 137,
      "name": "CompliFi",
      "symbol": "COMFI",
      "decimals": 18,
      "address": "0x72bba3Aa59a1cCB1591D7CDDB714d8e4D5597E96",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x752efadc0a7e05ad1bcccda22c141d01a75ef1e4"
      }
    },
    {
      "chainId": 137,
      "name": "COOS",
      "symbol": "COOS",
      "decimals": 18,
      "address": "0xff4b04163E530d763010171358E7e1f70c1AbbD1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x24EbfC20Bb2e1dAADd98d28341ab37D0c154f4Cb"
      }
    },
    {
      "chainId": 137,
      "name": "Method",
      "symbol": "MTHD",
      "decimals": 18,
      "address": "0x9bD0463B12B432AfBDd6B79Ae2032267676ce948",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x84ba4aecfde39d69686a841bab434c32d179a169"
      }
    },
    {
      "chainId": 137,
      "name": "pTokens BTC",
      "symbol": "pBTC",
      "decimals": 18,
      "address": "0x121eF177A0489271B4339bc29Ee64609b47D43C4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5228a22e72ccc52d415ecfd199f99d0665e7733b"
      }
    },
    {
      "chainId": 137,
      "name": "NFT Protocol",
      "symbol": "NFT",
      "decimals": 18,
      "address": "0x65c2C7095bFDC8460d7302b6a95c66cD5D8B2CFf",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcB8d1260F9c92A3A545d409466280fFdD7AF7042"
      }
    },
    {
      "chainId": 137,
      "name": "Echo Token",
      "symbol": "ECHO",
      "decimals": 18,
      "address": "0xbE34506683C842Dea90244333f9E8312672F1106",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x171706B7D113c68f2cc68a6CE63b1dbDcdF7B233"
      }
    },
    {
      "chainId": 137,
      "name": "0chain",
      "symbol": "ZCN",
      "decimals": 10,
      "address": "0x8bB30E0e67b11b978a5040144c410e1ccDDcba30",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb9EF770B6A5e12E45983C5D80545258aA38F3B78"
      }
    },
    {
      "chainId": 137,
      "name": "Golem Network Token",
      "symbol": "GLM",
      "decimals": 18,
      "address": "0x0B220b82F3eA3B7F6d9A1D8ab58930C064A2b5Bf",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429"
      }
    },
    {
      "chainId": 137,
      "name": "Mutt Coin",
      "symbol": "MUTT",
      "decimals": 18,
      "address": "0x3B538469d94cDa1387c473F408C833c2208bcEd7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x766b0f271b6bf2a424259e19e155d6d24ea1c0b1"
      }
    },
    {
      "chainId": 137,
      "name": "Linear Token",
      "symbol": "LINA",
      "decimals": 18,
      "address": "0x664a31F4985f1eF31d90D73E3da7ed880a052195",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3e9bc21c9b189c09df3ef1b824798658d5011937"
      }
    },
    {
      "chainId": 137,
      "name": "South African Tether",
      "symbol": "XZAR",
      "decimals": 18,
      "address": "0x30DE46509Dbc3a491128F97be0aAf70dc7Ff33cB",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x48f07301e9e29c3c38a80ae8d9ae771f224f1054"
      }
    },
    {
      "chainId": 137,
      "name": "TNodeGreen",
      "symbol": "TNG",
      "decimals": 8,
      "address": "0x0F38dB64E04Bcd5373dCdF941Fd909d8436f4fdb",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa0e2a28fd7b1e4e7e5cced5c5bb00f7d24a5c282"
      }
    },
    {
      "chainId": 137,
      "name": "OCC",
      "symbol": "OCC",
      "decimals": 18,
      "address": "0xF30355BA14B2d3b31597EC71a4542f57e902Cb80",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2f109021afe75b949429fe30523ee7c0d5b27207"
      }
    },
    {
      "chainId": 137,
      "name": "Layer 2 Index",
      "symbol": "LTI",
      "decimals": 18,
      "address": "0xE329456b762a3888bbaFf6880036931D1399a417",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x693391144D1e079e20cC64f795e9450C94966171"
      }
    },
    {
      "chainId": 137,
      "name": "DEXTF Token",
      "symbol": "DEXTF",
      "decimals": 18,
      "address": "0x400784930560ab531bD840Eb00f52e9CF66bdf98",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0"
      }
    },
    {
      "chainId": 137,
      "name": "vVSP pool",
      "symbol": "vVSP",
      "decimals": 18,
      "address": "0xF2C1b3B6eB00a3fe46478FC2E7a5E04997fEBa22",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbA4cFE5741b357FA371b506e5db0774aBFeCf8Fc"
      }
    },
    {
      "chainId": 137,
      "name": "Virtual Dollar",
      "symbol": "DV",
      "decimals": 18,
      "address": "0x385E2000681D5979AE4e5171B94b5d5813d6253F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb791a875eA4836a9EC16CdCF4F747c0b9CA47C7d"
      }
    },
    {
      "chainId": 137,
      "name": "VesperToken",
      "symbol": "VSP",
      "decimals": 18,
      "address": "0x09C5a4BCA808bD1ba2b8E6B3aAF7442046B4ca5B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1b40183efb4dd766f11bda7a7c3ad8982e998421"
      }
    },
    {
      "chainId": 137,
      "name": "CoinDev.io",
      "symbol": "ANAL",
      "decimals": 18,
      "address": "0x0A438D3b374bB68a1EFd8e70ACDf22C995310Cf7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1a2df43ae7dee5e7a1915a4125a0c3875757bd5a"
      }
    },
    {
      "chainId": 137,
      "name": "Lyon.Finance",
      "symbol": "LYON",
      "decimals": 2,
      "address": "0x6b8f374e899e20CD1c97300a4A87ed07E4b8B9f9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0e29041fb31a3e7f5f7f6a917a7df006f75a7373"
      }
    },
    {
      "chainId": 137,
      "name": "APWine Token",
      "symbol": "APW",
      "decimals": 18,
      "address": "0x6C0AB120dBd11BA701AFF6748568311668F63FE0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4104b135DBC9609Fc1A9490E61369036497660c8"
      }
    },
    {
      "chainId": 137,
      "name": "ZEN Exchange Token",
      "symbol": "ZCX",
      "decimals": 18,
      "address": "0xf86302c0716098Ef5b3d358099683904f449FFB8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc52c326331e9ce41f04484d3b5e5648158028804"
      }
    },
    {
      "chainId": 137,
      "name": "ZARP (Rand Reserve)",
      "symbol": "ZARP",
      "decimals": 2,
      "address": "0xA28F6797f9Be95a6AE2b59Bbe94498725dC091A9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2f085edec7113e54a1747bD9572b213E662C6165"
      }
    },
    {
      "chainId": 137,
      "name": "bXIOT Token",
      "symbol": "bXIOT",
      "decimals": 6,
      "address": "0x8FE2526045E6658Cd60c3eCbD92F6D33E73A1D1b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5c4ac68aAc56eBe098D621Cd8CE9F43270Aaa355"
      }
    },
    {
      "chainId": 137,
      "name": "RegiCoin",
      "symbol": "REGI",
      "decimals": 18,
      "address": "0xfa72b07adE2Af7d41413850A1e8D5578b3490988",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xD8b98032f2220e1DDCC65371c0a7b9fA7391D347"
      }
    },
    {
      "chainId": 137,
      "name": "HORD Token",
      "symbol": "HORD",
      "decimals": 18,
      "address": "0xa3590A0e0c9963d048a9f43cF1ee506Fb27D9129",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x43a96962254855f16b925556f9e97be436a43448"
      }
    },
    {
      "chainId": 137,
      "name": "Polkadex",
      "symbol": "PDEX",
      "decimals": 18,
      "address": "0x93C2C75A674700e9Ed7A46Cf220EC140aea09Fad",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xF59ae934f6fe444afC309586cC60a84a0F89Aaea"
      }
    },
    {
      "chainId": 137,
      "name": "Doge of Woof Street",
      "symbol": "WSDOGE",
      "decimals": 9,
      "address": "0xCaE54386449C0A7CE2d680982E3D08250dc3ec3b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xCBDf1deb934E945a70b7289bB98e97013777F820"
      }
    },
    {
      "chainId": 137,
      "name": "Cyclone Protocol",
      "symbol": "CYC",
      "decimals": 18,
      "address": "0x76cD98a81b80f9373463b70cFfFf9c4b4Fd92062",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8861cff2366c1128fd699b68304ad99a0764ef9a"
      }
    },
    {
      "chainId": 137,
      "name": "IoTeX Network",
      "symbol": "IOTX",
      "decimals": 18,
      "address": "0xf6372cDb9c1d3674E83842e3800F2A62aC9F3C66",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6fb3e0a217407efff7ca062d46c26e5d60a14d69"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/iotx.svg"
    },
    {
      "chainId": 137,
      "name": "DogeDao",
      "symbol": "DogeDao",
      "decimals": 18,
      "address": "0x40077808B346681C7032Cdf6a2920ab9980eAb91",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x044f613cdfffbac8bba42283dd8d97b81c8b3f3c"
      }
    },
    {
      "chainId": 137,
      "name": "Pinknode Token",
      "symbol": "PNODE",
      "decimals": 18,
      "address": "0x4E92f6f10496F3fCB790Cc6969Cc15B87c8F9199",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xAF691508BA57d416f895e32a1616dA1024e882D2"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pnode.svg"
    },
    {
      "chainId": 137,
      "name": "Shiba Cosmos",
      "symbol": "SHIBCO",
      "decimals": 9,
      "address": "0x19334A0E0A6089D4014f82E9077Ec1a27e27bfa1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc5c43ad81e6c76eaa1f2dd92cb6a11ff6b6d09ea"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/shibco.svg"
    },
    {
      "chainId": 137,
      "name": "Coldstack",
      "symbol": "CLS",
      "decimals": 18,
      "address": "0xd1C9704bB651d334e9A600dbc056504cc773479F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x675bbc7514013e2073db7a919f6e4cbef576de37"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cls.svg"
    },
    {
      "chainId": 137,
      "name": "Interest-Bearing BTC",
      "symbol": "ibBTC",
      "decimals": 18,
      "address": "0x4EaC4c4e9050464067D673102F8E24b2FccEB350",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ibbtc.svg"
    },
    {
      "chainId": 137,
      "name": "UniPower",
      "symbol": "POWER",
      "decimals": 18,
      "address": "0x00D5149cDF7CEC8725bf50073c51c4fa58eCCa12",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xF2f9A7e93f845b3ce154EfbeB64fB9346FCCE509"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/power.svg"
    },
    {
      "chainId": 137,
      "name": "SafeEarth",
      "symbol": "SAFEEARTH",
      "decimals": 9,
      "address": "0x431351DbFE3E03Be7842e411C6627aCb0763C5fc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe6f1966d04cfcb9cd1b1dc4e8256d8b501b11cba"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/safeearth.svg"
    },
    {
      "chainId": 137,
      "name": "Conjure",
      "symbol": "CNJ",
      "decimals": 18,
      "address": "0x2b76F9E7BecC7B4381EEB1894385045B1aA7fBAb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x00A55375002f3cDa400383F479e7Cd57Bad029A9"
      }
    },
    {
      "chainId": 137,
      "name": "Donkey",
      "symbol": "DON",
      "decimals": 18,
      "address": "0xc1fe55e82A992f870F68Ba208617486Bee7Ad0fc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x217ddead61a42369a266f1fb754eb5d3ebadc88a"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/don.svg"
    },
    {
      "chainId": 137,
      "name": "dfohub",
      "symbol": "buidl",
      "decimals": 18,
      "address": "0x33E09c93c7515BC346bF49D4e4bD0C7bE63F814D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7b123f53421b1bf8533339bfbdc7c98aa94163db"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/buidl.svg"
    },
    {
      "chainId": 137,
      "name": "ETHA",
      "symbol": "ETHA",
      "decimals": 18,
      "address": "0x59E9261255644c411AfDd00bD89162d09D862e38",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x59E9261255644c411AfDd00bD89162d09D862e38"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/etha.svg"
    },
    {
      "chainId": 137,
      "name": "megaBONK",
      "symbol": "mBONK",
      "decimals": 18,
      "address": "0xd93c61D4418d77A537b6B57478C108E193362f0C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xacfe45c352c902ae3a3f9b6bfe6ec994c5d791bf"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mbonk.svg"
    },
    {
      "chainId": 137,
      "name": "ChainGuardians Governance Token",
      "symbol": "CGG",
      "decimals": 18,
      "address": "0x2Ab4f9aC80F33071211729e45Cfc346C1f8446d5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cgg.svg"
    },
    {
      "chainId": 137,
      "name": "dHEDGE Top Index",
      "symbol": "dTOP",
      "decimals": 18,
      "address": "0x0361BdEAB89DF6BBcc52c43589FABba5143d19dD",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0f4c00139602AB502Bc7c1c0e71D6CB72A9FB0e7"
      }
    },
    {
      "chainId": 137,
      "name": "iEx.ec Network Token",
      "symbol": "RLC",
      "decimals": 9,
      "address": "0xbe662058e00849C3Eef2AC9664f37fEfdF2cdbFE",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x607f4c5bb672230e8672085532f7e901544a7375"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rlc.svg"
    },
    {
      "chainId": 137,
      "name": "Woofy",
      "symbol": "WOOFY",
      "decimals": 12,
      "address": "0xD0660cD418a64a1d44E9214ad8e459324D8157f1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xD0660cD418a64a1d44E9214ad8e459324D8157f1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/woofy.svg"
    },
    {
      "chainId": 137,
      "name": "Jigstack",
      "symbol": "STAK",
      "decimals": 18,
      "address": "0x46A5D492788f8AFdfC743Ab7D7bD13F996249ED5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/stak.svg"
    },
    {
      "chainId": 137,
      "name": "Mogul Stars",
      "symbol": "STARS",
      "decimals": 18,
      "address": "0xFd81cfCD9C525b0A4C83Cdc37fd23f7e233CDE45",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc55c2175E90A46602fD42e931f62B3Acc1A013Ca"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/stars.svg"
    },
    {
      "chainId": 137,
      "name": "Cryptex",
      "symbol": "CTX",
      "decimals": 18,
      "address": "0x8c208BC2A808a088a78398fed8f2640cab0b6EDb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x321c2fe4446c7c963dc41dd58879af648838f98d"
      }
    },
    {
      "chainId": 137,
      "name": "TCAP Token",
      "symbol": "TCAP",
      "decimals": 18,
      "address": "0x67BcDE6a52BE923D3223fCae927aB16B352768Bb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x16c52CeeCE2ed57dAd87319D91B5e3637d50aFa4"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/tcap.svg"
    },
    {
      "chainId": 137,
      "name": "ArGo Token",
      "symbol": "ARGO",
      "decimals": 18,
      "address": "0xD0252fB67606Ed74d0cACD17B2eb38446e4466c9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x28Cca76f6e8eC81e4550ecd761f899110b060E97"
      }
    },
    {
      "chainId": 137,
      "name": "SuperBid",
      "symbol": "SUPERBID",
      "decimals": 18,
      "address": "0xA3860f969075045D82de85B06bB665f93c4BAE32",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0563dce613d559a47877ffd1593549fb9d3510d6"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/superbid.svg"
    },
    {
      "chainId": 137,
      "name": "Finally Usable Crypto Karma",
      "symbol": "FUCK",
      "decimals": 4,
      "address": "0x3C1D58c24D9a33bBa6d90E31e3AA828aF33f4F58",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x65be44c747988fbf606207698c944df4442efe19"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/fuck.svg"
    },
    {
      "chainId": 137,
      "name": "AurusSILVER",
      "symbol": "AWS",
      "decimals": 18,
      "address": "0xA96D47c621a8316d4F9539E3B38180C7067e84CA",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb89903dde3899f0280b99913168ee833a7896b93"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/aws.svg"
    },
    {
      "chainId": 137,
      "name": "Dogelon",
      "symbol": "ELON",
      "decimals": 18,
      "address": "0xE0339c80fFDE91F3e20494Df88d4206D86024cdF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Tezos",
      "symbol": "WXTZ",
      "decimals": 18,
      "address": "0x308ba429a913d952275090Fc35dEA9C36A511B5A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xA3865E64121537b5b59B5e239Db4aCBe6F36aa74"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Litecoin",
      "symbol": "WLTC",
      "decimals": 18,
      "address": "0xb2DB9d30CaA8A46e7a99b3Cec2e014f9488071eC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x53c4871322Bb47e7A24136fce291a6dcC832a294"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Filecoin",
      "symbol": "WFIL",
      "decimals": 18,
      "address": "0xEde1B77C0Ccc45BFa949636757cd2cA7eF30137F",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6e1A19F235bE7ED8E3369eF73b196C07257494DE"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped ZEC",
      "symbol": "WZEC",
      "decimals": 18,
      "address": "0x4F38008D9E2b6F1374199B29d6610021f70F174b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4A64515E5E1d1073e83f30cB97BEd20400b66E10"
      }
    },
    {
      "chainId": 137,
      "name": "Labra",
      "symbol": "LABRA",
      "decimals": 9,
      "address": "0xCE59e5c0F130Da0796509a0d32f44B0a6C81B9de",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x106d3c66d22d2dd0446df23d7f5960752994d600"
      }
    },
    {
      "chainId": 137,
      "name": "LIQUID",
      "symbol": "LIQUID",
      "decimals": 18,
      "address": "0x258b34a8f350c833D5308cEb3F7f586c54aFe973",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xC618D56b6D606E59c6B87Af724AB5a91eb40D1cb"
      }
    },
    {
      "chainId": 137,
      "name": "PETRON PAY SECURITY TOKEN",
      "symbol": "PETRON",
      "decimals": 18,
      "address": "0xfF7ef642B070CF63602E46a2eD63aDf893e95437",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x43789e8aeef0d30cffb57fc0870a5c785b7b93a1"
      }
    },
    {
      "chainId": 137,
      "name": "Jejudoge",
      "symbol": "JEJUDOGE",
      "decimals": 18,
      "address": "0x5Ca2ea050a3552aDdAA88466f0AA088bCc0dC2fb",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x939a7a577d93ad29b64c1595b1284ce660a479b9"
      }
    },
    {
      "chainId": 137,
      "name": "Inverse DAO",
      "symbol": "INV",
      "decimals": 18,
      "address": "0xF18Ac368001b0DdC80aA6a8374deb49e868EFDb8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/inv.svg"
    },
    {
      "chainId": 137,
      "name": "Wrapped STA",
      "symbol": "WSTA",
      "decimals": 18,
      "address": "0xf629712180bEF6F4c569B704e03d0AcbE276Eb6d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xedeec5691f23e4914cf0183a4196bbeb30d027a0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/wsta.svg"
    },
    {
      "chainId": 137,
      "name": "Sanshu Inu",
      "symbol": "SANSHU",
      "decimals": 9,
      "address": "0xC518edFB9667214Be3559B86E73777d1C4789163",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc73c167e7a4ba109e4052f70d5466d0c312a344d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sanshu.svg"
    },
    {
      "chainId": 137,
      "name": "YFII.finance",
      "symbol": "YFII",
      "decimals": 18,
      "address": "0xb8cb8a7F4C2885C03e57E973C74827909Fdc2032",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/yfii.svg"
    },
    {
      "chainId": 137,
      "name": "USDK",
      "symbol": "USDK",
      "decimals": 18,
      "address": "0xD07A7FAc2857901E4bEC0D89bBDAe764723AAB86",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1c48f86ae57291f7686349f12601910bd8d470bb"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/usdk.svg"
    },
    {
      "chainId": 137,
      "name": "Paxos Standard",
      "symbol": "PAX",
      "decimals": 18,
      "address": "0x6F3B3286fd86d8b47EC737CEB3D0D354cc657B3e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
      }
    },
    {
      "chainId": 137,
      "name": "Gemini dollar",
      "symbol": "GUSD",
      "decimals": 2,
      "address": "0xC8A94a3d3D2dabC3C1CaffFFDcA6A7543c3e3e65",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/gusd.svg"
    },
    {
      "chainId": 137,
      "name": "TrueUSD",
      "symbol": "TUSD",
      "decimals": 18,
      "address": "0x2e1AD108fF1D8C782fcBbB89AAd783aC49586756",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0000000000085d4780B73119b644AE5ecd22b376"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/tusd.svg"
    },
    {
      "chainId": 137,
      "name": "0x Protocol Token",
      "symbol": "ZRX",
      "decimals": 18,
      "address": "0x5559Edb74751A0edE9DeA4DC23aeE72cCA6bE3D5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe41d2489571d322189246dafa5ebde1f4699f498"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/zrx.svg"
    },
    {
      "chainId": 137,
      "name": "3 Comma Club",
      "symbol": "THREE",
      "decimals": 18,
      "address": "0x66D70309D37eaEA53B22A1a3fA280327B2C610c6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x14fD3063dfd3cE0A2C4C5eE43aB49988A989202C"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/three.svg"
    },
    {
      "chainId": 137,
      "name": "PUSSY token",
      "symbol": "PUSSY",
      "decimals": 18,
      "address": "0x79B9A1C21EcF6a22A6D722A5Bfb437Ef776E87CD",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9196e18bc349b1f64bc08784eae259525329a1ad"
      }
    },
    {
      "chainId": 137,
      "name": "BTC 2x Flexible Leverage Index",
      "symbol": "BTC2x-FLI",
      "decimals": 18,
      "address": "0x4b54Bc363f5F9c6E0fcd82EaC6919aE213464Cc6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0b498ff89709d3838a063f1dfa463091f9801c2b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/btc2x-fli.svg"
    },
    {
      "chainId": 137,
      "name": "Dickels",
      "symbol": "8=D",
      "decimals": 18,
      "address": "0x68e311445FA668107f1dCd13758788643b3AF240",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa64c3956D55592fa20762D8e62eB5B8E6f8AaAd0"
      }
    },
    {
      "chainId": 137,
      "name": "BLOCKv Token",
      "symbol": "VEE",
      "decimals": 18,
      "address": "0xf1c1A3C2481A3a8A3f173A9ab5Ade275292A6fA3",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x340D2bdE5Eb28c1eed91B2f790723E3B160613B7"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/vee.svg"
    },
    {
      "chainId": 137,
      "name": "L�f",
      "symbol": "LIF",
      "decimals": 18,
      "address": "0x5b3455590Ec7F5a25119885Ed62aFBA9bC2e5D65",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xEB9951021698B42e4399f9cBb6267Aa35F82D59D"
      }
    },
    {
      "chainId": 137,
      "name": "ProjectSenpai",
      "symbol": "SENPAI",
      "decimals": 18,
      "address": "0x69f240eD3456A098f2D0D898566597E7551a7C81",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5a705745373a780814c379Ef17810630D529EFE0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/senpai.svg"
    },
    {
      "chainId": 137,
      "name": "FOX",
      "symbol": "FOX",
      "decimals": 18,
      "address": "0x65A05DB8322701724c197AF82C9CaE41195B0aA8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc770eefad204b5180df6a14ee197d99d808ee52d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/fox.svg"
    },
    {
      "chainId": 137,
      "name": "Nash Exchange Token",
      "symbol": "NEX",
      "decimals": 8,
      "address": "0xA486c6BC102f409180cCB8a94ba045D39f8fc7cB",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe2dc070524a6e305ddb64d8513dc444b6a1ec845"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/nex.svg"
    },
    {
      "chainId": 137,
      "name": "Dogen",
      "symbol": "DOGEN",
      "decimals": 18,
      "address": "0x9D8A8D15A45fb10060f1d642FB97aA28F5CdedE2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x17eb50fdd2995696ee82912a80a9766fcbb0ecca"
      }
    },
    {
      "chainId": 137,
      "name": "Corgi Inu",
      "symbol": "CORGI",
      "decimals": 10,
      "address": "0x26361cFC497021ecc366ec11cAFa27290f3c055c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe50006781f435ae43096288334afd9ae5ba50065"
      }
    },
    {
      "chainId": 137,
      "name": "Bitfinex LEO Token",
      "symbol": "LEO",
      "decimals": 18,
      "address": "0x06D02e9D62A13fC76BB229373FB3BBBD1101D2fC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/leo.svg"
    },
    {
      "chainId": 137,
      "name": "KIMCHI.finance",
      "symbol": "KIMCHI",
      "decimals": 18,
      "address": "0xD62355546a93bFb0E891E905Ff40B3B26ff5F2b1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1e18821e69b9faa8e6e75dffe54e7e25754beda0"
      }
    },
    {
      "chainId": 137,
      "name": "Silver Fifty Token",
      "symbol": "SLX",
      "decimals": 0,
      "address": "0xD762d38220751F84aE5dC3fb67C8d971c08A638a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb17d1826e09135457328c3a397fc40aa56a46256"
      }
    },
    {
      "chainId": 137,
      "name": "Governor",
      "symbol": "GDAO",
      "decimals": 18,
      "address": "0x98113e216578359b8c0EB3a9fDDd64285E91120A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x515d7e9d75e2b76db60f8a051cd890eba23286bc"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/gdao.svg"
    },
    {
      "chainId": 137,
      "name": "Musketeer",
      "symbol": "MUSKETS",
      "decimals": 18,
      "address": "0x46ca31e0439dbF5D0D9c0338Be4912dd35D45A51",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbc93d1aba134cc81F431dE04f2D9F46Fc5D6D6bc"
      }
    },
    {
      "chainId": 137,
      "name": "Neos Credits",
      "symbol": "NCR",
      "decimals": 18,
      "address": "0xDA6f726E2088F129D3Ecb2257206AdF7D8537Ba5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ncr.svg"
    },
    {
      "chainId": 137,
      "name": "POP Token",
      "symbol": "POP!",
      "decimals": 18,
      "address": "0xF872ff474C01C4178dadEB941089a130Aa1EEd93",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x98629512ed2239974e169341be5b920ea4dcdb21"
      }
    },
    {
      "chainId": 137,
      "name": "Truebit",
      "symbol": "TRUtru",
      "decimals": 18,
      "address": "0xfD39C9Bb69Cc3bD57959284aCF855AE65d06f8CF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf65B5C5104c4faFD4b709d9D60a185eAE063276c"
      }
    },
    {
      "chainId": 137,
      "name": "UNIFUND",
      "symbol": "iFUND",
      "decimals": 18,
      "address": "0x4ba47B10EA8f544F8969BA61dF3E5bE67692a122",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x04b5e13000c6e9a3255dc057091f3e3eeee7b0f0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ifund.svg"
    },
    {
      "chainId": 137,
      "name": "IdleUSDC",
      "symbol": "idleUSDC",
      "decimals": 18,
      "address": "0xE8b3D257202a9DfE00Ec396B8a8A45fceD1f5798",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5274891bEC421B39D23760c04A6755eCB444797C"
      }
    },
    {
      "chainId": 137,
      "name": "Kanga Exchange Token",
      "symbol": "KNG",
      "decimals": 18,
      "address": "0x17D342b29F054030a455b4191f977C3b0aA62Fd9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x471d113059324321749e097705197a2b44a070fc"
      }
    },
    {
      "chainId": 137,
      "name": "CARD.STARTER",
      "symbol": "CARDS",
      "decimals": 18,
      "address": "0xF1bd521984b4b46176ef4E77f3de01B9FBbe5191",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3d6f0dea3ac3c607b3998e6ce14b6350721752d9"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cards.svg"
    },
    {
      "chainId": 137,
      "name": "PhoenixDAO",
      "symbol": "PHNX",
      "decimals": 18,
      "address": "0x92C59F1cC9A322670CCa29594e4D994d48BDFd36",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x38A2fDc11f526Ddd5a607C1F251C065f40fBF2f7"
      }
    },
    {
      "chainId": 137,
      "name": "Idle",
      "symbol": "IDLE",
      "decimals": 18,
      "address": "0xC25351811983818c9Fe6D8c580531819c8ADe90f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x875773784Af8135eA0ef43b5a374AaD105c5D39e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/idle.svg"
    },
    {
      "chainId": 137,
      "name": "Bsit Token",
      "symbol": "BSIT",
      "decimals": 4,
      "address": "0x5e765e58A4d15262123a8Db42a31c8BA99Ae48ab",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3b9abadd72b3e90eb980d213bf1f697566358100"
      }
    },
    {
      "chainId": 137,
      "name": "Kirobo",
      "symbol": "KIRO",
      "decimals": 18,
      "address": "0xB382C1cfA622795a534e5bd56Fac93d59BAc8B0D",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb1191f691a355b43542bea9b8847bc73e7abb137"
      }
    },
    {
      "chainId": 137,
      "name": "FullDex",
      "symbol": "FLDX",
      "decimals": 16,
      "address": "0xE5d6364efCDCb90eD92cf6F776dD0B6165168a7e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6a30ef92f921836F3743a4A9d27e6CF2C8670b9B"
      }
    },
    {
      "chainId": 137,
      "name": "OnSynthetics",
      "symbol": "ONS",
      "decimals": 18,
      "address": "0xF50C6E2b720Dab4eA87E0050856a511E3E3cEB8D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfC97C0c12438B6E4CF246cD831b02FeF4950DCAD"
      }
    },
    {
      "chainId": 137,
      "name": "Ankr",
      "symbol": "ANKR",
      "decimals": 18,
      "address": "0x101A023270368c0D50BFfb62780F4aFd4ea79C35",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8290333cef9e6d528dd5618fb97a76f268f3edd4"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ankr.svg"
    },
    {
      "chainId": 137,
      "name": "GET Protocol",
      "symbol": "GET",
      "decimals": 18,
      "address": "0xdb725f82818De83e99F1dAc22A9b5B51d3d04DD4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8a854288a5976036a725879164ca3e91d30c6a1b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/get.svg"
    },
    {
      "chainId": 137,
      "name": "Quoxent",
      "symbol": "QUO",
      "decimals": 18,
      "address": "0x9b0162d3B3b4E73fE7dBB10b141E03539199A8F2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xefd720C94659F2cCb767809347245F917A145ed8"
      }
    },
    {
      "chainId": 137,
      "name": "Unilayer",
      "symbol": "LAYER",
      "decimals": 18,
      "address": "0x9A37814d1eC68cA5f8aaB205f628869f3926cE3E",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0fF6ffcFDa92c53F615a4A75D982f399C989366b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/layer.svg"
    },
    {
      "chainId": 137,
      "name": "ClinTex",
      "symbol": "CTI",
      "decimals": 18,
      "address": "0x8Ba941b64901E306667a287A370F145d98811096",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8c18d6a985ef69744b9d57248a45c0861874f244"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cti.svg"
    },
    {
      "chainId": 137,
      "name": "Wrapped UST Token",
      "symbol": "UST",
      "decimals": 18,
      "address": "0x692597b009d13C4049a947CAB2239b7d6517875F",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa47c8bf37f92abed4a126bda807a7b7498661acd"
      }
    },
    {
      "chainId": 137,
      "name": "Enjin Coin",
      "symbol": "ENJ",
      "decimals": 18,
      "address": "0x7eC26842F195c852Fa843bB9f6D8B583a274a157",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/enj.svg"
    },
    {
      "chainId": 137,
      "name": "Defi Firefly",
      "symbol": "DFF",
      "decimals": 8,
      "address": "0xC8F190b18579eA425D89Fb8e84774335715795cb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xaf183350bdf8082b486cee23fbfcca6ea3258dac"
      }
    },
    {
      "chainId": 137,
      "name": "Nimbus",
      "symbol": "NBU",
      "decimals": 18,
      "address": "0x977777C5d1208742343BB1F4CAB182E56D624f1F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xeb58343b36c7528f23caae63a150240241310049"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/nbu.svg"
    },
    {
      "chainId": 137,
      "name": "Nimbus Governance Token",
      "symbol": "GNBU",
      "decimals": 18,
      "address": "0x68de9750059Aed98c9A200Ee661A5316b5C7F941",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x639ae8f3eed18690bf451229d14953a5a5627b72"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/gnbu.svg"
    },
    {
      "chainId": 137,
      "name": "Ampleforth Governance",
      "symbol": "FORTH",
      "decimals": 18,
      "address": "0x5eCbA59DAcc1ADc5bDEA35f38A732823fc3dE977",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x77fba179c79de5b7653f68b5039af940ada60ce0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/forth.svg"
    },
    {
      "chainId": 137,
      "name": "SHIBA INU",
      "symbol": "SHIB",
      "decimals": 18,
      "address": "0x6f8a06447Ff6FcF75d803135a7de15CE88C1d4ec",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/shib.svg"
    },
    {
      "chainId": 137,
      "name": "Solid",
      "symbol": "Solid",
      "decimals": 18,
      "address": "0x498E0A753840075c4925442D4d8863eEe49D61E2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5011d48d4265b6fb8228600a111b2faa1fda3139"
      }
    },
    {
      "chainId": 137,
      "name": "Waifu",
      "symbol": "WAIF",
      "decimals": 18,
      "address": "0xdEE1ebd2a9F6fE069a045601ebeE7C42572ABD5F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb2279b6769cfba691416f00609b16244c0cf4b20"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/waif.svg"
    },
    {
      "chainId": 137,
      "name": "NOIA Token",
      "symbol": "NOIA",
      "decimals": 18,
      "address": "0x957d1AD5214468332C5e6C00305a25116f9A46BB",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/noia.svg"
    },
    {
      "chainId": 137,
      "name": "Reality Clash Coin",
      "symbol": "RCC",
      "decimals": 18,
      "address": "0x11b4ce411bc617E636Cf1109dE9f3CA977d4a00d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9b6443b0fb9c241a7fdac375595cea13e6b7807a"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rcc.svg"
    },
    {
      "chainId": 137,
      "name": "SakeToken",
      "symbol": "SAKE",
      "decimals": 18,
      "address": "0x6127Bb5A1b847fF57bF7B9469c4db6E310466214",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x066798d9ef0833ccc719076Dab77199eCbd178b0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sake.svg"
    },
    {
      "chainId": 137,
      "name": "Wrapped NXM",
      "symbol": "wNXM",
      "decimals": 18,
      "address": "0x0539F01d9ED66c3133a0B0FaB83f4fa69B3608E8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0d438f3b5175bebc262bf23753c1e53d03432bde"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/wnxm.svg"
    },
    {
      "chainId": 137,
      "name": "PowerLedger",
      "symbol": "POWR",
      "decimals": 6,
      "address": "0x0AaB8DC887D34f00D50E19aee48371a941390d14",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x595832f8fc6bf59c85c527fec3740a1b7a361269"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/powr.svg"
    },
    {
      "chainId": 137,
      "name": "BSNcommunitynet",
      "symbol": "cBSN",
      "decimals": 18,
      "address": "0xA219a63C170D0bcDe994886d53878f86C5126106",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7d4B1d793239707445305D8d2456D2c735F6B25B"
      }
    },
    {
      "chainId": 137,
      "name": "Nuggets",
      "symbol": "NUG",
      "decimals": 18,
      "address": "0xf0e7BeEdc882a66C151D03B594503317B8472336",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x245ef47d4d0505ecf3ac463f4d81f41ade8f1fd1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/nug.svg"
    },
    {
      "chainId": 137,
      "name": "DokiDoki.Chainbinders",
      "symbol": "BND",
      "decimals": 18,
      "address": "0x032b3217241fe53fFaDB334a9d06aACd2A9153D9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x84cd68c3e470ecee4b8b6212efcb8c6bcb38da1d"
      }
    },
    {
      "chainId": 137,
      "name": "AlphaDex",
      "symbol": "DEX",
      "decimals": 18,
      "address": "0x7120441Ad773A6704d13dAC8D8Ccfe94da9AFC9B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3516415161C478DF10ADBb8bb884Cc83FbD5F11a"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dex.svg"
    },
    {
      "chainId": 137,
      "name": "KittenFinance",
      "symbol": "KIF",
      "decimals": 18,
      "address": "0x5f084F3EE7EA09E4C01CEE3cDF1B5620A3344fd0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x177BA0cac51bFC7eA24BAd39d81dcEFd59d74fAa"
      }
    },
    {
      "chainId": 137,
      "name": "Kishu Inu",
      "symbol": "KISHU",
      "decimals": 9,
      "address": "0xA3D595823beeDE02cC755AB4e22AD009A70cB590",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xA2b4C0Af19cC16a6CfAcCe81F192B024d625817D"
      }
    },
    {
      "chainId": 137,
      "name": "EASY V2",
      "symbol": "EZ",
      "decimals": 18,
      "address": "0x34C1b299A74588D6Abdc1b85A53345A48428a521",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x00AbA6fE5557De1a1d565658cBDdddf7C710a1eb"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ez.svg"
    },
    {
      "chainId": 137,
      "name": "Akropolis",
      "symbol": "AKRO",
      "decimals": 18,
      "address": "0xd8a2B5ED27d57d003962032ea78f3738fF5617a8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/akro.svg"
    },
    {
      "chainId": 137,
      "name": "Metaverse Index",
      "symbol": "MVI",
      "decimals": 18,
      "address": "0xfe712251173A2cd5F5bE2B46Bb528328EA3565E1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x72e364f2abdc788b7e918bc238b21f109cd634d7"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mvi.svg"
    },
    {
      "chainId": 137,
      "name": "Index",
      "symbol": "INDEX",
      "decimals": 18,
      "address": "0xfBd8A3b908e764dBcD51e27992464B4432A1132b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0954906da0Bf32d5479e25f46056d22f08464cab"
      }
    },
    {
      "chainId": 137,
      "name": "LTO Network Token",
      "symbol": "LTO",
      "decimals": 8,
      "address": "0x96963189dC1dFBE8De4b1BB03c603adeFcD3E59d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3db6ba6ab6f95efed1a6e794cad492faaabf294d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/lto.svg"
    },
    {
      "chainId": 137,
      "name": "ETH 2x Flexible Leverage Index",
      "symbol": "ETH2x-FLI",
      "decimals": 18,
      "address": "0x66d7FDCc7403f18cAE9b0e2e8385649D2AcBC12A",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd"
      }
    },
    {
      "chainId": 137,
      "name": "Livepeer Token",
      "symbol": "LPT",
      "decimals": 18,
      "address": "0x3962F4A0A0051DccE0be73A7e09cEf5756736712",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x58b6a8a3302369daec383334672404ee733ab239"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/lpt.svg"
    },
    {
      "chainId": 137,
      "name": "Indexed",
      "symbol": "NDX",
      "decimals": 18,
      "address": "0x835273d47A2a4Cc84693639f8D890af1CaeA611D",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x86772b1409b61c639eaac9ba0acfbb6e238e5f83"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ndx.svg"
    },
    {
      "chainId": 137,
      "name": "Zoracles",
      "symbol": "ZORA",
      "decimals": 9,
      "address": "0x2f9679F1Db7E1a3Ffd659e1880339E18B482F17A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xD8E3FB3b08eBA982F2754988d70D57eDc0055ae6"
      }
    },
    {
      "chainId": 137,
      "name": "INVERSE",
      "symbol": "XIV",
      "decimals": 18,
      "address": "0xde799636aF0d8D65a17AAa83b66cBBE9B185EB01",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x44f262622248027f8e2a8fb1090c4cf85072392c"
      }
    },
    {
      "chainId": 137,
      "name": "ACoconut BTC",
      "symbol": "acBTC",
      "decimals": 18,
      "address": "0xFb0E4a608657c09e0fE048D8BB54431eb7fB58D0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xef6e45af9a422c5469928f927ca04ed332322e2e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/acbtc.svg"
    },
    {
      "chainId": 137,
      "name": "ACoconut",
      "symbol": "AC",
      "decimals": 18,
      "address": "0x6D1B94027453C457e90C28E83154B02718bD48b2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9a0aba393aac4dfbff4333b06c407458002c6183"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ac.svg"
    },
    {
      "chainId": 137,
      "name": "Global Scan Token",
      "symbol": "GST",
      "decimals": 18,
      "address": "0xe5703ad34D2b5BCB5c1fEeb64d4b7572B857D6c0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x382f5DfE9eE6e309D1B9D622735e789aFde6BADe"
      }
    },
    {
      "chainId": 137,
      "name": "Time",
      "symbol": "Time",
      "decimals": 18,
      "address": "0x0BaC8F2819527c562b1BdD5B9C8E24bE7dbd6cae",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xC2Ce8D7cA631555fC7DacF744326f70586a12898"
      }
    },
    {
      "chainId": 137,
      "name": "PeetyCoin",
      "symbol": "PTC",
      "decimals": 18,
      "address": "0x4BB0A0ceF106b0376A9320BE1cF9BCe2D9fC075E",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x91b2372c2a364ef0acfd6a87e41825c186164772"
      }
    },
    {
      "chainId": 137,
      "name": "LoopringCoin V2",
      "symbol": "LRC",
      "decimals": 18,
      "address": "0x84e1670F61347CDaeD56dcc736FB990fBB47ddC1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/lrc.svg"
    },
    {
      "chainId": 137,
      "name": "GOVI",
      "symbol": "GOVI",
      "decimals": 18,
      "address": "0x43Df9c0a1156c96cEa98737b511ac89D0e2A1F46",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/govi.svg"
    },
    {
      "chainId": 137,
      "name": "Dracula Token",
      "symbol": "DRaCula",
      "decimals": 18,
      "address": "0xdf2d3db12254B062b96424F27f44649321901499",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb78B3320493a4EFaa1028130C5Ba26f0B6085Ef8"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Mirror TSLA Token",
      "symbol": "mTSLA",
      "decimals": 18,
      "address": "0x52c57f0eA393Bb213445F47c48c5f34e419061C7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x21cA39943E91d704678F5D00b6616650F066fD63"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mtsla.svg"
    },
    {
      "chainId": 137,
      "name": "BribeToken",
      "symbol": "BRIBE",
      "decimals": 18,
      "address": "0xA9e0CDE4bE86F5DF7e2888753E5F663A41220469",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x679fa6dc913acab6def33ec469fc6e421bc794f5"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bribe.svg"
    },
    {
      "chainId": 137,
      "name": "Nectar",
      "symbol": "NCT",
      "decimals": 18,
      "address": "0x4985E0B13554fB521840e893574D3848C10Fcc6f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9e46a38f5daabe8683e10793b06749eef7d733d1"
      }
    },
    {
      "chainId": 137,
      "name": "InfiniCoin",
      "symbol": "INFC",
      "decimals": 2,
      "address": "0x6046b4d4E5ccC4aD4AABf655b557d8FD19B631D9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x742a56a727dac07e0889920b8887d482325f659b"
      }
    },
    {
      "chainId": 137,
      "name": "StakeWise",
      "symbol": "SWISE",
      "decimals": 18,
      "address": "0xBbbe128568222623D21299f019a978C8587B33dC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/swise.svg"
    },
    {
      "chainId": 137,
      "name": "Blockpass",
      "symbol": "PASS",
      "decimals": 6,
      "address": "0x030a6b1Da67963Fc22265d8C6686d1878d581b6B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xee4458e052b533b1aabd493b5f8c4d85d7b263dc"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pass.svg"
    },
    {
      "chainId": 137,
      "name": "Celo",
      "symbol": "CELO",
      "decimals": 18,
      "address": "0x9b90e9Dc868A3c769dbb1d43F925cC954327F666",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6d0081857009cb79014df13e34fc49192f66aee1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/celo.svg"
    },
    {
      "chainId": 137,
      "name": "LUSD Stablecoin",
      "symbol": "LUSD",
      "decimals": 18,
      "address": "0x23001f892c0C82b79303EDC9B9033cD190BB21c7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5f98805a4e8be255a32880fdec7f6728c6568ba0"
      }
    },
    {
      "chainId": 137,
      "name": "Unicly Doki Collection",
      "symbol": "uDOKI",
      "decimals": 18,
      "address": "0xFfB6efF3e73DB35b3efCF2bCD160fc517C5Df9Ec",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7e6c38d007740931e4b419bf15a68c79a0fb0c66"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/udoki.svg"
    },
    {
      "chainId": 137,
      "name": "Shardus",
      "symbol": "ULT",
      "decimals": 18,
      "address": "0xf0059CC2b3E980065A906940fbce5f9Db7ae40A7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x09617f6fd6cf8a71278ec86e23bbab29c04353a7"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ult.svg"
    },
    {
      "chainId": 137,
      "name": "OVR",
      "symbol": "OVR",
      "decimals": 18,
      "address": "0x1631244689EC1fEcbDD22fb5916E920dFC9b8D30",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697"
      }
    },
    {
      "chainId": 137,
      "name": "Digi",
      "symbol": "DIGI",
      "decimals": 18,
      "address": "0x4d8181f051E617642e233Be09Cea71Cc3308ffD4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3cbf23c081faa5419810ce0f6bc1ecb73006d848"
      }
    },
    {
      "chainId": 137,
      "name": "Pikachu",
      "symbol": "Pikachu",
      "decimals": 18,
      "address": "0x7E6afEC8cf917976d11Fe65A34d3c17289fe3aE0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe09fb60e8d6e7e1cebbe821bd5c3fc67a40f86bf"
      }
    },
    {
      "chainId": 137,
      "name": "Beyond Finance",
      "symbol": "BYN",
      "decimals": 18,
      "address": "0x11602A402281974a70C2B4824d58ebeDe967E2bE",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4Bb3205bf648B7F59EF90Dee0F1B62F6116Bc7ca"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/byn.svg"
    },
    {
      "chainId": 137,
      "name": "Launchpool token",
      "symbol": "LPOOL",
      "decimals": 18,
      "address": "0x9e7Deba360c77949bb75d16DC81b2393C15005Eb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6149c26cd2f7b5ccdb32029af817123f6e37df5b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/lpool.svg"
    },
    {
      "chainId": 137,
      "name": "Gremlin DAO",
      "symbol": "GRMLN",
      "decimals": 18,
      "address": "0x80a017A2B089b642743d863cEeb6Da1FE0191ADC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcb167289204d02d33a8faf24a68b57647eb621bf"
      }
    },
    {
      "chainId": 137,
      "name": "Internet Exchange Token",
      "symbol": "INEX",
      "decimals": 8,
      "address": "0xD8324aE24AF9b499Cb75fb0bad8E0094c10CAC58",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa2d77f8353cb2afd709aba4a967257511ecff716"
      }
    },
    {
      "chainId": 137,
      "name": "MyFiChain",
      "symbol": "myfi",
      "decimals": 18,
      "address": "0x217CA87921B066728feBC2d093FE9a6503450c47",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0dfdd839cde95dabf56f0b5c5698e0159138930d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/myfi.svg"
    },
    {
      "chainId": 137,
      "name": "ETH.limiteD",
      "symbol": "ELD",
      "decimals": 18,
      "address": "0x222Cc013116D43a8b6BEfA84aaF7c11cBc073496",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf0c6521b1f8ad9c33a99aaf056f6c6247a3862ba"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/eld.svg"
    },
    {
      "chainId": 137,
      "name": "ZperToken",
      "symbol": "ZPR",
      "decimals": 18,
      "address": "0x9f9003c25d475Ca76D925Bfad0c568D8B3720353",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb5b8f5616fe42d5ceca3e87f3fddbdd8f496d760"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/zpr.svg"
    },
    {
      "chainId": 137,
      "name": "NANJCOIN",
      "symbol": "NANJ",
      "decimals": 8,
      "address": "0x868547EB48e0Ed2Fd3dB52Db9818ab9496EA4ef1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xffe02ee4c69edf1b340fcad64fbd6b37a7b9e265"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/nanj.svg"
    },
    {
      "chainId": 137,
      "name": "Chai",
      "symbol": "CHAI",
      "decimals": 18,
      "address": "0x4B64399CA6609eBB5CB649eAA50387C2d9fe20eb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x06af07097c9eeb7fd685c692751d5c66db49c215"
      }
    },
    {
      "chainId": 137,
      "name": "Litecoin SV",
      "symbol": "LSV",
      "decimals": 18,
      "address": "0xb6d5d0E2baD865750Bc2cB21bBaE636c3BaD6581",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xee059f0ca1507e4e20c689b20cff71b5e924f7bd"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/lsv.svg"
    },
    {
      "chainId": 137,
      "name": "simian.finance",
      "symbol": "SIFI",
      "decimals": 9,
      "address": "0x41d36d3bd6297fE288E31C75De8B7453de9Daf90",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4afb0aac9b862946837b2444566b8a914d6d0d97"
      }
    },
    {
      "chainId": 137,
      "name": "BTSE Token",
      "symbol": "BTSE",
      "decimals": 8,
      "address": "0xc96a4a6B780AF3a6383962ea0Ac96DD3c40532d4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x666d875c600aa06ac1cf15641361dec3b00432ef"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/btse.svg"
    },
    {
      "chainId": 137,
      "name": "Shungite",
      "symbol": "SHUNG",
      "decimals": 18,
      "address": "0xA3d8885825A843F040eb64A6a846b687cd07F072",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x839b2086ef84f25a07beeb61cd325b79b5e08a5d"
      }
    },
    {
      "chainId": 137,
      "name": "PGF500 Token",
      "symbol": "PGF7T",
      "decimals": 18,
      "address": "0xdd0fDc648a9dbC9be5A735FE4561893a13399Da2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9fadea1aff842d407893e21dbd0e2017b4c287b6"
      }
    },
    {
      "chainId": 137,
      "name": "MOAR Finance",
      "symbol": "MOAR",
      "decimals": 18,
      "address": "0x34cba1561424b192F263883ba2b8CcBBc12bb13F",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x187eff9690e1f1a61d578c7c492296eaab82701a"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/moar.svg"
    },
    {
      "chainId": 137,
      "name": "renDOGE",
      "symbol": "renDOGE",
      "decimals": 8,
      "address": "0x7C4A54f5d20b4023D6746F1f765f4DFe7C39a7e6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3832d2f059e55934220881f831be501d180671a7"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rendoge.svg"
    },
    {
      "chainId": 137,
      "name": "LADZ",
      "symbol": "LADZ",
      "decimals": 4,
      "address": "0x220ED61d1f1CC754cB71978585D69e07Be576315",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1287c0509df9a475Ef178471aB2132b9dfD312B3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ladz.svg"
    },
    {
      "chainId": 137,
      "name": "Defiville Island Token",
      "symbol": "ISLA",
      "decimals": 18,
      "address": "0xFE6A2342f7C5D234E8496dF12c468Be17e0c181F",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x20a68F9e34076b2dc15ce726d7eEbB83b694702d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/isla.svg"
    },
    {
      "chainId": 137,
      "name": "Pinakion",
      "symbol": "PNK",
      "decimals": 18,
      "address": "0xad93E067e149f0A5ecd12D8EA83B05581dD6374C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d"
      }
    },
    {
      "chainId": 137,
      "name": "mushrooming Wrapped BTC",
      "symbol": "mWBTC",
      "decimals": 8,
      "address": "0x652E36ecFA0E4F7e435F6D38688D68a3bE65639c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb06661A221Ab2Ec615531f9632D6Dc5D2984179A"
      }
    },
    {
      "chainId": 137,
      "name": "mushrooming 0x Protocol Token",
      "symbol": "mZRX",
      "decimals": 18,
      "address": "0x9cc0FF2Db430cBC95752b25487059046d507780C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x037B39EdAE767EA692884D51fc697c54e777710e"
      }
    },
    {
      "chainId": 137,
      "name": "mushrooming Alchemix USD",
      "symbol": "malUSD",
      "decimals": 18,
      "address": "0x6aaF0cd9E0339DC385f566EB2d2Bd83C756E7d63",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5DEDEC994C11aB5F9908f33Aed2947F33B67a449"
      }
    },
    {
      "chainId": 137,
      "name": "mushrooming Alchemix",
      "symbol": "mALCX",
      "decimals": 18,
      "address": "0x2bB8ff0B289F1670415713B75331CC927D0C5CEA",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x076950237f8c0D27Ac25694c9078F96e535723BC"
      }
    },
    {
      "chainId": 137,
      "name": "mushrooming ChainLink Token",
      "symbol": "mLINK",
      "decimals": 18,
      "address": "0x44a57De864dD580c3A1FE44Cfa8E39e25170c156",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3EdeE5F69e9A8F88da9063B1aa78311E38DBE96c"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mlink.svg"
    },
    {
      "chainId": 137,
      "name": "mushrooming Uniswap",
      "symbol": "mUNI",
      "decimals": 18,
      "address": "0x65E4Fc43404569998e7cb8E74e785943581f758F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x41e0c2A507415e25005b1713f5f68AD6648fCF43"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/muni.svg"
    },
    {
      "chainId": 137,
      "name": "mushrooming USD Coin",
      "symbol": "mUSDC",
      "decimals": 6,
      "address": "0x6998F006c8B5bD288dcb8E00c0060927d517Aa58",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x23B197dc671A55F256199cF7e8Bee77Ea2bDC16D"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/musdc.svg"
    },
    {
      "chainId": 137,
      "name": "mushrooming Dai Stablecoin",
      "symbol": "mDAI",
      "decimals": 18,
      "address": "0x6BAF56F2768434592c2Fcce2dC04235366E5A088",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6802377968857656fE8aE47fBECe76AaE588eeF7"
      }
    },
    {
      "chainId": 137,
      "name": "mushrooming Curve DAI/USDC/USDT",
      "symbol": "m3Crv",
      "decimals": 18,
      "address": "0x6E5BCf069213676e4E3C75aEb60Eaab0C41ff1CE",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0c0291f4c12F04Da8B4139996C720a89D28Ca069"
      }
    },
    {
      "chainId": 137,
      "name": "mushrooming Wrapped Ether",
      "symbol": "mWETH",
      "decimals": 18,
      "address": "0xdc0f3C12dF89593357985491bdAcc5Fd789cA4B2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb0f1a38F5531b398E2081c2F9E61EdD2A924b488"
      }
    },
    {
      "chainId": 137,
      "name": "HASHGARD",
      "symbol": "GARD",
      "decimals": 18,
      "address": "0xf89250E83fA2F33058385C98c7c44e723B040359",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5c64031c62061865e5fd0f53d3cdaef80f72e99d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/gard.svg"
    },
    {
      "chainId": 137,
      "name": "blocsport1",
      "symbol": "BS1",
      "decimals": 18,
      "address": "0x2E789b197a1874ca6384082090e0ebed30F16E1A",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xAeaf14ce56b052DFC2A2Eb0654136EcF87821fbF"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bs1.svg"
    },
    {
      "chainId": 137,
      "name": "GeoDB Coin",
      "symbol": "GEO",
      "decimals": 18,
      "address": "0xAe07B360cF41C8971F6c544620A6ed428Ff3a661",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x147faF8De9d8D8DAAE129B187F0D02D819126750"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/geo.svg"
    },
    {
      "chainId": 137,
      "name": "Universal Basic Income",
      "symbol": "UBI",
      "decimals": 18,
      "address": "0xFe7FF8b5dfbA93A9EaB7Aee447C3c72990052d93",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xDd1Ad9A21Ce722C151A836373baBe42c868cE9a4"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ubi.svg"
    },
    {
      "chainId": 137,
      "name": "Grumpy Cat",
      "symbol": "GRUMPY",
      "decimals": 9,
      "address": "0x733726968Ae55dC58c26dBDc193FEa256a704ba4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x93b2fff814fcaeffb01406e80b4ecd89ca6a021b"
      }
    },
    {
      "chainId": 137,
      "name": "YearnSecure",
      "symbol": "YSEC",
      "decimals": 18,
      "address": "0x3D6C5c1a66e7B43342FcA37827B7Faf3bD074dD3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xeea9aE787f3A620072d13b2cdC8cabFFb9c0aB96"
      }
    },
    {
      "chainId": 137,
      "name": "Ludus",
      "symbol": "LUDUS",
      "decimals": 18,
      "address": "0xd132d531367D5907d0844988A71B9fAd32D14368",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x03fdcadc09559262f40f5ea61c720278264eb1da"
      }
    },
    {
      "chainId": 137,
      "name": "Nexo",
      "symbol": "NEXO",
      "decimals": 18,
      "address": "0x41b3966B4FF7b427969ddf5da3627d6AEAE9a48E",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206"
      }
    },
    {
      "chainId": 137,
      "name": "Ethix",
      "symbol": "ETHIX",
      "decimals": 18,
      "address": "0x08Bba6ABE87e2a8c226a1C6c0d0E9cae758f82Ec",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfd09911130e6930bf87f2b0554c44f400bd80d3e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ethix.svg"
    },
    {
      "chainId": 137,
      "name": "Beatify",
      "symbol": "SONG",
      "decimals": 18,
      "address": "0x609255414fF5289f87c99bAF9737a4EC85A18643",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xA18A0bE599366C8e2fFfFD83A2418a3cCb825d7f"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/song.svg"
    },
    {
      "chainId": 137,
      "name": "Internxt",
      "symbol": "INXT",
      "decimals": 8,
      "address": "0xE64106154816A252da7728E35A0060F15d66cb34",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa8006c4ca56f24d6836727d106349320db7fef82"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/inxt.svg"
    },
    {
      "chainId": 137,
      "name": "Blind Boxes Token",
      "symbol": "BLES",
      "decimals": 18,
      "address": "0x1B599bEB7b1F50807dD58Fd7e8fFcf073b435e71",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe796d6ca1ceb1b022ece5296226bf784110031cd"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bles.svg"
    },
    {
      "chainId": 137,
      "name": "Alchemy",
      "symbol": "ALCH",
      "decimals": 18,
      "address": "0x87B078cf94B188EFB9D2208cAE47A66ea7FEa09A",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0000A1c00009A619684135B824Ba02f7FbF3A572"
      }
    },
    {
      "chainId": 137,
      "name": "YOP",
      "symbol": "YOP",
      "decimals": 8,
      "address": "0x103308793661879166464cD0d0370Ac3b8A2A1cB",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xae1eaae3f627aaca434127644371b67b18444051"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/yop.svg"
    },
    {
      "chainId": 137,
      "name": "Darwinia",
      "symbol": "Ring",
      "decimals": 18,
      "address": "0x9C1C23E60B72Bc88a043bf64aFdb16A02540Ae8f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9469d013805bffb7d3debe5e7839237e535ec483"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ring.svg"
    },
    {
      "chainId": 137,
      "name": "Gala",
      "symbol": "GALA",
      "decimals": 8,
      "address": "0x09E1943Dd2A4e82032773594f50CF54453000b97",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA"
      }
    },
    {
      "chainId": 137,
      "name": "Rocket Pool",
      "symbol": "RPL",
      "decimals": 18,
      "address": "0x7205705771547cF79201111B4bd8aaF29467b9eC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb4efd85c19999d84251304bda99e90b92300bd93"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rpl.svg"
    },
    {
      "chainId": 137,
      "name": "VGTGToken",
      "symbol": "VGTG",
      "decimals": 18,
      "address": "0x0c5EBeD5cB5BD838BDc43E1583D9d054f3d7Be6c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe61eecfdba2ad1669cee138f1919d08ced070b83"
      }
    },
    {
      "chainId": 137,
      "name": "IceToken",
      "symbol": "ICE",
      "decimals": 18,
      "address": "0xdF00c50a3daE240860F57b77508203B8D9593283",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf16e81dce15b08f326220742020379b855b87df9"
      },
      "logoURI": "https://etherscan.io/token/images/popsiclefinance_32.png"
    },
    {
      "chainId": 137,
      "name": "Meliora",
      "symbol": "MORA",
      "decimals": 18,
      "address": "0x164fBeF6729c86B0fd719789D2f985AFa15a4430",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb64cD4F56043F8d80691433e395d08B1bEBDADF0"
      }
    },
    {
      "chainId": 137,
      "name": "Polkalokr",
      "symbol": "LKR",
      "decimals": 18,
      "address": "0x6f83Ffedfd8774d09329D92bF3647654Ee171dfA",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x80ce3027a70e0a928d9268994e9b85d03bd4cdcf"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/lkr.svg"
    },
    {
      "chainId": 137,
      "name": "LABS Group",
      "symbol": "LABS",
      "decimals": 18,
      "address": "0xb3658a5493332e952Fc86991c24C9c759d2D8cD0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8b0e42f366ba502d787bb134478adfae966c8798"
      }
    },
    {
      "chainId": 137,
      "name": "OnX.finance",
      "symbol": "ONX",
      "decimals": 18,
      "address": "0xEb94A5e2C643403E29fa1d7197e7E0708B09aD84",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe0ad1806fd3e7edf6ff52fdb822432e847411033"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/onx.svg"
    },
    {
      "chainId": 137,
      "name": "King Token",
      "symbol": "KING",
      "decimals": 18,
      "address": "0xC7bd6b9a83C2e27a17026Aa2DEE03E0EAC97EE50",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc46321EfE8883D22D81eD65CB4F0766e1004129d"
      }
    },
    {
      "chainId": 137,
      "name": "TAIYAKI",
      "symbol": "TAIYAKI",
      "decimals": 18,
      "address": "0x1A5C71dDF3d71CBB0C0Bc312ff712a52cBe29cD2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4f9f3504d6C3670672692fcbCaeb409B0cFb40b2"
      }
    },
    {
      "chainId": 137,
      "name": "Deeper Network",
      "symbol": "DPR",
      "decimals": 18,
      "address": "0x3C27F2D0744DA4f96D9AB5f4212d8162c031dEA9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf3ae5d769e153ef72b4e3591ac004e89f48107a1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dpr.svg"
    },
    {
      "chainId": 137,
      "name": "xToken",
      "symbol": "XTK",
      "decimals": 18,
      "address": "0x22308317A4aA9e8196065E0b3647e582d44c4d7b",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/xtk.svg"
    },
    {
      "chainId": 137,
      "name": "LinkPool",
      "symbol": "LPL",
      "decimals": 18,
      "address": "0x7e85E6b00a8e9c757f2Fef60d047B6f787c66a1E",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x99295f1141d58a99e939f7be6bbe734916a875b8"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/lpl.svg"
    },
    {
      "chainId": 137,
      "name": "dHedge DAO Token",
      "symbol": "DHT",
      "decimals": 18,
      "address": "0x8C92e38eCA8210f4fcBf17F0951b198Dd7668292",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xca1207647ff814039530d7d35df0e1dd2e91fa84"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dht.svg"
    },
    {
      "chainId": 137,
      "name": "MEE Token",
      "symbol": "MEE",
      "decimals": 18,
      "address": "0xF4cbD4a7143E221eb983d292C0D13275f12C8172",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe1b583dc66e0a24fd9af2dc665f6f5e48978e106"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mee.svg"
    },
    {
      "chainId": 137,
      "name": "FOAM Token",
      "symbol": "FOAM",
      "decimals": 18,
      "address": "0x66e16D50c07A01BB473eC794349d45aa1a0E5Dc2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4946Fcea7C692606e8908002e55A582af44AC121"
      }
    },
    {
      "chainId": 137,
      "name": "CocktailBar",
      "symbol": "COC",
      "decimals": 8,
      "address": "0xF2cEd5F137e27f68E6A01Cc6C4198729e200e457",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x22b6c31c2beb8f2d0d5373146eed41ab9ede3caf"
      }
    },
    {
      "chainId": 137,
      "name": "AMPnet APX Token",
      "symbol": "AAPX",
      "decimals": 18,
      "address": "0x3fC8bd9b0d8054CBDC174c4ed4b41A95d3c6A427",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbfd815347d024f449886c171f78fa5b8e6790811"
      }
    },
    {
      "chainId": 137,
      "name": "UpBots",
      "symbol": "UBXT",
      "decimals": 18,
      "address": "0xDD24E07c3C840ae6435e7C9F98E6eE6ce168D788",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8564653879a18c560e7c0ea0e084c516c62f5653"
      }
    },
    {
      "chainId": 137,
      "name": "SAND",
      "symbol": "SAND",
      "decimals": 18,
      "address": "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sand.svg"
    },
    {
      "chainId": 137,
      "name": "Darwinia Commitment Token",
      "symbol": "KTON",
      "decimals": 18,
      "address": "0xE21b9bDA4ECeF9e4652BC5C6863F731C2151Ef28",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9f284e1337a815fe77d2ff4ae46544645b20c5ff"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/kton.svg"
    },
    {
      "chainId": 137,
      "name": "Exeedme",
      "symbol": "XED",
      "decimals": 18,
      "address": "0x2fe8733dcb25BFbbA79292294347415417510067",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xee573a945b01b788b9287ce062a0cfc15be9fd86"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/xed.svg"
    },
    {
      "chainId": 137,
      "name": "unilock.network",
      "symbol": "UNL",
      "decimals": 18,
      "address": "0x7Dd51d62CA7C94664111eee95B38dffDA14d582d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x04ab43d32d0172c76f5287b6619f0aa50af89303"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/unl.svg"
    },
    {
      "chainId": 137,
      "name": " SPACE HOGE",
      "symbol": "SOGE",
      "decimals": 18,
      "address": "0xe38eb5a707d9A09757246DC37dF11b35E47ba782",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x41933422dc4a1cb8c822e06f12f7b52fa5e7e094"
      }
    },
    {
      "chainId": 137,
      "name": "Rubaled",
      "symbol": "RUB",
      "decimals": 18,
      "address": "0x0E622E0e97B88824C655A0443e69416c3233a522",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdc28699481502339560e984d47278e49f4153a26"
      }
    },
    {
      "chainId": 137,
      "name": "ZILLAPUMP",
      "symbol": "ZPUMP",
      "decimals": 9,
      "address": "0x408A67a0A01281cFb96dD18EbbfdDDEc9CB028b7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4cA60BfF981785d9B6Cf3433914eEff60d5d8cD8"
      }
    },
    {
      "chainId": 137,
      "name": "froge.finance",
      "symbol": "FROGE",
      "decimals": 9,
      "address": "0x37Ff2a6cF0E8061CBD9a00919690F1B0A46eE674",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x29502fE4d233EF0b45C3647101Fa1252cE0634BD"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/froge.svg"
    },
    {
      "chainId": 137,
      "name": "Axion",
      "symbol": "AXN",
      "decimals": 18,
      "address": "0x221afaC78D2725D090499b973bB42FC93CCA2ef5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x71F85B2E46976bD21302B64329868fd15eb0D127"
      }
    },
    {
      "chainId": 137,
      "name": "Kattana",
      "symbol": "KTN",
      "decimals": 18,
      "address": "0x2C7A7358E60f2D145FaC48C71950A2C523636075",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x491e136ff7ff03e6ab097e54734697bb5802fc1c"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ktn.svg"
    },
    {
      "chainId": 137,
      "name": "NFT WARS",
      "symbol": "WAR",
      "decimals": 18,
      "address": "0x7F2841A5C7e69e921897fBfbCE95caEa34634A35",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4d75d9e37667a2d4677ec3d74bdd9049326ad8d6"
      }
    },
    {
      "chainId": 137,
      "name": "GAMEE",
      "symbol": "GMEE",
      "decimals": 18,
      "address": "0xcf32822ff397Ef82425153a9dcb726E5fF61DCA7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/gmee.svg"
    },
    {
      "chainId": 137,
      "name": "BAB",
      "symbol": "BAB",
      "decimals": 18,
      "address": "0x37C6656CD3882A422d87bD15aC547c5515C0Df1C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc36824905dff2eaaee7ecc09fcc63abc0af5abc5"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bab.svg"
    },
    {
      "chainId": 137,
      "name": "BAC",
      "symbol": "BAC",
      "decimals": 18,
      "address": "0xcdE5E3D90631cacB842fA86f62dD0fc08A3ce43d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a"
      }
    },
    {
      "chainId": 137,
      "name": "BASv2",
      "symbol": "BASv2",
      "decimals": 18,
      "address": "0x83A6DA342099835bCAA9C219DD76a5033c837de5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x106538cc16f938776c7c180186975bca23875287"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/basv2.svg"
    },
    {
      "chainId": 137,
      "name": "CehhCoin",
      "symbol": "CEHH",
      "decimals": 0,
      "address": "0xA6D996AFdBC613A5C5FC92bbAeFbC7b827419e8f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4F38f4229924bfa28D58eeda496Cc85e8016bCCC"
      }
    },
    {
      "chainId": 137,
      "name": "CheGuevara",
      "symbol": "Che",
      "decimals": 18,
      "address": "0x365AE1c67b3efA55C624c9705Ad1Df2072D3d254",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x25a1DE1C3eE658FE034B8914a1D8d34110423AF8"
      }
    },
    {
      "chainId": 137,
      "name": "HotLove",
      "symbol": "HL",
      "decimals": 18,
      "address": "0xe947283361D0D47c870c0898d7a5578310E1dB37",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xDfF991Af459d05175B3bb766b950aFC697B68dF0"
      }
    },
    {
      "chainId": 137,
      "name": "Penis",
      "symbol": "PNS",
      "decimals": 2,
      "address": "0xE63E303460e078c2DEAF9Cd3CB46ECA0C8cb1B59",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xce853db3359326dB6D03981C9fb42983BbCdd007"
      }
    },
    {
      "chainId": 137,
      "name": "YiYouBao",
      "symbol": "YYB",
      "decimals": 18,
      "address": "0x1656484C36cEF1B24cD49457470AbcE90C480d29",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x85993bE4EF5BEc00B62BA7e46a8a70f353182b3e"
      }
    },
    {
      "chainId": 137,
      "name": "YunJiaMi",
      "symbol": "YJM",
      "decimals": 18,
      "address": "0x223097da39Cb07fA133d70cD820f27867b4452c3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x27BC53596Dc0EA71dE3c65C799d8E6c96C1dDA98"
      }
    },
    {
      "chainId": 137,
      "name": "IgnisLite",
      "symbol": "IgnisLite",
      "decimals": 18,
      "address": "0xEbBB74174D1a22729B9a9cddb28c18cA07BE0314",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9AA9F330aB322e8a6F044C46a109B5910fa373CE"
      }
    },
    {
      "chainId": 137,
      "name": "360APP",
      "symbol": "DAPP",
      "decimals": 18,
      "address": "0x24274DE25578F97984f66Be0Cc0762138757C935",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5D0fa08AEb173AdE44B0Cf7F31d506D8E04f0ac8"
      }
    },
    {
      "chainId": 137,
      "name": "Wootrade Network",
      "symbol": "WOO",
      "decimals": 18,
      "address": "0x1B815d120B3eF02039Ee11dC2d33DE7aA4a8C603",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4691937a7508860f876c9c0a2a617e7d9e945d4b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/woo.svg"
    },
    {
      "chainId": 137,
      "name": "BoringDAO LTC",
      "symbol": "oLTC",
      "decimals": 18,
      "address": "0xf9f8D3BcAD8958ffef131bAb376CFfAc0d16551B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x07C44B5Ac257C2255AA0933112c3b75A6BFf3Cb1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/oltc.svg"
    },
    {
      "chainId": 137,
      "name": "BoringDAO BTC",
      "symbol": "oBTC",
      "decimals": 18,
      "address": "0x90fB380DdEbAF872cc1F8d8e8C604Ff2f4697c19",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68"
      }
    },
    {
      "chainId": 137,
      "name": "UmbriaToken",
      "symbol": "UMBR",
      "decimals": 18,
      "address": "0x2e4b0Fb46a46C90CB410FE676f24E466753B469f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa4bbe66f151b22b167127c770016b15ff97dd35c"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/umbr.svg"
    },
    {
      "chainId": 137,
      "name": "Zilliqa",
      "symbol": "ZIL",
      "decimals": 12,
      "address": "0x1e2231DB2DBEdD0FAC3eB70608d402E80F244C6D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/zil.svg"
    },
    {
      "chainId": 137,
      "name": "SOCIALBI DEFI",
      "symbol": "SBI",
      "decimals": 18,
      "address": "0x179a16D33E4c08Dd773B002f475ca36Ce22Fa169",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x03F2892669D00BFFB6C5F317106f7E89213894aF"
      }
    },
    {
      "chainId": 137,
      "name": "Corn",
      "symbol": "CORN",
      "decimals": 18,
      "address": "0xA5C09Ba00f342F61F637e1A88F1Bd7EbaCf5BE48",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3CD1833Ce959E087D0eF0Cb45ed06BffE60F23Ba"
      }
    },
    {
      "chainId": 137,
      "name": "Land",
      "symbol": "LAND",
      "decimals": 18,
      "address": "0xAd230ec33ccf849C2bBd8D26C1706DB07b24Db95",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3258cd8134b6b28e814772dd91d5ecceea512818"
      }
    },
    {
      "chainId": 137,
      "name": "RougeCoin",
      "symbol": "XRGE",
      "decimals": 18,
      "address": "0x642F7511a68c57faE8AC0CAa618673a66166e4c7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa1c7d450130bb77c6a23ddfaecbc4a060215384b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/xrge.svg"
    },
    {
      "chainId": 137,
      "name": "AIOZ Network",
      "symbol": "AIOZ",
      "decimals": 18,
      "address": "0xe2341718c6C0CbFa8e6686102DD8FbF4047a9e9B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x626e8036deb333b408be468f951bdb42433cbf18"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/aioz.svg"
    },
    {
      "chainId": 137,
      "name": "Work Quest Token",
      "symbol": "WQT",
      "decimals": 18,
      "address": "0x4349D5464203F1Da44513C1fEAb502839e69DBF8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x06677dc4fe12d3ba3c7ccfd0df8cd45e4d4095bf"
      }
    },
    {
      "chainId": 137,
      "name": "SPLYT SHOPX",
      "symbol": "SHOPX",
      "decimals": 18,
      "address": "0x7886A4EBDda9f1861d6a081cD794b3e79c375011",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7bef710a5759d197ec0bf621c3df802c2d60d848"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/shopx.svg"
    },
    {
      "chainId": 137,
      "name": "UnFederalReserveToken",
      "symbol": "eRSDL",
      "decimals": 18,
      "address": "0x5095cC6511B70e287bc525Aa57AfbC60EB73ac47",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ersdl.svg"
    },
    {
      "chainId": 137,
      "name": "KardiaChain Token",
      "symbol": "KAI",
      "decimals": 18,
      "address": "0x32ef6DcB27Ae8697E217fe3594D665535B176721",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd9ec3ff1f8be459bb9369b4e79e9ebcf7141c093"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/kai.svg"
    },
    {
      "chainId": 137,
      "name": "MobiFi",
      "symbol": "MoFi",
      "decimals": 18,
      "address": "0xF689E85988d3a7921E852867CE49F53388985E6d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb2dbf14d0b47ed3ba02bdb7c954e05a72deb7544"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mofi.svg"
    },
    {
      "chainId": 137,
      "name": "DAFI Token",
      "symbol": "DAFI",
      "decimals": 18,
      "address": "0x638Df98Ad8069a15569dA5a6b01181804c47e34c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfc979087305a826c2b2a0056cfaba50aad3e6439"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dafi.svg"
    },
    {
      "chainId": 137,
      "name": "Cardstack",
      "symbol": "CARD",
      "decimals": 18,
      "address": "0x3A4BeD49Ab592A227bAe8F41eFd0d38E6e06d96c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x954b890704693af242613edef1b603825afcd708"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/card.svg"
    },
    {
      "chainId": 137,
      "name": "Kylin Network",
      "symbol": "KYL",
      "decimals": 18,
      "address": "0x9ccdf331f97449A84D100918e1e233B097A3E13F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/kyl.svg"
    },
    {
      "chainId": 137,
      "name": "Gains V2",
      "symbol": "GFARM2",
      "decimals": 18,
      "address": "0x7075cAB6bCCA06613e2d071bd918D1a0241379E2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x831091dA075665168E01898c6DAC004A867f1e1B"
      }
    },
    {
      "chainId": 137,
      "name": "DeFi11",
      "symbol": "D11",
      "decimals": 18,
      "address": "0xc58158c14D4757EF36Ce25e493758F2fcEEDec5D",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9bf02cF6B0435A0523E6f6e0D2f35A920144F5FA"
      }
    },
    {
      "chainId": 137,
      "name": "CHONKER FINANCE",
      "symbol": "CHONK",
      "decimals": 18,
      "address": "0xc059a4777279E30C5238Da786384700cD14d8f47",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x84679bc467DC6c2c40ab04538813AfF3796351f1"
      }
    },
    {
      "chainId": 137,
      "name": "Convergence",
      "symbol": "CONV",
      "decimals": 18,
      "address": "0x95Bbe8fbD32088bC13E67b05c7E783AD6CA854D8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc834fa996fa3bec7aad3693af486ae53d8aa8b50"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/conv.svg"
    },
    {
      "chainId": 137,
      "name": "BoughtThe.top",
      "symbol": "BTT",
      "decimals": 18,
      "address": "0x04AE4aE7F9af802DE5A2Da9561948F6f24D4b043",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x910aCE1b34df96c8EAd1088F279FE114bE301286"
      }
    },
    {
      "chainId": 137,
      "name": "DxSale.Network",
      "symbol": "SALE",
      "decimals": 18,
      "address": "0x8f6196901a4a153d8eE8F3fa779A042F6092D908",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xF063fE1aB7a291c5d06a86e14730b00BF24cB589"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sale.svg"
    },
    {
      "chainId": 137,
      "name": "wMBX Token",
      "symbol": "wMBX",
      "decimals": 18,
      "address": "0x6181dEdD5D6aa117716cc385A0184C709b1263F3",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x71ba91dc68c6a206db0a6a92b4b1de3f9271432d"
      }
    },
    {
      "chainId": 137,
      "name": "BaoToken",
      "symbol": "BAO",
      "decimals": 18,
      "address": "0xc81278a52AD0e1485B7C3cDF79079220Ddd68b7D",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x374cb8c27130e2c9e04f44303f3c8351b9de61c1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bao.svg"
    },
    {
      "chainId": 137,
      "name": "Wrapped Gen 0",
      "symbol": "WG0",
      "decimals": 18,
      "address": "0xbD18f2909A2B55637007fA273069febe9DAb8664",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa10740ff9ff6852eac84cdcff9184e1d6d27c057"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/wg0.svg"
    },
    {
      "chainId": 137,
      "name": "Paypolitan Token",
      "symbol": "EPAN",
      "decimals": 18,
      "address": "0x6B4E056B0A2c7d967728B0d0329A61b746B04cd8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/epan.svg"
    },
    {
      "chainId": 137,
      "name": "POLVEN",
      "symbol": "POLVEN",
      "decimals": 18,
      "address": "0x1109C91F24F1E485f7c04d286C12B7F709e89a16",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4a6ab9792e9f046c3ab22d8602450de5186be9a7"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/polven.svg"
    },
    {
      "chainId": 137,
      "name": "SOAR.FI",
      "symbol": "SOAR",
      "decimals": 9,
      "address": "0xfdc99999c4139F953A3Af41dE986687275bD4F4B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbae5f2d8a1299e5c4963eaff3312399253f27ccb"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/soar.svg"
    },
    {
      "chainId": 137,
      "name": "SharedStake Governance Token",
      "symbol": "SGT",
      "decimals": 18,
      "address": "0xDd418748FeCfc870b7322b1D11402814f5ee55Ab",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x84810bcf08744d5862b8181f12d17bfd57d3b078"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sgt.svg"
    },
    {
      "chainId": 137,
      "name": "GraphLinq",
      "symbol": "GLQ",
      "decimals": 18,
      "address": "0x0CfC9a713A5C17Bc8a5fF0379467f6558bAcD0e0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/glq.svg"
    },
    {
      "chainId": 137,
      "name": "StakeWise Reward ETH2",
      "symbol": "rETH2",
      "decimals": 18,
      "address": "0xDEcE9bD4A6f4CABa2f71A8af6CbF0952758f8B36",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x20bc832ca081b91433ff6c17f85701b6e92486c5"
      }
    },
    {
      "chainId": 137,
      "name": "StakeWise Staked ETH2",
      "symbol": "sETH2",
      "decimals": 18,
      "address": "0xfd08e84075C8B46faaA5629eDd044effD0A597ac",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfe2e637202056d30016725477c5da089ab0a043a"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/seth2.svg"
    },
    {
      "chainId": 137,
      "name": "Kagra",
      "symbol": "KGR",
      "decimals": 18,
      "address": "0xc4ec74F50dd4A9ae7268898B3292DEcEf8Eda226",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe445e067Cb17b62b15f4883B66b69E05eA7b327d"
      }
    },
    {
      "chainId": 137,
      "name": "RAGEMATIC",
      "symbol": "RAGE",
      "decimals": 18,
      "address": "0x40CCD55B789fdEE8D434915dC2Aa6Bd938506A92",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x94804dc4948184fFd7355f62Ccbb221c9765886F"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rage.svg"
    },
    {
      "chainId": 137,
      "name": "xHDX",
      "symbol": "xHDX",
      "decimals": 12,
      "address": "0xe8388f307caa9c338955465f0AE2aA4c3E023Dd8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6fcb6408499a7c0f242e32d77eb51ffa1dd28a7e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/xhdx.svg"
    },
    {
      "chainId": 137,
      "name": "Stater",
      "symbol": "STR",
      "decimals": 18,
      "address": "0xA79E0Bfc579c709819f4A0E95d4597f03093B011",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x84bb947fcedba6b9c7dcead42df07e113bb03007"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/str.svg"
    },
    {
      "chainId": 137,
      "name": "santa.investments",
      "symbol": "SANTA",
      "decimals": 0,
      "address": "0x0aB8B5304c07Bb29514dAd43AdBA7A44C67b0506",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x499a7e6ddaf01de4c309f22933a1c38cbb44a1d4"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/santa.svg"
    },
    {
      "chainId": 137,
      "name": "Pluton",
      "symbol": "PLU",
      "decimals": 18,
      "address": "0x7dc0cb65EC6019330a6841e9c274f2EE57A6CA6C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xD8912C10681D8B21Fd3742244f44658dBA12264E"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/plu.svg"
    },
    {
      "chainId": 137,
      "name": "Armor",
      "symbol": "ARMOR",
      "decimals": 18,
      "address": "0x5de4005155933c0e1612Ce808f12B4cd8DAabc82",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1337def16f9b486faed0293eb623dc8395dfe46a"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/armor.svg"
    },
    {
      "chainId": 137,
      "name": "NFT Platform Index",
      "symbol": "NFTP",
      "decimals": 18,
      "address": "0xf7d9e281c5Cb4C6796284C5b663b3593D2037aF2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x68bb81b3f67f7aab5fd1390ecb0b8e1a806f2465"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/nftp.svg"
    },
    {
      "chainId": 137,
      "name": "Strudel BTC",
      "symbol": "VBTC",
      "decimals": 18,
      "address": "0x1489F4F7E3a80A0aD9fA23C39D2E8af818204ce9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe1406825186d63980fd6e2ec61888f7b91c4bae4"
      }
    },
    {
      "chainId": 137,
      "name": "Frontier Token",
      "symbol": "FRONT",
      "decimals": 18,
      "address": "0xa3eD22EEE92a3872709823a6970069e12A4540Eb",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf8C3527CC04340b208C854E985240c02F7B7793f"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/front.svg"
    },
    {
      "chainId": 137,
      "name": "YAM",
      "symbol": "YAM",
      "decimals": 18,
      "address": "0xb3B681dEE0435eCc0a508e40B02b3C9068D618cd",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0aacfbec6a24756c20d41914f2caba817c0d8521"
      }
    },
    {
      "chainId": 137,
      "name": "NIL Token",
      "symbol": "NIL",
      "decimals": 9,
      "address": "0x6374fce99CF93A8f07728c4ADF2991b0f5E50F45",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7DEb93314090837fb33bB9a30D62C459BDFdc661"
      }
    },
    {
      "chainId": 137,
      "name": "Havens Nook",
      "symbol": "HXN",
      "decimals": 18,
      "address": "0x175Bdc4e52EECB675B86FC4C9A3Ea3f80adBb610",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0E1fe60bc4aC0e3102343752ae7E49d01d444c0b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/hxn.svg"
    },
    {
      "chainId": 137,
      "name": "Staked SDT",
      "symbol": "xSDT",
      "decimals": 18,
      "address": "0xD921F8318cfd786baB1ea7492673F053c518Ac04",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xaC14864ce5A98aF3248Ffbf549441b04421247D3"
      }
    },
    {
      "chainId": 137,
      "name": "Flowing Hair",
      "symbol": "FGH",
      "decimals": 18,
      "address": "0xb8E5b39689f886f8C34D3E5ac09F513A282d486D",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3ec03cD2763A729339AFf9927BE679c76325D1bf"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/fgh.svg"
    },
    {
      "chainId": 137,
      "name": "Premia",
      "symbol": "PREMIA",
      "decimals": 18,
      "address": "0x055dC5c3b7c386f2daefEc554bB42831fB4107Be",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70"
      }
    },
    {
      "chainId": 137,
      "name": "LCX",
      "symbol": "LCX",
      "decimals": 18,
      "address": "0xE8A51D0dD1b4525189ddA2187F90ddF0932b5482",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x037a54aab062628c9bbae1fdb1583c195585fe41"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/lcx.svg"
    },
    {
      "chainId": 137,
      "name": "kongdefi.finance",
      "symbol": "KONG",
      "decimals": 9,
      "address": "0x9ECf85badEbd3ecF6eF79db44bB59519Cbd21d82",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7c3cf2d43b50e78e27a81293a43fcac45796fb54"
      }
    },
    {
      "chainId": 137,
      "name": "E-RADIX",
      "symbol": "eXRD",
      "decimals": 18,
      "address": "0x56B1c1e028c2E0a8852906E1eE7730ED67A3D9Bb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6468e79a80c0eab0f9a2b574c8d5bc374af59414"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/exrd.svg"
    },
    {
      "chainId": 137,
      "name": "Wise Token",
      "symbol": "WISE",
      "decimals": 18,
      "address": "0xB77e62709e39aD1cbeEBE77cF493745AeC0F453a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/wise.svg"
    },
    {
      "chainId": 137,
      "name": "Glitch",
      "symbol": "GLCH",
      "decimals": 18,
      "address": "0xbE5cf150E1fF59ca7F2499Eaa13BFC40AAE70e78",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x038a68FF68c393373eC894015816e33Ad41BD564"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/glch.svg"
    },
    {
      "chainId": 137,
      "name": "Marblecoin",
      "symbol": "MBC",
      "decimals": 18,
      "address": "0xcBB2Da0127042546cEfF56da69fAF3f2ba6d1C51",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8888889213dd4da823ebdd1e235b09590633c150"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mbc.svg"
    },
    {
      "chainId": 137,
      "name": "AnRKey X",
      "symbol": "$ANRX",
      "decimals": 18,
      "address": "0x554f074d9cCda8F483d1812d4874cBebD682644E",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xCae72A7A0Fd9046cf6b165CA54c9e3a3872109E0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/$anrx.svg"
    },
    {
      "chainId": 137,
      "name": "FingerPrint",
      "symbol": "FGP",
      "decimals": 18,
      "address": "0x8b62011D9e73922Ac5eF6d30A82588cB33F98055",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd9a8cfe21c232d485065cb62a96866799d4645f7"
      }
    },
    {
      "chainId": 137,
      "name": "UniMex",
      "symbol": "UMX",
      "decimals": 18,
      "address": "0x5dF1a47e05b4caBa0ED3Df13662642f05314764D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/umx.svg"
    },
    {
      "chainId": 137,
      "name": "SnowSwap",
      "symbol": "SNOW",
      "decimals": 18,
      "address": "0x33c9f7C0Afe2722cb9e426360C261fB755B4483d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfe9a29ab92522d14fc65880d817214261d8479ae"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/snow.svg"
    },
    {
      "chainId": 137,
      "name": "SifChain (erowan)",
      "symbol": "EROWAN",
      "decimals": 18,
      "address": "0xa7051C5a22d963b81D71C2BA64D46a877fBc1821",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe"
      }
    },
    {
      "chainId": 137,
      "name": "ALOHA",
      "symbol": "ALOHA",
      "decimals": 18,
      "address": "0x60AC2E84078Ce30CBC68e3d7b18bCF613271ce6B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x455f7ef6d8bcfc35f9337e85aee1b0600a59fabe"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/aloha.svg"
    },
    {
      "chainId": 137,
      "name": "PolkaFoundry",
      "symbol": "PKF",
      "decimals": 18,
      "address": "0x3d32a7Dc8B0C62A73639BF0D4FE8D229a2431EC8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8b39b70e39aa811b69365398e0aace9bee238aeb"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pkf.svg"
    },
    {
      "chainId": 137,
      "name": "Green Token",
      "symbol": "GREEN",
      "decimals": 8,
      "address": "0x8A4001fD666BE272605c56BB956d11A46200Db81",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5e68801A5dDA8671051006eb2920FfE9Cd553544"
      }
    },
    {
      "chainId": 137,
      "name": "KEY Token",
      "symbol": "KEY",
      "decimals": 0,
      "address": "0x03bb597efd7Bb986222aFdA80858F05a3BC4A2E9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf179597937d04ed22bea98745b667d2ccfc74f9d"
      }
    },
    {
      "chainId": 137,
      "name": "Opium Governance Token",
      "symbol": "OPIUM",
      "decimals": 18,
      "address": "0xE8F157E041Df3B28151B667364e9c90789Da7923",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x888888888889c00c67689029d7856aac1065ec11"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/opium.svg"
    },
    {
      "chainId": 137,
      "name": "MAXXToken.com",
      "symbol": "MAXX",
      "decimals": 18,
      "address": "0x41B3Fc2302C8aAc4C84c552f770419091EF52435",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x57641b7250f153020a33037845f63ff23a090d17"
      }
    },
    {
      "chainId": 137,
      "name": "ICOStart Token",
      "symbol": "ICH",
      "decimals": 18,
      "address": "0xb257De22059cd200e34139d27CE0e415E173cE49",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x330839ef82d34801bd96e75a4ee778ac56fa1ed8"
      }
    },
    {
      "chainId": 137,
      "name": "DexKit",
      "symbol": "KIT",
      "decimals": 18,
      "address": "0x4D0Def42Cf57D6f27CD4983042a55dce1C9F853c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/kit.svg"
    },
    {
      "chainId": 137,
      "name": "VISOR",
      "symbol": "VISR",
      "decimals": 18,
      "address": "0xB090B6310970DD028a007981a24C1a492568a816",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf938424f7210f31df2aee3011291b658f872e91e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/visr.svg"
    },
    {
      "chainId": 137,
      "name": "Cellframe Token",
      "symbol": "CELL",
      "decimals": 18,
      "address": "0x1D545D7ff917e08D7Bf26320343b16BdF51FdBb6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cell.svg"
    },
    {
      "chainId": 137,
      "name": "MUAN",
      "symbol": "MUA",
      "decimals": 18,
      "address": "0xdfeEB5661ef760A1c565Caf07A50aCa182EaFceE",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xD7F8032777C50aFD2e7AFa41912a4d8038127271"
      }
    },
    {
      "chainId": 137,
      "name": "Alchemix",
      "symbol": "ALCX",
      "decimals": 18,
      "address": "0x95c300e7740D2A88a44124B424bFC1cB2F9c3b89",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xdbdb4d16eda451d0503b854cf79d55697f90c8df"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/alcx.svg"
    },
    {
      "chainId": 137,
      "name": "YfDAI.finance",
      "symbol": "Yf-DAI",
      "decimals": 18,
      "address": "0x7E7fF932FAb08A0af569f93Ce65e7b8b23698Ad8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/yf-dai.svg"
    },
    {
      "chainId": 137,
      "name": "Cryptocurrency Top Tokens Index",
      "symbol": "CC10",
      "decimals": 18,
      "address": "0x9c49BA0212Bb5Db371e66b59D1565b7c06E4894e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x17ac188e09a7890a1844e5e65471fe8b0ccfadf3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cc10.svg"
    },
    {
      "chainId": 137,
      "name": "Orient",
      "symbol": "OFT",
      "decimals": 18,
      "address": "0x8CA5ed20346c5d8a21A849d59c64f0884a532882",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc0A25a24CcE412E2Fb407c08E3785437FEE9Ad1d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/oft.svg"
    },
    {
      "chainId": 137,
      "name": "Ethernity Chain",
      "symbol": "ERN",
      "decimals": 18,
      "address": "0x0E50BEA95Fe001A370A4F1C220C49AEdCB982DeC",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbbc2ae13b23d715c30720f079fcd9b4a74093505"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ern.svg"
    },
    {
      "chainId": 137,
      "name": "REN",
      "symbol": "REN",
      "decimals": 18,
      "address": "0x19782D3Dc4701cEeeDcD90f0993f0A9126ed89d0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x408e41876cccdc0f92210600ef50372656052a38"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ren.svg"
    },
    {
      "chainId": 137,
      "name": "HOLO",
      "symbol": "HOT",
      "decimals": 18,
      "address": "0x0C51f415cF478f8D08c246a6C6Ee180C5dC3A012",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/hot.svg"
    },
    {
      "chainId": 137,
      "name": "ADD.XYZ",
      "symbol": "ADD",
      "decimals": 18,
      "address": "0xfA15611AA3775FBfE1375Fb56cd3027F5D3DD2Db",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x635d081fd8f6670135d8a3640e2cf78220787d56"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/add.svg"
    },
    {
      "chainId": 137,
      "name": "CherryBlossom",
      "symbol": "CBL",
      "decimals": 18,
      "address": "0xf35a85C493c49f19bCC176E718865b148958a130",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf0acc6f66ac9b9b563f20e2347e67e1fd523ec1a"
      }
    },
    {
      "chainId": 137,
      "name": "MultiVAC",
      "symbol": "MTV",
      "decimals": 18,
      "address": "0x885b6e6DBb84148f98c806800Bc19c9A9DB4cFeb",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6226e00bcac68b0fe55583b90a1d727c14fab77f"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mtv.svg"
    },
    {
      "chainId": 137,
      "name": "Wrapped Wagerr",
      "symbol": "WWGR",
      "decimals": 8,
      "address": "0x157B28E46F301c596668A4B85C59f710F9C4BBAA",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc237868a9c5729bdf3173dddacaa336a0a5bb6e0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/wwgr.svg"
    },
    {
      "chainId": 137,
      "name": "CHZ",
      "symbol": "CHZ",
      "decimals": 18,
      "address": "0xf1938Ce12400f9a761084E7A80d37e732a4dA056",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3506424f91fd33084466f402d5d97f05f8e3b4af"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/chz.svg"
    },
    {
      "chainId": 137,
      "name": "NodeRunners",
      "symbol": "NDR",
      "decimals": 18,
      "address": "0xfb65ef42F7c8A70ff73F627DB6E9ba2Aff1F20fa",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x739763a258640919981f9ba610ae65492455be53"
      }
    },
    {
      "chainId": 137,
      "name": "Monavale",
      "symbol": "MONA",
      "decimals": 18,
      "address": "0x6968105460f67c3BF751bE7C15f92F5286Fd0CE5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x275f5Ad03be0Fa221B4C6649B8AeE09a42D9412A"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mona.svg"
    },
    {
      "chainId": 137,
      "name": "DOVU",
      "symbol": "DOV",
      "decimals": 18,
      "address": "0x0E0ffc562d72316b783E887bbAAe1FD794ADb530",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xac3211a5025414af2866ff09c23fc18bc97e79b1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dov.svg"
    },
    {
      "chainId": 137,
      "name": "Value USD",
      "symbol": "USDV",
      "decimals": 18,
      "address": "0x55bCbEAB7b9daDaDb0b2E97C354357c58a052d88",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xA62CfAf94A42E1D9b70241840BFDad76C15B2b24"
      }
    },
    {
      "chainId": 137,
      "name": "Hakka Finance",
      "symbol": "HAKKA",
      "decimals": 18,
      "address": "0xD893dde7346cc0aB46dc7EA468AeB69D9BF087c5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/hakka.svg"
    },
    {
      "chainId": 137,
      "name": "STASIS EURS Token",
      "symbol": "EURS",
      "decimals": 2,
      "address": "0xE111178A87A3BFf0c8d18DECBa5798827539Ae99",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xdb25f211ab05b1c97d595516f45794528a807ad8"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/eurs.svg"
    },
    {
      "chainId": 137,
      "name": "stake dao Curve.fi renBTC/wBTC/sBTC",
      "symbol": "sdcrvRenWSBTC",
      "decimals": 18,
      "address": "0xe212f92E5Af85268B33D2Aa587B51f49C3B945Be",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x24129b935aff071c4f0554882c0d9573f4975fed"
      }
    },
    {
      "chainId": 137,
      "name": "stake dao Curve.fi EURS/sEUR",
      "symbol": "sdeursCRV",
      "decimals": 18,
      "address": "0xfBdb45075Fb73ca4CC8b83FD6fdB4F9B696B1BA1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcd6997334867728ba14d7922f72c893fcee70e84"
      }
    },
    {
      "chainId": 137,
      "name": "stake dao Curve.fi DAI/USDC/USDT",
      "symbol": "sd3Crv",
      "decimals": 18,
      "address": "0x87f0BFEE4435CE2B8643b221D0C1CAd21F5328B4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb17640796e4c27a39af51887aff3f8dc0daf9567"
      }
    },
    {
      "chainId": 137,
      "name": "BetProtocolToken",
      "symbol": "BEPRO",
      "decimals": 18,
      "address": "0x07CC1cC3628Cc1615120DF781eF9fc8EC2feAE09",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bepro.svg"
    },
    {
      "chainId": 137,
      "name": "Vox.Finance",
      "symbol": "VOX",
      "decimals": 18,
      "address": "0x7Dd3D9E1868A7dA87509A601E7dbBf938c819a32",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x12D102F06da35cC0111EB58017fd2Cd28537d0e1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/vox.svg"
    },
    {
      "chainId": 137,
      "name": "Nord Token",
      "symbol": "NORD",
      "decimals": 18,
      "address": "0xF6F85b3f9fd581C2eE717c404F7684486F057F95",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6e9730ecffbed43fd876a264c982e254ef05a0de"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/nord.svg"
    },
    {
      "chainId": 137,
      "name": "veCRV-Stake-DAO",
      "symbol": "veCRV",
      "decimals": 18,
      "address": "0x9613282539b6d0e3CB1eDC843a43Da7768AC3838",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x478bBC744811eE8310B461514BDc29D03739084D"
      }
    },
    {
      "chainId": 137,
      "name": "Julien",
      "symbol": "JULIEN",
      "decimals": 4,
      "address": "0x268Ad27C28601D28b79c792C14e95BD2b7A030F8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe6710e0cda178f3d921f456902707b0d4c4a332b"
      }
    },
    {
      "chainId": 137,
      "name": "hoge.finance",
      "symbol": "HOGE",
      "decimals": 9,
      "address": "0xdd539b42dadDc0Ca55fb3aC2260240E61414d92B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfad45e47083e4607302aa43c65fb3106f1cd7607"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/hoge.svg"
    },
    {
      "chainId": 137,
      "name": "DEGEN Index",
      "symbol": "DEGEN",
      "decimals": 18,
      "address": "0x8a2870fb69A90000D6439b7aDfB01d4bA383A415",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x126c121f99e1e211df2e5f8de2d96fa36647c855"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/degen.svg"
    },
    {
      "chainId": 137,
      "name": "MAKER",
      "symbol": "MKR",
      "decimals": 18,
      "address": "0x6f7C932e7684666C9fd1d44527765433e01fF61d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
      }
    },
    {
      "chainId": 137,
      "name": "NapoleonX Token",
      "symbol": "NPX",
      "decimals": 2,
      "address": "0x106035DEDcA635d75d6Ff05F98F25916829eDB77",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x28b5e12cce51f15594b0b91d5b5adaa70f684a02"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/npx.svg"
    },
    {
      "chainId": 137,
      "name": "Stake DAO Token",
      "symbol": "SDT",
      "decimals": 18,
      "address": "0x361A5a4993493cE00f61C32d4EcCA5512b82CE90",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sdt.svg"
    },
    {
      "chainId": 137,
      "name": "EASY",
      "symbol": "EASY",
      "decimals": 18,
      "address": "0xDb3b3b147A030F032633f6C4BEBf9a2fB5a882B5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x913D8ADf7CE6986a8CbFee5A54725D9Eea4F0729"
      }
    },
    {
      "chainId": 137,
      "name": "Vidya",
      "symbol": "VIDYA",
      "decimals": 18,
      "address": "0xFe9CA7Cf13E33b23aF63Fea696f4AAe1b7A65585",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/vidya.svg"
    },
    {
      "chainId": 137,
      "name": "Betbeetle",
      "symbol": "BTL",
      "decimals": 18,
      "address": "0x2D0b6b0C7468C7cFb716e9Cf0ff24F45A239a3A0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb9a8695a234b6e8f9e65d299df8f94234540fc05"
      }
    },
    {
      "chainId": 137,
      "name": "Street Cred",
      "symbol": "CRED",
      "decimals": 18,
      "address": "0x13654478010268c8c729E8078313C3d0acC21819",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xED7Fa212E100DFb3b13B834233E4B680332a3420"
      }
    },
    {
      "chainId": 137,
      "name": "coin_artist",
      "symbol": "COIN",
      "decimals": 18,
      "address": "0x26F10028C105501678531A19Fe025b93Ae055a9f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x87b008E57F640D94Ee44Fd893F0323AF933F9195"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/coin.svg"
    },
    {
      "chainId": 137,
      "name": "PickleToken",
      "symbol": "PICKLE",
      "decimals": 18,
      "address": "0x2b88aD57897A8b496595925F43048301C37615Da",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pickle.svg"
    },
    {
      "chainId": 137,
      "name": "Render Token",
      "symbol": "RNDR",
      "decimals": 18,
      "address": "0x61299774020dA444Af134c82fa83E3810b309991",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rndr.svg"
    },
    {
      "chainId": 137,
      "name": "Cryptotipsfr Token V2",
      "symbol": "CRTS",
      "decimals": 9,
      "address": "0xebf9B87583C284F0a1b7aF72371F84D2A7567285",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x94cA37d108E89775dC8ae65F51AE28c2d9599f9A"
      }
    },
    {
      "chainId": 137,
      "name": "CRV",
      "symbol": "CRV",
      "decimals": 18,
      "address": "0x172370d5Cd63279eFa6d502DAB29171933a610AF",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd533a949740bb3306d119cc777fa900ba034cd52"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/crv.svg"
    },
    {
      "chainId": 137,
      "name": "TORN",
      "symbol": "TORN",
      "decimals": 18,
      "address": "0x23fE1Ee2f536427B7e8aC02FB037A7f867037Fe8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x77777feddddffc19ff86db637967013e6c6a116c"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/torn.svg"
    },
    {
      "chainId": 137,
      "name": "FOTO",
      "symbol": "FOTO",
      "decimals": 18,
      "address": "0x7827F070D3F0DCAE72aC6a9E1953459d50A426A7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf6ea0e60cee427b90aa36f327ee61d1d4cabc49f"
      }
    },
    {
      "chainId": 137,
      "name": "STAKE",
      "symbol": "STAKE",
      "decimals": 18,
      "address": "0xeb5c9e515629B725D3588A55E2a43964DcfdE8cA",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0ae055097c6d159879521c384f1d2123d1f195e6"
      }
    },
    {
      "chainId": 137,
      "name": "PERP",
      "symbol": "PERP",
      "decimals": 18,
      "address": "0x263534a4Fe3cb249dF46810718B7B612a30ebbff",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbc396689893d065f41bc2c6ecbee5e0085233447"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/perp.svg"
    },
    {
      "chainId": 137,
      "name": "Maps.me Token",
      "symbol": "MAPS",
      "decimals": 6,
      "address": "0x7B9FD890072508f66978e1cb9D4F802DCC2C4fDf",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2b915b505c017abb1547aa5ab355fbe69865cc6d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/maps.svg"
    },
    {
      "chainId": 137,
      "name": "Mysterium",
      "symbol": "MYST",
      "decimals": 18,
      "address": "0x1379E8886A944d2D9d440b3d88DF536Aea08d9F3",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4Cf89ca06ad997bC732Dc876ed2A7F26a9E7f361"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/myst.svg"
    },
    {
      "chainId": 137,
      "name": "Fractal Protocol Token",
      "symbol": "FCL",
      "decimals": 18,
      "address": "0x6f934b45fc6043527d73C7c99313dd838E723DB7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/fcl.svg"
    },
    {
      "chainId": 137,
      "name": "URANIUM",
      "symbol": "URANIUM",
      "decimals": 18,
      "address": "0x2Ecf35111DC4894f43FEab1683a9845cd1b4E0C4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xeea6D30798300F4E1d8cd819c8db3B4E6d1e29f6"
      }
    },
    {
      "chainId": 137,
      "name": "RAZOR",
      "symbol": "RAZOR",
      "decimals": 18,
      "address": "0xC91c06DB0f7bFFba61e2A5645CC15686F0a8c828",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/razor.svg"
    },
    {
      "chainId": 137,
      "name": "FireAnts",
      "symbol": "ANTS",
      "decimals": 18,
      "address": "0x24212089B9D90B4D06ef10bD80CA14ec9356D98f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa9fbb83a2689f4ff86339a4b96874d718673b627"
      }
    },
    {
      "chainId": 137,
      "name": "YVS.Finance",
      "symbol": "YVS",
      "decimals": 18,
      "address": "0xb565CF70613ca464D68427106af80C67a8e4b801",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xEC681F28f4561c2a9534799AA38E0d36A83Cf478"
      }
    },
    {
      "chainId": 137,
      "name": "Hopr",
      "symbol": "HOPR",
      "decimals": 18,
      "address": "0x6cCBF3627b2C83AFEF05bf2F035E7f7B210Fe30D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf5581dfefd8fb0e4aec526be659cfab1f8c781da"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/hopr.svg"
    },
    {
      "chainId": 137,
      "name": "Tapmydata",
      "symbol": "TAP",
      "decimals": 18,
      "address": "0x10635bF5c17F5E4c0Ed9012aEf7C12f96a57a4Dd",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/tap.svg"
    },
    {
      "chainId": 137,
      "name": "Injective Token",
      "symbol": "INJ",
      "decimals": 18,
      "address": "0x4E8dc2149EaC3f3dEf36b1c281EA466338249371",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/inj.svg"
    },
    {
      "chainId": 137,
      "name": "Badger Sett Digg",
      "symbol": "bDIGG",
      "decimals": 18,
      "address": "0xFDde616084427f0A231D0664a985E1F820E34693",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7e7e112a68d8d2e221e11047a72ffc1065c38e1a"
      }
    },
    {
      "chainId": 137,
      "name": "Digg",
      "symbol": "DIGG",
      "decimals": 9,
      "address": "0x12255b2DaDC7E18Fd34353DAa161974cC917C8dd",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x798d1be841a82a273720ce31c822c61a67a601c3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/digg.svg"
    },
    {
      "chainId": 137,
      "name": "Badger Sett Badger",
      "symbol": "bBADGER",
      "decimals": 18,
      "address": "0x2628D301b161DB70E3dBbAc88d9D900cA426fF02",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x19d97d8fa813ee2f51ad4b4e04ea08baf4dffc28"
      }
    },
    {
      "chainId": 137,
      "name": "Badger",
      "symbol": "BADGER",
      "decimals": 18,
      "address": "0x1FcbE5937B0cc2adf69772D228fA4205aCF4D9b2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3472A5A71965499acd81997a54BBA8D852C6E53d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/badger.svg"
    },
    {
      "chainId": 137,
      "name": "Theta Token",
      "symbol": "THETA",
      "decimals": 18,
      "address": "0xB46E0ae620EFd98516f49bb00263317096C114b2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3883f5e181fccaf8410fa61e12b59bad963fb645"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/theta.svg"
    },
    {
      "chainId": 137,
      "name": "Tixl Token",
      "symbol": "TXL",
      "decimals": 18,
      "address": "0x6EE244034336f0135dcef9A5755D03a9f51Dd114",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8eEF5a82E6Aa222a60F009ac18c24EE12dBf4b41"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/txl.svg"
    },
    {
      "chainId": 137,
      "name": "RFOX",
      "symbol": "RFOX",
      "decimals": 18,
      "address": "0xdD4959cd915AE74DCD3F51e11e40Fe112aC7AA69",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa1d6df714f91debf4e0802a542e13067f31b8262"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rfox.svg"
    },
    {
      "chainId": 137,
      "name": "Energy Web Token Bridged",
      "symbol": "EWTB",
      "decimals": 18,
      "address": "0x43E4B063F96c33F0433863A927F5bad34bb4B03d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x178c820f862b14f316509ec36b13123da19a6054"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ewtb.svg"
    },
    {
      "chainId": 137,
      "name": "DEAPCOIN",
      "symbol": "DEP",
      "decimals": 18,
      "address": "0xD0ee109352c6116dB0f17F4Aa8519CdBfc7e7887",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1a3496c18d558bd9c6c8f609e1b129f67ab08163"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dep.svg"
    },
    {
      "chainId": 137,
      "name": "IceCream",
      "symbol": "SCOOP",
      "decimals": 6,
      "address": "0x25F5ea9BD2ff7F4fE7CAd29a271Eb484AcBF19f8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9E7aCE871aFa0c18f979979a22104dd01d39b414"
      }
    },
    {
      "chainId": 137,
      "name": "AGA Rewards",
      "symbol": "AGAr",
      "decimals": 8,
      "address": "0xF84BD51eab957c2e7B7D646A3427C5A50848281D",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb453f1f2EE776dAF2586501361c457dB70e1ca0F"
      }
    },
    {
      "chainId": 137,
      "name": "PoolTogether",
      "symbol": "POOL",
      "decimals": 18,
      "address": "0x25788a1a171ec66Da6502f9975a15B609fF54CF6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pool.svg"
    },
    {
      "chainId": 137,
      "name": "BandToken",
      "symbol": "BAND",
      "decimals": 18,
      "address": "0xA8b1E0764f85f53dfe21760e8AfE5446D82606ac",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/band.svg"
    },
    {
      "chainId": 137,
      "name": "Fantom Token",
      "symbol": "FTM",
      "decimals": 18,
      "address": "0xC9c1c1c20B3658F8787CC2FD702267791f224Ce1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4e15361fd6b4bb609fa63c81a2be19d873717870"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ftm.svg"
    },
    {
      "chainId": 137,
      "name": "OriginToken",
      "symbol": "OGN",
      "decimals": 18,
      "address": "0xa63Beffd33AB3a2EfD92a39A7D2361CEE14cEbA8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ogn.svg"
    },
    {
      "chainId": 137,
      "name": "1Million Token",
      "symbol": "1MT",
      "decimals": 7,
      "address": "0x2052344CeAce7f140da3E819c7729fEF72F97851",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf0bc1ae4ef7ffb126a8347d06ac6f8add770e1ce"
      }
    },
    {
      "chainId": 137,
      "name": "Spartan",
      "symbol": "300",
      "decimals": 7,
      "address": "0x454E1Ec2F58ee542B75d2AB713Ed53Cd33Ba4308",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x167e2a574669b0eeb552aaf3da47c728cb348a41"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/300.svg"
    },
    {
      "chainId": 137,
      "name": "1337",
      "symbol": "1337",
      "decimals": 4,
      "address": "0x49Fc111e5Ddd5580f48D6fDc4314540cb3A5CC4B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x35872fea6a4843facbcdbce99e3b69596a3680b8"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/1337.svg"
    },
    {
      "chainId": 137,
      "name": "WHALE",
      "symbol": "WHALE",
      "decimals": 4,
      "address": "0xb9585ec9d4C97Ad9DEd7250Bb9a199fe8eED0ECA",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9355372396e3f6daf13359b7b607a3374cc638e0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/whale.svg"
    },
    {
      "chainId": 137,
      "name": "AutoChainTokenCandy",
      "symbol": "ATCx",
      "decimals": 4,
      "address": "0x0F933Ae2ffb1ee8b7385647Eb6A5610F31d5B56F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcb6e019e74a2d6e0dd60afc716e4c708140bff7d"
      }
    },
    {
      "chainId": 137,
      "name": "Tellor Tributes",
      "symbol": "TRB",
      "decimals": 18,
      "address": "0xE3322702BEdaaEd36CdDAb233360B939775ae5f1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/trb.svg"
    },
    {
      "chainId": 137,
      "name": "SwapMatic Token",
      "symbol": "SWAM",
      "decimals": 18,
      "address": "0x94C18174840F80D49d59DC3a1742aF0B884A8184",
      "logoURI": "https://raw.githubusercontent.com/BlockTimeWorld/crawler/main/icons/swam.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x368306eb52c8313fd398418c8220ddd560940e68"
      }
    },
    {
      "chainId": 137,
      "name": "IOI Token ",
      "symbol": "IOI",
      "decimals": 6,
      "address": "0xAF24765F631C8830B5528B57002241eE7eef1C14",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8b3870df408ff4d7c3a26df852d41034eda11d81"
      }
    },
    {
      "chainId": 137,
      "name": "B.20",
      "symbol": "B20",
      "decimals": 18,
      "address": "0xff898089e368eCc47Fc37Fd0D905Fbcf0D70E820",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc4de189abf94c57f396bd4c52ab13b954febefd8"
      }
    },
    {
      "chainId": 137,
      "name": "Neutrino USD",
      "symbol": "USDN",
      "decimals": 18,
      "address": "0x1b630A1f5838D142F4E91CC4163CD41F5139b166",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x674C6Ad92Fd080e4004b2312b45f796a192D27a0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/usdn.svg"
    },
    {
      "chainId": 137,
      "name": "Ammunition",
      "symbol": "AMMO",
      "decimals": 18,
      "address": "0x9C72573A47b0d81Ef6048c320bF5563e1606A04C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x41D4E9880d6aE03f6E152A52afc3ECF82063A08b"
      }
    },
    {
      "chainId": 137,
      "name": "Ruletka",
      "symbol": "RTK",
      "decimals": 18,
      "address": "0x38332D8671961aE13d0BDe040d536eB336495eEA",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1F6DEADcb526c4710Cf941872b86dcdfBbBD9211"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rtk.svg"
    },
    {
      "chainId": 137,
      "name": "Crypto Accept",
      "symbol": "ACPT",
      "decimals": 18,
      "address": "0xFCf1E2fC0A398925ddb09222842b376E3A7D573B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcAd2d4C4469fF09aB24d02A63BCeDfCD44bE0645"
      }
    },
    {
      "chainId": 137,
      "name": "Vortex DeFi",
      "symbol": "VTX",
      "decimals": 18,
      "address": "0x392f5C034b5423569a09Bb172f408aCb62A1Be7A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xceb286c9604c542d3cc08b41aa6c9675b078a832"
      }
    },
    {
      "chainId": 137,
      "name": "Offshift",
      "symbol": "XFT",
      "decimals": 18,
      "address": "0x9EC5AbD7A442B8325F529daB25019674D0ba983d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xabe580e7ee158da464b51ee1a83ac0289622e6be"
      }
    },
    {
      "chainId": 137,
      "name": "Digital Reserve Currency",
      "symbol": "DRC",
      "decimals": 0,
      "address": "0xFeD16c746CB5BFeD009730f9E3e6A673006105c7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa150Db9b1Fa65b44799d4dD949D922c0a33Ee606"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/drc.svg"
    },
    {
      "chainId": 137,
      "name": "Paxos Gold",
      "symbol": "PAXG",
      "decimals": 18,
      "address": "0x553d3D295e0f695B9228246232eDF400ed3560B5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x45804880de22913dafe09f4980848ece6ecbaf78"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/paxg.svg"
    },
    {
      "chainId": 137,
      "name": "Gnosis Token",
      "symbol": "GNO",
      "decimals": 18,
      "address": "0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6810e776880C02933D47DB1b9fc05908e5386b96"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/gno.svg"
    },
    {
      "chainId": 137,
      "name": "Synthetix Network Token",
      "symbol": "SNX",
      "decimals": 18,
      "address": "0x50B728D8D964fd00C2d0AAD81718b71311feF68a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/snx.svg"
    },
    {
      "chainId": 137,
      "name": "cVault.finance",
      "symbol": "CORE",
      "decimals": 18,
      "address": "0xE47dbe919C8AB0c1A1C1e97A1Eefc2B946253924",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x62359ed7505efc61ff1d56fef82158ccaffa23d7"
      }
    },
    {
      "chainId": 137,
      "name": "Decentr ",
      "symbol": "DEC",
      "decimals": 18,
      "address": "0x314338767151e6Ed23DB8A41c6F6943c1958Ee56",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dec.svg"
    },
    {
      "chainId": 137,
      "name": "AAH",
      "symbol": "AAH",
      "decimals": 18,
      "address": "0xaf9444bc9D6117121Aa108fC6c45835Be60E7d07",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7a911c71144f4d5a00e4216b1c5b12d9571e9336"
      }
    },
    {
      "chainId": 137,
      "name": "DoTx Uniswap V2",
      "symbol": "DoTxUNI-V2",
      "decimals": 18,
      "address": "0x421E0acEa8cD9D4aa2bcEdB407726b6A4Bffb664",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5488ed7f9a99684d0e9eccd3847860c734017575"
      }
    },
    {
      "chainId": 137,
      "name": "Firebird DAO",
      "symbol": "FBIRD",
      "decimals": 18,
      "address": "0x422E0Cba8e57Acc799fC14DAdf2b72DfbA281c5F",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x299e6062fc7e68f517746ab40cd915c0e9410935"
      }
    },
    {
      "chainId": 137,
      "name": "PolkastarterToken",
      "symbol": "POLS",
      "decimals": 18,
      "address": "0x8dc302e2141DA59c934d900886DbF1518Fd92cd4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pols.svg"
    },
    {
      "chainId": 137,
      "name": "DSLA",
      "symbol": "DSLA",
      "decimals": 18,
      "address": "0xa0E390e9ceA0D0e8cd40048ced9fA9EA10D71639",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dsla.svg"
    },
    {
      "chainId": 137,
      "name": "Bancor Network Token",
      "symbol": "BNT",
      "decimals": 18,
      "address": "0xc26D47d5c33aC71AC5CF9F776D63Ba292a4F7842",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bnt.svg"
    },
    {
      "chainId": 137,
      "name": "Reserve Rights",
      "symbol": "RSR",
      "decimals": 18,
      "address": "0x7B38C0d5dfc91d0A3FeF2F8DAb3BE404c1f61fa4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8762db106b2c2a0bccb3a80d1ed41273552616e8"
      }
    },
    {
      "chainId": 137,
      "name": "Ethereum Blue",
      "symbol": "BLUE",
      "decimals": 8,
      "address": "0xe7f960685aba7327ADA3b161Ea252703C87be0bF",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x539efe69bcdd21a83efd9122571a64cc25e0282b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/blue.svg"
    },
    {
      "chainId": 137,
      "name": "API3",
      "symbol": "API3",
      "decimals": 18,
      "address": "0x45C27821E80F8789b60Fd8B600C73815d34DDa6C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0b38210ea11411557c13457D4dA7dC6ea731B88a"
      }
    },
    {
      "chainId": 137,
      "name": "MODEFI ",
      "symbol": "MOD",
      "decimals": 18,
      "address": "0x8346Ab8d5EA7A9Db0209aEd2d1806AFA0E2c4C21",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xea1ea0972fa092dd463f2968f9bb51cc4c981d71"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mod.svg"
    },
    {
      "chainId": 137,
      "name": "DEFI Top 5 Tokens Index",
      "symbol": "DEFI5",
      "decimals": 18,
      "address": "0x42435F467D33e5C4146a4E8893976ef12BBCE762",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/defi5.svg"
    },
    {
      "chainId": 137,
      "name": "Rarible",
      "symbol": "RARI",
      "decimals": 18,
      "address": "0x780053837cE2CeEaD2A90D9151aA21FC89eD49c2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfca59cd816ab1ead66534d82bc21e7515ce441cf"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rari.svg"
    },
    {
      "chainId": 137,
      "name": "OptionRoom",
      "symbol": "ROOM",
      "decimals": 18,
      "address": "0x29a13AF916FE709b10029b578C94759675c9e91e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xad4f86a25bbc20ffb751f2fac312a0b4d8f88c64"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/room.svg"
    },
    {
      "chainId": 137,
      "name": "Audius",
      "symbol": "AUDIO",
      "decimals": 18,
      "address": "0x5eB8D998371971D01954205c7AFE90A7AF6a95AC",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x18aaa7115705e8be94bffebde57af9bfc265b998"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/audio.svg"
    },
    {
      "chainId": 137,
      "name": "SuperFarm",
      "symbol": "SUPER",
      "decimals": 18,
      "address": "0xa1428174F516F527fafdD146b883bB4428682737",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/super.svg"
    },
    {
      "chainId": 137,
      "name": "Centaur Token",
      "symbol": "CNTR",
      "decimals": 18,
      "address": "0xdae89dA41a96956e9e70320Ac9c0dd077070D3a5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x03042482d64577a7bdb282260e2ea4c8a89c064b"
      }
    },
    {
      "chainId": 137,
      "name": "CyberFi Token",
      "symbol": "CFi",
      "decimals": 18,
      "address": "0xeCf8f2FA183b1C4d2A269BF98A54fCe86C812d3e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cfi.svg"
    },
    {
      "chainId": 137,
      "name": "tBTC",
      "symbol": "TBTC",
      "decimals": 18,
      "address": "0x50a4a434247089848991DD8f09b889D4e2870aB6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/tbtc.svg"
    },
    {
      "chainId": 137,
      "name": "KEEP Token",
      "symbol": "KEEP",
      "decimals": 18,
      "address": "0x42f37A1296b2981F7C3cAcEd84c5096b2Eb0C72C",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/keep.svg"
    },
    {
      "chainId": 137,
      "name": "Sapiency",
      "symbol": "SPCY",
      "decimals": 18,
      "address": "0x87c830b6d732C3209dB97f61B379F359570d6A49",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x15f503F23d4d2716e0817714709B5DCF868013EE"
      }
    },
    {
      "chainId": 137,
      "name": "Datamine",
      "symbol": "DAM",
      "decimals": 18,
      "address": "0xb75bBd79985a8092B05224f62D7fED25924B075d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xF80D589b3Dbe130c270a69F1a69D050f268786Df"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dam.svg"
    },
    {
      "chainId": 137,
      "name": "Zenfuse",
      "symbol": "ZEFU",
      "decimals": 18,
      "address": "0xE117837c0c8A53765cb6b4A16eBc84B3a71DD0BD",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/zefu.svg"
    },
    {
      "chainId": 137,
      "name": "Rai Reflex Index",
      "symbol": "RAI",
      "decimals": 18,
      "address": "0x00e5646f60AC6Fb446f621d146B6E1886f002905",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rai.svg"
    },
    {
      "chainId": 137,
      "name": "Wrapped LUNA Token",
      "symbol": "LUNA",
      "decimals": 18,
      "address": "0x24834BBEc7E39ef42f4a75EAF8E5B6486d3F0e57",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/luna.svg"
    },
    {
      "chainId": 137,
      "name": "Power Trade Fuel",
      "symbol": "PTF",
      "decimals": 18,
      "address": "0xFc42E9996973ac2E0Ff1055762E78CFaF0061188",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xbe38a889d67467b665e30e20ee5604a6f5696e38"
      }
    },
    {
      "chainId": 137,
      "name": "PLOT",
      "symbol": "PLOT",
      "decimals": 18,
      "address": "0xe82808eaA78339b06a691fd92E1Be79671cAd8D3",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x72F020f8f3E8fd9382705723Cd26380f8D0c66Bb"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/plot.svg"
    },
    {
      "chainId": 137,
      "name": "Social Rocket",
      "symbol": "ROCKS",
      "decimals": 18,
      "address": "0x434B5acf47e2883fC83D326D69F32965945C1f3D",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0829d2d5cC09d3d341E813c821B0cfAE272D9fb2"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rocks.svg"
    },
    {
      "chainId": 137,
      "name": "Graph Token",
      "symbol": "GRT",
      "decimals": 18,
      "address": "0x5fe2B58c013d7601147DcdD68C143A77499f5531",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/grt.svg"
    },
    {
      "chainId": 137,
      "name": "OMGToken",
      "symbol": "OMG",
      "decimals": 18,
      "address": "0x62414D03084EeB269E18C970a21f45D2967F0170",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd26114cd6ee289accf82350c8d8487fedb8a0c07"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/omg.svg"
    },
    {
      "chainId": 137,
      "name": "Bridge Mutual",
      "symbol": "BMI",
      "decimals": 18,
      "address": "0x1A47E3316282d57DF146F87c58A1FB4b26992Bbf",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x725c263e32c72ddc3a19bea12c5a0479a81ee688"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bmi.svg"
    },
    {
      "chainId": 137,
      "name": "Sora Token",
      "symbol": "XOR",
      "decimals": 18,
      "address": "0xECaE5e66d7F2BAe250dfF839216A01C2702aDFFD",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x40fd72257597aa14c7231a7b1aaa29fce868f677"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/xor.svg"
    },
    {
      "chainId": 137,
      "name": "Coreto",
      "symbol": "COR",
      "decimals": 18,
      "address": "0x4fdCE518fE527439Fe76883e6b51A1c522B61b7C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9c2dc0c3cc2badde84b0025cf4df1c5af288d835"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cor.svg"
    },
    {
      "chainId": 137,
      "name": "CumCoin",
      "symbol": "CUM",
      "decimals": 18,
      "address": "0x0f92D459B20D21F6bf9E02056EA9165d3f78bA62",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4ecebfe9b26cd2949202bc0c74e8b5748115fe20"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cum.svg"
    },
    {
      "chainId": 137,
      "name": "Swipe",
      "symbol": "SXP",
      "decimals": 18,
      "address": "0x6aBB753C1893194DE4a83c6e8B4EadFc105Fd5f5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sxp.svg"
    },
    {
      "chainId": 137,
      "name": "DokiDokiAzuki",
      "symbol": "AZUKI",
      "decimals": 18,
      "address": "0x7CdC0421469398e0F3aA8890693d86c840Ac8931",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x910524678C0B1B23FFB9285a81f99C29C11CBaEd"
      }
    },
    {
      "chainId": 137,
      "name": "Unibright",
      "symbol": "UBT",
      "decimals": 8,
      "address": "0x7FBc10850caE055B27039aF31bD258430e714c62",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ubt.svg"
    },
    {
      "chainId": 137,
      "name": "ARIANEE",
      "symbol": "ARIA20",
      "decimals": 18,
      "address": "0x46F48FbdedAa6F5500993BEDE9539ef85F4BeE8e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xedf6568618a00c6f0908bf7758a16f76b6e04af9"
      }
    },
    {
      "chainId": 137,
      "name": "DefiPulse Index",
      "symbol": "DPI",
      "decimals": 18,
      "address": "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dpi.svg"
    },
    {
      "chainId": 137,
      "name": "RAMP",
      "symbol": "RAMP",
      "decimals": 18,
      "address": "0xaECeBfcF604AD245Eaf0D5BD68459C3a7A6399c2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ramp.svg"
    },
    {
      "chainId": 137,
      "name": "Butterfly Protocol",
      "symbol": "BFLY",
      "decimals": 18,
      "address": "0x5B0a0CD03e9Df1829E00128ebE277Cc3247da346",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf680429328caaaCabee69b7A9FdB21a71419c063"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bfly.svg"
    },
    {
      "chainId": 137,
      "name": "SwissBorg",
      "symbol": "CHSB",
      "decimals": 8,
      "address": "0x67Ce67ec4fCd4aCa0Fcb738dD080b2a21ff69D75",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xba9d4199fab4f26efe3551d490e3821486f135ba"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/chsb.svg"
    },
    {
      "chainId": 137,
      "name": "Trendering",
      "symbol": "TRND",
      "decimals": 18,
      "address": "0xa38735c2be496A0C2D4FE32c7459c1d391501035",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/trnd.svg"
    },
    {
      "chainId": 137,
      "name": "TAMA EGG NiftyGotchi",
      "symbol": "TME",
      "decimals": 18,
      "address": "0xbB6c356bDC5C258cb4e39C112d68fB6A9a9F6E26",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6e742e29395cf5736c358538f0f1372ab3dfe731"
      }
    },
    {
      "chainId": 137,
      "name": "Terra Virtua Kolect",
      "symbol": "TVK",
      "decimals": 18,
      "address": "0x5667dcC0ab74D1b1355C3b2061893399331B57e2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/tvk.svg"
    },
    {
      "chainId": 137,
      "name": "Feathers",
      "symbol": "myFTHR",
      "decimals": 4,
      "address": "0xDfE5bED8D271a4cD89cd2066839B2b0Ec934A6E8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7C918dF91f8F4e8D707a7A4013b8e7247C0293B1"
      }
    },
    {
      "chainId": 137,
      "name": "1Inch",
      "symbol": "1INCH",
      "decimals": 18,
      "address": "0x9c2C5fd7b07E95EE044DDeba0E97a665F142394f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x111111111117dc0aa78b770fa6a738034120c302"
      }
    },
    {
      "chainId": 137,
      "name": "Hands Of Steel",
      "symbol": "STEEL",
      "decimals": 0,
      "address": "0xc8C511fE3EdBA60bc1049A88060468c2EA2D6358",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6f022e991ea21d26f85f6716c088e2864101dfec"
      }
    },
    {
      "chainId": 137,
      "name": "Circolo Arduino Token",
      "symbol": "ARDU",
      "decimals": 18,
      "address": "0xBe319A08eBE5da37C5A8ce8a0D8463ff6750e53B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3d58f7b1b6f0262031c319265bd57e4752e3fa1e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ardu.svg"
    },
    {
      "chainId": 137,
      "name": "UniLend Finance Token",
      "symbol": "UFT",
      "decimals": 18,
      "address": "0x5B4CF2C120A9702225814E18543ee658c5f8631e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/uft.svg"
    },
    {
      "chainId": 137,
      "name": "Omniunit Cash",
      "symbol": "OMCH",
      "decimals": 18,
      "address": "0x349f96F489ed4e73e6C118Ed2D568343C9ee7cEc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xaedb08ffbda65c9843875669fbcb544bcab63feb"
      }
    },
    {
      "chainId": 137,
      "name": "Chain Games",
      "symbol": "CHAIN",
      "decimals": 18,
      "address": "0xd55fCe7CDaB84d84f2EF3F99816D765a2a94a509",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc4c2614e694cf534d407ee49f8e44d125e4681c4"
      }
    },
    {
      "chainId": 137,
      "name": "Rubic",
      "symbol": "RBC",
      "decimals": 18,
      "address": "0xc3cFFDAf8F3fdF07da6D5e3A89B8723D5E385ff8",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rbc.svg"
    },
    {
      "chainId": 137,
      "name": "Shopping.io",
      "symbol": "SPI",
      "decimals": 18,
      "address": "0x068180071617528606371c31892EcBF2B70ac1d2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/spi.svg"
    },
    {
      "chainId": 137,
      "name": "SURF.Finance",
      "symbol": "SURF",
      "decimals": 18,
      "address": "0x1E42EDbe5376e717C1B22904C59e406426E8173F",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c"
      }
    },
    {
      "chainId": 137,
      "name": "Omniunit",
      "symbol": "OMNIUNIT",
      "decimals": 18,
      "address": "0xFd6cF3A1fcb42371fD7E69633d31303868b8171a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd22dcf31ca28cf4dce530a0f120e244f4b4539eb"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/omniunit.svg"
    },
    {
      "chainId": 137,
      "name": "DokiDokiFinance",
      "symbol": "DOKI",
      "decimals": 18,
      "address": "0x5C7F7Fe4766fE8f0fa9b41E2E4194d939488ff1C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/doki.svg"
    },
    {
      "chainId": 137,
      "name": "AGA Token",
      "symbol": "AGA",
      "decimals": 4,
      "address": "0x033d942A6b495C4071083f4CDe1f17e986FE856c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2D80f5F5328FdcB6ECeb7Cacf5DD8AEDaEC94e20"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/aga.svg"
    },
    {
      "chainId": 137,
      "name": "DOGEFI",
      "symbol": "DOGEFI",
      "decimals": 18,
      "address": "0x13405CC33ffae0a9f91FeBb66B6b85A9C54DA13A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9b9087756eca997c5d595c840263001c9a26646d"
      }
    },
    {
      "chainId": 137,
      "name": "Sync Network ",
      "symbol": "SYNC",
      "decimals": 18,
      "address": "0x5e648D09170C346DD27df9Db332591e4FAa6A844",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sync.svg"
    },
    {
      "chainId": 137,
      "name": "NFTX",
      "symbol": "NFTX",
      "decimals": 18,
      "address": "0x418839451873b0E69e628F95DC39a877a9715196",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x87d73e916d7057945c9bcd8cdd94e42a6f47f776"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/nftx.svg"
    },
    {
      "chainId": 137,
      "name": "Rio Fuel Token",
      "symbol": "RFuel",
      "decimals": 18,
      "address": "0x147697003255510f6431a44443E67B227109832e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xaf9f549774ecedbd0966c52f250acc548d3f36e5"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/rfuel.svg"
    },
    {
      "chainId": 137,
      "name": "WePower Token",
      "symbol": "WPR",
      "decimals": 18,
      "address": "0xCBAb27B2D5b468Eea509Bd430100922341BC3f1A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4cf488387f035ff08c371515562cba712f9015d4"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/wpr.svg"
    },
    {
      "chainId": 137,
      "name": "Cartesi Token",
      "symbol": "CTSI",
      "decimals": 18,
      "address": "0x2727Ab1c2D22170ABc9b595177B2D5C6E1Ab7B7B",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ctsi.svg"
    },
    {
      "chainId": 137,
      "name": "N3RD.FINANCE",
      "symbol": "N3RDz",
      "decimals": 18,
      "address": "0x8f3dc8321cBa3Abe08Fb29055a0A10dC79223252",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x32c868f6318d6334b2250f323d914bc2239e4eee"
      }
    },
    {
      "chainId": 137,
      "name": "SERGS",
      "symbol": "SERGS",
      "decimals": 18,
      "address": "0xc73A8F11ec303eD81000AC5Eae94Bf2D65b67dD6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x79ba92dda26fce15e1e9af47d5cfdfd2a093e000"
      }
    },
    {
      "chainId": 137,
      "name": "Jarvis Reward Token",
      "symbol": "JRT",
      "decimals": 18,
      "address": "0x596eBE76e2DB4470966ea395B0d063aC6197A8C5",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8a9c67fee641579deba04928c4bc45f66e26343a"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/jrt.svg"
    },
    {
      "chainId": 137,
      "name": "LOAD",
      "symbol": "LOAD",
      "decimals": 8,
      "address": "0x81C88f5CFF4fd506df906cb32F8b02218701b0C7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa883e72c12473ded50a5fbffa60e4000fa5fe3c8"
      }
    },
    {
      "chainId": 137,
      "name": "ZeroUtility",
      "symbol": "ZUT",
      "decimals": 18,
      "address": "0xe86E8beb7340659DDDCE61727E500e3A5aD75a90",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x83f873388cd14b83a9f47fabde3c9850b5c74548"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/zut.svg"
    },
    {
      "chainId": 137,
      "name": "Pepemon Pepeballs",
      "symbol": "PPBLZ",
      "decimals": 18,
      "address": "0x13607aA9b2ffdd8340F4628049Bd35C02A68fA05",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4d2ee5dae46c86da2ff521f7657dad98834f97b8"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ppblz.svg"
    },
    {
      "chainId": 137,
      "name": "Bounty0x Token",
      "symbol": "BNTY",
      "decimals": 18,
      "address": "0x0f40D69Ff494a9e74b1F20A89EfF299B2A05918F",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd2d6158683aee4cc838067727209a0aaf4359de3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bnty.svg"
    },
    {
      "chainId": 137,
      "name": "Blockchain Mind",
      "symbol": "BCM",
      "decimals": 18,
      "address": "0x29B9c200B27683feA3512911DAFAf0AfD60dA4E3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9620366a3e732f484b2dc63103bb0eef0dde1f33"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bcm.svg"
    },
    {
      "chainId": 137,
      "name": "YELD",
      "symbol": "YELD",
      "decimals": 18,
      "address": "0x9Bd3b7C3dCC24708cbF122523546Ee5C6cAEfCe8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x468ab3b1f63A1C14b361bC367c3cC92277588Da1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/yeld.svg"
    },
    {
      "chainId": 137,
      "name": "Frax Share",
      "symbol": "FXS",
      "decimals": 18,
      "address": "0x3e121107F6F22DA4911079845a470757aF4e1A1b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/fxs.svg"
    },
    {
      "chainId": 137,
      "name": "SpiritCoin",
      "symbol": "SPIRIT",
      "decimals": 15,
      "address": "0x24627609f3b7a01fc5A99D71067d4A28778d2B7A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x88647c0a3a3349b9dc9e69d7385a9393a15245dc"
      }
    },
    {
      "chainId": 137,
      "name": "Reef.finance",
      "symbol": "REEF",
      "decimals": 18,
      "address": "0xa383abD0fE30fa2b781c0b454bfcC0475c6c8844",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xfe3e6a25e6b192a42a44ecddcd13796471735acf"
      }
    },
    {
      "chainId": 137,
      "name": "DeFi Of Thrones",
      "symbol": "DoTx",
      "decimals": 18,
      "address": "0x3Ef402Af15EEB3c80b4441E60913f31a5C41E077",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xFAb5a05C933f1A2463E334E011992E897D56eF0a"
      }
    },
    {
      "chainId": 137,
      "name": "Frax",
      "symbol": "FRAX",
      "decimals": 18,
      "address": "0x104592a158490a9228070E0A8e5343B499e125D0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x853d955acef822db058eb8505911ed77f175b99e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/frax.svg"
    },
    {
      "chainId": 137,
      "name": "LoganCoin",
      "symbol": "LOG",
      "decimals": 18,
      "address": "0x2F128A29F2b070a68d92777EBBc0B1E8B1D5Bcd0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x7FdF5d604A5597a20950F0744342647098154abE"
      }
    },
    {
      "chainId": 137,
      "name": "Parsiq",
      "symbol": "PRQ",
      "decimals": 18,
      "address": "0x9377Eeb7419486FD4D485671d50baa4BF77c2222",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x362bc847a3a9637d3af6624eec853618a43ed7d2"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/prq.svg"
    },
    {
      "chainId": 137,
      "name": "HYDRO",
      "symbol": "HYDRO",
      "decimals": 18,
      "address": "0x902742E3c5169657B1028977371CDF2c1608F67a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xEBBdf302c940c6bfd49C6b165f457fdb324649bc"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/hydro.svg"
    },
    {
      "chainId": 137,
      "name": "RottenToken",
      "symbol": "ROT",
      "decimals": 18,
      "address": "0x21389a523B3A9F39Bb3A4065572994455faf59E8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xD04785C4d8195e4A54d9dEc3a9043872875ae9E2"
      }
    },
    {
      "chainId": 137,
      "name": "Vibrant Finance",
      "symbol": "ViFi",
      "decimals": 18,
      "address": "0xD6c914BB2fca4BCB6644D01C4cf690c34a166e13",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8a99E2dAE13e4df4A6aA2A9Db2d6A7901eD0107D"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/vifi.svg"
    },
    {
      "chainId": 137,
      "name": "Atari",
      "symbol": "ATRI",
      "decimals": 0,
      "address": "0xB140665ddE25c644c6B418e417C930dE8A8a6Ac9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xdacd69347de42babfaecd09dc88958378780fb62"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/atri.svg"
    },
    {
      "chainId": 137,
      "name": "CORD.Finance Bridge",
      "symbol": "CORDBRIDGE",
      "decimals": 18,
      "address": "0x6C222361B1407c196F740c1BfFC17d1770BFD55c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x63Ebe5Dc670FA883e184771fCB42555CB6069bcA"
      }
    },
    {
      "chainId": 137,
      "name": "DAOfi",
      "symbol": "DAOfi",
      "decimals": 18,
      "address": "0x083BdF826F6A7419d3Cef30B9E338316224c8e8B",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd82bb924a1707950903e2c0a619824024e254cd1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/daofi.svg"
    },
    {
      "chainId": 137,
      "name": "Karma",
      "symbol": "KARMA",
      "decimals": 4,
      "address": "0x4016489B230980fd43511e28E7Fb91ED795c90C5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdfe691f37b6264a90ff507eb359c45d55037951c"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/karma.svg"
    },
    {
      "chainId": 137,
      "name": "Koinos",
      "symbol": "KOIN",
      "decimals": 8,
      "address": "0xd617a689F1B8d3b27D51Cf7789f18bD43d8c1706",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x66d28cb58487a7609877550e1a34691810a6b9fc"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/koin.svg"
    },
    {
      "chainId": 137,
      "name": "DAO Maker",
      "symbol": "DAO",
      "decimals": 18,
      "address": "0x048c83a1176A1d3d12cb8C305179D360B1E4C958",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0f51bb10119727a7e5ea3538074fb341f56b09ad"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dao.svg"
    },
    {
      "chainId": 137,
      "name": "Lead Token",
      "symbol": "XPb",
      "decimals": 18,
      "address": "0xB272B6D99858B0EfB079946942006727fe105201",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbC81BF5B3173BCCDBE62dba5f5b695522aD63559"
      }
    },
    {
      "chainId": 137,
      "name": "Keep3rV1",
      "symbol": "KP3R",
      "decimals": 18,
      "address": "0x53AEc293212E3B792563Bc16f1be26956adb12e9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/kp3r.svg"
    },
    {
      "chainId": 137,
      "name": "Fuego Token",
      "symbol": "FUEGO",
      "decimals": 18,
      "address": "0x088C9b7FC7d1E8F36028996236C9993BDf25Ac3E",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf93a26a41df2d39650d32f2bffae90e3c5286da9"
      }
    },
    {
      "chainId": 137,
      "name": "Must",
      "symbol": "MUST",
      "decimals": 18,
      "address": "0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f"
      }
    },
    {
      "chainId": 137,
      "name": "MEME",
      "symbol": "MEME",
      "decimals": 8,
      "address": "0xf2b5a8c37278bcdD50727D5CA879f8e5A4642e2e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd5525d397898e5502075ea5e830d8914f6f0affe"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/meme.svg"
    },
    {
      "chainId": 137,
      "name": "Honey",
      "symbol": "HNY",
      "decimals": 18,
      "address": "0xb371248Dd0f9E4061ccf8850E9223Ca48Aa7CA4b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc3589f56b6869824804a5ea29f2c9886af1b0fce"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/hny.svg"
    },
    {
      "chainId": 137,
      "name": "ethersmart",
      "symbol": "ETM",
      "decimals": 18,
      "address": "0xAf95C20C60b49aD88024d8e77858900D9f2c98Bc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xF3eb8B90C763b8B2B53E7819ac27eca8f94C8Ec2"
      }
    },
    {
      "chainId": 137,
      "name": "DONUT",
      "symbol": "DONUT",
      "decimals": 18,
      "address": "0xDe4e5B3672c4077B69216b77d99D8Ec35ec6C31A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9"
      }
    },
    {
      "chainId": 137,
      "name": "MCHCoin",
      "symbol": "MCHC",
      "decimals": 18,
      "address": "0xee7666aACAEFaa6efeeF62ea40176d3eB21953B9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd69f306549e9d96f183b1aeca30b8f4353c2ecc3"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mchc.svg"
    },
    {
      "chainId": 137,
      "name": "JPY Coin",
      "symbol": "JPYC",
      "decimals": 18,
      "address": "0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2370f9d504c7a6E775bf6E14B3F12846b594cD53"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/jpyc.svg"
    },
    {
      "chainId": 137,
      "name": "Pixel",
      "symbol": "PIXEL",
      "decimals": 4,
      "address": "0x24f82AE063f165d621b2aEC10714eB989c51938A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1e906717de2e4a4600f13b6909736b0346bdde3e"
      }
    },
    {
      "chainId": 137,
      "name": "Vision Token",
      "symbol": "VISION",
      "decimals": 18,
      "address": "0x034b2090b579228482520c589dbD397c53Fc51cC",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf406f7a9046793267bc276908778b29563323996"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/vision.svg"
    },
    {
      "chainId": 137,
      "name": "Mireneum token",
      "symbol": "MNE",
      "decimals": 8,
      "address": "0x8e600198218AEAEb6a4B4F84771dF8b38930ddcE",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x426CA1eA2406c07d75Db9585F22781c096e3d0E0"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mne.svg"
    },
    {
      "chainId": 137,
      "name": "Benzene",
      "symbol": "BZN",
      "decimals": 18,
      "address": "0xcD0D64C971AF8B477042130c5e6cD2A6f7842869",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6524b87960c2d573ae514fd4181777e7842435d4"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bzn.svg"
    },
    {
      "chainId": 137,
      "name": "Amp Token",
      "symbol": "AMP",
      "decimals": 18,
      "address": "0x0621d647cecbFb64b79E44302c1933cB4f27054d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xff20817765cb7f73d4bde2e66e067e58d11095c2"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/amp.svg"
    },
    {
      "chainId": 137,
      "name": "Celsius",
      "symbol": "CEL",
      "decimals": 4,
      "address": "0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cel.svg"
    },
    {
      "chainId": 137,
      "name": "SportX",
      "symbol": "SX",
      "decimals": 18,
      "address": "0x840195888Db4D6A99ED9F73FcD3B225Bb3cB1A79",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x99fE3B1391503A1bC1788051347A1324bff41452"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/sx.svg"
    },
    {
      "chainId": 137,
      "name": "Route",
      "symbol": "ROUTE",
      "decimals": 18,
      "address": "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/route.svg"
    },
    {
      "chainId": 137,
      "name": "Rebalance Token",
      "symbol": "RBAL",
      "decimals": 18,
      "address": "0x03247a4368A280bEc8133300cD930A3a61d604f6",
      "logoURI": "https://cdn.coinranking.com/fLjFmBf-k/rbal.png",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe5a6739b21Fe84847daDE7152Ae6C68895dFdb38"
      }
    },
    {
      "chainId": 137,
      "name": "CHERRY",
      "symbol": "CHERRY",
      "decimals": 4,
      "address": "0xbE32718f77Aa63d95658Ddd8EF472039c71Eb704",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4ecb692b0fedecd7b486b4c99044392784877e8c"
      }
    },
    {
      "chainId": 137,
      "name": "Axioms",
      "symbol": "AXI",
      "decimals": 18,
      "address": "0x01fA5b3A5d77BcF705DD505bBcBb34bce310E7FE",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x73ee6d7e6b203125add89320e9f343d65ec7c39a"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/axi.svg"
    },
    {
      "chainId": 137,
      "name": "Deflect",
      "symbol": "DEFLCT",
      "decimals": 9,
      "address": "0x80E3E8f5D06CbeF73c12e6bdc2f63563fE57f866",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3aa5f749d4a6bcf67dac1091ceb69d1f5d86fa53"
      }
    },
    {
      "chainId": 137,
      "name": "Devcash",
      "symbol": "DEV",
      "decimals": 8,
      "address": "0xE951e4C7B0B91447C1a0A46BFb46630682A3f229",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0fca8fdb0fb115a33baadec6e7a141ffc1bc7d5a"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dev.svg"
    },
    {
      "chainId": 137,
      "name": "Swirge",
      "symbol": "SWG",
      "decimals": 18,
      "address": "0x043A3Aa319B563aC25D4E342d32bFfb51298DB7b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x92eF4FFBfe0Df030837b65d7FcCFE1ABd6549579"
      }
    },
    {
      "chainId": 137,
      "name": "SPRING Token",
      "symbol": "SPRING",
      "decimals": 18,
      "address": "0xE0011abAb503659C48a07d44561A7eF077b1AD56",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfb0bdc444c8ae7e9b5beea5e4d1e8de93879e487"
      }
    },
    {
      "chainId": 137,
      "name": "Elementeum",
      "symbol": "ELET",
      "decimals": 18,
      "address": "0x07738Eb4ce8932CA961c815Cb12C9d4ab5Bd0Da4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6c37Bf4f042712C978A73e3fd56D1F5738dD7C43"
      }
    },
    {
      "chainId": 137,
      "name": "THERA",
      "symbol": "THERA",
      "decimals": 18,
      "address": "0xe2D460a2F928CbC4Cf3268f8d95dbd89c21202c4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xffb3518f60A967839e5bA5B2908C5D6840632c0f"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/thera.svg"
    },
    {
      "chainId": 137,
      "name": "Pepedex",
      "symbol": "PPDEX",
      "decimals": 18,
      "address": "0x127984b5E6d5c59f81DACc9F1C8b3Bdc8494572e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf1f508c7c9f0d1b15a76fba564eef2d956220cf7"
      }
    },
    {
      "chainId": 137,
      "name": "JUICE",
      "symbol": "JUICE",
      "decimals": 6,
      "address": "0x28E96FFe75CdCc97044585b866BD02bD79C12dc0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x38e2FB9935952b00673cCB63daB105c9d698784E"
      }
    },
    {
      "chainId": 137,
      "name": "Koin",
      "symbol": "XKO",
      "decimals": 18,
      "address": "0x7B276A55987E3020026Bb098F15E968313Bd1aF2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe93714F621c0481DF8685b956800568b364F138f"
      }
    },
    {
      "chainId": 137,
      "name": "Digital Coin",
      "symbol": "DCB",
      "decimals": 18,
      "address": "0x1f71bC1F88f09EcE59E844dEA4FCc4fA73934117",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2d8e1dd483008c6843b9cf644bad7fb25bf52b84"
      }
    },
    {
      "chainId": 137,
      "name": "StableDark",
      "symbol": "SDARK",
      "decimals": 18,
      "address": "0x12919A30447fF59947740507362A05B8BEA9A6e7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x26c7D50B9f372e1FA9cA078CC054298f36D68B17"
      }
    },
    {
      "chainId": 137,
      "name": "decentral.games",
      "symbol": "$DG",
      "decimals": 18,
      "address": "0x2a93172c8DCCbfBC60a39d56183B7279a2F647b4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xee06a81a695750e71a662b51066f2c74cf4478a0"
      }
    },
    {
      "chainId": 137,
      "name": "Drakoin",
      "symbol": "DRK",
      "decimals": 18,
      "address": "0xB6509Cbd9e2D1CeC787a7357eB1578B86a0c702d",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2369686fc9fb6e1fdc46541891568c2f341906ef"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/drk.svg"
    },
    {
      "chainId": 137,
      "name": "Autonio",
      "symbol": "NIOX",
      "decimals": 4,
      "address": "0xad684e79CE4b6D464f2Ff7c3FD51646892e24b96",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc813EA5e3b48BEbeedb796ab42A30C5599b01740"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/niox.svg"
    },
    {
      "chainId": 137,
      "name": "HEX",
      "symbol": "HEX",
      "decimals": 8,
      "address": "0x23D29D30e35C5e8D321e1dc9A8a61BFD846D4C5C",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/hex.svg"
    },
    {
      "chainId": 137,
      "name": "DarkPool",
      "symbol": "pDARK",
      "decimals": 18,
      "address": "0x066028738CE85aa1946b9D05B1d0F06F3d0Fdb7A",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf62dC91f8f43b241840228B3a857FF9d6522660C"
      }
    },
    {
      "chainId": 137,
      "name": "Opu Coin",
      "symbol": "OPU",
      "decimals": 18,
      "address": "0x7ff2FC33E161E3b1C6511B934F0209D304267857",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x65e3c4a750a2e7cc7cce86d01587bbcbbe99042e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/opu.svg"
    },
    {
      "chainId": 137,
      "name": "Brand Tokens",
      "symbol": "BRND",
      "decimals": 18,
      "address": "0x1683767B3e3a40a61D9faa94CF86E5788F0a834a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x41A6bFd5FC91B9822774d549674Cc90512b3a54A"
      }
    },
    {
      "chainId": 137,
      "name": "ERNE finance",
      "symbol": "ERNE",
      "decimals": 18,
      "address": "0x52aF6aA779F36a53De44ae1969756a506b2577b5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xCf978BE45f74ab6f4dA0E68B24624657F40A3d9B"
      }
    },
    {
      "chainId": 137,
      "name": "Friendz Coin ",
      "symbol": "FDZ",
      "decimals": 18,
      "address": "0x7D836dA4Dd2aFda1d09992980569E22597F09981",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x23352036e911a22cfc692b5e2e196692658aded9"
      }
    },
    {
      "chainId": 137,
      "name": "MCDEX Token",
      "symbol": "MCB",
      "decimals": 18,
      "address": "0xCf46c5Bf01deAE14a272f89A7b6c9E96A48f5546",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4e352cf164e64adcbad318c3a1e222e9eba4ce42"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mcb.svg"
    },
    {
      "chainId": 137,
      "name": "Galactican Founders Token",
      "symbol": "GFT",
      "decimals": 0,
      "address": "0xc10aAcff41Af60BfCfaba3A03099c4AEdB113E15",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xF8dd0D8e2b646589E2273803c4fEF8a7Da8D6AdB"
      }
    },
    {
      "chainId": 137,
      "name": "BlazarBits",
      "symbol": "BzB",
      "decimals": 18,
      "address": "0x462D8d82C2B2D2DDabf7f8a93928De09d47A5807",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5cd763f24e849e334cc8ed78d0e09970988cf4ad"
      }
    },
    {
      "chainId": 137,
      "name": "IG Orb",
      "symbol": "ORB",
      "decimals": 2,
      "address": "0x5a2fdF906ada9353eBe496Fa5D351B39f8908d19",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xa7b12e22f318762f76a9a179c86babcb02e62734"
      }
    },
    {
      "chainId": 137,
      "name": "IG Gold",
      "symbol": "IGG",
      "decimals": 6,
      "address": "0xe6FC6C7CB6d2c31b359A49A33eF08aB87F4dE7CE",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8ffe40a3d0f80c0ce6b203d5cdc1a6a86d9acaea"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/igg.svg"
    },
    {
      "chainId": 137,
      "name": "DarkToken",
      "symbol": "DARK",
      "decimals": 18,
      "address": "0x3F99009295dEDd768f7284AFE07cDfED70c3E3AC",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3108ccFd96816F9E663baA0E8c5951D229E8C6da"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dark.svg"
    },
    {
      "chainId": 137,
      "name": "TrumpBux",
      "symbol": "TBUX",
      "decimals": 18,
      "address": "0xc576E8BB0017AFfC2Cb245609E304E57401ee78a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9d29bD441E9DA3EfF48568Aea1348383544547e7"
      }
    },
    {
      "chainId": 137,
      "name": "Sapien Network",
      "symbol": "SPN",
      "decimals": 6,
      "address": "0x3Cd92Be3Be24daf6D03c46863f868F82D74905bA",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x20F7A3DdF244dc9299975b4Da1C39F8D5D75f05A"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/spn.svg"
    },
    {
      "chainId": 137,
      "name": "KIWI Token",
      "symbol": "KIWI",
      "decimals": 8,
      "address": "0x578360AdF0BbB2F10ec9cEC7EF89Ef495511ED5f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2BF91c18Cd4AE9C2f2858ef9FE518180F7B5096D"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/kiwi.svg"
    },
    {
      "chainId": 137,
      "name": "0xBitcoin Token",
      "symbol": "0xBTC",
      "decimals": 8,
      "address": "0x71B821aa52a49F32EEd535fCA6Eb5aa130085978",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xB6eD7644C69416d67B522e20bC294A9a9B405B31"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/0xbtc.svg"
    },
    {
      "chainId": 137,
      "name": "Decentraland MANA",
      "symbol": "MANA",
      "decimals": 18,
      "address": "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/mana.svg"
    },
    {
      "chainId": 137,
      "name": "yearn.finance",
      "symbol": "YFI",
      "decimals": 18,
      "address": "0xDA537104D6A5edd53c6fBba9A898708E465260b6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/yfi.svg"
    },
    {
      "chainId": 137,
      "name": "EthLend Token",
      "symbol": "LEND",
      "decimals": 18,
      "address": "0x313d009888329C9d1cf4f75CA3f32566335bd604",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/lend.svg"
    },
    {
      "chainId": 137,
      "name": "Compound",
      "symbol": "COMP",
      "decimals": 18,
      "address": "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc00e94Cb662C3520282E6f5717214004A7f26888"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/comp.svg"
    },
    {
      "chainId": 137,
      "name": "Dummy ERC20",
      "symbol": "DERC20",
      "decimals": 18,
      "address": "0xeFfdCB49C2D0EF813764B709Ca3c6fe71f230E3e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf2F3bD7Ca5746C5fac518f67D1BE87805a2Be82A"
      }
    },
    {
      "chainId": 137,
      "name": "Ether Stone",
      "symbol": "ETHS",
      "decimals": 18,
      "address": "0x5Adf17a97Ef5DB18ad4cFC4B3F05128b922E0a58",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x11a207b158ddd17027e2dd5b1261a0a8012f6550"
      }
    },
    {
      "chainId": 137,
      "name": "BeatzCoin",
      "symbol": "BTZC",
      "decimals": 6,
      "address": "0x81a9d2ecEd101479FaD8c9663f4A997fbE5c83cA",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x80640db285Cc63496bdd8c1980A7f4526A4D477F"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/btzc.svg"
    },
    {
      "chainId": 137,
      "name": "SHIP20T5",
      "symbol": "SHIP20T5",
      "decimals": 18,
      "address": "0x02dAEFc2E8AAD089d094579499508398E3057966",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa63a5122E849d2Fbff88Fc44d3C7EAE9196F1293"
      }
    },
    {
      "chainId": 137,
      "name": "One For All",
      "symbol": "O4A",
      "decimals": 36,
      "address": "0x30810b6e871f333ea6935b21871cde070921bc38",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xce8e76aa57fa4d9f0db1c05c232fa4cf071aebba"
      }
    },
    {
      "chainId": 137,
      "name": "Castello Coin",
      "symbol": "CAST",
      "decimals": 8,
      "address": "0xa554e5a79caebfeae867c66a56a951338f748c8a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3fab0bbaa03bceaf7c49e2b12877db0142be65fc"
      }
    },
    {
      "chainId": 137,
      "name": "EVER META",
      "symbol": "EVEM",
      "decimals": 18,
      "address": "0x62a3c5d6346a842d24053d871ebe908a78cb46ab",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xeefa9e2e5be13b6531eb45ba47917017b5affffb"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped STOR",
      "symbol": "WSTOR",
      "decimals": 12,
      "address": "0x5d1245ad0e4f118186042040bb092aba59be4167",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe51da1683f21a844269d0d23135f04c506ac8ae1"
      }
    },
    {
      "chainId": 137,
      "name": "WGMI",
      "symbol": "WGMI",
      "decimals": 18,
      "address": "0x1b9f699c6cb0aa6079f326a11d3c960680eab5d9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x20f6a313cb250062331fe70b9567e3ee5f01888b"
      }
    },
    {
      "chainId": 137,
      "name": "TOMI",
      "symbol": "TOMI",
      "decimals": 18,
      "address": "0xcd966b72cff52dc349089b6b6f5865b5743b4e08",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x533e90705c0d1a364eb63d620ea16c8478179894"
      }
    },
    {
      "chainId": 137,
      "name": "Menlo One",
      "symbol": "ONE",
      "decimals": 18,
      "address": "0x6dc1ed4402a9db4956e077876e72d3ac7ba7f47f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4d807509aece24c0fa5a102b6a3b059ec6e14392"
      }
    },
    {
      "chainId": 137,
      "name": "Streamr (old)",
      "symbol": "XDATA",
      "decimals": 18,
      "address": "0xd668c5e8a4a837ca95be5e3a8d5bd62f5985390d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x0cf0ee63788a0849fe5297f3407f701e122cc023"
      }
    },
    {
      "chainId": 137,
      "name": "Fei USD",
      "symbol": "FEI",
      "decimals": 18,
      "address": "0xc7031408c7978da9aca03308cd104cb54e7a2eb3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x956f47f50a910163d8bf957cf5846d573e7f87ca"
      }
    },
    {
      "chainId": 137,
      "name": "Liquid staked Ether 2.0",
      "symbol": "stETH",
      "decimals": 18,
      "address": "0x4c6b65fe93fc9daf413498b88195fafff36dd960",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"
      }
    },
    {
      "chainId": 137,
      "name": "Tidal Token",
      "symbol": "TIDAL",
      "decimals": 18,
      "address": "0xb41ec2c036f8a42da384dde6ada79884f8b84b26",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/tidal.svg"
    },
    {
      "chainId": 137,
      "name": "DC Token",
      "symbol": "DC",
      "decimals": 18,
      "address": "0x3ebeb3f48f3a16b6a1e1e19b82c09bc8aae5d983",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb3fb97019e9f69d0fd2e76fbd113ec6960a5389a"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Celo USD",
      "symbol": "wCUSD",
      "decimals": 18,
      "address": "0x9fa22bda93a0ecef300928c0358003b63647c5d8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xad3e3fc59dff318beceaab7d00eb4f68b1ecf195"
      }
    },
    {
      "chainId": 137,
      "name": "JulSwap on ETH",
      "symbol": "JulD",
      "decimals": 18,
      "address": "0x049f12f5a27132d06de128d48a914f6d82d33d23",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x93effd08e3e5a4b1b40c26137e63876b2501ffa4"
      }
    },
    {
      "chainId": 137,
      "name": "JUL",
      "symbol": "JUL",
      "decimals": 18,
      "address": "0x03bc3f7affbe592e3f3502cf818aafb93b12334c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5580ab97f226c324c671746a1787524aef42e415"
      }
    },
    {
      "chainId": 137,
      "name": "OnX Ethereum Stablecoin",
      "symbol": "onETH",
      "decimals": 18,
      "address": "0x057097bd91aa32aa10f5a42ba49637480963dc31",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc1330acbbce97cb9695b7ee161c0f95b875a8b0f"
      }
    },
    {
      "chainId": 137,
      "name": "QuadrantProtocol",
      "symbol": "eQUAD",
      "decimals": 18,
      "address": "0xdab625853c2b35d0a9c6bd8e5a097a664ef4ccfb",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc28e931814725bbeb9e670676fabbcb694fe7df2"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/equad.svg"
    },
    {
      "chainId": 137,
      "name": "Upfiring",
      "symbol": "UFR",
      "decimals": 18,
      "address": "0x741b18e6db7a7dc3e686171b99387edc8dac1e32",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xea097a2b1db00627b2fa17460ad260c016016977"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ufr.svg"
    },
    {
      "chainId": 137,
      "name": "Polkamon",
      "symbol": "PMON",
      "decimals": 18,
      "address": "0xc8ed802a2cb6240b05b8c310137086bf4bc11b55",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1796ae0b0fa4862485106a0de9b654efe301d0b2"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pmon.svg"
    },
    {
      "chainId": 137,
      "name": "Bidao",
      "symbol": "BID",
      "decimals": 18,
      "address": "0xd7671bdce849eabef4da313ccc80e689151ee811",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x25e1474170c4c0aa64fa98123bdc8db49d7802fa"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/bid.svg"
    },
    {
      "chainId": 137,
      "name": "UNION Protocol Governance Token",
      "symbol": "UNN",
      "decimals": 18,
      "address": "0x67480287cb3715d1d9429b38772c71d6e94c16da",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x226f7b842e0f0120b7e194d05432b3fd14773a9d"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/unn.svg"
    },
    {
      "chainId": 137,
      "name": "aleph.im v2",
      "symbol": "ALEPH",
      "decimals": 18,
      "address": "0x82dcf1df86ada26b2dcd9ba6334cedb8c2448e9e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x27702a26126e0b3702af63ee09ac4d1a084ef628"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/aleph.svg"
    },
    {
      "chainId": 137,
      "name": "Panvala pan",
      "symbol": "PAN",
      "decimals": 18,
      "address": "0xe9949106f0777e7a2e36df891d59583ac94dc896",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xd56dac73a4d6766464b38ec6d91eb45ce7457c44"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/pan.svg"
    },
    {
      "chainId": 137,
      "name": "CheerMedal",
      "symbol": "CHML",
      "decimals": 18,
      "address": "0x3c711f725272b05336b44c5c9dccb9fe2ff42ef4",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfca0e33c4d9a7360a1caf517960be202c7693319"
      }
    },
    {
      "chainId": 137,
      "name": "Concentrated Voting Power",
      "symbol": "CVP",
      "decimals": 18,
      "address": "0x530d954549f3efa00799784bc7fe0c3fed76da19",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/cvp.svg"
    },
    {
      "chainId": 137,
      "name": "EASYX",
      "symbol": "EASYX",
      "decimals": 18,
      "address": "0xd4c1e34187edc72fb6ebf3c4011dee50cabf89c2",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x346e2c8925d3bdc406181340eb7485d646055744"
      }
    },
    {
      "chainId": 137,
      "name": "DUST Token",
      "symbol": "DUST",
      "decimals": 18,
      "address": "0x167ef3603c0b1d52be9a96e3af01aa33097a6ce9",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe2e109f1b4eaa8915655fe8fdefc112a34acc5f0"
      }
    },
    {
      "chainId": 137,
      "name": "Scalara NFT Index",
      "symbol": "NFTI",
      "decimals": 18,
      "address": "0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x525ef76138bf76118d786dbedeae5f87aabf4a81"
      }
    },
    {
      "chainId": 137,
      "name": "Definitex",
      "symbol": "DFX",
      "decimals": 18,
      "address": "0x142107a65d5c29c35129100bf386ba54f67a8668",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf1f5de69c9c8d9be8a7b01773cc1166d4ec6ede2"
      }
    },
    {
      "chainId": 137,
      "name": "Amplify Token",
      "symbol": "AMPT",
      "decimals": 18,
      "address": "0x4ed92a1de77ee2638a2a42be48dd4720b3a2734a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3f17cfad23c2014c5a32722557df87dff46819da"
      }
    },
    {
      "chainId": 137,
      "name": "fees.wtf",
      "symbol": "WTF",
      "decimals": 18,
      "address": "0x1b8acaac11250634028cf1735ca958fd46aaf320",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa68dd8cb83097765263adad881af6eed479c4a33"
      }
    },
    {
      "chainId": 137,
      "name": "WILD Token",
      "symbol": "WILD",
      "decimals": 18,
      "address": "0x4c1705a7ddaa68fe187363487898705e040dd77e",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd3c00772b24d997a812249ca637a921e81357701"
      }
    },
    {
      "chainId": 137,
      "name": "Herocoin",
      "symbol": "PLAY",
      "decimals": 18,
      "address": "0x672255e73e9fcb8d8971b6e2622057baa84b5afe",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe477292f1b3268687a29376116b0ed27a9c76170"
      }
    },
    {
      "chainId": 137,
      "name": "PYR Token",
      "symbol": "PYR",
      "decimals": 18,
      "address": "0x430ef9263e76dae63c84292c3409d61c598e9682",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x430ef9263e76dae63c84292c3409d61c598e9682"
      }
    },
    {
      "chainId": 137,
      "name": "Boba Token",
      "symbol": "BOBA",
      "decimals": 18,
      "address": "0xa4b2b20b2c73c7046ed19ac6bff5e5285c58f20a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x42bbfa2e77757c645eeaad1655e0911a7553efbc"
      }
    },
    {
      "chainId": 137,
      "name": "Rocket Pool ETH",
      "symbol": "rETH",
      "decimals": 18,
      "address": "0x0266f4f08d82372cf0fcbccc0ff74309089c74d1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xae78736cd615f374d3085123a210448e74fc6393"
      }
    },
    {
      "chainId": 137,
      "name": "humanDAO",
      "symbol": "HDAO",
      "decimals": 18,
      "address": "0x72928d5436ff65e57f72d5566dcd3baedc649a88",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xdac657ffd44a3b9d8aba8749830bf14beb66ff2d"
      }
    },
    {
      "chainId": 137,
      "name": "Immutable X",
      "symbol": "IMX",
      "decimals": 18,
      "address": "0x183070c90b34a63292cc908ce1b263cb56d49a7f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff"
      }
    },
    {
      "chainId": 137,
      "name": "Fintropy",
      "symbol": "FINT",
      "decimals": 18,
      "address": "0xd61143652af94f570c7d9429356662dd859ca6ec",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd61143652af94f570c7d9429356662dd859ca6ec"
      }
    },
    {
      "chainId": 137,
      "name": "Streamr",
      "symbol": "DATA",
      "decimals": 18,
      "address": "0x3a9a81d576d83ff21f26f325066054540720fc34",
      "logoURI": "https://raw.githubusercontent.com/streamr-dev/design-assets/main/Svg/Marks%20and%20Symbols/Token%20symbols/%24DATA%20new%20token%20symbol.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x8f693ca8d21b157107184d29d398a8d082b38b76"
      }
    },
    {
      "chainId": 137,
      "name": "DATA Economy Index",
      "symbol": "DATA",
      "decimals": 18,
      "address": "0x1d607faa0a51518a7728580c238d912747e71f7a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x33d63ba1e57e54779f7ddaeaa7109349344cf5f1"
      }
    },
    {
      "chainId": 137,
      "name": "Float Bank",
      "symbol": "BANK",
      "decimals": 18,
      "address": "0xfc2e967bf55f545d656de5c40618c1ae80eb6edf",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x24a6a37576377f63f194caa5f518a60f45b42921"
      }
    },
    {
      "chainId": 137,
      "name": "Propy",
      "symbol": "PRO",
      "decimals": 8,
      "address": "0x82ffdfd1d8699e8886a4e77cefa9dd9710a7fefd",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x226bb599a12c826476e3a771454697ea52e9e220"
      }
    },
    {
      "chainId": 137,
      "name": "BONE SHIBASWAP",
      "symbol": "BONE",
      "decimals": 18,
      "address": "0xe15c40cae674a35dcd0108e66383e6f483533b82",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9813037ee2218799597d83d4a5b6f3b6778218d9"
      }
    },
    {
      "chainId": 137,
      "name": "Morpheus.Network",
      "symbol": "MNW",
      "decimals": 18,
      "address": "0x3c59798620e5fec0ae6df1a19c6454094572ab92",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd3e4ba569045546d09cf021ecc5dfe42b1d7f6e4"
      }
    },
    {
      "chainId": 137,
      "name": "Internet of Energy Network",
      "symbol": "IOEN",
      "decimals": 18,
      "address": "0xd0e9c8f5fae381459cf07ec506c1d2896e8b5df6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1e4e46b7bf03ece908c88ff7cc4975560010893a"
      }
    },
    {
      "chainId": 137,
      "name": "TAGBOND",
      "symbol": "TAG",
      "decimals": 18,
      "address": "0x6a284bf3e568aea2c28010f061a85e107efdb6b6",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcc4ae94372da236e9b113132e0c46c68704246b9"
      }
    },
    {
      "chainId": 137,
      "name": "Smooth Love Potion",
      "symbol": "SLP",
      "decimals": 0,
      "address": "0x0c7304fbaf2a320a1c50c46fe03752722f729946",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25"
      }
    },
    {
      "chainId": 137,
      "name": "BitcashPay",
      "symbol": "BCP",
      "decimals": 8,
      "address": "0x5bc90f0d5fa1b716fb5edfda885a44bfc41b5594",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe047705117eb07e712c3d684f5b18e74577e83ac"
      }
    },
    {
      "chainId": 137,
      "name": "DragonBite",
      "symbol": "BITE",
      "decimals": 18,
      "address": "0x280724409b288de06c6d66c05965d3d456e2283a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x4eed0fa8de12d5a86517f214c2f11586ba2ed88d"
      }
    },
    {
      "chainId": 137,
      "name": "PIKA",
      "symbol": "PIKA",
      "decimals": 18,
      "address": "0xffb89d7637cf4860884ed48b57ae5562bf64e10f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x60f5672a271c7e39e787427a18353ba59a4a3578"
      }
    },
    {
      "chainId": 137,
      "name": "StaFi",
      "symbol": "rATOM",
      "decimals": 18,
      "address": "0xe088651125864a2fdfe806257a9a7e75b53812ba",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd01cb3d113a864763dd3977fe1e725860013b0ed"
      }
    },
    {
      "chainId": 137,
      "name": "StaFi",
      "symbol": "rETH",
      "decimals": 18,
      "address": "0x5736df66b4f8401d639ffa915a46b4c548c09ac1",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593"
      }
    },
    {
      "chainId": 137,
      "name": "MoonieNFT Token",
      "symbol": "MNY",
      "decimals": 18,
      "address": "0xa6f7645ed967faf708a614a2fca8d4790138586f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa6f7645ed967faf708a614a2fca8d4790138586f"
      }
    },
    {
      "chainId": 137,
      "name": "StaFi",
      "symbol": "rFIS",
      "decimals": 18,
      "address": "0xa3983552d08ab820002a38baf51c5f3777c0d287",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xc82eb6dea0c93edb8b697b89ad1b13d19469d635"
      }
    },
    {
      "chainId": 137,
      "name": "Bondly",
      "symbol": "BONDLY",
      "decimals": 18,
      "address": "0x64ca1571d1476b7a21c5aaf9f1a750a193a103c0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x91dfbee3965baaee32784c2d546b7a0c62f268c9"
      }
    },
    {
      "chainId": 137,
      "name": "Standard",
      "symbol": "STND",
      "decimals": 18,
      "address": "0x08be454de533509e8832b257116c5506e55b0b64",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9040e237c3bf18347bb00957dc22167d0f2b999d"
      }
    },
    {
      "chainId": 137,
      "name": "Wilder",
      "symbol": "WILD",
      "decimals": 18,
      "address": "0xf1a4015ae4d16ff64e41535fe973a1796c0203d6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2a3bff78b79a009976eea096a51a948a3dc00e34"
      }
    },
    {
      "chainId": 137,
      "name": "LMAO Token",
      "symbol": "LMAO",
      "decimals": 18,
      "address": "0xda6f81c2426131337b0cf73768b94c2004390b0e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x69ef45cf64d8360279daa974aabadb42f0683a6c"
      }
    },
    {
      "chainId": 137,
      "name": "TitanSwap",
      "symbol": "Titan",
      "decimals": 18,
      "address": "0x79ddc6ca9b76aa14dcfbd02bf75db588f5486df8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3a8cccb969a61532d1e6005e2ce12c200caece87"
      }
    },
    {
      "chainId": 137,
      "name": "StaFi",
      "symbol": "FIS",
      "decimals": 18,
      "address": "0x7a7b94f18ef6ad056cda648588181cda84800f94",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d"
      }
    },
    {
      "chainId": 137,
      "name": "PAID Network",
      "symbol": "PAID",
      "decimals": 18,
      "address": "0xeaef6caf6d5894edb2d4ea7ec11ec4ab655f1cbf",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787"
      }
    },
    {
      "chainId": 137,
      "name": "Kyber Network Crystal",
      "symbol": "KNC",
      "decimals": 18,
      "address": "0x324b28d6565f784d596422b0f2e5ab6e9cfa1dc7",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200"
      }
    },
    {
      "chainId": 137,
      "name": "UniCrypt",
      "symbol": "UNC",
      "decimals": 18,
      "address": "0xfa2328d170d9476feafe1a6180abdb61a13a9494",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf29e46887ffae92f1ff87dfe39713875da541373"
      }
    },
    {
      "chainId": 137,
      "name": "Bankless Token",
      "symbol": "BANK",
      "decimals": 18,
      "address": "0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198"
      }
    },
    {
      "chainId": 137,
      "name": "NFT INDEX",
      "symbol": "NFTI",
      "decimals": 18,
      "address": "0xd7a2dc75ea2057b3949f9e1dbdf3480203dbe26a",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c"
      }
    },
    {
      "chainId": 137,
      "name": "Bone",
      "symbol": "Bone",
      "decimals": 18,
      "address": "0xc20dde5a129b01b5a16d315fb18bdbd21a59a4a6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x5c84bc60a796534bfec3439af0e6db616a966335"
      }
    },
    {
      "chainId": 137,
      "name": "Axie Infinity Shard",
      "symbol": "AXS",
      "decimals": 18,
      "address": "0x61bdd9c7d4df4bf47a4508c0c8245505f2af5b7b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b"
      }
    },
    {
      "chainId": 137,
      "name": "SingularityNET Token",
      "symbol": "AGIX",
      "decimals": 8,
      "address": "0x190eb8a183d22a4bdf278c6791b152228857c033",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x5b7533812759b45c2b44c19e320ba2cd2681b542"
      }
    },
    {
      "chainId": 137,
      "name": "PAR Stablecoin",
      "symbol": "PAR",
      "decimals": 18,
      "address": "0x7b367a058f370c0057762280547d0b974cf3ac10",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x68037790a0229e9ce6eaa8a99ea92964106c4703"
      }
    },
    {
      "chainId": 137,
      "name": "Stone Token",
      "symbol": "STN",
      "decimals": 18,
      "address": "0xfb8a07e99450d1dc566da18a8f0e630addefdd3e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe63d6b308bce0f6193aec6b7e6eba005f41e36ab"
      }
    },
    {
      "chainId": 137,
      "name": "FORCE",
      "symbol": "FORCE",
      "decimals": 18,
      "address": "0x60c4f9718b445df881e6c00921afb2a8de4b1873",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6807d7f7df53b7739f6438eabd40ab8c262c0aa8"
      }
    },
    {
      "chainId": 137,
      "name": "Impermax",
      "symbol": "IMX",
      "decimals": 18,
      "address": "0x60bb3d364b765c497c8ce50ae0ae3f0882c5bd05",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x7b35ce522cb72e4077baeb96cb923a5529764a00"
      }
    },
    {
      "chainId": 137,
      "name": "DFX Token",
      "symbol": "DFX",
      "decimals": 18,
      "address": "0xe7804d91dfcde7f776c90043e03eaa6df87e6395",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x888888435fde8e7d4c54cab67f206e4199454c60"
      }
    },
    {
      "chainId": 137,
      "name": "BoringDAO DOGE",
      "symbol": "oDOGE",
      "decimals": 18,
      "address": "0x5a8adda3140d961cd069cbb7b400d7834dd558ac",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x9c306a78b1a904e83115c05ac67c1ef07c653651"
      }
    },
    {
      "chainId": 137,
      "name": "Memecoin",
      "symbol": "MEM",
      "decimals": 18,
      "address": "0x42dbbd5ae373fea2fc320f62d44c058522bb3758",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x42dbbd5ae373fea2fc320f62d44c058522bb3758"
      }
    },
    {
      "chainId": 137,
      "name": "BoringDAO",
      "symbol": "BORING",
      "decimals": 18,
      "address": "0xff88434e29d1e2333ad6baa08d358b436196da6b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbc19712feb3a26080ebf6f2f7849b417fdd792ca"
      }
    },
    {
      "chainId": 137,
      "name": "Kyber Network Crystal v2",
      "symbol": "KNC",
      "decimals": 18,
      "address": "0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202"
      }
    },
    {
      "chainId": 137,
      "name": "PlayDapp Token",
      "symbol": "PLA",
      "decimals": 18,
      "address": "0x8765f05adce126d70bcdf1b0a48db573316662eb",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3a4f40631a4f906c2bad353ed06de7a5d3fcb430"
      }
    },
    {
      "chainId": 137,
      "name": "88mph.app",
      "symbol": "MPH",
      "decimals": 18,
      "address": "0x654f82124a885af03d2da6b53c004343920ae189",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8888801af4d980682e47f1a9036e589479e835c5"
      }
    },
    {
      "chainId": 137,
      "name": "Litentry",
      "symbol": "LIT",
      "decimals": 18,
      "address": "0xe6e320b7bb22018d6ca1f4d8cea1365ef5d25ced",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xb59490ab09a0f526cc7305822ac65f2ab12f9723"
      }
    },
    {
      "chainId": 137,
      "name": "B21 Token",
      "symbol": "B21",
      "decimals": 18,
      "address": "0xad356bf748b9c320a5ddd4baaffa3f323eeb5546",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6faa826af0568d1866fca570da79b318ef114dab"
      }
    },
    {
      "chainId": 137,
      "name": "PieDAO Balanced Crypto Pie",
      "symbol": "BCP",
      "decimals": 18,
      "address": "0x76e3f52ad78c367f23cfa08febf122053ee4f781",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe4f726adc8e89c6a6017f01eada77865db22da14"
      }
    },
    {
      "chainId": 137,
      "name": "Aave Interest bearing DAI",
      "symbol": "aDAI",
      "decimals": 18,
      "address": "0x6a9d92f366f01b1980c4e75f0d9fa54db658105d",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d"
      }
    },
    {
      "chainId": 137,
      "name": "Aave interest bearing DAI",
      "symbol": "aDAI",
      "decimals": 18,
      "address": "0x329434fe066ac71d5fb93489f955a6959658097b",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x028171bca77440897b824ca71d1c56cac55b68a3"
      }
    },
    {
      "chainId": 137,
      "name": "LITonium",
      "symbol": "LIT",
      "decimals": 2,
      "address": "0x7a46e5c2a19e371f23416fdf5930255589b95d3f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2e3c062e16c1a3a04ddc5003c62e294305d83684"
      }
    },
    {
      "chainId": 137,
      "name": "Force DAO",
      "symbol": "FORCE",
      "decimals": 18,
      "address": "0xdf4d2226c810976c582a8111d831fa5fc543f7e5",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2c31b10ca416b82cec4c5e93c615ca851213d48d"
      }
    },
    {
      "chainId": 137,
      "name": "Morpher",
      "symbol": "MPH",
      "decimals": 18,
      "address": "0xeba044af66a6d959c12e91fccd74ea1c3ca07578",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x6369c3dadfc00054a42ba8b2c09c48131dd4aa38"
      }
    },
    {
      "chainId": 137,
      "name": "The Crypto Prophecies",
      "symbol": "TCP",
      "decimals": 18,
      "address": "0x032f85b8fbf8540a92b986d953e4c3a61c76d39e",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x06576eb3b212d605b797dc15523d9dc9f4f66db4"
      }
    },
    {
      "chainId": 137,
      "name": "MUNCH Token",
      "symbol": "MUNCH",
      "decimals": 9,
      "address": "0x1002068d890ac351143bc5ae70711175e75f1ea8",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x944eee930933be5e23b690c8589021ec8619a301"
      }
    },
    {
      "chainId": 137,
      "name": "IdleUSDC v4 [Risk adjusted]",
      "symbol": "idleUSDCSafe",
      "decimals": 18,
      "address": "0x73e86097021714509d3f193dfd0bbbc57b3cdcc6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3391bc034f2935ef0e1e41619445f998b2680d35"
      }
    },
    {
      "chainId": 137,
      "name": "DFYN Token",
      "symbol": "DFYN",
      "decimals": 18,
      "address": "0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x9695e0114e12c0d3a3636fab5a18e6b737529023"
      }
    },
    {
      "chainId": 137,
      "name": "onG",
      "symbol": "ONG",
      "decimals": 18,
      "address": "0xb6f10be9201fb110b3aa275267a234e84ade8e95",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xd341d1680eeee3255b8c4c75bcce7eb57f144dae"
      }
    },
    {
      "chainId": 137,
      "name": "$Ankr ETH2 Reward Bearing Certificate",
      "symbol": "aETHc",
      "decimals": 18,
      "address": "0xc4e82ba0fe6763cbe5e9cbca0ba7cbd6f91c6018",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xe95a203b1a91a908f9b9ce46459d101078c2c3cb"
      }
    },
    {
      "chainId": 137,
      "name": "BarnBridge Governance Token",
      "symbol": "BOND",
      "decimals": 18,
      "address": "0xa041544fe2be56cce31ebb69102b965e06aace80",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0391d2021f89dc339f60fff84546ea23e337750f"
      }
    },
    {
      "chainId": 137,
      "name": "Showcase Token",
      "symbol": "SHO",
      "decimals": 18,
      "address": "0x9e01e0a928588ae6e669b8d1f0f1fa4ab976f617",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcc0014ccb39f6e86b1be0f17859a783b6722722f"
      }
    },
    {
      "chainId": 137,
      "name": "Strudel Finance",
      "symbol": "$TRDL",
      "decimals": 18,
      "address": "0xf89887862538ce8efbdbadd5d483ae4a09dd9688",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x297d33e17e61c2ddd812389c2105193f8348188a"
      }
    },
    {
      "chainId": 137,
      "name": "Metaverse NFT Index",
      "symbol": "PLAY",
      "decimals": 18,
      "address": "0xdd24aa9166dcdf0b37d0fca17d6ea87748771dcc",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x33e18a092a93ff21ad04746c7da12e35d34dc7c4"
      }
    },
    {
      "chainId": 137,
      "name": "BoringDAO",
      "symbol": "BOR",
      "decimals": 18,
      "address": "0x7d8c139d5bfbafdfd1d2d0284e7fc862babe4137",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x3c9d6c1c73b31c837832c72e04d3152f051fc1a9"
      }
    },
    {
      "chainId": 137,
      "name": "Yield",
      "symbol": "YLD",
      "decimals": 18,
      "address": "0xb718412ef9c238c3a90079f21b57808ff8c18f1c",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xdcb01cc464238396e213a6fdd933e36796eaff9f"
      }
    },
    {
      "chainId": 137,
      "name": "Dentacoin",
      "symbol": "٨",
      "decimals": 0,
      "address": "0xd9e658caed24fb0486e92f0f1702f77a712790da",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/dcn.svg"
    },
    {
      "chainId": 137,
      "name": "Generation of Yield",
      "symbol": "YGY",
      "decimals": 6,
      "address": "0x266af96fece1c3dd4b8a0a6de9ae7a3bd5408ee9",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x11b0a8c0fa626627601ed518c3538a39d92d609e"
      }
    },
    {
      "chainId": 137,
      "name": "UniCrypt",
      "symbol": "UNCX",
      "decimals": 18,
      "address": "0x9eecd634c7a934f752af0eb90dda9ecc262f199f",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xadb2437e6f65682b85f814fbc12fec0508a7b1d0"
      }
    },
    {
      "chainId": 137,
      "name": "Global Coin Research",
      "symbol": "GCR",
      "decimals": 4,
      "address": "0xa69d14d6369e414a32a5c7e729b7afbafd285965",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x6307b25a665efc992ec1c1bc403c38f3ddd7c661"
      }
    },
    {
      "chainId": 137,
      "name": "FTT",
      "symbol": "FTX Token",
      "decimals": 18,
      "address": "0x918c749a09fa539e1dc8019f875fab9eb1ebc6a3",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ftt.svg"
    },
    {
      "chainId": 137,
      "name": "Yield",
      "symbol": "YLD",
      "decimals": 18,
      "address": "0x4cebdbcb286101a17d3ea1f7fe7bbded2b2053dd",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xf94b5c5651c888d928439ab6514b93944eee6f48"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Ether",
      "symbol": "WETH",
      "decimals": 18,
      "address": "0xae740d42e4ff0c5086b2b5b5d149eb2f9e1a754f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
      }
    },
    {
      "chainId": 137,
      "name": "FLUX",
      "symbol": "FLUX",
      "decimals": 18,
      "address": "0x2808edb7398b25e0f6c41cd98fd114d924008c87",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x469eda64aed3a3ad6f868c44564291aa415cb1d9"
      }
    },
    {
      "chainId": 137,
      "name": "Basic Attention Token",
      "symbol": "BAT",
      "decimals": 18,
      "address": "0x3cef98bb43d732e2f285ee605a8158cde967d219",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
      }
    },
    {
      "chainId": 137,
      "name": "iFARM",
      "symbol": "iFARM",
      "decimals": 18,
      "address": "0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1571ed0bed4d987fe2b498ddbae7dfa19519f651"
      }
    },
    {
      "chainId": 137,
      "name": "LITION",
      "symbol": "LIT",
      "decimals": 18,
      "address": "0xa8e198fc5c68264b185619a96748f855720494c0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x763fa6806e1acf68130d2d0f0df754c93cc546b2"
      }
    },
    {
      "chainId": 137,
      "name": "Wrapped Celo",
      "symbol": "wCELO",
      "decimals": 18,
      "address": "0xc30dd0cce2e683aa68c87c280e73beb3dec9b3ba",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xe452e6ea2ddeb012e20db73bf5d3863a3ac8d77a"
      }
    },
    {
      "chainId": 137,
      "name": "Zeus",
      "symbol": "ZUZ",
      "decimals": 18,
      "address": "0x232eab56c4fb3f84c6fb0a50c087c74b7b43c6ad",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x202f1877e1db1120ca3e9a98c5d505e7f035c249"
      }
    },
    {
      "chainId": 137,
      "name": "FARM Reward Token",
      "symbol": "FARM",
      "decimals": 18,
      "address": "0x176f5ab638cf4ff3b6239ba609c3fadaa46ef5b0",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa0246c9032bc3a600820415ae600c6388619a14d"
      }
    },
    {
      "chainId": 137,
      "name": "MANTRA DAO",
      "symbol": "OM",
      "decimals": 18,
      "address": "0xc3ec80343d2bae2f8e680fdadde7c17e71e114ea",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x3593d125a4f7849a1b059e64f4517a86dd60c95d"
      }
    },
    {
      "chainId": 137,
      "name": "Standard",
      "symbol": "xMARK",
      "decimals": 9,
      "address": "0xf153eff70dc0bf3b085134928daeea248d9b30d0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x36b679bd64ed73dbfd88909cdcb892cb66bd4cbb"
      }
    },
    {
      "chainId": 137,
      "name": "SENTinel",
      "symbol": "SENT",
      "decimals": 8,
      "address": "0x48e3883233461c2ef4cb3fcf419d6db07fb86cea",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037"
      }
    },
    {
      "chainId": 137,
      "name": "Decentralized Insurance Protocol",
      "symbol": "DIP",
      "decimals": 18,
      "address": "0xfeff6c1643d38b13a198cfe1d76505701c380af0",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xc719d010b63e5bbf2c0551872cd5316ed26acd83"
      }
    },
    {
      "chainId": 137,
      "name": "Ocean Token",
      "symbol": "OCEAN",
      "decimals": 18,
      "address": "0x282d8efce846a88b159800bd4130ad77443fa1a1",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x967da4048cd07ab37855c090aaf366e4ce1b9f48"
      }
    },
    {
      "chainId": 137,
      "name": "TrustSwap Token",
      "symbol": "SWAP",
      "decimals": 18,
      "address": "0x3809dcdd5dde24b37abe64a5a339784c3323c44f",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xcc4304a31d09258b0029ea7fe63d032f52e44efe"
      }
    },
    {
      "chainId": 137,
      "name": "Parachute",
      "symbol": "PAR",
      "decimals": 18,
      "address": "0xf521d590fb1e0b432fd0e020cdbd6c6397d652c2",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06"
      }
    },
    {
      "chainId": 137,
      "name": "Dark Matter Token",
      "symbol": "DMT",
      "decimals": 18,
      "address": "0xd28449bb9bb659725accad52947677cce3719fd7",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0x79126d32a86e6663f3aaac4527732d0701c1ae6c"
      }
    },
    {
      "chainId": 137,
      "name": "Binance Wrapped WRX",
      "symbol": "BWRX",
      "decimals": 8,
      "address": "0x72d6066f486bd0052eefb9114b66ae40e0a6031a",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xff0a024b66739357c4ed231fb3dbc0c8c22749f5"
      },
      "logoURI": "https://wallet-asset.matic.network/img/tokens/wrx.svg"
    },
    {
      "chainId": 137,
      "name": "Distant Universe Stardust Token",
      "symbol": "DUST",
      "decimals": 8,
      "address": "0x556f501cf8a43216df5bc9cc57eb04d4ffaa9e6d",
      "logoURI": "https://raw.githubusercontent.com/BlockTimeWorld/crawler/main/icons/dust.svg",
      "tags": [
        "pos",
        "erc20",
        "swapable"
      ],
      "extensions": {
        "rootAddress": "0xbca3c97837a39099ec3082df97e28ce91be14472"
      }
    },
    {
      "chainId": 137,
      "name": "Ludena Protocol",
      "symbol": "LDN",
      "decimals": 18,
      "address": "0x7df5638222bbe24cce39f726c3b61cc03610622a",
      "logoURI": "https://www.ludenaprotocol.io/data/ludena_protocol_symbol_basic.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xb29663aa4e2e81e425294193616c1b102b70a158"
      }
    },
    {
      "chainId": 137,
      "name": "dForce",
      "symbol": "DF",
      "decimals": 18,
      "address": "0x08C15FA26E519A78a666D19CE5C646D55047e0a3",
      "logoURI": "https://raw.githubusercontent.com/dforce-network/documents/master/logos/dForce/DF.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0"
      }
    },
    {
      "chainId": 137,
      "name": "Orbit Chain",
      "symbol": "ORC",
      "decimals": 18,
      "address": "0x1bd5048e0b85c410dd039aa9c05069a9d82488b8",
      "logoURI": "https://s.ozys.io/icon/orbitchain.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x662b67d00a13faf93254714dd601f5ed49ef2f51"
      }
    },
    {
      "chainId": 137,
      "name": "ClayStack Staked MATIC",
      "symbol": "csMATIC",
      "decimals": 18,
      "address": "0x7ed6390f38d554B8518eF30B925b46972E768AF8",
      "logoURI": "https://raw.githubusercontent.com/ClayStack/media-kit/14dd5b413d744230b299d2008e98c63ef112bbb6/token-images/csMATIC.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x38b7Bf4eeCF3EB530b1529c9401FC37d2a71a912"
      }
    },
    {
      "chainId": 137,
      "name": "Thales DAO Token",
      "symbol": "THALES",
      "decimals": 18,
      "address": "0x692c44990e4f408ba0917f5c78a83160c1557237",
      "logoURI": "https://raw.githubusercontent.com/0xProject/0x-staking-pool-registry/master/logos/thales_logo.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8947da500eb47f82df21143d0c01a29862a8c3c5"
      }
    },
    {
      "chainId": 137,
      "name": "Only Graded Coin",
      "symbol": "OGUC",
      "decimals": 18,
      "address": "0x2ae0e530ca7857b0e40078c43ba7158ce424838a",
      "logoURI": "https://onlygradedcoin.com/assets/images/ogc-logo.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xB4F74994FCBd60E1bC3603b9a33069eA1b32d4A4"
      }
    },
    {
      "chainId": 137,
      "name": "TCGCoin",
      "symbol": "TCGC",
      "decimals": 18,
      "address": "0x44ACD96620B708162af4A90524F29A6839675533",
      "logoURI": "https://tcgverse-assets.s3.ap-northeast-1.amazonaws.com/tcgcoin_logo.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x2FFdE077455f81E28bAa675a46B9c085740216d4"
      }
    },
    {
      "chainId": 137,
      "name": "Cityroots",
      "symbol": "UNITY",
      "decimals": 18,
      "address": "0x9d7313E23C29e6d314A160A3fF345a2f7Ab0f3f5",
      "logoURI": "https://etherscan.io/token/images/cityrootsunity_32.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8fc1A87af3aD30a90cAa197B6c7aDb80d9F2aC44"
      }
    },
    {
      "chainId": 137,
      "name": "Respawn Finance Wrapped Staked Ethereum",
      "symbol": "RFWSTETH",
      "decimals": 18,
      "address": "0x716ceb4Dc674FB91C4198c50b837F11f6ef75df0",
      "logoURI": "https://assets.respawn.finance/rfwsteth.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x07FA101efde726E0956Edd2c4D5C8d3d1A5E9c53"
      }
    },
    {
      "chainId": 137,
      "name": "REVV Motorsport Shard",
      "symbol": "SHRD",
      "decimals": 18,
      "address": "0xc99fd38d967944d7c3578afc4451920404c238d1",
      "tags": [
        "pos",
        "erc20",
        "customWithdrawEventSig"
      ],
      "extensions": {
        "rootAddress": "0x6d4a51c0ddfe6baeb7e233d6df5ae38a81f55c4b",
        "withdrawEventSig": "0x7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5"
      }
    },
    {
      "chainId": 137,
      "name": "Stader MaticX",
      "symbol": "MaticX",
      "decimals": 18,
      "address": "0xfa68fb4628dff1028cfec22b4162fccd0d45efb6",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xf03a7eb46d01d9ecaa104558c732cf82f6b6b645"
      }
    },
    {
      "chainId": 137,
      "name": "AnimeToken",
      "symbol": "ANX",
      "decimals": 18,
      "address": "0xe57EAC8b4666032Cfa16b626FfE99403a40b64D3",
      "logoURI": "https://animebank.s3.ap-northeast-1.amazonaws.com/assets/anx.png",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x8DaDC5124714bEd53fbc603478De7D4BFEE1fF2a"
      }
    },
    {
      "chainId": 137,
      "name": "Cobak Token",
      "symbol": "CBK",
      "decimals": 18,
      "address": "0x4EC203dD0699Fac6adAF483CDd2519BC05D2c573",
      "logoURI": "https://storage.cobak.co/logo/cbk_symbol.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0xD85a6Ae55a7f33B0ee113C234d2EE308EdeAF7fD"
      }
    },
    {
      "chainId": 137,
      "name": "Apecoin",
      "symbol": "APE",
      "decimals": 18,
      "address": "0xb7b31a6bc18e48888545ce79e83e06003be70930",
      "logoURI": "https://wallet-asset.matic.network/img/tokens/ape.svg",
      "tags": [
        "pos",
        "erc20"
      ],
      "extensions": {
        "rootAddress": "0x4d224452801aced8b2f0aebe155379bb5d594381"
      }
    }
  ]
};