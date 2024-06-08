import { INav } from "../interfaces/INav";

export const NavTypes = {
    navItems: [
        { id: '1', name: 'ABOUT' },
        { id: '2', name: 'SKILLS' },
        { id: '3', name: 'WORK' },
        { id: '4', name: 'EXPERIENCE' },
        { id: '5', name: 'COTNACT' },
    ],
    initialActiveLink: {
        isActive: 0,
        activePage:'',
        history: []
    } as INav.ActiveLinks
}