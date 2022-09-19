import {FunctionComponent} from 'react';
import {useTheme} from '@mui/material/styles';
import {Typography} from '@mui/material'

interface MuiModeProps {

}

const MuiMode: FunctionComponent<MuiModeProps> = () => {
  const theme = useTheme()
  return (
    <Typography component={'h1'}>
      {`${theme.palette.mode} mode`}
    </Typography>
  );
}

export default MuiMode;