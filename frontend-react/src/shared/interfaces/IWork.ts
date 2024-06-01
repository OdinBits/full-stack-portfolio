
export namespace IWork { 

    export interface ThunkState {
        loading: boolean;
        message: string;
        error: string;
        data: any;
    }
    
    export interface fiterProps {
        clickedButton: any;
        handleWorkFilter: any;
        filterList: any;
    }

    export interface FilterParams {
        workItems : any[];
        filter: string;
    }
    
    export interface workProps {
        filteredData: any;
    }
}