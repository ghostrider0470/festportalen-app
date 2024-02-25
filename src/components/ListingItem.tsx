import {Listing} from "../store/slices/listingSlice.ts";
import React from "react";
import {Card, CardActions, CardContent, CardMedia, Rating, Stack, Typography} from "@mui/material";
import {getImgUrl} from "../cloudinary.ts";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ListingItem: React.FC<Listing> = (item: Listing) => {
    const shortenDescription = (description: string | undefined): string => {
        if (description === undefined) {
            throw new Error("Description is undefined");
        }

        const descriptionWithoutHtml = description.replace(/<\/?[^>]+(>|$)/g, "");

        if (descriptionWithoutHtml.length <= 40) {
            return descriptionWithoutHtml.replace(/&nbsp;/g, '');
        } else {
            const truncatedDescription = descriptionWithoutHtml.substring(0, 40).replace(/&nbsp;/g, '');
            return truncatedDescription;
        }
    }

    return (<Card sx={{display: 'flex', flexDirection: 'column', maxHeight: '450px', maxWidth: '345px'}}>
            <CardMedia
                sx={{minHeight: '160px', objectFit: 'cover'}}
                image={getImgUrl(item.advertisementCoverImage)}
                title={item.companyName}
            />
        <CardContent sx={{flexGrow: 1}}>
            <Typography gutterBottom variant="body1" component="div" sx={{maxHeight: '50px', minHeight: '50px'}}>
                <strong>{item.title}</strong>
                </Typography>
            <Typography variant="body1" color="text.secondary" sx={{maxHeight: '50px', minHeight: '50px'}}>
                {shortenDescription(item.description)}
                </Typography>
            </CardContent>
            <CardActions>
                <Stack>
                    <Stack spacing={2} alignItems="center" minHeight={'100px'}>
                        <Rating sx={{fontSize: '2rem', marginRight: '0.5rem'}} name="read-only"
                                value={item.averageRating} readOnly/>
                        <Typography variant="body2" color="text.secondary" id='ratingText'>
                            Ingen anmeldelser enda
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="left">
                        <LocationOnIcon sx={{fontSize: '2rem', marginRight: '0.5rem'}}/>
                        <Typography variant="h5" color="text.secondary">
                            {item.postalCity}
                        </Typography>
                    </Stack>

                </Stack>
                {/*<Grid container spacing={2}>*/}
                {/*    <Grid item xs={12} sm={6}>*/}
                {/*        <Box id='location'>*/}
                {/*            <LocationOnIcon sx={{fontSize: '2rem', marginRight: '0.5rem'}}/>*/}
                {/*            <Typography variant="h5" color="text.secondary">*/}
                {/*                {item.postalCity}*/}
                {/*            </Typography>*/}
                {/*        </Box>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={12} sm={6}>*/}
                {/*        <Box id='rating'>*/}
                {/*            <Rating name="read-only" value={item.averageRating} readOnly/>*/}
                {/*            <Typography variant="body2" color="text.secondary" id='ratingText'>*/}
                {/*                Ingen anmeldelser enda*/}
                {/*            </Typography>*/}
                {/*        </Box>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
            </CardActions>
    </Card>);
}

export default ListingItem;