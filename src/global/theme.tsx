import { Box, createTheme } from '@mui/material'
import { green } from '@mui/material/colors'
import { red } from '@mui/material/colors'
import { styled } from "@mui/material/styles";


// Define the theme for the whole page.


const theme = createTheme({
        palette: {
            mode:'light',
            primary: {
                main: green[500]
            }
        },
        typography: {
            button: {
            //marginTop: '2rem',
              //fontSize: '1rem',
            },
        },
        components: {
            MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
                // Here you can toggle ripple effect
            }
            },
            MuiContainer: {
            
            }
        }
    });

    export const StyledBox = styled(Box)(({ theme }) => ({
        fontSize: '2rem',
        backgroundColor: theme.palette.primary.dark,
    }))

    export default theme;

