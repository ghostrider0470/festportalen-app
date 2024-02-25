import {useEffect} from "react";
import {Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/store/store";
import {fetchListings, initialListingState, Listing} from "../../store/slices/listingSlice.ts";
import ListingItem from "../../components/ListingItem.tsx";


const ListingsPage = () => {
    const dispatch = useDispatch();
    // const [listings, setListings] = useState<ListingState[] | undefined>(undefined);
    const listings = useSelector((state: RootState) => state.listing);

    const getListings = () => {
        const request = {
            category: "Foto og Video",
            subCategories: ["string"],
            regions: ["string"],
            counties: ["string"],
            keyword: ["string"],
            page: 0,
            pageSize: 0,
            sortBy: "string"
        }
        // @ts-ignore
        dispatch(fetchListings(request));
    }

    const ItemList = ({items}: { items: Listing[] }) => {
        return (
            <div>
                <Grid container spacing={2}>
                    {items.map((item) => (<Grid key={item.guid} item xs={12} sm={6} md={4}>
                        <ListingItem {...item}/>
                    </Grid>))}
                </Grid>
            </div>
        );

    }


    useEffect(() => {
        getListings();
    }, [listings === initialListingState]);
// useEffect(() => {
//     console.log('listings:', listings)
// }, [listings]);

    return (<div>
        <h1>Advertisements</h1>
        ads: {listings?.resultCount}
    <ItemList items={listings?.resultList || []}/>
</div>);
}

export default ListingsPage;