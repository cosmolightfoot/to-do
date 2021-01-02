import { makeStyles } from '@material-ui/core/styles';
import { HEADER_HEIGHT } from './constants';

export const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    minWidth: '100vw',
    maxWidth: '100vw',
    padding: theme.spacing(2),
    minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`
  }
}));