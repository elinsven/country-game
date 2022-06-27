import { Continent } from "./continent";

export interface Country {
  country: string;
  continent: Continent;
  countryimage: {
    data: number[];
    type: string;
  };
  location: number[];
}