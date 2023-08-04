const Home = () => {
  return (
    <div className="container-fluid-lg px-5 mt-5 mb-3">
      <div
        className="card jumbotron text-light"
        style={{
          height: "380px",
        }}
      >
        <div className="container py-5">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="/" role="button">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
