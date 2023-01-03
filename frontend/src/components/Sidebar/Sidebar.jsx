import React from 'react';
import styles from './Sidebar.module.css';
import { setCategories, sidebarSelector } from '../../Redux/Slices/SidebarSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../Redux/Slices/PostsSlice';
import axios from 'axios';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    axios.get('http://localhost:4444/categories').then(res => {
      dispatch(setCategories(res.data))
    })
  }, [])

  React.useEffect(() => {
    setOpacity(1)
  }, [])

  const { categories } = useSelector(sidebarSelector)


  return (
    <div className={styles.Sidebar} style={{ opacity: `${opacity}` }}>
      <div className={styles.sidebarContainer}>
        <ul className={styles.links}>



          {categories.map(el => <div onClick={() => {dispatch(setCategory(el.engName))}} className={styles.link}>
                                  <li>{el.name}</li>
                                  <div className={styles.underline}></div>
                                </div>)}

        </ul>
      </div>
    </div>
  )
}



export default Sidebar;