import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import CartIcon from '../cartIcon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';

const Header = ({ hidden}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/' >
                <Logo></Logo>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                <Link className='option' to='/signin'>SIGNIN</Link>
                <CartIcon></CartIcon>
                {
                    hidden ? null : <CartDropdown></CartDropdown>
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({cart:{hidden}}) => ({
    hidden
});

export default connect(mapStateToProps)(Header);