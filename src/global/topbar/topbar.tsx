import { AppBar, Toolbar } from "@mui/material";
import Logo from "./logo";


export default function TopBar() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Logo />
          
        </Toolbar>
      </AppBar>
    </>
  );
}
