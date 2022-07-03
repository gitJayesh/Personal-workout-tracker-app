import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listUsers } from "../../action/userAction";
const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history]);
  console.log(users);
  return (
    <>
      <h2>Users</h2>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading</h3>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas-fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <Link to={`/user/${user.id}/edit`}>
                    <button className="btn bg-light">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-sm bg-light">
                      <i className="fas fa-trash"></i>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default UserListScreen;
