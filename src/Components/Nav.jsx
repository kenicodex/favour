import { Box, Typography } from '@mui/material'
import React from 'react'

import { BsBehance, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { AiFillInstagram } from 'react-icons/ai'
import Sidebar from './Sidebar'
const pxtoper = (px) => `${(px / 1440) * 100}%`
console.log(process.env.PUBLIC_URL + "kjjjjk");

export function Nav() {
    return (
        <>
            <Sidebar  />
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
                    {['Works', 'MyResume'].map((link, i) => {
                        return (
                            <Typography key={i} component={'span'} sx={{
                                display: { xs: 'none', lg: 'inline-block' },
                                fontFamily: 'DM Sans',
                                fontSize: '1.8rem', fontWeight: '400',
                                lineHeight: '2.rem',
                                letterSpacing: '0em',
                                textAlign: 'left',
                            }}>{link}</Typography>
                        )
                    })}
                </Box>

                <Box sx={{ // socialmeida
                    display: { xs: 'none', lg: 'flex' },
                    gap: { xs: '', lg: '2.2rem' }
                }}>

                    <BsTwitter color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <BsLinkedin color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <BsBehance color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <GoMail color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <AiFillInstagram color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} />
                    <BsFacebook color=" #333333" size={'2rem'} style={{ cursor: 'pointer' }} />
                </Box>


            </Box >
        </>
    )
}
