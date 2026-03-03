// styles/WeaponsTableStyles.ts
import type { SxProps } from "@mui/material";

export const dataGridStyles: SxProps = {
  backgroundColor: "#1a1a2e",
  border: "1px solid #2a2a4a",
  borderRadius: 2,
  color: "#e0e0e0",

  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#16213e",
    borderBottom: "2px solid #0f3460",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    color: "#e94560",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
  },
  "& .MuiDataGrid-sortIcon": {
    color: "#e94560",
  },

  "& .MuiDataGrid-row": {
    borderBottom: "1px solid #2a2a4a",
    "&:hover": { backgroundColor: "#0f3460" },
    "&.Mui-selected": {
      backgroundColor: "#e9456020",
      "&:hover": { backgroundColor: "#e9456030" },
    },
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "1px solid #2a2a4a",
    "&:focus": { outline: "none" },
  },

  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#16213e",
    borderTop: "2px solid #0f3460",
    color: "#e0e0e0",
  },
  "& .MuiTablePagination-root": {
    color: "#e0e0e0",
  },
  "& .MuiIconButton-root": {
    color: "#e0e0e0",
    "&:hover": { backgroundColor: "#0f3460" },
    "&.Mui-disabled": { color: "#4a4a6a" },
  },
};
