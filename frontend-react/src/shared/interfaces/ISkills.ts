// types.ts
export namespace ISkills {

    export interface ThunkState {
        loading: boolean;
        message: string;
        error: string | undefined;
        data: any;
    }

    export interface PropsSkill {
        name: string;
        icon: string;
    }

    export interface PropsWork {
        name: string;
        company: string;
        desc: string;
    }

    export interface PropsExperience {
        year: string;
        works: PropsWork[];
    }

    export interface APIResExperience {
        experience: PropsExperience;
    }

    export interface APIResSkills {
        skill: PropsSkill;
    }
}
