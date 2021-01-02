import { makeStyles } from "@material-ui/core/styles";
import { HEADER_HEIGHT } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    height: HEADER_HEIGHT,
    padding: theme.spacing(2)
  },
}));

export default useStyles;
