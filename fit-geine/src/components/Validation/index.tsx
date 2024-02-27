const Validation = (values: { name: string; password: string }) => {
    let errors: { name?: string; password?: string } = {};
    if (!values.name) {
      errors.name = "Name Required";
    } else if (values.name.length < 5) {
      errors.name = "Name must be more than 5 characters";
    }
  
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 9) {
      errors.password = "Password must be more than 8 characters";
    }
  
    return errors;
  };
  
  export default Validation;
  