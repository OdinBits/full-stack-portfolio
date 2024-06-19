/* eslint-disable @typescript-eslint/no-unused-vars */

export namespace IAbout {
    export interface ThunkState {
        AboutLoading: boolean;
        AboutMessage: string;
        AboutError: string;
        AboutData: any
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

