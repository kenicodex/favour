import React from 'react'
import { Box, Typography } from '@mui/material'

function EducationExperiences() {
    const education = [
        {
            org: 'SAED Integrated Services',
            position: 'Product Designer (Internship)',
            duration: 'March 2022 - August 2022',
            achievement: "Worked on the UI designs for a healthcare website (CHOLEA), others (such as E-Library website and App, Real Estate website etc)..... Read more"
        },
        {
            org: 'Perxels Design School',
            position: 'Product Designer (Team lead)',
            duration: 'March 2022 - July 2022',
            achievement: "Led a team to create a better user experience for a FinTech application creating new screens and modifying existing ones..... Read more"
        },
        {
            org: 'Bachelor of Science (B.Sc.) in Microbiology',
            position: 'Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria.',
            duration: 'April 2018 - In View',
            achievement: ""
        }
    ]
    const experience = [
        {
            org: 'SAED Integrated Services',
            position: 'Product Designer (Internship)',
            duration: 'March 2022 - August 2022',
            achievement: "Worked on the UI designs for a healthcare website (CHOLEA), others (such as E-Library website and App, Real Estate website etc)..... Read more"
        },
        {
            org: 'Perxels Design School',
            position: 'Product Designer (Team lead)',
            duration: 'March 2022 - July 2022',
            achievement: "Led a team to create a better user experience for a FinTech application creating new screens and modifying existing ones..... Read more"
        },
        {
            org: 'Bachelor of Science (B.Sc.) in Microbiology',
            position: 'Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria.',
            duration: 'April 2018 - In View',
            achievement: ""
        }
    ]
    const Component = (props) => {
        return <Box sx={{ display: 'flex', flexDirection: 'column', gap: "94px", width: { xs: '100%', lg: '42.3rem' } }} >
            {
                props.data.map((x, i) => {
                    return (
                        <Box sx={{}}>
                            <Typography
                                sx={{
                                    fontFamily: "'DM Sans'",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: { xs: '1.8rem', lg: '2rem' },
                                    lineHeight: "2.6rem",
                                    color: "#333333"
                                }}>
                                {x.org}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'DM Sans'",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    fontSize: "16px",
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
                                    fontSize: "14px",
                                    lineHeight: "16px",
                                    color: "#828282"
                                }}>
                                {x.duration}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'DM Sans'",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "14px",
                                    lineHeight: "23px",
                                    color: "#4F4F4F"
                                }}>
                                {x.achievement}
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
            height: { xs: 'auto', lg: '706px' },
            p: { xs: '', lg: '48px 22.9rem' },
            maxWidth: '1440px', mx: 'auto'
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

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '22.8rem' }}>
                {/* <Education /> */}
                <Component data={education} />
                <Component data={experience} />
            </Box>

        </Box >
    )
}

export default EducationExperiences