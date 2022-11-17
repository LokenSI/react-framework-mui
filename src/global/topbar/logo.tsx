import { PhotoCamera } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { companyNameState } from "../globalState";

// Uses recoil to get company name. Replace "PhotoCamera" with the correct logo.
export default function Logo() {
  const companyName = useRecoilValue(companyNameState);
  return (
    <>
      <PhotoCamera sx={{ marginRight: '10px' }} />
      <Typography variant="h6">{companyName}</Typography>
    </>
  );
}
