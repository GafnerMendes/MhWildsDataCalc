import { Box, Paper, Typography } from "@mui/material";

// const FalseData = [
//   { name: "name", weakness: ["fire", "water"] },
//   { name: "name", weakness: ["fire", "water"] },
//   { name: "name", weakness: ["fire", "water"] },
//   { name: "name", weakness: ["fire", "water"] },
//   { name: "name", weakness: ["fire", "water"] },
//   { name: "name", weakness: ["fire", "water"] },
// ];

export default function Monsters() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "30px",
        marginRight: "20px",
      }}
    >
      {/* HEADER DOS TROÇO */}
      <Box>
        <Paper
          elevation={1}
          sx={{
            height: "500px",
            width: "1800px",
          }}
        >
          <Typography>fucking hell</Typography>
        </Paper>
      </Box>
      {/* LISTA DOS BAGULHO */}
      <Box>
        <Typography>lista de troço</Typography>
      </Box>
    </Box>
  );
}
