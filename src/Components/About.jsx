import { Box } from '@mui/material'
import React from 'react'
import { ContentText, DetailText, Metric, MetricNum } from './Text'

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
            <Box sx={{
                order: props.order, display: 'flex', mt: { xs: '4rem', lg: '0' },
                flexDirection: 'column', gap: { xs: '32px', lg: '95px' },
                width: { xs: 'auto', lg: pxtoper(260) },
                
            }}>
                {details.map((x, i) => {
                    return (
                        <Box key={i} sx={{ textAlign: { xs: 'center', lg: 'left' }, px: { xs: '3.2rem', lg: '0' }, }}>
                            <DetailText>
                                {x.detail}
                            </DetailText>
                            <ContentText >
                                {x.content()}
                            </ContentText>
                        </Box>
                    )
                })}
            </Box>
        )
    }
    const Image = (props) => {
        return (
            <Box className='linesborder' sx={{
                order: props.order, mx: { xs: 'auto' },
                p: { xs: '1.4rem 1.8rem', lg: "3rem 3.7rem" },
                width: { xs: 258.63, lg: 531.64 }, 
            }}>
                <Box component={'img'} src={process.env.PUBLIC_URL + '/images/favour.png'} height={'100%'} width={'100%'} alt="" />
            </Box>
        )
    }
    const Metrics = (props) => {
        const metrics = [
            { metric: 'Years of Experience', content: () => <>2 <span style={{ fontSize: '2rem' }}>yrs</span> </> },
            { metric: 'Satisfactory Client', content: () => <>100%</> },
            { metric: 'Number of Clients', content: () => <>+10</> },
            { metric: 'Projects done', content: () => <>+10</> },
        ]
        return (
            <Box sx={{
                order: props.order, display: 'flex', width: { xs: 'auto', lg: pxtoper(260) },
                flexDirection: 'column', gap: { xs: '40px', lg: '136px' }, 
            }}>
                {metrics.map((x, i) => {
                    return (
                        <Box key={i} sx={{
                            fontFamily: "'DM Sans'",
                            fontStyle: "normal", textAlign: { xs: 'center', lg: 'right' }
                        }}>
                            <Metric>
                                {x.metric}
                            </Metric>

                            <MetricNum>
                                {x.content()}
                            </MetricNum>
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
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                
                alignItems: 'center',
                mt: { xs: '40px', lg: '64px' },
                // justifyContent: { lg: 'space-between', xl: 'space-between' },
                px: { xs: 'auto', lg: '10rem' },
                maxWidth: '1440px', mx: 'auto'
            }}>
                <Details order={{ xs: 3, lg: 1 }} />
                <Image order={{ xs: 1, lg: 2 }} />
                <Metrics order={{ xs: 2, lg: 3 }} />
            </Box>
        </>
    )
}

