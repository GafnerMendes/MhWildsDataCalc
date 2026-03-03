import axios from "axios";
import { type Monsters } from "../../types/monsterTypes";

export const getMonstersData = async (): Promise<Monsters[]> => {
  try {
    const response = await axios({
      method: "get",
      url: "https://wilds.mhdb.io/en/monsters",
    });
    return response.data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};
