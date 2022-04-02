export interface Dish {
  chefsSpecial: boolean;
  description: string;
  dishName: string;
  featuredImage: {
    url: string;
  }
  id: string;
  price: number;
  slug: string;
  vegan: boolean;
}