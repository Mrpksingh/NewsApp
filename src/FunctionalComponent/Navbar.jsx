import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  var [search,setsearch]=useState("")
 function getdata(e){
    setsearch(e.target.value)
  }
 function postdata(e){
    e.preventDefault()
    props.changeSearch(search)
    setsearch({search:""})
  }
    return (
      <>
      <nav className="navbar navbar-expand-lg nav-bg sticky-top mb-2">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">News Air</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/" onClick={()=>props.search("")}>All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/politics"onClick={()=>props.search("")}>Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/crime"onClick={()=>props.search("")}>Crime</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/education"onClick={()=>props.search("")}>Education</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others Cat.
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="cricket"onClick={()=>props.search("")}>Cricket</Link></li>
            <li><Link class="dropdown-item" to="india"onClick={()=>props.search("")}>India</Link></li>
            <li><Link class="dropdown-item" to="fifa"onClick={()=>props.search("")}>Fifa</Link></li>
            <li><Link class="dropdown-item" to="covid"onClick={()=>props.search("")}>Covid</Link></li>
            <li><Link class="dropdown-item" to="technology"onClick={()=>props.search("")}>Technology</Link></li>
            <li><Link class="dropdown-item" to="science"onClick={()=>props.search("")}>Science</Link></li>
            <li><Link class="dropdown-item" to="jokes"onClick={()=>props.search("")}>Jokes</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language.
          </Link>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" to="cricket" onClick={()=>props.changeLanguage("hi")}>Hindi</button></li>
            <li><button class="dropdown-item" to="india" onClick={()=>props.changeLanguage("en")}>English</button></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>{postdata(e)}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search'onChange={(e)=>getdata(e)} value={setsearch.search} />
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </>
    )
}
