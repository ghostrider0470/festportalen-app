import {useEffect} from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "src/store/store";
import {fetchListings, Listing} from "../../store/slices/listingSlice.ts";
import ListingItem from "../../components/ListingItem.tsx";
import FilterSidebar from "../../components/FilterSidebar.tsx";


const ListingsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const listings = useSelector((state: RootState) => state.listing);
    const filter = useSelector((state: RootState) => state.filter);

    // const getListings = () => {

    //     // @ts-ignore
    //     dispatch(fetchListings(request));
    // }

    const ItemList = ({items}: { items: Listing[] }) => {
        return (<div>
            <Grid container spacing={2}>
                {items.map((item) => (<Grid key={item.guid} item xs={12} sm={6} md={4}>
                    <ListingItem {...item}/>
                </Grid>))}
            </Grid>

        </div>);

    }


    useEffect(() => {

        const request = {
            category: filter.category,
            subCategories: ["string"],
            regions: ["string"],
            counties: ["string"],
            keyword: ["string"],
            page: 0,
            pageSize: 0,
            sortBy: "string"
        }

        dispatch(fetchListings(request));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    return (
        <Box bgcolor="white">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Box sx={{padding: 2, height: '100vh', width: '20%'}}>
                            <Typography variant="h6" gutterBottom>
                                <FilterSidebar/>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                        <ItemList items={listings?.resultList || []}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default ListingsPage;