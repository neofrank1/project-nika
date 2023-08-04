import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import "./CustomStyle.css";

function App() {
  const title = "Welcome to my Website";

  return (
    <div className="App body">
      <div className="container-fluid-xl vh-100">
        <Header />
        <Home />
        <div className="container-fluid">
          <h2 className="text-center">{title}</h2>
          <div className="row">
            <div className="col-8">
              <div className="card">
                <div className="card-body">Testing rani</div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img
                  src="./images/360_F_402062855_LVXessQdyvyc5lVS9SvJsw6VRQIX9H4K.jpg"
                  className="card-img-top"
                  alt="Picture"
                ></img>
                <div className="card-body">Testing rani</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
