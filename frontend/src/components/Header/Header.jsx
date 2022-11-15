import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogo}>
                    <h3>BLOG</h3>
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