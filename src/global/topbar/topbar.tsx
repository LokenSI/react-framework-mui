import { AppBar, Toolbar } from "@mui/material";
import Logo from "./logo";
import DarkModeSwitch from "./darkModeSwitch";

export default function TopBar() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Logo />
          <DarkModeSwitch />
        </Toolbar>
      </AppBar>
    </>
  );
}
