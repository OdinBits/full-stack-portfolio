import React from "react";
import { SxProps } from "@mui/material";

export interface ICenteredDiv {
    children: React.ReactNode;
    sx?: SxProps;
    [key: string]: any; 
}
