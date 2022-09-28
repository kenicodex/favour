import { Box, Typography } from '@mui/material'
import React from 'react'

import { BsBehance, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import Sidebar from './Sidebar'
import { links } from './links'
const pxtoper = (px) => `${(px / 1440) * 100}%`
console.log(process.env.PUBLIC_URL + "kjjjjk");

export function Nav() {
    return (
        <>
            <Sidebar />
            <Box component={'nav'} sx={{
                display: 'flex',
                justifyContent: { xs: 'space-between', lg: "none" },
                p: { xs: '2rem 1.603rem 0 1.6rem ', lg: '2.4rem 11.3rem 0 10rem' }
            }}>
                {/*  logo */}
                <Box component={'img'} src={process.env.PUBLIC_URL + "/icons/logo.png"} sx={{ width: { xs: "2.4rem", lg: '4.1rem' }, height: { xs: "2.9rem", lg: '4.8rem' } }} />

                <Box sx={{ //nav
                    display: "flex", gap: '4.8rem',
                    pl: { xs: '', lg: pxtoper(376) },
                    pr: { xs: '', lg: pxtoper(380) },
                }}>
                    {[{ name: 'Works', link: links.works }, { name: 'My Resume', link:links.resume }].map((link, i) => {
                        return (
                            <Typography href={link.link} key={i} component={'a'} sx={{
                                display: { xs: 'none', lg: 'inline-block' },
                                fontFamily: 'DM Sans',
                                fontSize: '1.8rem', fontWeight: '400',
                                textDecoration:'none',color:'black',
                                textAlign: 'left',cursor:'pointer'
                            }}>{link.name}</Typography>
                        )
                    })}
                </Box>

                <Box sx={{ // socialmeida
                    display: { xs: 'none', lg: 'flex' },
                    gap: { xs: '', lg: '2.2rem' }
                }}>

                    <a href={links.twitter}><BsTwitter color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} /></a>
                    <a href={links.linkedin} ><BsLinkedin color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} /></a>
                    <a href={links.behance}><BsBehance color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} /></a>
                    <a href={links.email}><GoMail color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} /></a>
                    {/* <AiFillInstagram color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <BsFacebook color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} /> */}
                </Box>


            </Box >
        </>
    )
}
