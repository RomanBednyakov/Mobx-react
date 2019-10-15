import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { values } from 'mobx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import SearchTodo from '../SearchTodo/SearchTodo';

let id = 0;
const randomId = () => id++;

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '1 1 auto',
    margin: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    maxWidth: 900,
    height: '100%',
  },
});

const App = ({ classes, store }) => {
  const addTodo = value => {
    store.addTodo(randomId(), value);
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.root}>
        <Grid container justify="center" spacing={24}>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <SearchTodo searchTodo={store.searchTodo} />
            </Grid>
            <Grid item xs={12}>
              <AddTodo searchFilerFlag={store.searchFilerFlag} addTodo={addTodo} />
            </Grid>
            <Grid item xs={12}>
              <TodoList
                todos={store.searchFilerFlag ? values(store.filterTodos) : values(store.todos)}
              />
            </Grid>
          </Paper>
        </Grid>
      </main>
    </>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(inject('store')(observer(App)));
