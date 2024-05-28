
export namespace IWork { 

    export interface ThunkState {
        loading: boolean;
        message: string;
        error: string;
        data: any;
        filteredData: any;
    }
    
    export interface fiterProps {
        clickedButton: any;
        handleWorkFilter: any;
    }
    
    export interface workProps {
        filteredData: any;
        isDesktop: any;
    }
}