import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPersonData = createAsyncThunk(
    'person/fetchPersonData',
    async () => {
        try {
            const response = await axios.get('http://localhost:27377/api/Person/PersonData');
            return response.data;
        } catch (error) {
            throw Error('Failed to fetch person data');
        }
    }
);

export default fetchPersonData;
