import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import {debounce} from 'lodash'

class SearchTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
    }
    this.debouncedHandleValueChange = debounce(this.handleValueChangeDebounce, 600)
  }
  handleValueChangeDebounce = (textValue) => {
    if(textValue) {
      return this.props.searchTodo(true, textValue)
    }
    if(textValue === '') {
      return this.props.searchTodo(false)
    }
  }
  handleValueChange = ({ target: { value } }) => {
    this.setState({ textValue: value });
    this.debouncedHandleValueChange(value);
  };
  render() {
    const {textValue} = this.state;

    return (
      <div>
        <TextField
          label="Search task"
          fullWidth={true}
          onChange={this.handleValueChange}
          value={textValue}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>
    );
  }
}

SearchTodo.propTypes = {
  searchTodo: PropTypes.func.isRequired,
};

export default SearchTodo;
