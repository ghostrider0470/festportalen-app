// Desc: Listing Item Page
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {useEffect} from "react";
import {getListingById} from "../../../store/slices/listingSlice.ts";
import Box from "@mui/material/Box/Box";
import {getImgUrl} from "../../../utils/cloudinary.ts";
import {Card, CardContent, CardHeader, CardMedia, Chip, Container, Grid, Link, Typography} from "@mui/material";
import parse from 'html-react-parser';

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

    return (
        <Box>
            {listingStatus === 'pending' && <p>Loading...</p>}
            {listingStatus === 'fulfilled' &&
                <Box sx={{overflow: 'hidden', bgcolor: 'white'}}>
                    <img src={getImgUrl(listing?.coverImage)}
                         style={{height: '60vh', width: '100%', objectFit: 'cover', objectPosition: 'center 20%'}}
                         alt=''/>
                    <Box sx={{padding: 2, height: '100vh'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={8}>
                                {<Typography variant='h4'>{listing?.title}</Typography>}
                                {parse(listing?.description as string)}
                                {/*{<Typography variant='h6'>{listing?.description}</Typography>}*/}
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Card variant='outlined'>
                                    <CardHeader
                                        // avatar={<img src={getImgUrl(listing?.coverImage)} style={{height: '200px', width: '200px', objectFit: 'cover'}} alt=''/>}
                                        title={<Typography variant='h4'>{listing?.title}</Typography>}
                                        subheader={
                                            <Box>
                                                <Typography variant='h6' mb={5}>
                                                    <Link href={'https://' + listing?.website}>{listing?.website}</Link>
                                                </Typography>
                                                <Box mt={4}>
                                                    <Container>
                                                        {/*<Typography variant='h6'>Tags</Typography>*/}
                                                        <Grid ml={1} container spacing={5} sm={12} md={12}>
                                                            {listing?.tags?.map((tag) => {
                                                                return <Box mt={2} ml={1}>
                                                                    <Chip
                                                                        color="secondary"
                                                                        label={
                                                                            <Typography variant='h6'>{tag}</Typography>
                                                                        } variant="outlined"/>
                                                                </Box>
                                                            })}
                                                        </Grid>
                                                    </Container>
                                                </Box>
                                            </Box>

                                        }
                                    />
                                    <CardContent>

                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={getImgUrl(listing?.companyPhoto)}
                                        alt="Paella dish"
                                    >
                                        {/*<img src={getImgUrl(listing?.coverImage)} style={{height: '200px', width: '200px', objectFit: 'cover'}} alt=''/>*/}
                                    </CardMedia>
                                    {/*<h1>Details</h1>*/}
                                    {/*<p>{listing?.description}</p>*/}

                                </Card>
                                {/*<h1>Details</h1>*/}
                                {/*<p>{listing?.description}</p>*/}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            }
        </Box>
    );
}
export default ListingItemPage;