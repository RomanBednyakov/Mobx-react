import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import faker from 'faker';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    margin: theme.spacing.unit,
  },
});

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
    }
  }
  componentDidMount() {
    let varCounter = 0;
    let myTimer = setInterval(() => {
      if(varCounter <= 5) {
        varCounter++;
        this.props.addTodo(faker.internet.email())
      } else {
        clearInterval(myTimer);
      }
    }, 10);

  }

  handleValueChange = (event) => {
    event.preventDefault();
    this.setState({textValue: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.textValue);
    this.setState({textValue: ''});
  }
  render() {
    const {classes, searchFilerFlag} = this.props;
    const {textValue} = this.state;

    return (
      <Grid container justify="flex-end" >
        <form onSubmit={this.handleSubmit}>
          <TextField
            className={classes.input}
            disabled={searchFilerFlag}
            onChange={this.handleValueChange}
            value={textValue}
          />
          <Button
            className={classes.button}
            color="primary"
            disabled={searchFilerFlag}
            type="submit"
            variant="contained"
          >
            <Typography>Add task</Typography>
          </Button>
        </form>
      </Grid>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddTodo);
