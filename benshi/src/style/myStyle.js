import { createStyles, makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) =>
  createStyles({
    offset: theme.mixins.toolbar,
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    compRoot: { height: '100vh' },
  })
);
