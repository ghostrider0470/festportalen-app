import {Box, Button, Container, Grid, Typography} from "@mui/material";
import Input from '@mui/material/Input';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/store.ts";
import {filterActions} from "../../../store/slices/filterSlice.ts";
import {useNavigate} from "react-router-dom";

const HeroSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const json = [
        {
            "categoryId": 4,
            "name": "Mat & Drikke",
            "iconFile": "mat-drikke.png"
        },
        {
            "categoryId": 6,
            "name": "Musikk",
            "iconFile": "musikk.png"
        },
        {
            "categoryId": 12,
            "name": "Foto og Video",
            "iconFile": "foto-video.png"
        },
        {
            "categoryId": 16,
            "name": "Transport",
            "iconFile": "transport.png"
        },
        {
            "categoryId": 17,
            "name": "Lokaler",
            "iconFile": "lokaler.png"
        },
        {
            "categoryId": 18,
            "name": "Klær, Skjønnhet & Velvære",
            "iconFile": "klaer-skjonnhet-velvaere.png"
        },
        {
            "categoryId": 19,
            "name": "Opplevelser og Aktiviteter",
            "iconFile": "opplevelser.png"
        },
        {
            "categoryId": 20,
            "name": "Underholdning",
            "iconFile": "underholdning.png"
        },
        {
            "categoryId": 21,
            "name": "Kurs Og Assistanse",
            "iconFile": "kurs-aktiviteter.png"
        },
        {
            "categoryId": 22,
            "name": "Blomster, Dekor & Tilbehør",
            "iconFile": "blomster-dekor.png"
        },
        {
            "categoryId": 555,
            "name": "Arrangement Utstyr",
            "iconFile": "stage.png"
        }
    ];
    const onSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value);
    }
    useEffect(() => {
        // Set a timeout to update the debounced search term after 500ms
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        // Clear the timeout if the user types something before the 500ms has passed
        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    useEffect(() => {
        if (debouncedSearchTerm) {
            // Perform the search here
            console.log(`Searching for "${debouncedSearchTerm}"`);
        }
    }, [debouncedSearchTerm]);

    const handleCardClick = (category: string) => {
        dispatch(filterActions.updateCategory(category));
        navigate('/listings');
    }
    return (
        <Grid
            container
            spacing={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "80vh",
            }}
        >
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
                <Grid container spacing={2}>
                    {json.map((category) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={category.name}>
                            <Button
                                onClick={() => handleCardClick(category.name)}
                                variant="contained"
                                // startIcon=<img src={{''}} alt={category.name}/>
                                fullWidth
                                style={{
                                    height: '100%',
                                    borderRadius: 0
                                }} // Adjust button height and remove border radius
                            >
                                <Typography variant="body1">{category.name}</Typography>
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    );
};

export default HeroSection;
