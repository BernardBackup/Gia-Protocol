import ExploreNftStyles from '../assets/styles/ExploreNftStyles.js';
import NavBarExplore from '../components/Navbar/NavbarExplore.jsx';
import { data } from '../assets/inAppData/Explore.js';
import NftCardItem from '../components/Cards/NftCardItem.jsx';
import { StakingFactory,StakingFactoryAbi } from '../../contract/contract';
import { useAddress, useContractRead, useContract,useContractWrite  } from "@thirdweb-dev/react"
import { useEffect, useState } from 'react';

const ExploreNft = () => {
	const { contract, isLoading, error } = useContract(
		StakingFactory,
		StakingFactoryAbi,
	  );
	  const { data:addresses, isLoading: addressesIsLoading, error: addressesError } = useContractRead(contract, "getDeployedStakingContracts");
	return (
		<ExploreNftStyles>
			<NavBarExplore />
			<div className='explore-container'>
				<div className='explore-header'>
					<button>
						<p>live</p>
					</button>
					<button>
						<p>live</p>
					</button>
					{addressesIsLoading ? (
          <p>Loading...</p>
        ) : (
          addresses.map((address, index) => (
            <p key={index} className='text-white'>{address}</p>
          ))
        )}
					<div className='input-actions'>
						<div className='search'>
							<input type='search' placeholder='search nft' />
							<i className='fa fa-search'></i>
						</div>
						<div className='sort'>
							<p>sort by</p>
							<i className='fas fa-signal'></i>
						</div>
					</div>
				</div>

				<div className='explore-cardlist'>
					{data.map((dataItem) => {
						const { id } = dataItem;
						return <NftCardItem key={id} dataItem={dataItem} />;
					})}
				</div>
			</div>
		</ExploreNftStyles>
	);
};

export default ExploreNft;
