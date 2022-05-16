import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./componentes/layout/Header"
import Nav from "./componentes/layout/Nav";
import Footer from './componentes/layout/Footer';
import HomePage from './pages/Home';
import RugbyPage from './pages/Rugby';
import BasquetPage from './pages/Basquet';
import ConsultasPage from './pages/Consultas';



function App() {
  return (
    <Router>
      <Header></Header>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Rugby" exact component={RugbyPage} />
        <Route path="/Basquet" exact component={BasquetPage} />
        <Route path="/Consultas" exact component={ConsultasPage} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App


