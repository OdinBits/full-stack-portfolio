export namespace IPerson {

    export interface ThunkState {
        personLoading: boolean;
        personMessage: string;
        personError: string;
        personData: any 
    }
}