import React from 'react';
import { IMap } from '../../shared/interfaces/IMap';

const Maper: React.FC<IMap> = ({ items, Component }) => {
    return (
        <>
            {items?.map((item: any, index: number) => (
                
                <Component key={index} {...item} />
            ))}
        </>
    );
};

export default Maper;
