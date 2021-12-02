import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../myComponents/footer";
import VisitNow from "../myComponents/header";
import BasicGrid from "../myComponents/header_1"
import NavBar_1 from "../myComponents/navBar";
import MySection from "../myComponents/section";

export default function AppRouter() {
    return (
      <Router>
        
          <Route path="/" component={VisitNow} />
          <Route path="/" component={BasicGrid} />
          <Route path="/" component={NavBar_1} />
          <Route path="/" component={MySection} />
          <Route path="/" component={Footer} />
        
        
      </Router>
    );
  }