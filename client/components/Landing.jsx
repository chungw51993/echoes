const Landing = () => (
  <div>
    <div className="landing container">
      <div className="container-fluid">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-center">
            <img src="/styles/logo.svg" className="logo" />
            <p className="blurb">Your living listening history.</p>
            <Link to="/signup" className="nav-button">
              <button className="btn btn-default landing"><span>Sign Up</span></button>
            </Link>
            <Link to="/login" className="nav-button">
              <button className="btn btn-default landing"><span>Sign In</span></button>
            </Link>
          </div>
          <div className="col-md-3"></div>
      </div>
    </div>

    <a href="http://www.github.com/MudCats/echoes">
      <img src="/styles/github-octocat.png" className="github-octocat" />
    </a>

    <footer className="navbar-fixed-bottom landing">
      <p className="author-credit">Created with love by Jin Chung, Jerry Krusinski, and David Pollan for HRATX25</p>
    </footer>
  </div>
);
