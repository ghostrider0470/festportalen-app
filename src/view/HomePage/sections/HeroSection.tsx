import {Box, Grid, Typography} from "@mui/material";
import Input from '@mui/material/Input';
import {useEffect, useState} from "react";

const HeroSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

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
                <Box m={5}>kategorije</Box>
            </Box>
        </Grid>
    );
};

export default HeroSection;
