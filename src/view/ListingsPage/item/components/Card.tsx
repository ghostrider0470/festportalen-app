import {Card, CardContent, CardHeader, Chip, Container, Grid, Link, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box/Box";
import {ListingItem} from "../../../../store/interfaces/listing.ts";
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export interface ListingItemCardProps {
    item: ListingItem | null;
}

const fixUrl = (url: string | undefined) => {
    if (url?.startsWith('http://') || url?.startsWith('https://')) {
        return url;
    }
    return 'https://' + url;
}

const renderCardSubHeader = (item: ListingItem | null) => {
    return (
        <Stack>
            {item?.links.website &&
                <Stack direction='row' mt={3}>
                    <LanguageIcon sx={{fontSize: 30}}/>
                    <Typography ml={2} variant='h5'>
                        <Link href={fixUrl(item?.links.website)}>{item?.links.website}</Link>
                    </Typography>
                </Stack>
            }
            {item?.links.instagram &&
                <Stack direction='row' mt={3}>
                    <InstagramIcon sx={{fontSize: 30}}/>
                    <Typography ml={2} variant='h5'>
                        <Link href={fixUrl(item?.links.instagram)}>{item?.links.instagram}</Link>
                    </Typography>
                </Stack>
            }
            {item?.links.linkedin &&
                <Stack direction='row' mt={3}>
                    <LinkedInIcon sx={{fontSize: 30}}/>
                    <Typography ml={2} variant='h5'>
                        <Link href={fixUrl(item?.links.linkedin)}>{item?.links.linkedin}</Link>
                    </Typography>
                </Stack>
            }
            {item?.links.facebook &&
                <Stack direction='row' mt={3}>
                    <FacebookIcon sx={{fontSize: 30}}/>
                    <Typography ml={2} variant='h5'>
                        <Link href={fixUrl(item?.links.facebook)}>{item?.links.facebook}</Link>
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

const ListingItemCard: React.FC<ListingItemCardProps> = ({item}) => {
    return (
        <Card variant='outlined' sx={{minHeight: '600px', backgroundColor: "#fafafa", border: "solid 2px #e0ae55"}}>
            <CardHeader
                // avatar={<img src={getImgUrl(listing?.coverImage)} style={{height: '200px', width: '200px', objectFit: 'cover'}} alt=''/>}
                title={<Typography variant='h4'>{item?.title}</Typography>}
                subheader={renderCardSubHeader(item)}
            />
            <Box mt={4}>
                <Container>
                    {/*<Typography variant='h6'>Tags</Typography>*/}
                    <Grid ml={1} container spacing={5} sm={12} md={12}>
                        {item?.tags?.map((tag) => {
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
            <CardContent>

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