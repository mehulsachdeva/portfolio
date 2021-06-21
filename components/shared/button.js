import React from 'react'
import styles from '../../styles/shared/button.module.scss'

const Button = props => {
    const { customClass = '', text, link } = props

    if (!text) return null
    return (
        <a className={`${styles.container} ${customClass}`} href={link}>{text}</a>
    )
}

export default Button