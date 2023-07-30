import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Container, IconButton, Typography } from "@mui/material";
import Post from "./post";
import Post2 from "./post2";
const Feed = () => {
    return ( 
       
            <Box  flex={4} p={2}> 
            
         <Post/>
         <Post2/>
        


            
            </Box>
        
        
        );
}
 
export default Feed;