import firebase from "./firebase/firebase";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import Grid from "@material-ui/core/Grid";
import Form from "./components/Form/Form";
import { useStyles } from "./App.styles";
import ToDoList from "./components/List/List";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Header />
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={6}>
            <ToDoList />
          </Grid>
          <Grid item xs={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
