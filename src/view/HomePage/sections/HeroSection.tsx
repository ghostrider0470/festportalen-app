import {Box, Card, CardActionArea, CardContent, Container, Grid, Skeleton, Stack, Typography} from "@mui/material";
import Input from '@mui/material/Input';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store.ts";
import {useNavigate} from "react-router-dom";
import cld from "../../../utils/cloudinary.ts";
import {AdvancedImage} from "@cloudinary/react";
import {limitPad} from "@cloudinary/url-gen/actions/resize";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import {Category} from "../../../store/interfaces/categories.ts";
import {getMainCategories} from "../../../store/slices/categoriesSlice.ts";
import {filterActions, setUrlBasedOnFilter} from "../../../store/slices/filterSlice.ts";
import {FilterState} from "../../../store/interfaces/filter.ts";


const HeroSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const categoriesState = useSelector((state: RootState) => state.categories);
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(getMainCategories());
            console.log(categoriesState.categories)
        }, 1000);
    }, []); // Changed dependencies to an empty array
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    useEffect(() => {
        // console.log(`Searching for "${filter.keyword}"`);
    }, [debouncedSearchTerm]);

    const handleCardClick = (category: Category) => {
        const filter: FilterState = {
            categoryId: category.categoryId.toString(),
            subCategories: [],
            regions: [],
            counties: [],
            keyword: debouncedSearchTerm,
            page: 0,
            pageSize: 0,
            sortBy: ""
        };
        dispatch(filterActions.setFilter(filter));
        navigate(setUrlBasedOnFilter(filter, '/listings'));
        // navigate(`/listings?category=${category.categoryId}&keyword=${debouncedSearchTerm}`);
        // navigate(`/listings?category=${category.categoryId}&keyword=${debouncedSearchTerm}`);
    }
    const CategorySkeletons = () => {
        return Array.from({length: 11}).map((_, i) => (
            <React.Fragment key={i}>
                <Grid item xs={4} sm={4} md={4} lg={3} mb={2}>
                    <Box
                        sx={{justifyContent: "center", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Skeleton animation="pulse" variant="rectangular" width={100} height={100}></Skeleton>
                        <Skeleton animation="pulse" variant="text" width={180}/>
                    </Box>
                </Grid>
            </React.Fragment>
        ));
    }
    const CategoryCard = ({category}) => {
        return (
            <Grid item xs={4} sm={4} md={4} lg={3} key={category.id}>
                <Card sx={{height: 200, backgroundColor: 'transparent', boxShadow: 'none'}}>
                    <CardActionArea
                        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                        onClick={() => handleCardClick(category)}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Box display="flex" justifyContent="center" alignItems="center" padding={2} width={80}
                                 height={70}>
                                <AdvancedImage
                                    width="80"
                                    height="80"
                                    cldImg={cld.image(`Category/${category.categoryId}/${category.iconFile}`)
                                        .resize(limitPad()
                                            .width(80)
                                            .height(80)
                                            .gravity(compass("center")))}
                                />
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" color="primary">
                                    {category.name}
                                </Typography>
                            </CardContent>
                        </Box>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    };

    const renderCategories = () => {
        if (categoriesState.status === 'pending') {
            return CategorySkeletons();
        } else if (categoriesState.status === 'fulfilled') {
            return categoriesState.categories.map((category) => <CategoryCard category={category}/>);
        }
    }

    return (
        <Stack alignItems="center">
            <Box
                sx={{
                    textAlign: "center",
                }}
            >
                <img src="/public/images/logo.png" alt="logo"/>
                <Typography mt={1} variant="h5" color="primary">
                    Noe til enhver anledning!
                </Typography>
            </Box>
            <Box mt={2}>
                <Input
                    onChange={onSearch}
                    placeholder={"   Search for..."}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        height: "50px",
                        width: "50vw"
                    }}
                    type="text"
                >

                </Input>

            </Box>

            <Container>
                <Grid mt={5} container spacing={2}>
                    {categoriesState && renderCategories()}
                </Grid>
            </Container>
        </Stack>

    );
};

export default HeroSection;
