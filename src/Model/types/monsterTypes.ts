export interface Monsters {
  size: Size;
  kind: "large";
  species: string;
  name: string;
  description: string;
  ailments: unknown[];
  locations: Location[];
  resistances: Resistance[];
  weaknesses: Resistance[];
  rewards: Reward[];
  elements: unknown[];
  features: string;
  tips: string;
  baseHealth: number;
  variants: Variant[];
  parts: Part[];
  id: number;
  gameID: number;
}

export interface Location {
  name: Name;
  zoneCount: number;
  id: number;
  gameID: number;
}

export type Name =
  | "Ruins of Wyveria"
  | "Windward Plains"
  | "Scarlet Forest"
  | "Oilwell Basin"
  | "Iceshard Cliffs";

export interface Part {
  kind: string;
  monster: Monster;
  multipliers: Multipliers;
  part: string;
  name: string;
  health: number | null;
  kinsectEssence: KinsectEssence | null;
  id: number;
}

export type KinsectEssence =
  | "red"
  | "white"
  | "green"
  | "orange"
  | "sky"
  | "gray"
  | "yellow"
  | "blue"
  | "rose"
  | "pink"
  | "purple"
  | "brown"
  | "dark-purple"
  | "ultramarine"
  | "vermilion"
  | "blue-purple";

export interface Monster {
  id: number;
}

export interface Multipliers {
  slash: number;
  blunt: number;
  pierce: number;
  fire: number;
  water: number;
  thunder: number;
  ice: number;
  dragon: number;
  stun: number;
}

export interface Resistance {
  effect?: Effect;
  kind: ResistanceKind;
  condition: null | string;
  id: number;
  element?: Element;
  status?: Status;
  level?: number;
}

export type Effect = "noise" | "flash" | "exhaust" | "stun";

export type Element = "thunder" | "water" | "dragon" | "fire" | "ice";

export type ResistanceKind = "effect" | "element" | "status";

export type Status = "poison" | "sleep" | "paralysis" | "blastblight";

export interface Reward {
  item: Item;
  conditions: Condition[];
  id: number;
}

export interface Condition {
  kind: ConditionKind;
  rank: Rank;
  quantity: number;
  chance: number;
  part: null | string;
  id: number;
}

export type ConditionKind =
  | "target-reward"
  | "carve"
  | "carve-rotten"
  | "wound-destroyed"
  | "carve-rotten-severed"
  | "broken-part"
  | "carve-severed"
  | "carve-crystallized"
  | "tempered-wound-destroyed"
  | "broken-fragment";

export type Rank = "low" | "high";

export interface Item {
  id: number;
  gameID: number;
  rarity: number;
  name: string;
  description: string;
  value: number;
  carryLimit: number;
  recipes: unknown[];
  icon: Icon;
}

export interface Icon {
  id: number;
  kind: IconKind;
  colorID: number;
  color: KinsectEssence;
}

export type IconKind =
  | "extract"
  | "scale"
  | "bone"
  | "hide"
  | "certificate"
  | "shell"
  | "claw"
  | "tail"
  | "gem"
  | "question"
  | "ore"
  | "plate"
  | "medulla"
  | "powder"
  | "wing"
  | "crystal"
  | "skull"
  | "honey"
  | "armor-sphere"
  | "mystery-artian";

export interface Size {
  base: number;
  mini: number;
  silver: number;
  gold: number;
}

export interface Variant {
  monster: Monster;
  name: string;
  kind: VariantKind;
  id: number;
}

export type VariantKind = "tempered" | "frenzied" | "alpha";
