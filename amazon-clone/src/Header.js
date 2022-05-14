import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header ()
{
	const [ { basket, user }, dispatch ] = useStateValue();
	const navigate = useNavigate();
	const handleAuthentication = () =>
	{
		if ( user )
		{
			auth.signOut();
		}
	}
	return (
		<div className='header'>
			<Link to='/'>
				<img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
			</Link>
			<div className='header__search'>
				<input className='header__searchInput' type="text" />
				<SearchIcon className='header__searchIcon' />
				{
					/*
						Logo
					*/
				}
			</div>
			<div className='header__nav'>
				<Link to={ !user && '/login' } style={ { textDecoration: 'none' } }>
					{/* go to login page only when you dont have any user */ }
					<div onClick={ handleAuthentication } className='header__option'>
						<span className='header__optionLineOne'>Hello { user ? user.email : 'Guest' } </span>
						<span className='header__optionLineTwo'> { user ? 'Sign Out' : 'Sign In' }</span>
					</div>
				</Link>
				<div className='header__option'>
					<span className='header__optionLineOne'>Returns </span>
					<span className='header__optionLineTwo'>& Orders</span>
				</div >
				<div className='header__option'>
					<span className='header__optionLineOne'>Your </span>
					<span className='header__optionLineTwo'>Prime</span>
				</div>

				<Link to='/checkout'>
					<div className='header__optionBasket'>
						<ShoppingBasketIcon />
						<span className='header__optionLineTwo header__basketCount' > { basket?.length } </span>
					</div>
				</Link>

			</div>
		</div>
	)
}

export default Header;