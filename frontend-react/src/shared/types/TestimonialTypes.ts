import { ITestimonial } from "../interfaces/ITestimonail";

export const TestimonialTypes = {
    ThunkState: {
        loading: false,
        message: "",
        error: "",
        data: [],
        filteredData: [],
    } as ITestimonial.ThunkState
}