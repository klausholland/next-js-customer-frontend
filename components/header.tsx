import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        padding: "1rem 2rem",
      }}
    >
      <Typography variant="h2">Customer Management</Typography>
    </Box>
  );
};

export default Header;