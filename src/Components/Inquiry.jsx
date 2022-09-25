import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export function Inquiry() {
    return (
        <Box sx={{
            bgcolor: "rgba(175, 1, 22, .05)",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            height: { xs: '187px', lg: '231px' },
            mb: { xs: '32px', lg: '40px' }
        }}>
            <Typography sx={{
                fontFamily: "'Libre Baskerville'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: { xs: '2.0rem', lg: "3.0rem" },
                lineHeight: "37px",
                color: "#333333"
            }}>
                Work Inquiry?
            </Typography>

            <Typography sx={{
                fontFamily: "'DM Sans'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: { xs: '1.4rem', lg: "1.6rem" },
                lineHeight: "25px",
                color: "#4F4F4F"
            }}>
                Let’s work together and you can get best from me 😄
            </Typography>

            <Button sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px 19px",
                gap: "10px",
                width: "169px",
                height: "41px",
                background: "#AF0116",
                boxShadow: "0px 4px 15px rgba(175, 1, 22, 0.1)",
                borderRadius: "10px",
                mt: { xs: `${2.4 - .8}rem`, lg: `${3.2 - .8}rem` }

            }}>
                <Typography sx={{
                    fontFamily: "DM Sans",
                    fontSize: { xs: '1.4rem', lg: "1.8rem" },
                    fontWeight: "500",
                    lineHeight: "25px",
                    letterSpacing: "0em",
                    color: 'white'
                }}>Send me a mail</Typography>
            </Button>
        </Box>
    )
}