import { INav } from "../interfaces/INav";

export const NavTypes = {
    navItems: [
        { id: '1', name: 'ABOUT' ,pathName:'ABOUT'},
        { id: '2', name: 'SKILLS' ,pathName:'SKILLS'},
        { id: '3', name: 'EXPERIENCE' ,pathName:'SKILLS'},
        { id: '4', name: 'PROJECTS' ,pathName:'PROJECTS'},
        { id: '5', name: 'COTNACT' ,pathName:'CONTACT'},
    ], 
    navDots: [
        { id: '1', name: 'ABOUT' },
        { id: '2', name: 'SKILLS' },
        { id: '3', name: 'PROJECTS' },
        { id: '4', name: 'COTNACT' },
    ], 
    initialActiveLink: {
        isActive: 0,
        activePage:'',
        history: []
    } as INav.ActiveLinks
}