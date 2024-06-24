import { INav } from "../interfaces/INav";


export const NavTypes = {
    navItems: [
        { id: '1', name: 'ABOUT' ,pathName:'ABOUT'},
        // { id: '2', name: 'SKILLS' ,pathName:'/EXPERIENCE'},
        { id: '2', name: 'EXPERIENCE' ,pathName:'SKILLS'},
        { id: '3', name: 'PROJECTS' ,pathName:'PROJECTS'},
        { id: '4', name: 'CONTACT' ,pathName:'CONTACT'},
    ], 
    navDots: [
        { id: '1', name: 'About' },
        { id: '2', name: 'Experience' },
        { id: '3', name: 'Projects' },
        { id: '4', name: 'Contacts' },
    ], 
    initialActiveLink: {
        isActive: 0,
        activePage:'',
        history: []
    } as INav.ActiveLinks
}