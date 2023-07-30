import  Typography  from "@mui/material/Typography";
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from "./component/sidebar";
import Feed  from "./component/feed";
import Rightbar from "./component/rightbar";
import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import Stack from '@mui/material/Stack';
import Navbar from "./component/navbar";
import Add  from "./component/Add";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box  bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      < Sidebar  setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add />
  </Box>
  </ThemeProvider>
  );
}

export default App;
