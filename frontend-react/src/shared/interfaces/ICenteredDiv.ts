import React from "react";
import { SxProps } from "@mui/material";

interface ICenteredDiv {
    children: React.ReactNode;
    sx?: SxProps;
    [key: string]: any; 
}

export default ICenteredDiv;