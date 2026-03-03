import { getWeaponData } from "../../Model/Services/API/weaponGet";
import type { Monsters } from "../../Model/types/monsterTypes";

export interface ParsedMonster extends Omit<
  Weapons,
  "damage" | "specials" | "crafting"
> {
  damage: number;
  element: string;
  craftable: boolean;
}
export const getWeapons = async (): Promise<ParsedWeapon[]> => {
  const data = await getWeaponData();
  return data.map((item) => ({
    ...item,
    damage: item.damage.display,
    element: item.specials[0]?.element ?? "None",
    craftable: item.crafting.craftable,
  }));
};
