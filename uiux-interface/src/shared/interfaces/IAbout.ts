/* eslint-disable @typescript-eslint/no-unused-vars */

export namespace IAbout {
    export interface ThunkState {
        loading: boolean;
        message: string;
        error: string;
        data: any
    }
    
    export interface About {
        title: string;
        description: string;
        imgUrl: string;
    }

    export interface AboutItemProps {
        about: About;
    }
}

