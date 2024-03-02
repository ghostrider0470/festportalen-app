export interface FilterState {
    keyword: string;
    category: string;
    subCategories: string[];
    regions: string[];
    counties: string[];
    page: number;
    pageSize: number;
    sortBy: string;
}