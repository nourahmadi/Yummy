export class DISH {
  id!: number;
  name!: string;
  origins?: string[];
  imageUrl!: string;
  cookTime!: string;
  ingredients!: string[];
  steps!: string[];
  favorite: boolean = false;
  stars: number = 0;
}
