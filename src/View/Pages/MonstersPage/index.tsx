import { useEffect, useState } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { getWeapons } from "../../../Controller/WeaponParser/WeaponParser";
import type { ParsedWeapon } from "../../../Controller/WeaponParser/WeaponParser";
import { dataGridStyles } from "./styles";
const columns: GridColDef<ParsedWeapon>[] = (
  [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "kind", headerName: "Kind", width: 150 },
    { field: "rarity", headerName: "Rarity", type: "number", width: 100 },
    { field: "affinity", headerName: "Affinity", type: "number", width: 100 },
    {
      field: "defenseBonus",
      headerName: "Defense Bonus",
      type: "number",
      width: 130,
    },
    {
      field: "damage",
      headerName: "Damage",
      width: 120,
    },
    {
      field: "element",
      headerName: "Element",
      width: 120,
    },
  ] as GridColDef<ParsedWeapon>[]
).map((col) => ({ ...col, headerAlign: "center", align: "center" }));

export default function Armory() {
  const [rows, setRows] = useState<ParsedWeapon[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchWeapons = async () => {
    try {
      setLoading(true);
      const data = await getWeapons();
      setRows(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeapons();
  }, []);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      sx={dataGridStyles}
    />
  );
}
