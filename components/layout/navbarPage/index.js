import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  NavbarCollapse,
} from "react-bootstrap";

import styles from "./navbarStyles.module.css";
// import { IconName } from "react-icons/bs";
import { BsSearch, BsUiRadiosGrid } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

function NavbarPage() {
  return (
    <Navbar data-bs-theme="primary">
      <Container fluid className="px-3 px-xl-5">
        <Navbar.Brand href="#">
          <Image
            src="/assets/images/logo.png"
            width={100}
            height={50}
            alt="logo"
          />
        </Navbar.Brand>
        <NavbarCollapse>
          <NavDropdown
            id="navbarScrollingDropdown"
            className="hide-dd-icon bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0 me-auto"
            title=<>
              <BsUiRadiosGrid /> Category
            </>
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Ruby</NavDropdown.Item>
            <NavDropdown.Item href="#action4">React</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Java</NavDropdown.Item>
          </NavDropdown>

          <Nav className="me-auto">
            {/* <Link href="/login" className="nav-link">
              About Us
            </Link> */}
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/users" className="nav-link">
              User List
            </Link>
            <Link href="/counter" className="nav-link">
              Counter
            </Link>
            <Link href="/number" className="nav-link">
              Number
            </Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
          </Nav>

          <div className="nav my-3 my-xl-0 px-md-4 flex-nowrap align-items-center">
            <div className="nav-item w-100">
              <Form className="position-relative">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset">
                  <BsSearch />
                </Button>
              </Form>
            </div>
          </div>

          <Nav>
            <Link href="/signup" className="nav-link">
              Signup
            </Link>
            <Link href="/login" className="nav-link">
              Login
            </Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>

    // 			<div className="nav my-3 my-xl-0 px-md-4 flex-nowrap align-items-center">
    // 				<div className="nav-item w-100">
    // 					<form className="position-relative">
    // 						<input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
    // 						<button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
    // 							<i className="fas fa-search fs-6 "></i>
    // 						</button>
    // 					</form>
    // 				</div>
    //            <div className="nav-item">
    // 					<a className="nav-link" href="./signup.html" id="accounntMenu" >SignUp</a>
    // 				</div>
    //                 <div className="nav-item">
    // 					<a className="nav-link" href="./login.html" id="accounntMenu">Login</a>
    // 				</div>
    // 			</div>

    // 		</div>

    // 	</div>
    // </nav>
  );
}

export default NavbarPage;
