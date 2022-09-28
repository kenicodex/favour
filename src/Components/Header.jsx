import { Box } from '@mui/system'
import React from 'react'
import { FavButton, ProjectButtonText } from './Button'
import { links } from './links'
import { HeaderText1 } from './Text'
import Typewriter from 'typewriter-effect';
// import Typed from "react-typed"

export function Header() {
    const Reveal = () => {
        return <Typewriter
            options={{
                strings: [" I'm <span style='color:#AF0116'> Favour Oyindamola Awosise </span>"],
                autoStart: true,
                loop: true, cursor: ''
            }}
        />
    }
    return (
        <Box sx={{ maxWidth: '1440px', mx: 'auto', textAlign: 'center', position: 'relative' }}>
            <Box sx={{ width: { xs: 'fit-content', lg: 'fit-content' }, ml: { xs: '13%', lg: '30%' } }}>
                <HeaderText1 sx={{ textAlign: 'left', mt: { xs: '40px', lg: '89px' }, mb: '21px', display: 'flex', gap: '3px' }}>
                    Hello, <span style={{ diplay: 'inline-block' }}><Reveal /></span>
                </HeaderText1>
            </Box>
            <HeaderText1>A Product Designer</HeaderText1>
            <HeaderText1>Based in Nigeria</HeaderText1>
            <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center' }}> {/* Button div */}
                <FavButton>
                    <ProjectButtonText as={'a'} href={links.email}
                        sx={{ textDecoration: 'none', color: '#FFFFFF', width: { xs: '16.5rem', lg: '11.5rem' }, textTransform: 'initial' }}>  Hire me </ProjectButtonText>
                </FavButton>
            </Box>
        </Box >
    )
}
