export type Continent = "All continents" | "Africa" | "Asia" | "Europe" | "North America" | "South America" | "Australia/Oceania";

export interface Country {
  country: string;
  continent: Continent;
  countryimage: {
    data: number[];
    type: string;
  };
  location: number[];
}

export enum Theme {
  LIGHT_THEME = "LIGHT_THEME",
  DARK_THEME = "DARK_THEME",
}

export enum GameStatus {
  WON = "won",
  LOST = "lost",
  IN_PROGRESS = "inProgress",
}
