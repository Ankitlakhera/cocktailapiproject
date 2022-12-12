import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from './common/Box';


export default function Homepopup({ props }) {
  console.log('data', props.drinks);

  return (

    <>
      {
        props?.drinks.map((dataC, i) => {
          return (
            <div key={i}>
              <Box sx={{ display: 'flex' }} key={i}>

                <Card sx={{ bgcolor: '#cfe8fc', width: '60vh', height: '100vh', margin: '4rem', padding: '1rem' }}>
                  <item>
                    <CardMedia
                      component="img"

                      size
                      image='' src={dataC.strDrinkThumb}
                    />
                  </item>
                  <item>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {dataC.strDrink}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {dataC.strAlcoholic}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {dataC.strInstructions}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </item>
                </Card>
              </Box>
            </div>
          )
        })
      }
    </>
  )

}