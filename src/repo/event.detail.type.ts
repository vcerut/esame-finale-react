export type EventDetailType = {
  id: number;
  name: string;
  coverImage: string;
  date: string;
  description: {
    long: string[];
    short: string;
  };
  dresscode: string;
  price: number;
  includedDrinks: string[];
  tags: string[];
  isAperitivoIncluded: boolean;
};
