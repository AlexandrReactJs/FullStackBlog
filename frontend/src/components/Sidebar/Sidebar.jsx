import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    setOpacity(1)
  }, [])

  return (
    <div className={styles.Sidebar} style={{opacity: `${opacity}`}}>
      <div className={styles.sidebarContainer}>
        <div className={styles.link}>
          <Link>Софт</Link>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.link}>
          <Link>Книги</Link>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.link}>
          <Link>Новости</Link>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.link}>
          <Link>Гаджеты</Link>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.link}>
          <Link>Хакинг</Link>
          <div className={styles.underline}></div>
        </div>
      </div>
    </div>
  )
}



export default Sidebar;