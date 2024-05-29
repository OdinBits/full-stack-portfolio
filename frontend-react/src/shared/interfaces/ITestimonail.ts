export namespace ITestimonial {

    export interface ThunkState {
        loading: boolean;
        message: string;
        error: string;
        data: any;
        filteredData: any;
    }
}