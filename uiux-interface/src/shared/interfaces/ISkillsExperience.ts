
export namespace ISkillsExperience {
    export interface ISkill {
        skillPoints: any
    }
    export interface IActivePage {
        isActive: any
    }

    export interface ThunkState {
        expLoading: boolean;
        expMessage: string;
        expError: string | undefined;
        expData: any;
    }

    export interface ExpComponent {
        selectedExp: any;
        validExpPoints: any;
        handleImageClick: any;
    }

    
}