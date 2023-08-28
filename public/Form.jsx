import React from "react";
import { useForm } from "../hooks/CustomHooks";

const Form = () => {
  const { form, setform, handleChanges } = useForm();

  const [areEquals, setareEquals] = React.useState(true);

  const [passwordConfirm, setpasswordConfirm] = React.useState();

  const handlePasswordConfirmation = (e) => {
    setpasswordConfirm(e.target.value);
  };

  React.useEffect(() => {
    const { password } = form;

    setareEquals(password === passwordConfirm);
  }, [passwordConfirm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Register here human !</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              name="email"
              onChange={handleChanges}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="address"
              placeholder="Password"
              name="password"
              onChange={handleChanges}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Repeat password"
              onChange={handlePasswordConfirmation}
            />
            {!areEquals && (
              <div className="form-text list-group-item-danger">
                Passwords don't match.
              </div>
            )}
          </div>
          <button
            disabled={!areEquals}
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
