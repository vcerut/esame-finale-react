export type EventDetailType = {
  "id": number;
  "name": string;
  "coverImage": string;
  "date": string;
  "description": DescriptionType;
  "dresscode": string;
  "price": number;
  "includedDrinks": string[];
  "tags": string[];
  "isAperitivoIncluded": boolean;
};

export type DescriptionType = {
  "long": string[];
  "short": string;
};
