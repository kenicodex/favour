import { styled, experimental_sx as sx } from "@mui/system";

export const FavButton = styled('button')(
    sx({
        width: { xs: '10.6rem', lg: props => props.width.lg },
        minHeight: { xs: "34px", lg: "41px" },
        mt: { xs: '16px', lg: "24px" },
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        background: "#AF0116",
        boxShadow: "0px 4px 20px rgba(175, 1, 22, .1)",
        borderRadius: "10px",
        fontFamily: "'DM Sans'",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "25px",
        color:'white !important',
        border: 'none',

        '&:hover': {
            background: "#FFFFFF",
            border: '1px solid #AF0116',
            color: '#AF0116 !important',
            cursor: 'pointer'
        }

    })
)
export const ProjectButton = styled('button')(
    sx({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: ".8rem 1rem",
        gap: "1.0rem",
        maxWidth: "16rem",
        color:'white !important',
        background: "#AF0116",
        boxShadow: "0px 4px 15px rgba(175, 1, 22, 0.1)",
        borderRadius: "1rem",
        border: 'none',
        fontSize: "1.7rem",
        lineHeight: "25px",
        '&:hover': {
            background: "#FFFFFF",
            border: '1px solid #AF0116',
            color: '#AF0116 !important',
            cursor: 'pointer'
        }
    })
)
export const ProjectButtonText = styled('span')(
    sx({
        fontFamily: "'DM Sans'",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "1.8rem",
        lineHeight: "25px",
        textDecorationLine: "underline",
        '&:hover':{
            color: '#AF0116 !important',

        }
    })
)