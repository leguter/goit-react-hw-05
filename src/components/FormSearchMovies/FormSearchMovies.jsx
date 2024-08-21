import { Field, Formik,Form } from "formik";
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
      <Form>
        <Field
          type="text"
          placeholder="type name movie"
          required
          name="searchMovie"
        />
        <button type="submit">Search Movies</button>
      </Form>
    </Formik>
  );
}

export default FormSearchMovies