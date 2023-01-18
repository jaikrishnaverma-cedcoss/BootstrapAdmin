import React from 'react'
import { useProSidebar } from 'react-pro-sidebar';
type typer={
  collapseSidebar:(collapsed?: boolean | undefined) => void
}
const Nav = () => {
  const { collapseSidebar }:typer = useProSidebar();
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand me-0 me-sm-2 me-lg-5" href="#">
          <img src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png" alt="logo" className='col-6 col-lg-2' />
          <span className='mx-2 logoName d-none d-lg-inline'>NICE ADMIN</span> </a>
        <i onClick={() => collapseSidebar()} className="bi bi-list fs-1 mx-2 mx-sm-3 n-blue"></i>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-search n-blue"></i>
        </button>
        <div className="d-flex ms-auto nav-right-div align-items-center d-md-none " >
          <i className="bi bi-bell">
            <p className='bg-success text-center'>5</p>
            <p className='bg-primary '>2</p>
          </i>
          <i className="bi bi-chat-left-text">
            <p className='bg-success text-center'>5</p>
          </i>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle py-0 n-blue" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg" className='profilePic' alt="profilepic" /> <span className='d-none d-md-inline'>J. Verma</span>
              </a>
              <ul className="dropdown-menu mt-3" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse collapse show" id="navbarSupportedContent">
          <form className="d-flex me-auto mb-md-0 input-group shadow-sm rounded" style={{ maxWidth: '350px' }}>
            <input type="text" style={{ borderRight: '0' }} className="form-control n-blue" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span className="input-group-text bg-white border-start-0 n-blue" id="basic-addon2"><i className="bi bi-search"></i></span>
          </form>
        </div>
        <div className="d-flex ms-auto nav-right-div align-items-center d-none d-lg-flex" style={{ minWidth: '315px' }}>
          <i className="bi bi-bell">
            <p className='bg-success text-center'>5</p>
            <p className='bg-primary '>2</p>
          </i>
          <i className="bi bi-chat-left-text">
            <p className='bg-success text-center'>5</p>
          </i>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle py-0 n-blue" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg" className='profilePic' alt="profilepic" />  J. Verma
              </a>
              <ul className="dropdown-menu mt-3" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav