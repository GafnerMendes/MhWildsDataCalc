import { getBowData } from "../../Model/Services/API/api";
import type { Weapons } from "../../Model/types/weaponTypes";

export interface ParsedWeapon extends Omit<
  Weapons,
  "damage" | "specials" | "crafting"
> {
  damage: number; // was Damage object
  element: string; // was specials array
  craftable: boolean; // was Crafting object
}
export const getWeapons = async (): Promise<ParsedWeapon[]> => {
  const data = await getBowData();
  return data.map((item) => ({
    ...item,
    damage: item.damage.display,
    element: item.specials[0]?.element ?? "None",
    craftable: item.crafting.craftable,
  }));
};
