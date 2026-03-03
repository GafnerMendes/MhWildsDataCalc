import axios from "axios";
import { type Weapons } from "../../types/weaponTypes";

export const getMonstersData = async (): Promise<Weapons[]> => {
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
