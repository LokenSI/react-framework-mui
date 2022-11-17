import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Button,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { atom, useRecoilValue } from "recoil";
import darkTheme from "../global/darkTheme";
import lightTheme from "../global/lightTheme";
// Import the custom styledbox from the global theme

const cards = [1,2,3,4,5,6,7,8,9]

export const darkModeState = atom({
  key: 'darkModeState',
  default: true,
});

function Main() {
  const DarkMState = useRecoilValue(darkModeState);
  console.log(DarkMState);
  let theme = DarkMState ? createTheme(lightTheme) : createTheme(darkTheme);
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <div>
            <Container maxWidth="sm" sx={{ padding: theme.spacing(8, 0, 6) }}>
              {/* Example of using sx inline styling */}
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <div>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  marginTop="2rem"
                >
                  <Grid item>
                    <Button
                      className="button"
                      variant="contained"
                      color="primary"
                    >
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined">Edit photo</Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container maxWidth="md">
            <Grid container spacing={4}>
            { cards.map((cards) => (
                <Grid item key={cards} xs={12} sm={6} md={4}>
                <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                  <CardMedia
                    image="https://picsum.photos/200/300"
                    title="Image title"
                    sx={{
                        paddingTop: '56.25%' //16:9
                    }}
                  />
                  <CardContent sx={{
                    flexGrow: '1'
                  }}>
                    <Typography gutterBottom variant="h5">
                        Heading
                    </Typography>
                    <Typography>
                        This is a media card content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
              
            </Grid>
          </Container>
        </main>
        <footer>
          Footer
        </footer>
      </ThemeProvider>
    </>
  );
}

export default Main
