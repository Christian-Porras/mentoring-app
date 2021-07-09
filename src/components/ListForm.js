import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';

const propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}

const defaultProps = {

}

const ListForm = ({values, handleSubmit, handleChange}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your name:
        <input type="text" name="name" value={values.name} onChange={handleChange}/>
      </label>

      <label>
        Item:
        <input type="text" name="item" value={values.item} onChange={handleChange}/>
      </label>
      <label>
        Perishable?
        <label> Yes <input type="radio" name="perishable" value={true} onChange={handleChange}/> </label>

        <label> No <input type="radio" name="perishable" value={false} onChange={handleChange}/> </label>
      </label>

      <br/>
      <button type="submit">Submit</button>
    </form>
  )
}

ListForm.propTypes = propTypes;
ListForm.defaultProps = defaultProps;

export default withFormik({
  // Map incoming values to our form values
  mapPropstoValues: () => ({
    name: "",
    item: ""
  }),

  // Validation
  // validate: values => {},

  // Handle Submit
  handleSubmit: (values, formikBag) => {
    return formikBag.props.onSubmit(values)
  }
})(ListForm);
