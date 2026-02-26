import { Box, Paper } from "@mui/material";

export const NotFound = () => {
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        not found page
      </Paper>
    </Box>
  );
};
