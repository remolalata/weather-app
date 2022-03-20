import {
    Box,
    Link,
    Typography,
} from '@mui/material';

import { validateObj } from '../../utils/utils';
import { USER_GITHUB_LINK } from '../../utils/constants';

const User = props => {
    const name = props.data.name !== '' ? props.data.name : props.data.nickname;
    const githubLink = USER_GITHUB_LINK.replace('%%profile_name%%', props.data.nickname);

    return (
        <>
            {validateObj(props.data) &&
                <Box>
                    <Typography component='div' variant='h6' align='center' sx={{ marginBottom: '20px' }}>{name}</Typography>
                    <Link component='a' variant='h6' target='_blank' href={githubLink} rel='noreferrer'>{githubLink}</Link>
                </Box>
            }
        </>

    );
};

export default User;