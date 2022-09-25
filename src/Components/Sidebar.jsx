import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'


import { BsBehance, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { AiFillInstagram } from 'react-icons/ai'

function Sidebar(props) {
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }
    return (
        <>
            <Box onClick={() => { toggle() }}
                sx={{
                    display: { xs: "inline-block", lg: 'none' },
                    cursor: 'pointer', position: 'absolute', top: '3vh', left: { xs: '90%', md: '95%' }
                }}  > <GiHamburgerMenu size={'1.85rem'} height={'1.6rem'} />
            </Box>

            <Box sx={{
                position: 'fixed', height: '100vh',
                zIndex: '10', bgcolor: '#4F4F4F',
                width: { xs: '50%', md: '25%' },
                display: { lg: 'none' }, left: show ? '0' : "-100%",
                transition: 'left 1s'
            }}>
                <Box onClick={() => { toggle() }}
                    sx={{
                        width: '25px', height: '25px', position: 'absolute', top: '2vh', left: '80%', borderRadius: "10px", cursor: 'pointer'
                    }} > <AiOutlineCloseCircle size={'100%'} color={'#FFFFFF'} />
                </Box>

                <Box component={'section'}>

                    <Box component={'img'} src={process.env.PUBLIC_URL + "/icons/logo.png"} sx={{ width: { xs: "2.4rem", lg: '4.1rem' }, height: { xs: "2.9rem", lg: '4.8rem' }, mt: '2vh', ml: '2rem' }} />

                    <Divider sx={{ my: '1rem', bgcolor: 'white' }} />
                </Box>

                <Box sx={{ ml: '2rem', width: '100%', color: 'white', mt: '4rem' }}>
                    <Typography sx={{ my: '1.2rem', fontSize: '1.5rem' }}>Work</Typography>
                    <Typography sx={{ my: '1.2rem', fontSize: '1.5rem' }}>Resume</Typography>
                </Box>
                <Box sx={{}}>
                    <Box sx={{display:'flex',flexDirection:'column',
                        gap: '2rem', ml: '2rem', width: '100%', color: 'white', mt: '4rem'
                    }}>
                        {[
                            { media: 'Twitter', icon: <BsTwitter />, link: '' },
                            { media: 'Linkedin', icon: <BsLinkedin />, link: '' },
                            { media: 'Behance', icon: <BsBehance />, link: '' },
                            { media: 'Email', icon: <GoMail />, link: '' },
                            { media: 'Instagram', icon: <AiFillInstagram />, link: '' },
                            { media: 'Facebook', icon: <BsFacebook />, link: '' },
                        ].map((x, i) => {
                            return <>
                                <Box sx={{ display: 'flex', gap: '1rem', fontSize:'2rem' }}>
                                    {x.icon}
                                    <Typography sx={{fontSize:'1.5rem'}}> {x.media}</Typography>
                                </Box>
                            </>
                        })}

                    </Box>
                </Box>
                <Box sx={{ position: 'absolute', top: '95vh', width: '90%', mx: 'auto', textAlign: 'center', color: 'white' }}>
                    Designed and built by Favour Oyindamola in 2022
                </Box>
            </Box>
        </>
    )
}

export default Sidebar