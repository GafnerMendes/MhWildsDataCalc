import { useEffect, useState } from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { getWeapons } from "../../../Controller/WeaponParser/WeaponParser";
import { type Weapons } from "../../../Model/types/weaponTypes";

const columns: GridColDef<Weapons>[] = [
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
    valueGetter: (value, row) => row.damage.display,
  },
  {
    field: "specials",
    headerName: "Element",
    width: 120,
    valueGetter: (value, row) => row.specials[0]?.element ?? "",
    valueFormatter: (value: string) => value.toUpperCase(),
  },
];

export default function WeaponsTable() {
  const [rows, setRows] = useState<Weapons[]>([]);
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
      pageSizeOptions={[10, 25, 50]}
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
    />
  );
}
