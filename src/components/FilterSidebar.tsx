import {Box, Checkbox, Collapse, FormControlLabel, List, ListItem, ListItemButton, ListSubheader} from "@mui/material";
import React, {useEffect} from "react";
import {getLocations} from "../store/slices/locationsSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {filterActions} from "../store/slices/filterSlice.ts";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Input from "@mui/material/Input";

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
        dispatch(getLocations(filter));
        // console.log("Filter check", _regions)
    }, [dispatch]);

    const [isLocationsListOpen, setLocationsListOpen] = React.useState(true);
    const [isProductsListOpen, setIsProductsListOpen] = React.useState(true);
    const [isServicesListOpen, setIsServicesListOpen] = React.useState(true);

    const handleClickLocation = () => {
        setLocationsListOpen(!isLocationsListOpen);
    };
    const handleClickProducts = () => {
        setIsProductsListOpen(!isProductsListOpen);
    };

    const handleClickServices = () => {
        setIsServicesListOpen(!isServicesListOpen);
    };


    return (
        <Box mt={8}>
            <List

                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Filters Menu
                    </ListSubheader>
                }
            >
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        /!*<SendIcon/>*!/*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText primary="Sent mail"/>*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        /!*<DraftsIcon/>*!/*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText primary="Drafts"/>*/}
                {/*</ListItemButton>*/}
                <ListItem>
                    <Input
                        placeholder="Search..."
                        // onChange={event => setSearchTerm(event.target.value)}
                    />
                </ListItem>
                <ListItemButton onClick={handleClickLocation}>
                    {/*<ListItemIcon>*/}
                    {/*    /!*<InboxIcon/>*!/*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Locations" secondary={`Found ${locations.length - 1}`}/>
                    {isLocationsListOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={isLocationsListOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 4}}>
                            <Box>

                                {/*<Typography variant='h5'>Locations</Typography>*/}
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
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClickProducts}>
                    {/*<ListItemIcon>*/}
                    {/*    /!*<InboxIcon/>*!/*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Products" secondary={`Found ${locations.length - 1}`}/>
                    {isProductsListOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={isProductsListOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 4}}>
                            <Box>

                            </Box>
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClickServices}>
                    {/*<ListItemIcon>*/}
                    {/*    /!*<InboxIcon/>*!/*/}
                    {/*</ListItemIcon>*/}
                    <ListItemText primary="Services" secondary={`Found ${locations.length - 1}`}/>
                    {isServicesListOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={isServicesListOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 4}}>
                            <Box>

                            </Box>
                        </ListItemButton>
                    </List>
                </Collapse>

            </List>
        </Box>
    );
};

export default FilterSidebar;