import React from 'react'
import styles from '../styles/index.module.scss'
import Image from 'next/image'
import * as HOME_CONSTANTS from '../public/index.constants' 
import Button from '../components/shared/button'
import Section from '../components/shared/section'
import Experiences from '../components/client/experiences'
import Projects from '../components/client/projects'
import Skills from '../components/client/skills'

const getTimesOfTheDay = () => {
  const date = new Date()
  const hours = date.getHours()
  if (
    hours >= HOME_CONSTANTS.NIGHT_TIME && 
    hours < HOME_CONSTANTS.MORNING_TIME
  ) {
      return HOME_CONSTANTS.NIGHT
  } else if (
    hours >= HOME_CONSTANTS.MORNING_TIME && 
    hours < HOME_CONSTANTS.WORK_TIME
  ) {
      return HOME_CONSTANTS.MORNING
  } else if (
    hours >= HOME_CONSTANTS.WORK_TIME && 
    hours < HOME_CONSTANTS.MISC_TIME
  ) {
      return HOME_CONSTANTS.WORK
  } else {
      return HOME_CONSTANTS.MISC
  }
}

const EXPERIENCES_SUB_HEADER = 'I\'m proud to have collaborated with some amazing people'

const PROJECTS_SUB_HEADER = 'Worked on few open source projects. Know more about them'

const Home = () => {
  const time = getTimesOfTheDay()
  let image = ''
  if (time === HOME_CONSTANTS.NIGHT) {
    image = HOME_CONSTANTS.NIGHT_IMAGE
  } else if (time === HOME_CONSTANTS.MORNING) {
    image = HOME_CONSTANTS.MORNING_IMAGE
  } else if (time === HOME_CONSTANTS.WORK) {
    image = HOME_CONSTANTS.WORK_IMAGE
  } else {
    image = HOME_CONSTANTS.MISC_IMAGE
  }

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.imageSection}>
          <Image 
            src={`https://drive.google.com/uc?export=view&id=1gVe469kPJ1XajFV-FE1miq7dqVKcR9WA`}
            alt={time}
            className={styles.image}
            height={250}
            width={250}
          />
        </div>
        <div className={styles.introSection}>
          <div>{HOME_CONSTANTS.HOME_HEADING}</div>
          <div>{HOME_CONSTANTS.HOME_NAME}</div>
          <div dangerouslySetInnerHTML={{ __html: HOME_CONSTANTS.HOME_INTRO }}></div>
        </div>
      </div>
      <div className={styles.buttonSection}>
        <Button text='Say Hello' customClass={styles.button} />
      </div>
      <Section 
        header='Skills' 
        content='Skills Data'
        customClass={styles.skillsSection}
      >
        <Skills />
      </Section>
      <Section 
        header='Projects' 
        subHeader={PROJECTS_SUB_HEADER} 
        subHeaderCustomClass={styles.projectsSubHeader}
      >
        <Projects />
      </Section>
      <Section subHeader={EXPERIENCES_SUB_HEADER}>
        <Experiences />
      </Section>
    </div>
  )
}

export default Home