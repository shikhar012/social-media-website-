import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Brightness2Icon from '@mui/icons-material/Brightness2';
const Sidebar = ({mode,setMode}) => {
    return (  
        
            <Box  flex={1} p={2} sx={{display :{xs:"none" ,sm:"block" }}}>
     <Box position={'fixed'}>
             <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home page" />
            </ListItemButton> 
           
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary=" pages" />
            </ListItemButton> 
           
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupsIcon  />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton> 
           
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Store" />
            </ListItemButton> 
           
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="friend" />
            </ListItemButton> 
           
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton> 
           
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton> 
         </ListItem>
         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Brightness2Icon />
              </ListItemIcon>
              <Switch  onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton> 
           
          
           
          </ListItem>
          </List>
          </Box>
            </Box>
        
    );
}
 
export default Sidebar;