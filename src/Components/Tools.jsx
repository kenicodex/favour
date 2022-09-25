import { Box, Typography } from '@mui/material'
import React from 'react'
import figma from './images/figma.png'
import miro from './images/miro.png'
import googleforms from './images/googleforms.png'
import adobexd from './images/adobexd.png'

export function Tools() {
    const tools = [
        { image: figma, tool: 'Figma', bgcolor: 'rgba(10, 207, 131, 0.1)', percent: '100%' },
        { image: adobexd, tool: 'Adobe XD', bgcolor: 'rgba(71, 1, 55, 0.1)', percent: '100%' },
        { image: googleforms, tool: 'Google form', bgcolor: 'rgba(116, 75, 189, 0.1)', percent: '100%' },
        { image: miro, tool: 'Miro', bgcolor: 'rgba(255, 208, 47, 0.1)', percent: '100%' },
    ]
    return (
        <Box sx={{ mt: { xs: '72px', lg: '90px' }, maxWidth: '1440px', px: { xs: '1.6rem', lg: '10rem' }, margin: 'auto' }}>
            <Typography sx={{
                fontFamily: "'Libre Baskerville'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: { xs: '2rem', lg: "2.5rem" },
                lineHeight: "3.1rem",
                color: "#333333",
                textAlign: 'center',
                pb: '40px',
            }}>Tools Used</Typography>

            <Box sx={{
                display: 'flex', flexDirection: 'row',
                justifyContent: { xs: 'space-around', lg: 'space-between' },
                flexWrap: { xs: 'wrap', lg: 'nowrap' }, rowGap: { xs: '66px' }
            }}>
                {tools.map((x, i) => {
                    return (
                        <Box key={i}>
                            {/* <img scr={process.env.PUBLIC_URL + '/images/favour.png'} width={'75px'} height={'112px'} alt="" /> */}
                            <Box key={i} sx={{
                                width: { xs: '16.5rem', lg: "22.846rem" },
                                height: { xs: '234px', lg: "324.15px" },
                                background: x.bgcolor,
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center',
                                mb: '1.6rem', flexDirection: 'column',
                                gap: '32px',
                                borderRadius: '50%'
                            }}>
                                <img src={x.image}  maxWidth={'85px'} maxHeight={'112px'} alt="err" />
                                <Typography
                                    sx={{
                                        fontFamily: "'Libre Baskerville'",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: { xs: '2rem', lg: '3rem' },
                                        lineHeight: '3.7rem',
                                        color: "#333333"
                                    }}
                                >
                                    {x.percent}
                                </Typography>
                            </Box>
                            <Typography sx={{
                                fontFamily: "'DM Sans'",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: { xs: '1.8rem', lg: '2rem' },
                                lineHeight: { xs: '2.3rem', lg: '2.6rem' },
                                textAlign: "center",
                                color: "#333333"
                            }}>
                                {x.tool}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
