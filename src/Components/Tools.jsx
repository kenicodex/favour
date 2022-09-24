import { Box, Typography } from '@mui/material'
import React from 'react'

export function Tools() {
    const tools = [
        { img: '', tool: 'Figma', color: '', percent: '100%' }
    ]
    return (
        <Box sx={{ mt: { xs: '72px', lg: '90px' }, maxWidth: '1440px', px: '10rem', margin: 'auto' }}>
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

            <Box sx={{display:'flex'}}>
                {tools.map((x, i) => {
                    return (
                        <Box>
                            <Box key={i} sx={{
                                width: "228.46px",
                                height: "324.15px",
                                background: "#0ACF83",
                                opacity: "0.1",
                            }}>

                            </Box>
                            <Typography sx={{
                                fontFamily: "'DM Sans'",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "26px",
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
