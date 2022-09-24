import { Box, Typography } from '@mui/material'
import React from 'react'

export function Clients() {
    return (
        <Box sx={{ mt: { xs: '72px', lg: '107px' }, mb: { xs: '72px', lg: '144px' }, maxWidth: '1440px', mx: 'auto' }}>
            <Typography
                sx={{
                    height: "31px",
                    fontFamily: "'Libre Baskerville'",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: { xs: '2rem', lg: "2.5rem" },
                    lineHeight: "31px",
                    color: "#333333",
                    textAlign: 'center',
                    width: '100%'
                }}>
                My Clients
            </Typography>

            <Box sx={{ mt: '32px', px: { xs: '', lg: '23.4rem' }, display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: '9.6rem' }}>
                {['KodeCamp', 'DiazClou', 'SAED', 'WomenTechster'].map((x, i) => {
                    return <Typography key={i}
                        sx={{
                            width: "auto",
                            height: "37px",
                            fontFamily: "'Libre Baskerville'",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "3rem",
                            lineHeight: "3.7rem",
                            color: "#5F5F5F",
                            textAlign: 'center',
                            opacity: .3
                        }}
                    >{x}</Typography>
                })}
            </Box>
        </Box>
    )
}
