import React  from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDate: false,
    }
  }
  toggleShowDate = (e) => {
    if(e.target.tagName.toUpperCase() !== 'INPUT') {
      this.setState({showDate: !this.state.showDate})
    }
  }
  render() {
    const {todo, onClick} = this.props;
    const {showDate} = this.state;

    return (
      <ListItem
        onClick={this.toggleShowDate}
        role={undefined}
        dense
        button
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        <Checkbox onClick={onClick} checked={todo.completed} tabIndex={-1} disableRipple />
        <ListItemText primary={todo.text} />
        {showDate && <ListItemText primary={todo.newDate} />}
      </ListItem>
    );
  }
}
export default observer(Todo);
Todo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
