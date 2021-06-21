import React from 'react'
import styles from '../../styles/shared/section.module.scss'

const Section = props => {
    const { header, subHeader, subHeaderCustomClass = '', children } = props

    return (
        <div className={styles.container}>
            <div className={styles.header}>{header}</div>
            <div className={`${styles.subHeader} ${subHeaderCustomClass}`}>{subHeader}</div>
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default Section