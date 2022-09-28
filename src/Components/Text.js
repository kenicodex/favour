import { styled, experimental_sx as sx } from "@mui/system";

export const HeaderText = styled('p')(
    sx({
        fontFamily: "'Libre Baskerville'",
        fontStyle: "normal",
        fontWeight: "700",
        color: "#333333",
        my: 0,
        textAlign: 'center'
    })
)
export const HeaderText1 = styled(HeaderText)(
    sx({
        fontSize: { xs: '1.8rem', lg: "3rem" },
        lineHeight: { xs: '2.2rem', lg: '3.7rem' },
    })
)
export const HeaderText2 = styled(HeaderText)(
    sx({
        fontSize: { xs: '1.8rem', lg: "3rem" },
        lineHeight: { xs: '2.2rem', lg: '3.7rem' },
    })
)
export const DetailText = styled('p')(
    sx({
        fontFamily: "DM Sans",
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "23px",
        letterSpacing: "0em",
        color: ' #828282',
        mb: '.8rem'
    })
)
export const ContentText = styled('p')(
    sx({
        fontFamily: "DM Sans",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "25px",
        letterSpacing: "0em",
        maxWidth: '100%', p: '0',
        color: '#4F4F4F',
    })
)
export const Metric = styled('p')(
    sx({
        fontWeight: "400",
        fontSize: "1.8rem",
        lineHeight: "2.3rem",
        color: ' #828282;',
        mb: '2rem'
    }),

)

export const MetricNum = styled('span')(
    sx({
        fontWeight: "500",
        fontSize: "3.2rem",
        lineHeight: "2.5rem",
        color: ' #4F4F4F;'
    }),

)

export const Ee = styled('p')(
    sx({
        // display:'inline-block',
        fontFamily: "'DM Sans'",
        fontStyle: "normal",
        m: '0rem'
    }),

)
export const EeHeader = styled(Ee)(
    sx({
        fontWeight: "700",
        fontSize: { xs: '1.8rem', lg: '2rem' },
        lineHeight: "2.6rem",
        color: "#333333",
        mb: '5px'
    }),
)
export const EePosition = styled(Ee)(
    sx({
        fontWeight: "500",
        fontSize: { xs: '1.4rem', lg: "1.6rem" },
        lineHeight: "2.5rem",
        color: "#4F4F4F"
    }),
)
export const EeDuration = styled(Ee)(
    sx({
        fontWeight: "400",
        fontSize: { xs: '1.4rem', lg: "1.6rem" },
        lineHeight: "1.6rem",
        color: "#828282"
    }),
)

export const EeDescription = styled(Ee)(
    sx({
        fontWeight: "400",
        fontSize: { xs: '1.3rem', lg: "1.4rem" },
        lineHeight: "23px",
        color: "#4F4F4F", width: '100%',
        wordWrap: 'break-word'
    })

)


export const ClientsText = styled('p')(
    sx({
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
    }),
)


export const ToolNum = styled('p')(
    sx({
        fontFamily: "'Libre Baskerville'",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: { xs: '2rem', lg: '3rem' },
        lineHeight: '3.7rem',
        color: "#333333"
    })
)

export const ToolName = styled(Ee)(
    sx({
        fontWeight: "700",
        fontSize: { xs: '1.8rem', lg: '2rem' },
        lineHeight: { xs: '2.3rem', lg: '2.6rem' },
        textAlign: "center",
        color: "#333333"
    })
)
export const ProjectPlatform = styled(Ee)(
    sx({
        fontSize: { xs: '1.2rem', lg: "1.4rem" },
        fontWeight: "400",
        lineHeight: "18px",
        letterSpacing: "0em",
        textAlign: "left", color: '#828282'
    })
)
export const ProjectName = styled(Ee)(
    sx({
        fontSize: { xs: '1.6rem', lg: '1.8rem' },
        fontWeight: "700",
        lineHeight: "25px",
        letterSpacing: "0em",
        textAlign: "left", color: ' #333333'
    })
)
export const ProjectDescription = styled(Ee)(
    sx({
        fontFamily: "DM Sans",
        fontSize: "1.4rem",
        fontWeight: "400",
        lineHeight: "20px",
        letterSpacing: "0em",
        width: '97%',
        textAlign: "left", color: ' #4F4F4F', wordWrap: 'break-word'
    })
)

