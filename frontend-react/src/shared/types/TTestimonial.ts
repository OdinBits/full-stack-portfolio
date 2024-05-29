import { ITestimonial } from "../interfaces/ITestimonail";

export const TTestimonial = {
    ThunkState: {
        loading: false,
        message: "",
        error: "",
        data: [],
        filteredData: [],
    } as ITestimonial.ThunkState
}