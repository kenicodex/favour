import { Box } from '@mui/material'
import React from 'react'
import figma from './images/figma.png'
import miro from './images/miro.png'
import googleforms from './images/googleforms.png'
import adobexd from './images/adobexd.png'
import { HeaderText2, ToolName, ToolNum } from './Text'

export function Tools() {
    const tools = [
        {
            image: figma, tool: 'Figma', bgcolor: 'rgba(10, 207, 131, 0.1)',
            style: { height: { xs: '80px', lg: '112px' }, width: { xs: '53px', lg: '75px' } }, percent: '100%'
        },
        {
            image: adobexd, tool: 'Adobe XD', bgcolor: 'rgba(71, 1, 55, 0.1)',
            style: { height: { xs: '80px', lg: '112px' }, width: { xs: '81px', lg: '112px' } }, percent: '100%'
        },
        {
            image: googleforms, tool: 'Google form', bgcolor: 'rgba(116, 75, 189, 0.1)',
            style: { height: { xs: '80px', lg: '112px' }, width: { xs: '61pxpx', lg: '85px' } }, percent: '100%'
        },
        {
            image: miro, tool: 'Miro', bgcolor: 'rgba(255, 208, 47, 0.1)',
            style: { height: { xs: '84px', lg: '112px' }, width: { xs: '84px', lg: '113px' } }, percent: '100%'
        },
    ]
    return (
        <Box sx={{ mt: { xs: '72px', lg: '90px' }, maxWidth: '1440px', px: { xs: '1.6rem', lg: '10rem' }, margin: 'auto' }}>
            <HeaderText2 sx={{ mb: '40px' }} > Tools Used </HeaderText2>
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
                                // gap: '32px',
                                borderRadius: '50%'
                            }}>
                                <Box component={'img'} src={x.image} sx={{ width:x.style.width, height:x.style.height }} alt="err" />
                                <ToolNum>{x.percent}</ToolNum>

                            </Box>
                            <ToolName> {x.tool}</ToolName>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
