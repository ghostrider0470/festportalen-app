import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import {useEffect} from "react";
import {getLocations} from "../store/slices/locationsSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import Input from "@mui/material/Input";
import {filterActions} from "../store/slices/filterSlice.ts";
// import {filterActions} from "../store/slices/filterSlice.ts";

const FilterSidebar = () => {

    const locations = useSelector((state: RootState) => state.locations.locations);
    const filter = useSelector((state: RootState) => state.filter);
    // const _regions: string[] =[];
    // const _counties: string[] =[];
    // const _regions: string[] = filter.regions;
    const dispatch = useDispatch<AppDispatch>();
    // const [searchTerm, setSearchTerm] = useState('');
    const handleRegionChange = (regionId: string) => {
        const _regions = filter.regions.map((region) => region);
        _regions.indexOf(regionId) > -1 ? _regions.splice(_regions.indexOf(regionId), 1) : _regions.push(regionId)
        console.log("Region change", _regions);
        dispatch(filterActions.updateRegions(_regions));
    };

    const handleCountyChange = (countyId: string) => {
        const _counties = filter.counties.map((region) => region);
        _counties.indexOf(countyId) > -1 ? _counties.splice(_counties.indexOf(countyId), 1) : _counties.push(countyId)
        console.log("Region change", _counties);
        dispatch(filterActions.updateCounties(_counties));
    };

    useEffect(() => {

        });

    useEffect(() => {
        dispatch(getLocations());
        // console.log("Filter check", _regions)
    }, [dispatch]);


    return (
        <Box>
            <Input
                placeholder="Search..."
                // onChange={event => setSearchTerm(event.target.value)}
            />
            <Typography variant='h5'>Locations</Typography>
            {locations.map((region, index) => (
                <div key={index}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={() => handleRegionChange(region.regionId.toString())}
                                checked={filter.regions.includes(region.regionId.toString())}
                            />
                        }
                        label={region.regionName}
                    />
                    {filter.regions.includes(region.regionId.toString()) &&
                        region.counties.map((county, index) => (
                            <div key={index} style={{marginLeft: '20px'}}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={() => handleCountyChange(county.countyId.toString())}
                                            checked={filter.counties.includes(county.countyId.toString())}
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