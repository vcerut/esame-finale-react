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
  "includedDishes": DishesType[];
};

export type DescriptionType = {
  "long": string[];
  "short": string;
};

export type DishesType = {
  "name": string;
  "description": string;
  "allergens": string[];
}