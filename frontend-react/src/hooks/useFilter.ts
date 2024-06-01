import { useMemo } from 'react'; 
import { IWork } from '../shared/interfaces/IWork';

export const useFilter = ({ workItems , filter }: IWork.FilterParams) => {
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
