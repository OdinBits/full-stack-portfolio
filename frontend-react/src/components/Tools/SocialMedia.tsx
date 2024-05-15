import React from 'react';
import { Twitter, Instagram , Facebook} from '@mui/icons-material';


const SocialMedia = () => (
    <div className="app__social">
        <div>
            <Twitter />
        </div>
        <div>
            <Facebook />
        </div>
        <div>
            <Instagram />
        </div>
    </div>
);

export default SocialMedia;