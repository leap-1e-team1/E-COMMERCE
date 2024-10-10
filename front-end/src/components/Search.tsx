"use client"

import { InputBase, Stack } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
    return (
    <Stack direction={"row"} sx={{ alignItems: "center" , gap: "8px" , paddingX: "16px", paddingY: "8px", bgcolor: "#18181B", borderRadius: "20px", width: "300px", height: "40px" }}>
        <SearchIcon sx={{color:"white",alignItems:"center"}}/>
        <InputBase sx={{color:"gray", alignItems:"center" }} placeholder="Бүтээгдэхүүн хайх">
        </InputBase>
    </Stack>
    );
};