import React from 'react';
import mealsImage from '../../assest/img.png';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Food</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Food"/>
            </div>
        </>
    );
};

export default Header;
