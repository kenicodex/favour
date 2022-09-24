import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const pxtoper = (px) => `${(px / 1440) * 100}%`

const Typos = () => {
    return (
        <>

            {/* ********************************** Hello Text********************************************* */}
            <Typography sx={{
                position: "absolute",
                left: { xs: pxtoper(31), lg: pxtoper(415) },
                top: { xs: 90, lg: 162 },
                fontFamily: "'Libre Baskerville'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: { xs: '1.8rem', lg: "3rem" },
                lineHeight: { xs: '2.23rem', lg: "3.7rem" },
                color: "#333333"
            }}>
                Hello
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
                
{/* // **********************************  Product Desiner a, Based In Nigeria and Hire me Button ********************************************* */}
                <Typography sx={
                    {
                        position: "absolute",
                        width: '100%',
                        height: "37px",
                        top: { xs: '120px', lg: "220px" },
                        fontFamily: "Libre Baskerville",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: { xs: '1.8rem', lg: "3rem" },
                        lineHeight: "3.7rem",
                        color: "#333333"
                    }
                }>
                    A Product Designer
                </Typography>
                <Typography sx={{
                    position: "absolute",
                    width: "100%",
                    height: "37px",
                    top: { xs: '150px', lg: "265px" },
                    fontFamily: "Libre Baskerville",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: { xs: '1.8rem', lg: "3rem" },
                    lineHeight: "3.7rem",
                    color: "#333333"
                }}>
                    Based in Nigeria
                </Typography>
                <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center' }}> {/* Button div */}
                    <Button sx={
                        {
                            position: "absolute",
                            width: { xs: '10.6rem', lg: "11.5rem" },
                            height: { xs: "34px", lg: "41px" },
                            top: { xs: '188px', lg: "326px" },
                            background: "#AF0116",
                            boxShadow: '0px 4px 20px rgba(175, 1, 22, 0.1)',
                            borderRadius: "1rem"
                        }
                    }>
                        <Typography sx={{
                            fontFamily: "'DM Sans'",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: { xs: '1.6rem', lg: "1.8rem" },
                            lineHeight: { xs: '1.8rem', lg: "2.5rem" },
                            color: "#FFFFFF"
                        }}>
                            H<span style={{ textTransform: 'lowercase' }}>ire me</span>
                        </Typography>
                    </Button>
                </Box>

            </Box>
        </>
    )
}

// ****************************************** Main Component *************************************
export function Header() {
    return (
        <>
            <Typos />{/* Hello A Product Designer Based in Nigeria Hire me */}

        </>
    )
}
