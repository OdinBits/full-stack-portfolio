import React from 'react';

interface mapProps {
    items: any[];
    Component: React.ComponentType<any>;
}

const Maper: React.FC<mapProps> = ({ items, Component }) => {
    return (
        <>
            {items?.map((item: any, index: number) => (
                
                <Component key={index} {...item} />
            ))}
        </>
    );
};

export default Maper;
