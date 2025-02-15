import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, label, name, testeId, onChange, value } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          id={ name }
          type={ type }
          name={ name }
          data-testid={ testeId }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default Input;
