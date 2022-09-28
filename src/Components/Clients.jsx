import { Box } from '@mui/material'
import React from 'react'
import { ClientsText, HeaderText2 } from './Text'

export function Clients() {
    return (
        <Box sx={{ mt: { xs: '72px', lg: '107px' }, mb: { xs: '72px', lg: '144px' }, maxWidth: '1440px', mx: 'auto' }}>
            <HeaderText2>
                My Clients
            </HeaderText2>

            <Box sx={{ mt: '32px', px: { xs: '', lg: '23.4rem' }, display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: "space-between" }}>
                {['KodeCamp', 'DiazClou', 'SAED', 'WomenTechster'].map((x, i) => {
                    return <ClientsText key={i}>{x}</ClientsText>
                })}
            </Box>
        </Box>
    )
}
