import React from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setCategory } from '../../Redux/Slices/PostsSlice'

const Header : React.FC = () => {
    const dispatch = useAppDispatch();
    const [opacity, setOpacity] = React.useState(0)
    React.useEffect(() => {
        setOpacity(1)
    }, [])
    return (
        <div className={styles.Header} style={{opacity: `${opacity}`}}>
            <div className={styles.headerWrapper}>
                <div onClick={() => {dispatch(setCategory(''))}} className={styles.headerLogo}>
                    <Link className={styles.headerLink} to='/' ><h3>GAVRILOFF BLOG</h3></Link>
                </div>
                
            </div>
        </div>
    )
}


export default Header;