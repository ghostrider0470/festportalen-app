// Desc: Listing Item Page
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect} from "react";
import {getListingById} from "../../../store/slices/listingSlice.ts";
import Box from "@mui/material/Box/Box";
import {getImgUrl} from "../../../utils/cloudinary.ts";
import {Container, Divider, Grid, Typography} from "@mui/material";
import parse from 'html-react-parser';
import ListingItemCard from "./components/Card.tsx";
import Gallery from "./components/Gallery.tsx";

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
        <Box sx={{bgcolor: 'white', minWidth: "100vw"}}>
            {listingStatus === 'pending' && <p>Loading...</p>}
            {listingStatus === 'fulfilled' &&
                <Grid container>
                    <Grid container>
                        <Box sx={{overflow: 'hidden', minWidth: "100vw"}}>
                            <img height='600px' src={getImgUrl(listing?.coverImage)}
                                 style={{width: '100%', objectFit: 'cover', objectPosition: 'center 20%'}}
                                 alt=''/>
                            <Box sx={{padding: 2}}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={7} md={7} lg={8}>
                                        <Container>
                                            <Box mt={5}>
                                                {/*<Container>*/}
                                                <Box>
                                                    {<Typography variant='h4'>{listing?.title}</Typography>}
                                                    <Divider/>
                                                </Box>
                                                <Box mt={5}>
                                                    {parse(listing?.description as string)}
                                                </Box>
                                                {/*</Container>*/}
                                            </Box>
                                        </Container>
                                    </Grid>
                                    <Grid item>
                                        <ListingItemCard item={listing}/>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Box id='gallery' bgcolor='lightgray' sx={{minWidth: '100vw', justifyContent: 'left'}}>
                                <Box ml={20}>
                                    <Grid item xs={12} sm={12} md={5} lg={6}>
                                        <Typography variant='h4'>Gallery</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} lg={6}>
                                        <Gallery/>

                                    </Grid>
                                    {/*<Divider/>*/}
                                </Box>


                            </Box>


                        </Grid>
                    </Grid>

                </Grid>
            }
        </Box>
    );
}
export default ListingItemPage;