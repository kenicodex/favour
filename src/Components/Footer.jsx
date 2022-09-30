import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { BsBehance, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { links } from './links'

export function Footer() {
    return (
        <Box sx={{ bgcolor: '#4F4F4F', maxHeight: { xs: '309px', lg: '300px' } }}>

            <Box sx={{
                px: { xs: '', lg: '10rem' }, display: 'flex', flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: { xs: 'space-evenly', lg: 'space-between' }, alignItems: 'center',
                minHeight: { xs: "309px", lg: '148px' },
                //  pt: { xs: '32px', lg: '0' }
            }}>
                <Box sx={{ display: { xs: 'inline-block', lg: 'none' } }} component={'img'} src={process.env.PUBLIC_URL + '/images/footerlogo.png'} />
                <Box sx={{ display: { xs: 'none', lg: 'inline-block' } }} component={'img'} src={process.env.PUBLIC_URL + '/images/Design_Mogul.png'} />

                <Box sx={{ display: 'flex', gap: { xs: '2.4rem', lg: '4.8rem' }, flexDirection: { xs: 'column', lg: 'row' }, mt: { xs: '3.2rem', lg: '0' } }}>
                    {[{ target: '', navitem: 'Works', link: '#projects' }, { target: 'blank', navitem: 'My Resume', link: 'https://drive.google.com/file/d/1imrHK6_fTwk0Tbg-bFIOXe5JMmh59RgG/view?usp=drivesdk' }].map((x, i) => {
                        return <Typography key={i} component="a" href={x.link} target={x.target} sx={{
                            fontFamily: "'DM Sans'",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "23px",
                            color: "#FFFFFF", textAlign: 'center',
                            cursor: 'pointer', textDecoration:'none'
                        }}>{x.navitem}</Typography>
                    })}
                </Box>

                <Box sx={{ display: 'flex', gap: '2.2rem' }}>

                    <a target={'blank'} href={links.twitter}><BsTwitter color=" #FFFFFF" size={'2rem'} style={{ cursor: 'pointer' }} /></a>
                    <a target={'blank'} href={links.linkedin} ><BsLinkedin color=" #FFFFFF" size={'2rem'} style={{ cursor: 'pointer' }} /></a>
                    <a target={'blank'} href={links.behance}><BsBehance color=" #FFFFFF" size={'2rem'} style={{ cursor: 'pointer' }} /></a>
                    <a target={'blank'} href={links.email}><GoMail color=" #FFFFFF" size={'2rem'} style={{ cursor: 'pointer' }} /></a>
                    {/* <BsInstagram color="white" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <BsFacebook color="white" size={'2rem'} style={{ cursor: 'pointer' }} /> */}
                </Box>
            </Box>

            <Divider sx={{ bgcolor: '#F5F5F5', pt: 0 }} />
            <Typography sx={{
                fontFamily: "'DM Sans'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "25px",
                color: "#FFFFFF",
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center', bgcolor: '#4F4F4F',
                height: { xs: '40px', lg: `${200 - 148}px` }
            }}>
                Designed and built by Favour Oyindamola in 2022
            </Typography>
        </Box>
    )
}