import { Box } from '@mui/material'
import React from 'react'
import savin from './images/SAVIN.png';
import real_estate from './images/Real_estate.png';
import whatsapp from './images/Whatsapp.png';
import creative from './images/Creatively.png';
import { ProjectButton, ProjectButtonText } from './Button';
import { HeaderText2, ProjectDescription, ProjectName, ProjectPlatform } from './Text';


export function Projects() {

    const projects = [
        {
            image: savin, platform: 'Mobile Design', projectname: 'SAVIN APP',
            projectdescription: 'A saving and micro investment application for students (undergraduates). This application allows students to save for a long period of time.',
            button: () => {
                return (
                    <ProjectButton as='a' href={'https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F147823015%2FSAVIN-A-saving-and-micro-investment-app-%2528CASE-STUDY%2529'}>
                        <ProjectButtonText>Read Casestudy</ProjectButtonText>
                    </ProjectButton>)
            }
        },
        {
            image: whatsapp, platform: 'Mobile Design', projectname: 'WHATSAPP SCHEDULING MESSAGE FEATURE',
            projectdescription: 'The main goal of this project is to add a unique feature to whatsapp which is a scheduling messages feature. This help users to keep track of important messages',
            button: () => {
                return (<ProjectButton as={'a'}
                    href={'https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F143570031%2FWhatsApp-Scheduling-Message-Feature%2528Mini-Case-Study%2529'}>
                    <ProjectButtonText>Read Casestudy</ProjectButtonText>
                </ProjectButton>)
            }
        },
        {
            image: real_estate, platform: 'Web Design', projectname: 'GERLACH REAL ESTATE',
            projectdescription: 'A real estate website where users can easily find a suitable house to buy and rent. ',
            button: () => {
                return (<ProjectButton as={'a'}
                    href={'https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F148093393%2FGerlach-Real-Estate-Landing-Page'}>
                    <ProjectButtonText>View Design</ProjectButtonText>
                </ProjectButton>)
            }
        },
        {
            image: creative, platform: 'Web Design', projectname: 'CREATIVELY WEBSITE',
            projectdescription: 'A website where we grow creative ideas. Users get to learn various tech skills on the platform.',
            button: () => {
                return (<ProjectButton as={'a'}
                    href={'https://www.figma.com/exit?url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F141331747%2FA-landing-page-for-a-learning-platform'}>
                    <ProjectButtonText>View Design</ProjectButtonText>
                </ProjectButton>)
            }
        },
    ]
    return (
        <Box component={'div'} id="projects" sx={{ mt: { xs: "72px", lg: "160px" }, maxWidth: '1440px', mx: 'auto', mb: { xs: '72px', lg: '96px' } }} >
            <HeaderText2 sx={{
                mb: { xs: '32px', lg: '40px' }
            }}>
                My Latest Project
            </HeaderText2>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: { xs: '40px', lg: "80px" }, px: { xs: '1.6rem', lg: '10rem' } }}>
                {
                    projects.map((x, i) => {
                        return (
                            <Box key={i} sx={{ width: '52.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <Box component={'img'} src={x.image} sx={{ height: '100%', width: '100%' }} />
                                <ProjectPlatform>
                                    {x.platform}
                                </ProjectPlatform>
                                <ProjectName>
                                    {x.projectname}
                                </ProjectName>
                                <ProjectDescription >
                                    {x.projectdescription}
                                </ProjectDescription>
                                {x.button()}
                            </Box>
                        )
                    })
                }

            </Box>


        </Box>
    )
}

