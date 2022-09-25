import { Box } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {  GiHamburgerMenu } from 'react-icons/gi'

function Sidebar(props) {
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }
    return (
        <>
            <Box onClick={() => { toggle() }}
                sx={{
                    display: { xs: "inline-block", lg: 'none' },
                    cursor: 'pointer', position: 'absolute', top: '3vh', left: '95%'
                }}  > <GiHamburgerMenu size={'1.85rem'} height={'1.6rem'} /> </Box>
            <Box sx={{
                position: 'fixed', height: '100vh',
                zIndex: '10', bgcolor: '#4F4F4F',
                width: { xs: '50%', md: '25%' },
                display: { lg: 'none' }, left: show ? '0' : "-100%",
                transition: 'left 1s'
                // p: '2rem'
            }}>
                <Box onClick={() => { toggle() }}
                    sx={{
                        width: '30px', height: '30px', position: 'absolute', top: '2vh', left: '80%', borderRadius: "10px", cursor:'pointer'
                    }} > <AiOutlineCloseCircle size={'100%'} color={'#FFFFFF'} /> </Box>
                <Box sx={{ position: 'absolute', top: '95vh', width: '100%', textAlign: 'center', color: 'white' }}>
                    Designed and built by Favour Oyindamola in 2022
                </Box>
            </Box>
        </>
    )
}

export default Sidebar