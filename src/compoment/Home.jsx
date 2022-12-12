import React from 'react'
import Box from './common/Box';
import Card from './common/card';
import { styled } from '@mui/material/styles';
import { CardHeader, Hidden } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContact from './common/CardContact';
import CardActions from './common/CardActions';
import Collapse from './common/Collapse';
import IconButton from './common/IconButton';
import Typography from './common/Typography';
import ShareIcon from './common/ShareIcon';
import ExpandMoreIcon from './common/ExpandMoreIcon';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const ExpandMore = styled((props) => {
    // console.log(props)
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
function Home(propsD) {
    const { onClickOpenCard, strDrink } = propsD
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);


    };

    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 6, }} >
                {strDrink.length > 0 ? strDrink.map((item, index) => {
                    return (
                        <Box key={index}>
                            <Card onClick={() => onClickOpenCard(item.idDrink)}
                                sx={{ bgcolor: '#cfe8fc', width: '40vh', height: '90vh', margin: '4rem', padding: '1rem' }}

                            >
                                <CardHeader

                                    title={item.strDrink}
                                    subheader={item.strAlcoholic}
                                />
                                <CardMedia
                                    component="img"
                                    sx={{ width: '100%', height: "Auto" }}
                                    image='' src={item.strDrinkThumb}
                                    alt='ite'
                                />
                                <Box sx={{width:250,height:100,overflow:"hidden"}}>
                                <CardContact>
                                    <Typography variant="body2" color="text.secondary" sx={{overflow:"auto"}}>
                                        {item.strInstructions}
                                    </Typography>
                                </CardContact>
                                </Box>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContact>

                                        <Typography paragraph>
                                            {item.strIngredient1}
                                        </Typography>
                                    </CardContact>
                                </Collapse>
                            </Card>
                        </Box>

                    )
                }) : <h1>not data found</h1>
                }

            </Box>

        </>

    )
}
export default Home;

