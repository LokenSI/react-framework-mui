import { green } from '@mui/material/colors'
import { red } from '@mui/material/colors'
import darkTheme from './darkTheme';


const lightTheme = {

    palette: {
            primary: {
                mode: 'light',
                main: green[500],
            }
        },
        typography: {
            button: {
            //marginTop: '2rem',
              //fontSize: '1rem',
            },
            fontFamily: '"Source-Sans-Pro", "Roboto", sans-serif',
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
    };

    export default lightTheme;

