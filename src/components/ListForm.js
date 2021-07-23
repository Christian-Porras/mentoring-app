import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { object, string } from 'yup';

const propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  })),
}

const defaultProps = {

}

const validationSchema = object().shape({
  name: string().required('Name is required'),
  item: object().shape({
    name: string(),
    perishable: string()
  }),
});

const ListForm = ({values, handleSubmit, handleChange, errors}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {
          errors && errors.name
        }
      </div>
      <label>
        Your name:
        <input type="text" name="name" value={values.name} onChange={handleChange}/>
      </label>

      <label>
        Item:
        <input type="text" name="item.name" value={values.item.name} onChange={handleChange}/>
      </label>
      <label>
        Perishable?
        <label> Yes <input type="radio" name="item.perishable" value={true} onChange={handleChange}/> </label>

        <label> No <input type="radio" name="item.perishable" value={false} onChange={handleChange}/> </label>
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
    item: {
      name: "",
      perishable: true
    }
  }),

  // Validation
  validationSchema,

  // Handle Submit
  handleSubmit: (values, formikBag) => {
    return formikBag.props.onSubmit(values)
  }
})(ListForm);
