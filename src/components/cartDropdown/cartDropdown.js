import React from 'react';
import './cartDropdown.styles.scss';
import CustomButton from '../custombutton/custombutton';

const CartDropdown = () => {
    return(
        <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
        </div>
    );
};

export default CartDropdown;