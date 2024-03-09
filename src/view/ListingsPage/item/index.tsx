// Desc: Listing Item Page
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect} from "react";
import {getListingById} from "../../../store/slices/listingSlice.ts";
import Box from "@mui/material/Box/Box";
import {getImgUrl} from "../../../utils/cloudinary.ts";
import {Grid, Typography} from "@mui/material";
import parse from 'html-react-parser';
import ListingItemCard from "./components/Card.tsx";

const ListingItemPage = () => {
    const dispatch = useDispatch<AppDispatch>();


    const listing = useSelector((state: RootState) => state.listing.selectedListing);
    const listingStatus = useSelector((state: RootState) => state.listing.status);

    useEffect(() => {
        const id = new URLSearchParams(window.location.search).get('item');
        console.log("ID", id);
        if (id) {
            dispatch(getListingById(id));
        }
    }, [dispatch]);


    useEffect(() => {
        console.log("Listing", listing);
    }, [listingStatus]);

    // @ts-ignore
    return (
        <Box>
            {listingStatus === 'pending' && <p>Loading...</p>}
            {listingStatus === 'fulfilled' &&
                <Box sx={{overflow: 'hidden', bgcolor: 'white'}}>
                    <img src={getImgUrl(listing?.coverImage)}
                         style={{height: '60vh', width: '100%', objectFit: 'cover', objectPosition: 'center 20%'}}
                         alt=''/>
                    <Box sx={{padding: 2, height: '100vh'}} mr={25}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={8}>
                                {<Typography variant='h4'>{listing?.title}</Typography>}
                                {parse(listing?.description as string)}
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <ListingItemCard item={listing}/>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            }
        </Box>
    );
}
export default ListingItemPage;