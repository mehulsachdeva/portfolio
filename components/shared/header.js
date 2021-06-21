import React from 'react'
import styles from '../../styles/shared/header.module.scss'
import Button from './button'

const Header = () => {
    return (
        <div className={styles.container}>
            <div>Skills</div>
            <div>Projects</div>
            <div>Experiences</div>
            <div>
                <a href='/about'>About Me</a>
            </div>
        </div>
    )
}

export default Header