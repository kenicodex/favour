import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import savin from './images/SAVIN.png';
import real_estate from './images/Real_estate.png';
import whatsapp from './images/Whatsapp.png';
import creative from './images/Creatively.png';


export function Projects() {
    // alert(savin)
    const buttonStyle = {
        button: {
            background: "#AF0116",
            boxShadow: "0px 4px 15px rgba(175, 1, 22, 0.1)",
            borderRadius: "10px", mb: '8px',
            width: '15.4rem'
        }, text: {
            fontFamily: "DM Sans",
            fontSize: "1.8rem",
            fontWeight: "500",
            lineHeight: "2.5rem",
            letterSpacing: "0em",
            textAlign: "center", color: 'white', p: '.2rem',
            textDecoration: 'underline'
        }
    }
    const projects = [
        {
            image: savin, platform: 'Mobile Design', projectname: 'SAVIN APP',
            projectdescription: 'A saving and micro investment application for students (undergraduates). This application allows students to save for a long period of time.',
            button: () => { return <Button sx={buttonStyle.button}><Typography sx={buttonStyle.text}>Read Casestudy</Typography></Button> }
        },
        {
            image: whatsapp, platform: 'Mobile Design', projectname: 'WHATSAPP SCHEDULING MESSAGE FEATURE',
            projectdescription: 'The main goal of this project is to add a unique feature to whatsapp which is a scheduling messages feature. This help users to keep track of important messages',
            button: () => { return <Button sx={buttonStyle.button}><Typography sx={buttonStyle.text}>Read Casestudy</Typography></Button> }
        },
        {
            image: real_estate, platform: 'Web Design', projectname: 'GERLACH REAL ESTATE',
            projectdescription: 'A real estate website where users can easily find a suitable house to buy and rent. ',
            button: () => { return <Button sx={buttonStyle.button}><Typography sx={buttonStyle.text}>View Design</Typography></Button> }
        },
        {
            image: creative, platform: 'Web Design', projectname: 'CREATIVELY WEBSITE',
            projectdescription: 'A website where we grow creative ideas. Users get to learn various tech skills on the platform.',
            button: () => { return <Button sx={buttonStyle.button}><Typography sx={buttonStyle.text}>View Design</Typography></Button> }
        },
    ]
    return (
        <Box sx={{ mt: { xs: "72px", lg: "160px" }, maxWidth: '1440px', mx: 'auto', mb: { xs: '72px', lg: '96px' } }}>
            <Typography sx={{
                fontFamily: "'Libre Baskerville'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: { xs: '2rem', lg: "2.5rem" },
                lineHeight: { xs: '2.5rem', lg: "3.1rem" },
                color: "#333333",
                textAlign: 'center',
                mb: { xs: '32px', lg: '40px' }
            }}>
                My Latest Project
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: { xs: '40px', lg: "80px" }, px: { xs: '1.6rem', lg: '10rem' } }}>
                {
                    projects.map((x, i) => {
                        return (
                            <Box key={i} sx={{ width: '52.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <Box component={'img'} src={x.image} sx={{height:'100%', width:'100%'}} />
                                <Typography sx={{
                                    fontFamily: "DM Sans",
                                    fontSize: { xs: '1.2rem', lg: "1.4rem" },
                                    fontWeight: "400",
                                    lineHeight: "18px",
                                    letterSpacing: "0em",
                                    textAlign: "left", color: '#828282'
                                }}>
                                    {x.platform}
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "DM Sans",
                                    fontSize: { xs: '1.6rem', lg: '1.8rem' },
                                    fontWeight: "700",
                                    lineHeight: "25px",
                                    letterSpacing: "0em",
                                    textAlign: "left", color: ' #333333'
                                }}>
                                    {x.projectname}
                                </Typography>
                                <Typography sx={{
                                    fontFamily: "DM Sans",
                                    fontSize: "1.4rem",
                                    fontWeight: "400",
                                    lineHeight: "20px",
                                    letterSpacing: "0em",
                                    width: '97%',
                                    textAlign: "left", color: ' #4F4F4F', wordWrap: 'break-word'
                                }}>
                                    {x.projectdescription}
                                </Typography>
                                <Typography sx={{ textTransform: 'lowercase' }}>
                                    {x.button()}
                                </Typography>
                            </Box>
                        )
                    })
                }

            </Box>


        </Box>
    )
}

