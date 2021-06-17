import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
}

const defaultProps = {

}

const ListForm = ({value, setValue}) => {
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <form>
      <label>
        Your name:
        <input type="text" name="shopping-list-form" value={value} onChange={handleChange}/>
      </label>
    </form>
  )
}

ListForm.propTypes = propTypes;
ListForm.defaultProps = defaultProps;

export default ListForm;
