import { useEffect, useState } from 'react';
import AdminFeeStyles from '../../assets/styles/AdminFeeStyles';
import AdminLink from '../../components/AdminLink/AdminLink';
import NavbarNftConnected from '../../components/Navbar/NavbarNftConnected';

const AdminContract = () => {
	const [href, setHref] = useState('');
	// Scroll page
	useEffect(() => {
		const href = window.location.href.substring(
			window.location.href.lastIndexOf('#') + 1,
		);
		setHref(href);
		console.log(href);
		const element = document.getElementById(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}, [href]);
	return (
		<AdminFeeStyles>
			<NavbarNftConnected />
			<div className='admin-container'>
				<div className='admin-container-links'>
					<AdminLink />
				</div>

				<div id={href} className='admin-container-form'>
					<form>
						<h2>contract</h2>

						<div className='row-1'>
							<div className='row-1-title'>
								<h4>update nft profile picture</h4>
							</div>
							<div className='row-1-input'>
								<div className='row-1-input-1'>
									<label htmlFor='image'>Image URL</label>
									<input type='text' placeholder='Enter Image URL' id='image' />
								</div>
								<button>submit</button>
							</div>
						</div>

						<div className='row-2'>
							<div className='row-2-title'>
								<h4>update mint url</h4>
							</div>
							<div className='row-2-input'>
								<div className='row-2-input-1'>
									<label htmlFor='mint'>Mint URL</label>
									<input type='text' placeholder='Enter Mint URL' id='mint' />
								</div>
								<button>submit</button>
							</div>
						</div>

						<div className='row-3'>
							<div className='row-3-title'>
								<h4>set website url</h4>
							</div>
							<div className='row-3-input'>
								<div className='row-3-input-1'>
									<label htmlFor='url'>Website URL</label>
									<input type='text' placeholder='Enter Website URL' id='url' />
								</div>
								<button>submit</button>
							</div>
						</div>

						<div className='row-4'>
							<div className='row-4-title'>
								<h4>set medium url</h4>
							</div>
							<div className='row-4-input'>
								<div className='row-4-input-1'>
									<label htmlFor='medium'>Medium URL</label>
									<input
										type='text'
										placeholder='Enter Medium URL'
										id='medium'
									/>
								</div>
								<button>submit</button>
							</div>
						</div>

						<div className='row-5'>
							<div className='row-5-title'>
								<h4>set social url</h4>
							</div>
							<div className='row-5-input'>
								<div className='row-5-input-1'>
									<label htmlFor='social'>Social URL</label>
									<input
										type='text'
										placeholder='Enter social URL'
										id='social'
									/>
								</div>
								<button>submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</AdminFeeStyles>
	);
};

export default AdminContract;
