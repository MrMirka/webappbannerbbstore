import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useStore } from "../../service/state/Store";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';


function AuthForm({ logIn }) {
    const authError = useStore((state) => state.error)
    const [authContent, setAuthContent] = useState({ name: "", password: "" })
    const onChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setAuthContent((prev) => ({ ...prev, [key]: value }))
    }
    useEffect(() => {
        if (authError) {

        }
    }, [authError])
    return (
        <Box
            component="form"
            sx={{ width: '550px', display: 'flex', flexWrap: 'wrap' }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h5" gutterBottom>
                База данных генератора баннеров
            </Typography>
            <Divider sx={{ minWidth: '100%', marginBottom: '40px' }} />
            
           
            <TextField
                sx={{ minWidth: '100%', marginBottom: '16px'}}
               
                error={authError}
                required
                name="name"
                value={authContent.name}
                onChange={onChange}
                id="outlined-required"
                label="Email"
            />
            <TextField
                sx={{ minWidth: '100%', marginBottom: '16px' }}
               
                error={authError}
                required
                name="password"
                value={authContent.password}
                onChange={onChange}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <Button sx={{
                minWidth: '100%',
                backgroundColor: 'black',
                marginTop: '32px',
                '&:hover': {
                    backgroundColor: 'yellow',
                    color: 'black',
                }
            }}
                variant="contained"
                onClick={() => { logIn(authContent.name, authContent.password) }}>
                Войти
            </Button>
            <LinearProgress sx={{ minWidth: '100%', marginTop: '8px' }}/>
        </Box>);
}

export default AuthForm;