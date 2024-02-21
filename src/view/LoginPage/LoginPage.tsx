/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch } from "react-redux";

import { useState } from "react";
// @ts-ignore
import { login } from "/src/store/slices/authSlice.ts";
import axios from "axios";
// @ts-ignore
import { AuthRequest, AuthState } from "/src/store/slices/authSlice.ts";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const response = await axios.post<AuthRequest, any>(
      "http://localhost:5272/api/auth/login",
      { email, password, rememberMe }
    );
    console.log("response:", response.data as AuthState);
    dispatch(login(response.data as AuthState));
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "90vh", display: "flex", justifyContent: "center" }}
    >
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(/public/images/register.jpg)",
          backgroundRepeat: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Logg inn
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleLogin}
            sx={{ mt: 1, textAlign: "center" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              sx={{ width: "100%" }}
              control={
                <Checkbox
                  value={rememberMe}
                  color="primary"
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Remember me"
            />
            <Button type="submit" variant="contained" sx={{ mb: 3 }}>
              Sign In
            </Button>
            <Divider variant="middle" sx={{ color: "#e0ae55" }}>
              OR
            </Divider>
            <IconButton>
              <GoogleIcon sx={{ color: "red" }}></GoogleIcon>
            </IconButton>
            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item>
                <Link href="#" variant="body2" underline="none">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" underline="none">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
