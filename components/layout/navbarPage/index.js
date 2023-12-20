import React from 'react'
import { Container, NavDropdown, Navbar, NavbarCollapse } from 'react-bootstrap'

function NavbarPage() {
  return (
    <Navbar data-bs-theme="primary">
        <Container fluid className='px-3 px-xl-5'>
            <Navbar.Brand href="#">Logo</Navbar.Brand>
            <NavbarCollapse>
                <NavDropdown title="Link" id="navbarScrollingDropdown" className='nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0'>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Ruby
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    React
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Java
                </NavDropdown.Item>
                </NavDropdown>
            </NavbarCollapse>
        </Container>
    </Navbar>
    
    // <nav className="navbar navbar-expand-xl">
	// 	<div className="container-fluid px-3 px-xl-5">
	// 		<a className="navbar-brand" href="index.html"><span>logo</span>
	// 		</a>

	// 		<button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
	// 			<span className="navbar-toggler-animation">
	// 				<span></span>
	// 				<span></span>
	// 				<span></span>
	// 			</span>
	// 		</button>
            
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>


	// 		<div className="navbar-collapse w-100 collapse" id="navbarCollapse">
	// 			<ul className="navbar-nav navbar-nav-scroll me-auto">
	// 				<li className="nav-item dropdown dropdown-menu-shadow-stacked">
	// 					<a className="nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0" href="#" id="categoryMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="bi bi-ui-radios-grid me-2"></i><span>Category</span></a>
	// 					<ul className="dropdown-menu" aria-labelledby="categoryMenu">
	// 						<li> <a className="dropdown-item" href="#">Design</a></li>
						
	// 						<li> <a className="dropdown-item" href="#">Development</a></li>
	// 						<li> <a className="dropdown-item" href="#">UI/UX Design</a></li>
	// 						<li> <a className="dropdown-item" href="#">IT & software</a></li>
	// 						<li> <a className="dropdown-item" href="#">React Developer</a></li>
	// 						<li> <a className="dropdown-item" href="#">Node Developer</a></li>
	// 						<li> <a className="dropdown-item" href="#">React Native Developer</a></li>
	// 						<li> <a className="dropdown-item" href="#">Testing</a></li>
	// 						<li> <a className="dropdown-item" href="#">Angular Developer</a></li>
	// 						<li> <hr className="dropdown-divider" /></li>
	// 						<li> <a className="dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0" href="#">View all categories</a></li>
	// 					</ul>
	// 				</li>
	// 			</ul>



	// 			<ul className="navbar-nav navbar-nav-scroll me-auto">

	// 				<li className="nav-item">
	// 					<a className="nav-link" href="./index.html">Home</a>
						
	// 				</li>


	// 				<li className="nav-item">
	// 					<a className="nav-link" href="./user-list.html">Users List</a>
	// 				</li>
					

	// 				<li className="nav-item">
	// 					<a className="nav-link" href="./profile.html">Profile</a>
	// 				</li>
	// 			</ul>

	// 			<div className="nav my-3 my-xl-0 px-md-4 flex-nowrap align-items-center">
	// 				<div className="nav-item w-100">
	// 					<form className="position-relative">
	// 						<input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
	// 						<button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
	// 							<i className="fas fa-search fs-6 "></i>
	// 						</button>
	// 					</form>
	// 				</div>
    //                 <div className="nav-item">
	// 					<a className="nav-link" href="./signup.html" id="accounntMenu" >SignUp</a>
	// 				</div>
    //                 <div className="nav-item">
	// 					<a className="nav-link" href="./login.html" id="accounntMenu">Login</a>
	// 				</div>
	// 			</div>

	// 		</div>

	// 	</div>
	// </nav>
  )
}

export default NavbarPage