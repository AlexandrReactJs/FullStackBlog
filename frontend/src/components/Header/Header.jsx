import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogo}>
                    <Link className={styles.headerLink} to='/posts'><h3>FULLSTACK BLOG</h3></Link>
                    
                </div>
                {
                /*<div className={styles.auth}>
                    <a className={styles.login} href="#">Вход</a>
                    <a className={styles.register} href="#">Регистрация</a>
                </div>*/}
            </div>
        </div>
    )
}


export default Header;