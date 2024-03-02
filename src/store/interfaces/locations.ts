export interface Region {
    regionId: number;
    regionName: string;
    counties: County[];
    isSelected: boolean;
}

export interface County {
    countyId: number;
    countyName: string;
    isSelected: boolean;
}

export interface LocationsState {
    locations: Region[];
}