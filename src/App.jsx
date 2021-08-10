import "./Style/style.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './bootstrap-5.0.2-dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import store from "./redux/store";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";

// IMPORTING PAGES
import Main from "./pages/Main";
import StartAProject from "./pages/StartAProject";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import WebDevelopment from "./pages/WebDevelopment";
import CaseStudies from "./pages/CaseStudies";
import ICB from "./pages/ICB";
import Travel from "./pages/Travel";
import ECommerceWeb from "./pages/ECommerceWeb";
import TravelHelps from "./pages/TravelHelps";
import Healthcare from "./pages/Healthcare";
import Construction from "./pages/Construction";
import Education from "./pages/Education";

import Webdev from "./pages/Webdev";
import Second from "./pages/blog articles/Second";
import Third from "./pages/blog articles/Third";
import Fourth from "./pages/blog articles/Fourth";
import Fifth from "./pages/blog articles/Fifth";
import Sixth from "./pages/blog articles/Sixth";
import Seventh from "./pages/blog articles/Seventh";
import Eight from "./pages/blog articles/Eight";
import Ninth from "./pages/blog articles/Ninth";

function App() {
  return (
    <Provider store={store}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/start_A_Project" component={StartAProject} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/webDevelopment" component={WebDevelopment} />
        <Route exact path="/caseStudies" component={CaseStudies} />
        <Route exact path="/icb" component={ICB} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/eCommerce" component={ECommerceWeb} />
        <Route exact path="/travelHelp" component={TravelHelps} />
        <Route exact path="/healthcare" component={Healthcare} />
        <Route exact path="/construction" component={Construction} />
        <Route exact path="/education" component={Education} />

        <Route exact path="/Webdev" component={Webdev} />
        <Route exact path="/second" component={Second} />
        <Route exact path="/third" component={Third} />
        <Route exact path="/fourth" component={Fourth} />
        <Route exact path="/fifth" component={Fifth} />
        <Route exact path="/sixth" component={Sixth} />
        <Route exact path="/seventh" component={Seventh} />
        <Route exact path="/eight" component={Eight} />
        <Route exact path="/ninth" component={Ninth} />
      </Switch>
    </Provider>
  );
}

export default App;
