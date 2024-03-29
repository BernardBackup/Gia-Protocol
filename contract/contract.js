export const StakingFactory = "0xb90423dc6860fcc027514767d716a21affceccbc";
export const StakingFactoryAbi =[{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Gaia_NoEtherToWithdraw","type":"error"},{"inputs":[],"name":"Gaia_NotEnoughEtherToCoverFee","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newContract","type":"address"}],"name":"ContractDeployed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FundsWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"_collectionName","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"address","name":"_collectionAddress","type":"address"},{"internalType":"address","name":"_rewardTokenAddress","type":"address"},{"internalType":"uint256","name":"_stakingFee","type":"uint256"},{"internalType":"uint256","name":"_timeUnit","type":"uint256"},{"internalType":"uint256","name":"_rewardsPerUnitTime","type":"uint256"},{"internalType":"uint256","name":"_endDate","type":"uint256"}],"name":"deployStakingContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDeployedStakingContracts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newFee","type":"uint256"}],"name":"updateFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawEther","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}];
export const RaffleAddress ="0xDbA63c28DB941bB4F1D5968Fc8bb60Bf1951aEdc";
export const RaffleFactoryAbi= [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Gaia_MaxTicketExceeded","type":"error"},{"inputs":[],"name":"Gaia_NotEnoughFund","type":"error"},{"inputs":[],"name":"Gaia_NotNFTOwner","type":"error"},{"inputs":[],"name":"Gaia_RaffleNotActive","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"raffleId","type":"uint256"}],"name":"RaffleCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"raffleId","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"contract IERC721","name":"nft","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"RaffleCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"raffleId","type":"uint256"},{"indexed":true,"internalType":"address","name":"participant","type":"address"},{"indexed":false,"internalType":"uint256","name":"tickets","type":"uint256"}],"name":"TicketPurchased","type":"event"},{"inputs":[{"internalType":"uint256","name":"raffleId","type":"uint256"}],"name":"cancelRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721","name":"_nft","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_ticketPrice","type":"uint256"},{"internalType":"uint256","name":"_maxTickets","type":"uint256"}],"name":"createRaffle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nextRaffleId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"raffleId","type":"uint256"},{"internalType":"uint256","name":"tickets","type":"uint256"}],"name":"purchaseTickets","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"raffleId","type":"uint256"}],"name":"raffles","outputs":[{"internalType":"contract IERC721","name":"nft","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"ticketPrice","type":"uint256"},{"internalType":"uint256","name":"maxTickets","type":"uint256"},{"internalType":"uint256","name":"ticketsSold","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"}]
export const StakingFactoryNew ="0x727fB62E19eA752bFE20a540D89B2Fad867E1566";
export const StakingFactoryNewAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Gaia_NoEtherToWithdraw",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "Gaia_NotEnoughEtherToCoverFee",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newContract",
				"type": "address"
			}
		],
		"name": "ContractDeployed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_collectionName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_collectionAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_rewardTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_stakingFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_timeUnit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardsPerUnitTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endDate",
				"type": "uint256"
			}
		],
		"name": "deployStakingContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_deployer",
				"type": "address"
			}
		],
		"name": "getDeployedStakingContractsByAddress",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_deployer",
				"type": "address"
			}
		],
		"name": "getNumberOfDeployedContractsByAddress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newFee",
				"type": "uint256"
			}
		],
		"name": "updateFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawEther",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]