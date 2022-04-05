export interface Dish {
  chefsSpecial: boolean;
  description: string;
  dishName: string;
  featuredImage: {
    url: string;
  };
  id: string;
  price: number;
  slug: string;
  vegan: boolean;
  images?: any;
  mealType: string[];
}

export interface Post {
  postType: string[];
  id: string;
  title: string;
  featuredImg: {
    url: string;
  };
  excerpt: string;
  content: string;
  featuredPost: boolean;
  slug: string;
  images?: any;
  contentEditor: ContentEditor;
  categories: Category[];
  comments: Comment[];
  createdAt: Date;
}

export interface ContentEditor {
  fullName: string;
  image: string;
  bio: string;
  posts: Post[];
}

export interface Category {
  name: string;
  slug: string;
  posts: Post[];
}

export interface Comment {
  name: string;
  email: string;
  comment: string;
}

export interface Gallery {
  name: string;
  image: {
    url: string;
  }
  description: string;
}