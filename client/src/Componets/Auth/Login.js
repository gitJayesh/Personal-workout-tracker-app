import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../action/userAction";
import { useNavigate } from "react-router";
const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  // const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log(location);
  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [history, userInfo, navigate]);
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="form-container forms">
      <h1>
        User <span className="text-primary">Login</span>
      </h1>

      {error && <h3>{error}</h3>}
      {loading && <h3>loading</h3>}
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          // required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          // required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};
export default Login;
// const alertContext = useContext(AlertContext);
// const authContext = useContext(AuthContext);
// const { setAlert } = alertContext;
// const { login, error, clearErrors, isAuthenticated } = authContext;
// useEffect(() => {
//   if (isAuthenticated) {
//     props.history.push("/");
//   }
//   if (error === "Invalid Credentials") {
//     setAlert(error, "danger");
//     clearErrors();
//   }
//   //eslint-disable-next-line
// }, [error, isAuthenticated, props.history]);
// const [user, setUser] = useState({
//   email: "",
//   password: "",
// });
// const { email, password } = user;
// const onChange = (e) => {
//   setUser({
//     ...user,
//     [e.target.name]: e.target.value,
//   });
// };
// const onSubmit = (e) => {
//   e.preventDefault();
//   if (email === " " || password === " ") {
//     setAlert("Please Fill All Fields");
//   } else {
//     login({
//       email,
//       password,
//     });
//   }
// };