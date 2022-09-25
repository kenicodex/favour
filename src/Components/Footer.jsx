import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { BsBehance, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

export function Footer() {
    return (
        <Box sx={{ bgcolor: '#4F4F4F', maxHeight: { xs: '309px', lg: '300px' } }}>

            <Box sx={{
                px: { xs: '', lg: '10rem' }, display: 'flex', flexDirection: { xs: 'column', lg: 'row' },
                 justifyContent: { xs: 'space-evenly', lg: 'space-between' }, alignItems: 'center',
                minHeight: { xs: "309px", lg: '148px' },
                //  pt: { xs: '32px', lg: '0' }
            }}>
                <Typography sx={{
                    fontFamily: "'Irish Grover'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "3rem",
                    lineHeight: "36px",
                    color: "#FFFFFF"
                }}
                >Design_Mogul_</Typography>

                <Box sx={{ display: 'flex', gap: { xs: '2.4rem', lg: '4.8rem' }, flexDirection: { xs: 'column', lg: 'row' }, mt: { xs: '3.2rem', lg: '0' } }}>
                    {[{ navitem: 'Works', link: '/' }, { navitem: 'My Resume', link: '/' }].map((x, i) => {
                        return <Typography sx={{
                            fontFamily: "'DM Sans'",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#FFFFFF", textAlign: 'center',
                            cursor: 'pointer'
                        }}>{x.navitem}</Typography>
                    })}
                </Box>

                <Box sx={{ display: 'flex', gap: '2.2rem' }}>
                    <BsTwitter color="white" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <BsLinkedin color="white" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <BsBehance color="white" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <GoMail color="white" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <BsInstagram color="white" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <BsFacebook color="white" size={'2rem'} style={{ cursor: 'pointer' }} />
                </Box>
            </Box>

            <Divider sx={{ bgcolor: '#F5F5F5', pt:0 }} />
            <Typography sx={{
                fontFamily: "'DM Sans'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "25px",
                color: "#FFFFFF",
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',bgcolor: '#4F4F4F',
                height: { xs: '40px', lg: `${200 - 148}px` }
            }}>
                Designed and built by Favour Oyindamola in 2022
            </Typography>
        </Box>
    )
}