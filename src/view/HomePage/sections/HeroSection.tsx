import {Box, Card, CardActionArea, CardContent, Container, Grid, Stack, Typography} from "@mui/material";
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
        dispatch(getMainCategories());
        console.log(categoriesState.categories)
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
        navigate(`/listings?category=${category.categoryId}&keyword=${debouncedSearchTerm}`);
    }

    const CategoryCard = ({category}) => {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
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
            return <p>Loading...</p>;
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
