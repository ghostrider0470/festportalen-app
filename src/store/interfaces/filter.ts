export interface FilterState {
    categoryId: string | null;
    subCategories: string[];
    regions: string[];
    counties: string[];
    keyword: string | null;
    page: number;
    pageSize: number;
    sortBy: string;
}