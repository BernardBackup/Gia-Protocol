import AdminHomeStyles from '../../assets/styles/AdminHomeStyles';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';
import AdminLink from '../../components/AdminLink/AdminLink';
import { useEffect, useState } from 'react';
import { StakingFactory,StakingFactoryAbi } from '../../../contract/contract';
import { useAddress, useContractRead, useContract,useContractWrite  } from "@thirdweb-dev/react"

const AdminHome = () => {
  const [href, setHref] = useState('')
	const [collectionName, setCollectionName] = useState('');
  const [description, setDescription] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [rewardTokenAddress, setRewardTokenAddress] = useState('');
  const [stakingFee, setStakingFee] = useState(0);
  const [timeUnit, setTimeUnit] = useState(10);
  const [rewardsPerUnitTime, setRewardsPerUnitTime] = useState(10);
  const [endDate, setEndDate] = useState(10);
  const wei ='1'
	// Scroll page
	useEffect(() => {
		const href = window.location.href.substring(window.location.href.lastIndexOf('#') + 1);
		setHref(href);
		console.log(href);
		const element = document.getElementById(href);
		if (element) {
			element.scrollIntoView({behavior: 'smooth'});
		}
	}, [href])
  const { contract, isLoading, error } = useContract(
    StakingFactory,
    StakingFactoryAbi,
  );
  console.log(StakingFactory)

  const { mutateAsync:deployStakingContract, isLoading:deployStakingContractLoad, error:deployStakingContractError } = useContractWrite(
    contract,
    "deployStakingContract"
  );

  const deploy = async () => {
    try {
      const data = await deployStakingContract({
        args: [
          collectionName,
          description,
          collectionAddress,
          rewardTokenAddress,
          stakingFee,
          timeUnit,
          rewardsPerUnitTime,
          endDate,
          ],
        overrides: {value:wei}
      });
      
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

	return (
		<AdminHomeStyles>
			<NavbarNftConnected />
			<div className='admin-container'>
				<div className='admin-container-links'>
					<AdminLink />
				</div>

				<div id={href}className='admin-container-form'>
					<form>
						<h2>ADMIN</h2>
						<div className='row-1'>
        <label htmlFor='name'>COLLECTION NAME</label>
        <input 
          type='text' 
          id='name' 
          placeholder='INPUT YOUR COLLECTION NAME e.g Toonz NFT' 
          value={collectionName} 
          onChange={(e) => setCollectionName(e.target.value)} 
        />
      </div>

      <div className='row-2'>
        <label htmlFor='desc'>DESCRIPTION</label>
        <textarea
          name='desc'
          id='desc'
          placeholder='DESCRIPTION'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <p>Briefly describe what you need</p>
      </div>

      <div className='row-3'>
        <label htmlFor='collection'>NFT COLLECTION ADDRESS</label>
        <input 
          type='text' 
          id='collection' 
          placeholder='NFT ADDRESS' 
          value={collectionAddress} 
          onChange={(e) => setCollectionAddress(e.target.value)} 
        />
      </div>

      <div className='row-4'>
        <label htmlFor='token'>REWARD TOKEN ADDRESS</label>
        <input 
          type='text' 
          id='token' 
          placeholder='REWARD TOKEN ADDRESS' 
          value={rewardTokenAddress} 
          onChange={(e) => setRewardTokenAddress(e.target.value)} 
        />
      </div>

      <div className='row-5'>
        <label htmlFor='stakingFee'>STAKING FEE</label>
        <input 
          type='text' 
          id='stakingFee' 
          placeholder='STAKING FEE' 
          value={stakingFee} 
          onChange={(e) => setStakingFee(e.target.value)} 
        />
      </div>

      <div className='row-5'>
        <label htmlFor='timeUnit'>TIME UNIT</label>
        <input 
          type='text' 
          id='timeUnit' 
          placeholder='TIME UNIT' 
          value={timeUnit} 
          onChange={(e) => setTimeUnit(e.target.value)} 
        />
      </div>

      <div className='row-5'>
        <label htmlFor='rewardsPerUnitTime'>Reward/Time Unit</label>
        <input 
          type='text' 
          id='rewardsPerUnitTime' 
          placeholder='Reward/Time Unit' 
          value={rewardsPerUnitTime} 
          onChange={(e) => setRewardsPerUnitTime(e.target.value)} 
        />
      </div>

      <div className='row-5'>
        <label htmlFor='endDate'>End Date</label>
        <input 
          type='text' 
          id='endDate' 
          placeholder='End Date' 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
        />
      </div>

					</form>
          <button onClick={deploy}>SUBMIT</button>
				</div>
        
			</div>
		</AdminHomeStyles>
	);
};

export default AdminHome;