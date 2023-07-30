import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Container, IconButton, Typography } from "@mui/material";

const Post2 = () => {
    return (

        <Box  flex={4} p={2}> 
            
        <Card sx={{margin:5}}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
        R
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVert />
      </IconButton>
    }
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2023"
  />
  <CardMedia
    component="img"
    height="400"
    image="https://www.hindustantimes.com/ht-img/img/2023/06/21/1600x900/hpma-key-art-1200x900_1687366530105_1687366537903.jpg"
    alt="Paella dish"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
    Harry potter and the Magic Awakend is new game introducing magical game , events and Hogward Tour.
    Coming soon on steam.
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
    </IconButton>
    <IconButton aria-label="share">
      <Share />
    </IconButton>
   
  
  </CardActions>
 
</Card>
        
        </Box>

      );
}
 
export default Post2;