import { Box, Typography } from '@mui/material'
import React from 'react'
const pxtoper = (px) => `${(px / 1440) * 100}%`

export function Nav() {
    return (
        <Box component={'nav'} sx={{
            display: 'flex', border:'1px solid green',
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
                {['Works', 'MyResume'].map((link,i) => {
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
                {[
                    { mediasrc: 'twitter_fill.png', link: "/" }, { mediasrc: 'linkedin.png', link: "/" },
                    { mediasrc: 'Behance.png', link: "/" }, { mediasrc: 'mail.png', link: "/" },
                    { mediasrc: 'ins_fill.png', link: "/" }, { mediasrc: 'facebook.png', link: "/" }
                ].map(({ mediasrc, link },i) => {
                    return (
                        <img key={i} src={process.env.PUBLIC_URL + '/icons/' + mediasrc} alt={mediasrc} width={'24px'} height={'24px'} />
                    )
                })}

            </Box>

            <Box component={'img'} src={process.env.PUBLIC_URL + "icons/hamburger.png"}
                sx={{
                    display: { xs: "inline-block", lg: 'none' },
                    width: '1.85rem', height: '1.65rem'
                }} />

        </Box >
    )
}
