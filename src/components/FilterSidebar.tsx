import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getLocations, locationsActions} from "../store/slices/locationsSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import Input from "@mui/material/Input";
// import {filterActions} from "../store/slices/filterSlice.ts";

const FilterSidebar = () => {

    const locations = useSelector((state: RootState) => state.locations.locations);
    const filter = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch<AppDispatch>();
    const [searchTerm, setSearchTerm] = useState('');
    const handleRegionChange = (locationId: number) => {
        console.log(searchTerm)
        dispatch(locationsActions.checkLocation(locationId));
    };

    // const handleCountyChange = (locationId: number, countyId: number) => {
    //     dispatch(locationsActions.checkCounty({locationId, countyId}));
    // };
    useEffect(() => {
        const selectedRegions: string[] = [];
        const selectedCounties: string[] = [];
        locations.forEach((region) => {
            if (region.isSelected) {
                selectedRegions.push(region.regionName);
                region.counties.forEach((county) => {
                    if (county.isSelected) {
                        selectedCounties.push(county.countyName);
                    }
                });
            }


        });
        // dispatch(filterActions.updateCountiesAndRegions({counties: selectedCounties, regions: selectedRegions}));
        console.log(filter)
    }, [locations]);

    useEffect(() => {
        dispatch(getLocations());
    }, []);

    return (
        <Box>
            <Input
                placeholder="Search..."
                onChange={event => setSearchTerm(event.target.value)}
            />
            <Typography variant='h5'>Locations</Typography>
            {locations.map((region, index) => (
                <div key={index}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => handleRegionChange(region.regionId)}
                                // checked={region.isSelected}
                            />
                        }
                        label={region.regionName}
                    />
                    {region.isSelected &&
                        region.counties.map((county, index) => (
                            <div key={index} style={{marginLeft: '20px'}}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // onChange={() => handleCountyChange(region.regionId, county.countyId)}
                                            // checked={isRegionChecked(county.countyId)}
                                        />
                                    }
                                    label={county.countyName}
                                />
                            </div>
                        ))}
                </div>
            ))}
        </Box>
    );
};

export default FilterSidebar;