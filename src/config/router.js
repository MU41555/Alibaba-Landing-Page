import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VisitNow from "../myComponents/header";
import BasicGrid from "../myComponents/header_1"
import MySection from "../myComponents/section";

export default function AppRouter() {
    return (
      <Router>
        
          <Route path="/" component={VisitNow} />
          <Route path="/" component={BasicGrid} />
          <Route path="/" component={MySection} />
        
        
      </Router>
    );
  }