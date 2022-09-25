import React from 'react'
import { Box, Typography } from '@mui/material'

function EducationExperiences() {
    // const [full, setfull] = useState('')
    const education = [
        {
            gridarea: 'saed',
            org: 'SAED Integrated Services',
            position: 'Product Designer (Internship)',
            duration: 'March 2022 - August 2022',
            achievement: 'Worked on the UI designs for a healthcare website (CHOLEA), others (such as E-Library website and App, Real Estate website etc).....',
            achievementFull: 'Worked on the UI designs for a healthcare website (CHOLEA), others (such as E-Library website and App, Real Estate website etc)     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magni voluptate iure optio sit. Nam odio, provident distinctio molestias nulla eius, reiciendis voluptate ipsam fugit ratione impedit! Sequi, eligendi voluptatum!',


        },
        {
            gridarea: 'Perxels',
            org: 'Perxels Design School',
            position: 'Product Designer (Team lead)',
            duration: 'March 2022 - July 2022',
            achievement: "Led a team to create a better user experience for a FinTech application creating new screens and modifying existing ones..... ",
            achievementFull: 'Worked on the UI designs for a healthcare website (CHOLEA), others (such as E-Library website and App, Real Estate website etc)     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magni voluptate iure optio sit. Nam odio, provident distinctio molestias nulla eius, reiciendis voluptate ipsam fugit ratione impedit! Sequi, eligendi voluptatum!',
        },
        {
            gridarea: 'Obafemi',
            org: 'Bachelor of Science (B.Sc.) in Microbiology',
            position: 'Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria.',
            duration: 'April 2018 - In View',
            achievement: ""
        },
        {
            gridarea: 'KodeCamp',
            org: 'KodeCamp',
            position: 'UX/UI Designer',
            duration: 'March 2022- July 2022',
            achievement: "Created UI designs for Fintech dashboard and Mobile Apps, redesigned some common websites landing pages (Amazon and Apple inclusive)..... ",
            achievementFull: 'Worked on the UI designs for a healthcare website (CHOLEA), others (such as E-Library website and App, Real Estate website etc)     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magni voluptate iure optio sit. Nam odio, provident distinctio molestias nulla eius, reiciendis voluptate ipsam fugit ratione impedit! Sequi, eligendi voluptatum!',
        },
        {
            gridarea: 'Tech4dev',
            org: 'Tech4dev (WomenTechster)',
            position: 'UX Designer',
            duration: 'February 2022 - March 2022',
            achievement: "Collaborated with my team members on an Agricultural Sector Project as a UX Designer. I conducted the user research, card sorting, user flow and site-mapping..... ",
            achievementFull: 'Worked on the UI designs for a healthcare website (CHOLEA), others (such as E-Library website and App, Real Estate website etc)     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magni voluptate iure optio sit. Nam odio, provident distinctio molestias nulla eius, reiciendis voluptate ipsam fugit ratione impedit! Sequi, eligendi voluptatum!',
        },
        {
            gridarea: 'Hub',
            org: 'Hub Software Testing Volunteer',
            position: 'Testify, Total Garden, Ibadan.',
            duration: 'February 2021 ',
            achievement: ""
        }
    ]
    // const experience = [

    // ]
    const Component = (props) => {
        return <Box  sx={{
            display: 'grid', columnGap: '120px', rowGap: { xs: '32px', lg: '64px' },
            width: { xs: '100%', lg: '100%' },
        }} className={'gridContainer'}>
            {
                props.data.map((x, i) => {
                    return (
                        <Box  key={i} sx={{ gridArea: x.gridarea, width: { xs: '100%', lg: '423px' }, }}>
                            <Typography
                                sx={{
                                    fontFamily: "'DM Sans'",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: { xs: '1.8rem', lg: '2rem' },
                                    lineHeight: "2.6rem",
                                    color: "#333333",
                                    mb:'5px'
                                }}>
                                {x.org}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'DM Sans'",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    fontSize: { xs: '1.4rem', lg: "1.6rem" },
                                    lineHeight: "25px",
                                    color: "#4F4F4F"
                                }}>
                                {x.position}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'DM Sans'",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: { xs: '1.4rem', lg: "1.6rem" },
                                    lineHeight: "1.6rem",
                                    color: "#828282"
                                }}>
                                {x.duration}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'DM Sans'",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: { xs: '1.3rem', lg: "1.4rem" },
                                    lineHeight: "23px",
                                    color: "#4F4F4F", width: '100%',
                                    wordWrap: 'break-word'
                                }}>
                                {x.achievement}
                                {/* {x.achievementFull} */}
                                <span style={{ color: '#AF0116', cursor: 'pointer', display: x.achievement.length > 1 ? 'inline-block' : 'none' }}> Read More</span>
                            </Typography>
                        </Box>
                    )
                })
            }
        </Box>
    }
    return (
        <Box sx={{
            bgcolor: "rgba(175, 1, 22, .05)",
            height: { xs: 'auto', lg: 'auto' },
            p: { xs: '32px 4.1rem', lg: '48px 22.9rem' },
            maxWidth: '1440px', mx: 'auto',
            wordWrap: 'break-word'
        }}>
            <Typography
                sx={{
                    fontFamily: "'Libre Baskerville'",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "2.5rem",
                    lineHeight: "3.1rem", textAlign: 'center',
                    mb: { xs: "37px", lg: '40px' }

                }}>Education {`&`} Experiences</Typography>

            <Component data={education} />

        </Box >
    )
}

export default EducationExperiences