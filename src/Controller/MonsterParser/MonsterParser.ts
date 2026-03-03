import { getMonstersData } from "../../Model/Services/API/monsterGet";
import type { Monsters } from "../../Model/types/monsterTypes";

export const getMonsters = async (): Promise<Monsters[]> => {
  const data = await getMonstersData();
  return data;
};
