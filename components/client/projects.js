import React from 'react'
import styles from '../../styles/client/projects.module.scss'
import Button from '../shared/button'
import Image from 'next/image'

const projectsData = [
    {
        name: 'Spring Security Using JWT',
        description: 'REST APIs with role based authentication and authorization using spring security and JWT.',
        link: 'https://github.com/mehulsachdeva/spring-security-using-jwt',
        background: '#F74140',
    },
    {
        name: 'Dependency Management Bot',
        description: 'This collection helps figure out the dependencies have a pending minor or patch update in the package.json and create a PR for the same.',
        link: 'https://www.postman.com/pandava/workspace/developer-automation/collection/14113682-a9d1d467-e0c7-478c-b11b-7d1576332efa?ctx=documentation',
        background: '#3498DB'
    },
    {
        name: 'Vendor Android App',
        description: 'An android app generated for roadside vegetable vendors to help them in their daily budgeting.',
        link: 'https://github.com/mehulsachdeva/vendor-android-app',
        background: '#FDDD02',
        lightTheme: true
    },
    {
        name: 'Quizzy',
        description: 'An online quiz system web application.',
        link: 'https://github.com/mehulsachdeva/quizzy-app',
        background: '#E14493'
    },
    {
        name: 'Expense Tracker',
        description: 'Expense tracker allows to add, edit and delete expenses across various different categories on per day basis.',
        link: 'https://github.com/mehulsachdeva/expense-tracker-frontend',
        background: '#05E4FD',
        lightTheme: true
    },
]

const GITHUB_ICON = '1vvZuC-X-bc7KFlgPKb1EX79a0NCZ2ew0'
const PROFILE_REPOSITORIES_LINK = 'https://github.com/mehulsachdeva'

const Projects = () => {

    const handleExploreMoreClick = () => {
        window.location.href = PROFILE_REPOSITORIES_LINK
        return
    }

    if (!projectsData || !projectsData.length) return null
    return (
        <div className={styles.container}>
            {projectsData.map((project, idx) => {
                const customCardStyles = { background: project.background }
                return (
                    <div 
                        className={`${styles.card} ${
                            project.lightTheme ? styles.cardLightTheme: ''
                        }`} 
                        style={customCardStyles} 
                        key={idx}
                    >
                        <div>
                            <div>{project.name}</div>
                            <div>{project.description}</div>
                        </div>
                        <div>
                            <Button 
                                text='Jump To The Code' 
                                customClass={`${styles.button} ${
                                    project.lightTheme ? styles.buttonLightTheme: ''
                                }`}
                                link={project.link}
                            />
                        </div>
                    </div>
                )
            })}
            <div className={styles.exploreMoreCard} onClick={handleExploreMoreClick}>
                <div>
                    <Image 
                        src={`https://drive.google.com/uc?export=view&id=${GITHUB_ICON}`} 
                        alt='Github Logo'
                        width={100}
                        height={1000} 
                    />
                </div>
                <div>Explore More</div>
            </div>
        </div>
    )
}

export default Projects