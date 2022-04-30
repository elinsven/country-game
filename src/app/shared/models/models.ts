export interface Country {
  country: string;
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
