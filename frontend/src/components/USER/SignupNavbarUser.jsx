import React from 'react'

const SignupNavbarUser = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-bottom-dark"  data-bs-theme="dark">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href={'/'}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={'/LoginUser'}>Login</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default SignupNavbarUser;
