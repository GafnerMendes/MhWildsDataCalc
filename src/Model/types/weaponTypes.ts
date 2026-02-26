export interface Weapons {
  coatings?: Coating[];
  gameID: number;
  crafting: Crafting;
  rarity: number;
  kind: WeaponKind;
  damage: Damage;
  specials: Special[];
  name: string;
  description: string;
  defenseBonus: number;
  elderseal: null;
  slots: number[];
  affinity: number;
  skills: SkillElement[];
  series: EchoBubble | null;
  id: number;
  phial?: PhialUnion;
  sharpness?: Sharpness;
  handicraft?: number[];
  shell?: Shell;
  shellLevel?: number;
  ammo?: Ammo[];
  melody?: Melody;
  echoBubble?: EchoBubble;
  echoWave?: EchoBubble | null;
  kinsectLevel?: number;
  specialAmmo?: SpecialAmmo;
}

type Ammo = {
  kind: StatusEnum;
  level: number;
  capacity: number;
  id: number;
  rapid?: boolean;
};

type StatusEnum =
  | "normal"
  | "pierce"
  | "spread"
  | "sticky"
  | "thunder"
  | "poison"
  | "demon"
  | "recover"
  | "tranq"
  | "wyvern"
  | "water"
  | "armor"
  | "exhaust"
  | "cluster"
  | "flaming"
  | "paralysis"
  | "slicing"
  | "freeze"
  | "sleep"
  | "dragon"
  | "blastblight";

type Coating =
  | "power"
  | "paralysis"
  | "exhaust"
  | "pierce"
  | "blast"
  | "close-range"
  | "sleep"
  | "poison";

type Crafting = {
  weapon: Weapon;
  craftable: boolean;
  previous: Branch | null;
  branches: Branch[];
  craftingMaterials: Material[];
  craftingZennyCost: number;
  upgradeMaterials: Material[];
  upgradeZennyCost: number;
  column: number;
  row: number;
  id: number;
};

type Branch = {
  name: string;
  id: number;
};

type Material = {
  item: Item;
  quantity: number;
  id: number;
};

type Item = {
  id: number;
  gameID: number;
  rarity: number;
  name: string;
  description: string;
  value: number;
  carryLimit: number;
  recipes: number[];
  icon: Icon;
};

type Icon = {
  id: number;
  kind: IconKind;
  colorID: number;
  color: Note;
};

type Note =
  | "gray"
  | "yellow"
  | "purple"
  | "white"
  | "red"
  | "blue"
  | "green"
  | "pink"
  | "dark-purple"
  | "ultramarine"
  | "rose"
  | "sky"
  | "ivory"
  | "vermilion"
  | "orange"
  | "brown"
  | "lemon"
  | "blue-purple"
  | "aqua";

type IconKind =
  | "certificate"
  | "extract"
  | "claw"
  | "powder"
  | "skull"
  | "scale"
  | "wing"
  | "medulla"
  | "bone"
  | "hide"
  | "shell"
  | "tail"
  | "plate"
  | "ore"
  | "unknown"
  | "gem"
  | "honey"
  | "crystal"
  | "question"
  | "bug";

type Weapon = {
  id: number;
};

type Damage = {
  raw: number;
  display: number;
};

type EchoBubble = {
  kind?: string;
  name: string;
  id: number;
  gameID: number;
};

type WeaponKind =
  | "bow"
  | "charge-blade"
  | "dual-blades"
  | "great-sword"
  | "gunlance"
  | "hammer"
  | "heavy-bowgun"
  | "hunting-horn"
  | "insect-glaive"
  | "lance"
  | "light-bowgun"
  | "long-sword"
  | "switch-axe"
  | "sword-shield";

type Melody = {
  id: number;
  gameID: number;
  notes: Note[];
  songs: Song[];
};

type Song = {
  effectID: number;
  sequence: Note[];
  name: string;
  id: number;
};

type PhialUnion = PhialClass | PhialEnum;

interface PhialClass {
  kind: PhialKind;
  damage?: Damage;
}

type PhialKind =
  | "power"
  | "exhaust"
  | "poison"
  | "paralyze"
  | "element"
  | "dragon";

type PhialEnum = "impact" | "element";

interface Sharpness {
  red: number;
  orange: number;
  yellow: number;
  green: number;
  blue: number;
  white: number;
  purple: number;
}

type Shell = "normal" | "wide" | "long";

interface SkillElement {
  skill: SkillSkill;
  level: number;
  name: null;
  description: string;
  id: number;
}

interface SkillSkill {
  id: number;
  name: string;
  description: string;
}

type SpecialAmmo = "wyvernblast" | "adhesive";

export type Special = {
  element?: Element;
  kind: PurpleKind;
  weapon: Weapon;
  damage: Damage;
  hidden: boolean;
  id: number;
  status?: StatusEnum;
};

type Element = "water" | "thunder" | "ice" | "fire" | "dragon";

type PurpleKind = "element" | "status";
