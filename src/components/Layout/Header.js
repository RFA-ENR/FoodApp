import React from 'react';
import mealsImage from '../../assets/img.png';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = ({onShowCart}) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Food</h1>
                <HeaderCartButton onClick={onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Food"/>
            </div>
        </>
    );
};

export default Header;
