import Image from "next/image";
import React from "react";

function FooterPage() {
  return (
    <footer className="pt-5">
      <div className="container">
        {/* <!-- Row START --> */}
        <div className="row g-4">
          {/* <!-- Widget 1 START --> */}
          <div className="col-lg-3">
            {/* <!-- logo --> */}
            <a className="me-0" href="index.html">
              <Image
                className="light-mode-item h-40px"
                src="/assets/images/logo.svg"
                alt="logo"
                height={100}
                width={100}
              />
              <Image
                className="dark-mode-item h-40px"
                src="/assets/images/logo-light.svg"
                alt="logo"
                height={100}
                width={100}
              />
            </a>
            <p className="my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              earum perspiciatis iusto vel nulla minus.
            </p>
            {/* <!-- Social media icon --> */}
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-facebook"
                  href="#"
                >
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-instagram"
                  href="#"
                >
                  <i className="fab fa-fw fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-twitter"
                  href="#"
                >
                  <i className="fab fa-fw fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-linkedin"
                  href="#"
                >
                  <i className="fab fa-fw fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Widget 1 END --> */}

          {/* <!-- Widget 2 START --> */}
          <div className="col-lg-6">
            <div className="row g-4">
              {/* <!-- Link block --> */}
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">Company</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      News and Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Library
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Career
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Link block --> */}
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">Community</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Documentation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Faq
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Forum
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Link block --> */}
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">Teaching</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Become a teacher
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      How to guide
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Widget 2 END --> */}

          {/* <!-- Widget 3 START --> */}
          <div className="col-lg-3">
            <h5 className="mb-2 mb-md-4">Contact</h5>
            {/* <!-- Time --> */}
            <p className="mb-2">
              Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
              <span className="d-block small">(9:AM to 8:PM IST)</span>
            </p>

            <p className="mb-0">
              Email:<span className="h6 fw-light ms-2">example@gmail.com</span>
            </p>

            <div className="row g-2 mt-2">
              {/* <!-- Google play store button --> */}
              <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                <a href="#">
                  <img src="assets/images/client/google-play.svg" alt="" />
                </a>
              </div>
              {/* <!-- App store button --> */}
              <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                <a href="#">
                  <img
                    src="assets/images/client/app-store.svg"
                    alt="app-store"
                  />
                </a>
              </div>
            </div>
            {/* <!-- Row END --> */}
          </div>
          {/* <!-- Widget 3 END --> */}
        </div>
        {/* <!-- Row END --> */}

        {/* <!-- Divider --> */}
        <hr className="mt-4 mb-0" />
      </div>
    </footer>
  );
}

export default FooterPage;
