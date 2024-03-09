import {useEffect, useState} from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "src/store/store";
import {fetchListings} from "../../store/slices/listingSlice.ts";
import ListingItem from "../../components/ListingItem.tsx";
import FilterSidebar from "../../components/FilterSidebar.tsx";
import {Listing} from "../../store/interfaces/listing.ts";
import {filterActions} from "../../store/slices/filterSlice.ts";


const ListingsPage = () => {
    const [initialized, setInitialized] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const listings = useSelector((state: RootState) => state.listing);
    const filter = useSelector((state: RootState) => state.filter);
    useEffect(() => {
        if (initialized) {
            // Get the current URL
            // const currentURL = window.location.href;
            // console.log("Current URL:", currentURL);
            // Get the search parameters from the URL

            // dispatch(fetchListings(filter));
        } else {
            setInitialized(true);

            dispatch(filterActions.setFilterBasedOnUrl());
            // dispatch(filterActions.setFilter(request));
            //
        }
    }, [dispatch, initialized]);

    useEffect(() => {
        // console.log("Filter check", filter);
        dispatch(fetchListings(filter));
    }, [dispatch, filter]);


    const ItemList = ({items}: { items: Listing[] }) => {
        return (
            <Grid container spacing={2}>
                {items.map((item) => (<Grid key={item.guid} item xs={12} sm={6} md={4}>
                    <ListingItem key={item.guid} {...item}/>
                </Grid>))}
            </Grid>
        );

    }

    return (
        <Box bgcolor="white" sx={{height: 'auto'}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Box sx={{padding: 2}}>
                            <Typography variant="h6" gutterBottom>
                                <FilterSidebar/>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid mt={10} item xs={12} sm={8} md={9}>
                        {listings && <ItemList items={listings.resultList}/>}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default ListingsPage;