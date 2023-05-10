import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography sx={{ margin: 0 }} >{title}</Typography>
    </Box>
  );
};

export default Header;
