export interface CategoriesState {
    categories: Category[];
    status: 'pending' | 'fulfilled' | 'rejected';
}

export interface Category {
    categoryId: string;
    name: string;
    iconFile: string;
}