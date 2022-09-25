import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
const pxtoper = (px) => `${(px / 1440) * 100}%`

const Typos = () => {
    useEffect(() => {
        for (let i = 0; i < 4; i++) {
            document.querySelector('#twocolors').children[i].style.color = '#000000';
        }
    }, [])
    return (
        <>

            {/* ********************************** Hello Text********************************************* */}
            <Typography sx={{
                position: "absolute",
                left: { xs: 0, lg: pxtoper(450), xl: pxtoper(600) },
                top: { xs: 90, lg: 162 },
                fontFamily: "'Libre Baskerville'",
                fontStyle: "normal",
                fontWeight: "700", width: { xs: '100%', lg: 'auto' },
                fontSize: { xs: '1.8rem', lg: "3rem" },
                lineHeight: { xs: '2.23rem', lg: "3.7rem" },
                color: "#333333", textAlign: 'center'
            }}>
                Hello
                <span id={'twocolors'}>{" I'm Favour Oyindamola Awosise".split("").map((x, i) =>
                    <motion.span style={{ color: '#AF0116' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 * i, type: 'spring', stiffness: 200 }}>{x}</motion.span>
                )}</span>
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
