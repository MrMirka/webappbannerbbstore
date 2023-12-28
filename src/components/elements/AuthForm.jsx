import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useStore } from "../../service/state/Store";

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
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                error={authError}
                required
                name="name"
                value={authContent.name}
                onChange={onChange}
                id="outlined-required"
                label="Email"
            />
            <TextField
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
            <Button variant="contained" onClick={() => { logIn(authContent.name, authContent.password) }}>Войти</Button>
        </Box>);
}

export default AuthForm;