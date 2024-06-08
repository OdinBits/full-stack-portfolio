
export namespace INav {

    export interface toogleHandler {
        handleToggle: any;
    }

    export interface ActiveLinks {
        isActive: number;
        activePage: any;
        history: string[];
    }
}