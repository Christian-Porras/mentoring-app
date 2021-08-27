import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, FieldArray } from 'formik';
import { object, string } from 'yup';

const propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      perishable: PropTypes.bool.isRequired
    }))
  }),
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

      <FieldArray
        name="items"
        render={({push, remove}) => (
          <div>
            {
              values.items && (
                values.items.map((item, index) => (
                  <div key={index}>
                    <label>
                      Item:
                      <input type="text" name={`items.${index}.name`} value={item.name} onChange={handleChange}/>
                      <button onClick={() => remove(index)} type="button"> Remove Field </button>
                    </label>
                    <label>
                      Perishable?
                      <label> Yes <input type="radio" name={`items.${index}.perishable`} value={true} onChange={handleChange}/> </label>

                      <label> No <input type="radio" name={`items.${index}.perishable`} value={false} onChange={handleChange}/> </label>
                    </label>
                  </div>
                )))
            }

            <button onClick={() => push({name: '', perishable: true})} type="button"> Add Field </button>
          </div>
        )}
      />

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
    items: [{
      name: "",
      perishable: true
    }]
  }),

  // Validation
  validationSchema,

  // Handle Submit
  handleSubmit: (values, formikBag) => {
    return formikBag.props.onSubmit(values)
  }
})(ListForm);
