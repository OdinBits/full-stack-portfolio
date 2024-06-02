import { useMemo } from 'react'; 


export const useFilter = ({ workItems , filter }: any) => {
    const filteredWorkItems = useMemo(() => {
        if (!filter) {
            return workItems ; 
        }

        return workItems.filter((item: any) => {
            return item.tags.some((tag: string) => tag.includes(filter));
        });
    }, [workItems, filter]); 

    return filteredWorkItems;
};
