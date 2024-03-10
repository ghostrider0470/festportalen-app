import {Button, Card, CardActions, CardContent, Chip, Grid, Link, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box/Box";
import {ListingItem} from "../../../../store/interfaces/listing.ts";
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import Divider from '@mui/material/Divider';
import {getImgUrl} from "../../../../utils/cloudinary.ts";

import copy from 'clipboard-copy';
import React from "react";

export interface ListingItemCardProps {
    item: ListingItem | null;
}

const fixUrl = (link: string | undefined) => {
    if (link?.startsWith('http://') || link?.startsWith('https://')) {
        return link;
    }
    return 'https://' + link;
}
const beutifyUrl = (link: string | undefined) => {
    if (link) {
        try {
            const domain = new URL(link);

            return `${domain.pathname}`;
        } catch (error) {
            console.error(`Invalid URL: ${link}`);
        }
    }
    return link;
}
const renderCardSubHeaderLinks = (item: ListingItem | null) => {
    return (
        <Stack>
            <Box>
                <Divider/>
            </Box>
            {item?.links.website &&
                <Stack direction='row' mt={3}>
                    <LanguageIcon sx={{fontSize: 30}}/>
                    <Typography ml={2} variant='h5'>
                        <Link href={fixUrl(item?.links.website)}>{beutifyUrl(item?.links.website)}</Link>
                    </Typography>
                </Stack>
            }
            {item?.links.instagram &&
                <Stack direction='row' mt={3}>
                    <InstagramIcon sx={{fontSize: 30}}/>
                    <Typography ml={2} variant='h5'>
                        <Link href={fixUrl(item?.links.instagram)}>{beutifyUrl(item?.links.instagram)}</Link>
                    </Typography>
                </Stack>
            }
            {item?.links.linkedin &&
                <Stack direction='row' mt={3}>
                    <LinkedInIcon sx={{fontSize: 30}}/>
                    <Typography ml={2} variant='h5'>
                        <Link href={fixUrl(item?.links.linkedin)}>{beutifyUrl(item?.links.linkedin)}</Link>
                    </Typography>
                </Stack>
            }
            {item?.links.facebook &&
                <Stack direction='row' mt={3}>
                    <FacebookIcon sx={{fontSize: 30}}/>
                    <Typography ml={2} variant='h5'>
                        <Link href={fixUrl(item?.links.facebook)}>{beutifyUrl(item?.links.facebook)}</Link>
                    </Typography>
                </Stack>
            }
            {item?.links.twitter &&
                <Stack direction='row' mt={3}>
                    <XIcon sx={{fontSize: 30}}/>
                    <Typography ml={2} variant='h5'>
                        <Link href={fixUrl(item?.links.twitter)}>{item?.links.twitter}</Link>
                    </Typography>
                </Stack>
            }
        </Stack>
    );
}
const renderCardSubHeader = (item: ListingItem | null) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box
                    sx={{

                        border: 'solid 1px lightgray',
                        borderRadius: '10px',
                        maxWidth: '250px',
                        maxHeight: '250px',
                        minWidth: '250px',
                        minHeight: '250px',
                        // display: 'flex',
                    }}>
                    <img
                        loading="lazy"
                        src={getImgUrl(item?.coverImage)}
                        style={{
                            padding: '10px 10px 11px 10px',
                            boxSizing: 'border-box',
                            maxHeight: '2240px',
                            maxWidth: '250px',
                            minWidth: '250px',
                            minHeight: '250px',
                            objectFit: 'cover'
                        }}
                        alt='company profile photo'
                    />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <Typography variant='h4'>{item?.title}</Typography>

                <Box mt={3}>
                    <Typography variant='h5' sx={{color: 'rgba(0, 0, 0, 0.6)'}}>Social Media</Typography>
                </Box>

                {renderCardSubHeaderLinks(item)}

            </Grid>
        </Grid>
    );
}

const ListingItemCard: React.FC<ListingItemCardProps> = ({item}) => {
    return (
        <Card variant='outlined' sx={{
            minHeight: '600px',
            maxWidth: '600px',
            minWidth: '300px',
            backgroundColor: "#fafafa",
            border: "solid 2px #e0ae55"
        }}>
            {/*<CardHeader*/}
            {/*    // avatar={<img src={getImgUrl(listing?.coverImage)} style={{height: '200px', width: '200px', objectFit: 'cover'}} alt=''/>}*/}
            {/*    title={}*/}
            {/*    subheader={}*/}
            {/*/>*/}

            <CardContent>
                {renderCardSubHeader(item)}
                <Box mt={3}>
                    <Typography variant='h5' sx={{color: 'rgba(0, 0, 0, 0.6)'}}>Contact
                        Person: {item?.contactPerson}</Typography>
                    <Divider/>
                </Box>
                <Box mt={3}>
                    <Typography mt={2} variant='h5'
                                sx={{color: 'rgba(0, 0, 0, 0.6)'}}>Price: <strong>NOK {item?.price}</strong></Typography>
                    <CardActions>
                        <Button variant="outlined" size="large" onClick={() => {
                            copy(item?.phoneNumber as string);
                        }}

                        ><Typography variant='h4'>{item?.phoneNumber}</Typography></Button>
                        {/*<Button variant="outlined" size="large" >Outlined</Button>*/}
                    </CardActions>
                </Box>

                <Box mt={3}>
                    <Typography variant='h5' sx={{color: 'rgba(0, 0, 0, 0.6)'}}>Services</Typography>
                    <Divider/>
                </Box>
                <Box mt={4}>
                    {/*<Container>*/}
                    {/*<Typography variant='h6'>Tags</Typography>*/}
                    <Grid ml={1} container spacing={1}>
                        {item?.tags?.map((tag) => {
                            return (<Grid key={tag.toString()} item sm={12} md={5} lg={3}>
                                <Box mt={1}>
                                    <Chip
                                        color="secondary"
                                        label={
                                            <Typography variant='h6'>{tag}</Typography>
                                        } variant="outlined"/>
                                </Box>
                            </Grid>);
                        })}
                    </Grid>
                    {/*</Container>*/}
                </Box>
            </CardContent>
            {/*<CardMedia*/}
            {/*    component="img"*/}
            {/*    height="200"*/}
            {/*    image={getImgUrl(listing?.companyPhoto)}*/}
            {/*    alt="Paella dish"*/}
            {/*>*/}
            {/*    /!*<img src={getImgUrl(listing?.coverImage)} style={{height: '200px', width: '200px', objectFit: 'cover'}} alt=''/>*!/*/}
            {/*</CardMedia>*/}
            {/*<h1>Details</h1>*/}
            {/*<p>{listing?.description}</p>*/}

        </Card>
    )
}
export default ListingItemCard;