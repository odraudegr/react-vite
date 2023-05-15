import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography sx={{ mb: 5, ml: 5, fontSize: "2em", fontWeight: "bold"  }} >{title}</Typography>
    </Box>
  );
};

export default Header;
