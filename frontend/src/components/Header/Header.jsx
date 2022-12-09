import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
/*--openssl-legacy-provider */
const Header = () => {
    const [opacity, setOpacity] = React.useState(0)
    React.useEffect(() => {
        setOpacity(1)
    }, [])
    return (
        <div className={styles.Header} style={{opacity: `${opacity}`}}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogo}>
                    <Link className={styles.headerLink} to='/posts'><h3>GAVRILOFF BLOG</h3></Link>
                    
                </div>
                
            </div>
        </div>
    )
}


export default Header;