import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';

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
    <form /*onSubmit={handleSubmit} */>
      <label>
        Your name:
        <input type="text" name="shopping-list-form" value={value} onChange={handleChange}/>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

ListForm.propTypes = propTypes;
ListForm.defaultProps = defaultProps;

export default withFormik({
  // Map incoming values to our form values
  // mapPropstoValues: (props) => (),

  // Validation
  // validate: values => {},

  // Handle Submit
  // handleSubmit: (values, { setSubmitting }) => {}
})(ListForm);
