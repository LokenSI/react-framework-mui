import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { Suspense } from 'react';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const cards = [1,2,3,4,5,6,7,8,9];

function PhotoAlbum() {

  return (
    
        <>
        <div>
            <Container maxWidth="sm" sx={{ padding: '20px' }}>
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
                  <Suspense fallback={<CircularProgress />}>
                  <CardMedia
                    image="https://picsum.photos/200/300"
                    title="Image title"
                    sx={{
                        paddingTop: '56.25%' //16:9
                    }}
                  />
                  </Suspense>
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
        </>
  );
}

export default PhotoAlbum;