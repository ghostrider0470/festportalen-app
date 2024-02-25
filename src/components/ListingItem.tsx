import {Listing} from "../store/slices/listingSlice.ts";
import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const ListingItem : React.FC<Listing> = (item: Listing) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.advertisementCoverImage}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );

}
export default ListingItem;