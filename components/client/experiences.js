import React from 'react'
import styles from '../../styles/client/experiences.module.scss'
import Image from 'next/image'

const experiencesData = [
    {
        company: 'Times Internet Ltd',
        role: 'Front End Developer',
        companyLogo: '1fM9WX5oW1Ec2lId0KorY5X767Qr_2F74',
        period: 'August 2020 - <span>Present</span>'
    },
    {
        company: 'Aspire Systems',
        role: 'Full Stack Developer Intern',
        companyLogo: '15REeUuJ6gth39nqxgg7A5hq8wERxPGfw',
        period: 'April 2019 - May 2019' 
    },
    {
        company: 'LifCare',
        role: 'Front End Developer Intern',
        companyLogo: '1umLUWJxjhRf_uW777BiiqCK-vTYlkY0d', 
        period: 'May 2018 - June 2018'
    },
    {
        company: 'IDP-ET, IIT Bombay',
        role: 'Research Intern',
        companyLogo: '1fAbiF1g19fnBaGhhKlZ4p05NREqSlmVg',
        period: 'June 2017 - July 2017'
    }
]

const Experiences = () => {
    if (!experiencesData || !experiencesData.length) return null
    return (
        <div className={styles.container}>
            {experiencesData.map((experience, idx) => {
                return (
                    <div className={styles.card} key={idx}>
                        <div>
                            <Image
                                src={`https://drive.google.com/uc?export=view&id=${experience.companyLogo}`}
                                className={styles.logo} 
                                alt={experience.company}
                                height={100}
                                width={280}
                            />
                        </div>
                        <div>{experience.role}</div>
                        <div dangerouslySetInnerHTML={{ __html: experience.period}}></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Experiences