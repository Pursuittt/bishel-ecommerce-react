import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ShoppingBag from '../shopping-bag/shopping-bag.component';
import ShoppingBagDropdown from '../shopping-bag-dropdown/shopping-bag-dropdown.component';

import { auth } from '../../firebase/firebase'
import { ReactComponent as Logo } from './crown.svg';
import './header.styles.scss';

const Header = ({currentUser, display, TOGGLE_DROPDOWN}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                : <Link to="/signin" className="option">SIGN IN</Link>
            }
            <ShoppingBag />
        </div>
        {
            display ? (<ShoppingBagDropdown/>) : null
        }
    </div>
)

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,
        display: state.dropdown.display
    };
};


export default connect(mapStateToProps)(Header);