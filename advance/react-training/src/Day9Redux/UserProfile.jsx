import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, startFetchUser } from "../redux/reducers/userReducer";
import { getUser, updateUser } from "./api/user";

export default function UserProfile() {
  const { loading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startFetchUser());
    getUser().then((user) => {
      dispatch(setUser(user));
    });
  }, []);

  const handleChangeName = () => {
    const newName = "John Smith";
    dispatch(startFetchUser());
    updateUser({
      ...user,
      name: newName,
    }).then((user) => {
      dispatch(setUser(user));
    });
  };

  return (
    <div>
      <h1>User Profile</h1>

      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div>{user.name}</div>
          <button onClick={handleChangeName}>Change Name</button>
        </div>
      )}
    </div>
  );
}
