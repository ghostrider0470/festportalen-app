// export interface ListingRequest {
//     categoryId: string | null;
//     subCategories: string[];
//     regions: string[];
//     counties: string[];
//     keyword: string | null;
//     page: number;
//     pageSize: number;
//     sortBy: string;
// }

export interface ListingState {
    selectedListing: ListingItem | null;
    status: 'pending' | 'fulfilled' | 'rejected';
    resultCount: number;
    page: number;
    totalPages: number;
    resultList: Listing[];
}

export interface ListingItem {
    coverImage: string;
    title: string;
    description: string;
    companyPhoto: string;
    links: Links;
    tags: string[];
}

export interface Links {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    website: string;

}

export interface Listing {
    advertisementId: number;
    dateCreated: Date;
    title?: string;
    averageRating?: number;
    shortDescription?: string;
    description?: string;
    postalCity?: string;
    region?: string;
    companyLogo?: string;
    categoryId: number;
    categoryIcon?: string;
    categoryName?: string;
    advertisementCoverImage?: string;
    firstGalleryImage?: string;
    companyId: number;
    companyName?: string;
    facebookUrl?: string;
    twitterUrl?: string;
    instagramUrl?: string;
    linkedinUrl?: string;
    youTubeUrl?: string;
    priceRange: number;
    priceFrom?: number;
    clicks: number;
    cols: number;
    type?: string;
    guid?: string;
    isActive: boolean;
    isDraft: boolean;
    isRejected: boolean;
    isApproved: boolean;
    countAdvertisementClicks: number;
    countPhoneClicks: number;
    countMesasges: number;
    countLinkClicks: number;
    countAdvertisementFavorite: number;
}
