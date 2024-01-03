import Image from "next/image";
import React from "react";

function User(props) {
  const { data } = props;

  return (
    <div className="candidate-list-box card border-0 mt-4 bg-warning bg-opacity-15">
      <div className="p-4 card-body">
        <div className="align-items-center row">
          <div className="col-auto">
            <div className="candidate-list-images">
              <a href="#">
                <Image
                  width={100}
                  height={100}
                  src={data.avatar}
                  alt=""
                  className="avatar-md img-thumbnail rounded-circle"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="candidate-list-content mt-3 mt-lg-0">
              <h5 className="fs-19 mb-0">
                <a className="primary-link" href="./profile.html">
                  {data.first_name} {data.last_name}
                </a>
                <span className="badge bg-success ms-1">
                  <i className="mdi mdi-star align-middle"></i>4.8
                </span>
              </h5>
              <p className="text-dark mb-2">{data.email}</p>
              <ul className="list-inline mb-0 text-dark">
                <li className="list-inline-item">
                  <i className="mdi mdi-map-marker"></i> Oakridge Lane Bhopal
                </li>
                <li className="list-inline-item">
                  <i className="mdi mdi-wallet"></i> RS.4650 / hours
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
              <span className="badge bg-soft-secondary fs-14 mt-1">Leader</span>
              <span className="badge bg-soft-secondary fs-14 mt-1">
                Manager
              </span>
              <span className="badge bg-soft-secondary fs-14 mt-1">
                Developer
              </span>
            </div>
          </div>
        </div>
        <div className="favorite-icon d-flex edit-delete-list-btn">
          <a href="#" className="btn bg-purple d-block">
            <i className="fa fa-plus"></i> edit
          </a>
          <a href="#" className="btn bg-danger d-block">
            <i className="fa fa-trash"></i> delete
          </a>
        </div>
      </div>
    </div>
  );
}

export default User;
