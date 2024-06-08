import { Box } from '@mui/material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import NavDots from '../components/NavDots';
import { IAppWrap } from '../shared/interfaces/IAppWrap';

const AppWrap = ({ Component, idName }: IAppWrap) => function HOC() {

    const sectionRef = useIntersectionObserver(idName);

    return (
        <Box
            ref={sectionRef}
            id={idName}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
        >

            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
            }}>
                <Component />
            </Box>

            <NavDots idName={idName}/>
        </Box>
    );
};

export default AppWrap;
