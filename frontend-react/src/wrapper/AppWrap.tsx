import { NavigationDots, SocialMedia } from '../components/Tools';
import { AppWrapParams } from '../shared/interfaces/IAppWrapParams';
import { Box } from '@mui/material';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AppWrap = ({ Component, idName, classNames, showCopyright }: AppWrapParams) => function HOC() {

    const sectionRef = useIntersectionObserver(idName);

    return (
        <Box
            ref={sectionRef}
            id={idName}
            className={`app__container ${classNames}`}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            <SocialMedia />

            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Component />
                {showCopyright && (
                    <Box sx={{ alignSelf: 'flex-end', width: '100%', textAlign: 'right', letterSpacing: '0.1rem', display: { xs: 'none', md: 'block' }, margin: '5px 20px 5px 0px' }}>
                        <p style={{ fontSize: '15px', margin: 0 }}>@2020 MICHAEL</p>
                        <p style={{ fontSize: '15px', margin: 0 }}>All rights reserved</p>
                    </Box>
                )}
            </Box>

            <NavigationDots />
        </Box>
    );
};

export default AppWrap;
