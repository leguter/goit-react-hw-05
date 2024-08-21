import { Field, Formik, Form } from "formik";
import css from './FormSearchMovies.module.css'
const FormSearchMovies = ({
    onSearch,
}) => {
  const initialValues = {
    searchMovie: "",
  };
  function handleSubmit(values) {
    onSearch(values);
  }
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      <Form className={css.formSearch}>
        <Field
          type="text"
          placeholder="type name movie"
          required
          name="searchMovie"
          className={css.field}
        />
        <button type="submit">Search Movies</button>
      </Form>
    </Formik>
  );
}

export default FormSearchMovies