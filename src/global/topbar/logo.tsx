import { PhotoCamera } from "@mui/icons-material";
import { Typography } from "@mui/material";

import theme from "../theme";

export default function Logo() {
  return (
    <>
      <PhotoCamera sx={{ marginRight: theme.spacing(2) }} />
      <Typography variant="h6">Photo Album</Typography>
    </>
  );
}
