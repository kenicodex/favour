import { Box, Typography } from '@mui/material'
import React from 'react'

const pxtoper = (px) => `${(px / 1440) * 100}%`

export function About() {

    // ********************************** Detials Image and Metrics*********************************************
    const Details = (props) => {
        const details = [
            {
                detail: 'Biography',
                content: () => <> I am a UI/UX designer conceptualizing and crafting digital products. i am passionate about improving the lives of others through designs and also delivering end to end UI/UX designs on software products.</>
            },
            {
                detail: 'Contact',
                content: () => <>Ibadan, Nigeria <br />oyindamolafavour2017@gmail.com <br /> 08157595234</>
            },
            {
                detail: 'Services',
                content: () => <> Website Design <br /> Mobile Application Design <br />  Wireframing <br /> Prototyping <br /> Interaction Design / Animation</>
            },
        ]
        return (
            <Box sx={{ order: props.order, display: 'flex', flexDirection: 'column', gap: { xs: '32px', lg: '95px' }, width: { xs: 'auto', lg: pxtoper(298) } }}>
                {details.map((x, i) => {
                    return (
                        <Box key={i} sx={{ textAlign: { xs: 'center', lg: 'left' }, px: { xs: '3.2rem', lg: '0' } }}>
                            <Typography sx={{
                                fontFamily: "DM Sans",
                                fontSize: "18px",
                                fontWeight: "400",
                                lineHeight: "23px",
                                letterSpacing: "0em",
                                color: ' #828282'
                            }}>
                                {x.detail}
                            </Typography>
                            <Typography sx={
                                {
                                    fontFamily: "DM Sans",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    lineHeight: "25px",
                                    letterSpacing: "0em",
                                    maxWidth: '100%', p: '0',
                                    color: '#4F4F4F',
                                }
                            }>
                                {x.content()}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        )
    }
    const Image = (props) => {
        return (
            <Box sx={{
                order: props.order,
                border: '1.65419px dashed #AF0116', mx: { xs: 'auto' },
                ml: { xs: 'auto', lg: `${5.7 - 1.2}rem` }, borderRadius: '260.4px',
                p: { xs: '1.4rem 1.8rem', lg: "3rem 3.7rem" },
                width: { xs: 258.63, lg: 531.4 }, height: { xs: '404px', lg: '830px' }
            }}>
                <Box component={'img'} src={process.env.PUBLIC_URL + '/images/favour.png'} height={'100%'} width={'100%'} alt="" />
            </Box>
        )
    }
    const Metrics = (props) => {
        const metrics = [
            { metric: 'Years of Experience', content: () => <>2 <span>yrs</span> </> },
            { metric: 'Satisfactory Client', content: () => <>100%</> },
            { metric: 'Number of Clients', content: () => <>+10</> },
            { metric: 'Projects done', content: () => <>+10</> },
        ]
        return (
            <Box sx={{ order: props.order, display: 'flex', flexDirection: 'column', gap:{xs:'40px',lg:'136px' } }}>
                {metrics.map((x, i) => {
                    return (
                        <Box sx={{
                            fontFamily: "'DM Sans'",
                            fontStyle: "normal", textAlign: { xs: 'center', lg: 'right' }
                        }}>
                            <Typography
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "1.8rem",
                                    lineHeight: "2.3rem",
                                    color: ' #828282;'
                                }}>
                                {x.metric}
                            </Typography>

                            <Typography
                                sx={{
                                    fontWeight: "500",
                                    fontSize: "3.2rem",
                                    lineHeight: "2.5rem",
                                    color: ' #4F4F4F;'
                                }}>
                                {x.content()}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        )
    }
    return (
        <>
            {/*
             *All text up are absolute\
             *A margin top is added to move over the abslute top property from the above Typos
            */}
            <Box component={'div'} sx={{
                display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: { xs: '40px', lg: '0' },
                alignItems: 'center', mt: { xs: '212px', lg: '358.97px' },
                justifyContent: 'center', px: { xs: 'auto', lg: '10rem' }, maxWidth: '1440px', mx: 'auto'
            }}>
                <Details order={{ xs: 3, lg: 1 }} />
                <Image order={{ xs: 1, lg: 2 }} />
                <Metrics order={{ xs: 2, lg: 3 }} />
            </Box>
        </>
    )
}

