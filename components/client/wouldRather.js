import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/client/wouldRather.module.scss'
import { 
    faPizzaSlice, 
    faHamburger, 
    faTree, 
    faCity, 
    faGem, 
    faHeart, 
    faCar, 
    faPlane, 
    faBed, 
    faSuitcaseRolling,
    faBeer,
    faGlassWhiskey,
    faSun,
    faMoon,
    faDumbbell,
    faUtensils
} from '@fortawesome/free-solid-svg-icons'

const wouldRatherData = [
    {
        x: faHamburger,
        y: faPizzaSlice,
        cursor: 80,
    },
    {
        x: faTree,
        y: faCity,
        cursor: 50,
    },
    {
        x: faGem,
        y: faHeart,
        cursor: 30,
    },
    {
        x: faCar,
        y: faPlane,
        cursor: 70,
    },
    {
        x: faBed,
        y: faSuitcaseRolling,
        cursor: 75,
    },
    {
        x: faBeer,
        y: faGlassWhiskey,
        cursor: 90
    },
    {
        x: faSun,
        y: faMoon,
        cursor: 60
    },
    {
        x: faUtensils,
        y: faDumbbell,
        cursor: 25,
    }
]

const WouldRather = () => {
    if (!wouldRatherData || !wouldRatherData.length) return null
    return (
        <div className={styles.container}>
            {wouldRatherData.map((item, idx) => {
                const customStyles = {
                    left: `${item.cursor}%`
                }
                return (
                    <div key={idx} className={styles.item}>
                        <div>
                            <FontAwesomeIcon className={styles.icon} icon={item.x}/>
                        </div>
                        <div><div style={customStyles}></div></div>
                        <div>
                            <FontAwesomeIcon className={styles.icon} icon={item.y} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WouldRather