import { AppBar,Toolbar,Typography,styled} from "@mui/material";
import { Box, Container } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import { InputBase } from '@mui/material';
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
const StyledToolbar= styled(Toolbar)({display:"flex", justifyContent:"space-between"})
const Iconbox=styled("div")(({theme})=>({
display:"flex"
}))
const Search=styled(Box)(({theme})=>({
    backgroundColor:"white",
   Padding: "0 10px",
borderRadius: theme.shape.borderRadius,
   width:"40%"
  
  }))

const Navbar = () => {
  const [open,setopen]=useState(false);
    return ( 
        <AppBar position="sticky">
            <StyledToolbar >
           <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
              Lame dev
            </Typography>
            <PetsIcon sx={{display:{xs:"block", sm:"none"}}}/>
            <Search >
             
              < InputBase  placeholder=" search....." />
             
              </Search>
            <Iconbox>
            <Badge badgeContent={4} color="error">
  <Mail/>
  
</Badge>
<Badge badgeContent={2} color="error">
  <Notifications/>
  
</Badge>
<Avatar  sx={{width:30,height:30}} src="https://s.yimg.com/fz/api/res/1.2/Cu_LDa6wAo_e3FoJYwpWMg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE1NA--/https://s.yimg.com/zb/imgv1/bfd1ca3d-66fd-3768-a63a-921505b75002/t_500x300"
onClick={(e)=>setopen(true)}
/>
            </Iconbox>
            </StyledToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
       onClose={(e)=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
     );
}
 
export default Navbar;