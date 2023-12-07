export type EventType = {
  id: number;
  name: string;
  coverImage: string;
  date: string;
  description: {
    short: string;
  };
  dresscode: string;
  price: number;
  includedDrinks: [string];
  tags: [string];
  isAperitivoIncluded: boolean;
};
