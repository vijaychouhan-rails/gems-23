import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

import User from "./user";

function UsersPage() {
  const [usersData, setUsersData] = useState([]);

  const getUsersData = () => {
    axios
      .get("https://reqres.in/api/users", {
        params: {
          page: 1,
        },
      })
      .then(function (res) {
        setUsersData(res.data.data);
      })
      .catch(function (error) {
        if (error?.response?.status == 400) {
          alert(error.response?.data?.error);
        } else {
          alert(error.message);
        }
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <section className="user-list my-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>User List</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quae dolore dolores doloribus tempore velit excepturi
              exercitationem!
            </p>
          </div>
          <div className="col">
            <div className="candidate-list">
              {usersData.map((userData) => {
                return <User key={userData.id} data={userData} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsersPage;
