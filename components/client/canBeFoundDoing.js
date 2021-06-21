import React from 'react'
import styles from '../../styles/client/canBeFoundDoing.module.scss'

const canBeFoundDoingData = [
    {
        title: 'Working On Projects',
        percent: 70
    },
    {
        title: 'Networking',
        percent: 40
    },
    {
        title: 'Performing with The Weeknd',
        percent: 0
    },
    {
        title: 'Outdoor Activity',
        percent: 20
    },
    {
        title: 'Whining At Work',
        percent: 30
    },
    {
        title: 'Snacking',
        percent: 60
    }
]

const CanBeFoundDoing = () => {
    if (!canBeFoundDoingData || !canBeFoundDoingData.length) return null
    return (
        <div className={styles.container}>
            {canBeFoundDoingData.map((item, idx) => {
                const degree = (360 / 100) * item.percent
                const customStyles = {
                    backgroundImage: `conic-gradient(pink ${degree}deg, indigo 0)`
                }
                return (
                    <div key={idx} className={styles.item}>
                        <div>{item.title}</div>
                        <div>
                            <div style={customStyles}></div>
                            <div>{item.percent}%</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CanBeFoundDoing