import Image from "next/image";
import React from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaStarHalf,
  FaStarHalfAlt,
} from "react-icons/fa";
import Ratings from "./ratings";

function ReviewRating() {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-xl-7 order-2 order-xl-1">
            <div className="row mt-0 mt-xl-5">
              <div className="col-md-7 position-relative mb-0 mt-0 mt-md-5">
                <figure className="fill-danger opacity-2 position-absolute top-0 start-0 translate-middle mb-3">
                  <svg width="211px" height="211px">
                    <path d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z"></path>
                  </svg>
                </figure>

                <div className="bg-body shadow text-center p-4 rounded-3 position-relative mb-5 mb-md-0">
                  <div className="avatar avatar-xl mb-3">
                    <Image
                      className="avatar-img rounded-circle"
                      src="/assets/images/avatar/01.jpg"
                      alt="avatar"
                      height={100}
                      width={100}
                    />
                  </div>
                  <blockquote>
                    <p>
                      <span className="me-1 small">
                        <FaQuoteLeft />
                      </span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Obcaecati quam repellat molestias! Perspiciatis,
                      laboriosam facere.
                      <span className="ms-1 small">
                        <FaQuoteRight />
                      </span>
                    </p>
                  </blockquote>
                  <Ratings stars={4.5} />
                  <h6 className="mb-0">Carolyn Ortiz</h6>
                </div>
              </div>

              <div className="col-md-5 mt-5 mt-md-0 d-none d-md-block">
                <div className="bg-body shadow p-4 rounded-3 d-inline-block position-relative">
                  <div className="icon-lg bg-warning rounded-circle position-absolute top-0 start-100 translate-middle">
                    <i className="bi bi-shield-fill-check text-dark"></i>
                  </div>
                  <h6 className="mb-3">100+ Verified Mentors</h6>
                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar avatar-sm">
                      <Image
                        className="avatar-img rounded-1"
                        src="/assets/images/avatar/09.jpg"
                        alt="avatar"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0">Lori Stevens</h6>
                      <p className="mb-0 small">Tutor of physic</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-1"
                        src="assets/images/avatar/04.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0">Billy Vasquez</h6>
                      <p className="mb-0 small">Tutor of chemistry</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-1"
                        src="assets/images/avatar/02.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div className="ms-2">
                      <h6 className="mb-0">Larry Lawson</h6>
                      <p className="mb-0 small">Tutor of technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5 mt-xl-0">
              <div className="col-7 mt-0 mt-xl-5 text-end position-relative z-index-1 d-none d-md-block">
                <figure className="fill-danger position-absolute top-0 start-50 mt-n7 ms-6 ps-3 pt-2 z-index-n1 d-none d-lg-block">
                  <svg enableBackground="new 0 0 160.7 159.8" height="180px">
                    <path d="m153.2 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                    <path d="m116.4 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m134.8 114.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m135.1 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m153.5 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                    <path d="m98.3 96.9c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <ellipse cx="116.7" cy="99.1" rx="2.1" ry="2.2" />
                    <path d="m153.2 149.8c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z" />
                    <path d="m135.1 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2 0-1.3 0.9-2.2 2.1-2.2z" />
                    <path d="m153.5 132.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.3 0.9-2.2 2.1-2.2z" />
                    <path d="m80.2 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z" />
                    <path d="m117 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m98.6 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m135.4 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m153.8 79.3c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m80.6 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                    <ellipse cx="98.9" cy="63.9" rx="2.1" ry="2.2" />
                    <path d="m117.3 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <ellipse cx="62.2" cy="63.9" rx="2.1" ry="2.2" />
                    <ellipse cx="154.1" cy="63.9" rx="2.1" ry="2.2" />
                    <path d="m135.7 61.7c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m154.4 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m80.9 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                    <path d="m44.1 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                    <path d="m99.2 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z" />
                    <ellipse cx="117.6" cy="46.3" rx="2.1" ry="2.2" />
                    <path d="m136 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m62.5 44.1c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                    <path d="m154.7 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <path d="m62.8 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                    <ellipse cx="136.3" cy="28.6" rx="2.1" ry="2.2" />
                    <path d="m99.6 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                    <path d="m117.9 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2z" />
                    <path d="m81.2 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2-0.1-1.2 0.9-2.2 2.1-2.2z" />
                    <path d="m26 26.5c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2c-1.2 0-2.1-1-2.1-2.2s0.9-2.2 2.1-2.2z" />
                    <ellipse cx="44.4" cy="28.6" rx="2.1" ry="2.2" />
                    <path d="m136.6 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
                    <path d="m155 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
                    <path d="m26.3 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
                    <path d="m81.5 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
                    <path d="m63.1 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
                    <path d="m44.7 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-0.9 2.2-2.1 2.2z" />
                    <path d="m118.2 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
                    <path d="m7.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2 0.1 1.2-0.9 2.2-2.1 2.2z" />
                    <path d="m99.9 13.2c-1.2 0-2.1-1-2.1-2.2s1-2.2 2.1-2.2c1.2 0 2.1 1 2.1 2.2s-1 2.2-2.1 2.2z" />
                  </svg>
                </figure>

                <div
                  className="p-3 bg-primary d-inline-block rounded-4 shadow-lg text-center"
                  style={{
                    background:
                      "url(assets/images/pattern/02.png) no-repeat center center",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 className="text-white mb-0">3.5/5.0</h5>
                  <Ratings stars={3.5} />
                  <p className="text-white mb-0">Based on 3265 ratings</p>
                </div>
              </div>

              <div className="col-md-5 mt-n6 mb-0 mb-md-5">
                <div className="bg-body shadow text-center p-4 rounded-3">
                  <div className="avatar avatar-xl mb-3">
                    <Image
                      className="avatar-img rounded-circle"
                      src="/assets/images/avatar/03.jpg"
                      alt="avatar"
                      height={100}
                      width={100}
                    />
                  </div>
                  <blockquote>
                    <p>
                      <span className="me-1 small">
                        <i className="fas fa-quote-left"></i>
                      </span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore molestiae ex expedita?
                      <span className="ms-1 small">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </p>
                  </blockquote>
                  <Ratings stars={2.5} />
                  <h6 className="mb-0">Dennis Barrett</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 order-1 text-center text-xl-start">
            <h2 className="fs-1">Some valuable feedback from our students</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              libero, iure sit fugiat laborum delectus provident praesentium
              vel? Veniam praesentium magnam minima odio quis iste dicta quae
              perferendis velit beatae.
            </p>
            <a href="#" className="btn btn-primary bg-primary text-white mb-0">
              View Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewRating;
