
export namespace IProjects { 

    export interface ThunkState {
        projLoading: boolean;
        projMessage: string;
        projError: string;
        projData: any;
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