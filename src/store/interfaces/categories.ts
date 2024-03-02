export interface CategoriesState {
    categories: Category[];
    status: 'pending' | 'fulfilled' | 'rejected';
}

export interface Category {
    categoryId: number;
    name: string;
    iconFile: string;
}