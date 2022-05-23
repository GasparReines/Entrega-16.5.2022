import {BrowserRouter as Router,Switch, Route } from "react-router-dom";

import './App.css';
import Header from './componentes/layout/Header';
import Footer from './componentes/layout/Footer';
import Nav from './componentes/layout/Nav';
import HomePage from './pages/HomePage';
import ConsultasPage from './pages/ConsultasPage';
import RugbyPage from "./pages/RugbyPage";
import BasquetPage from './pages/BasquetPage';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/rugby" exact component={RugbyPage} />
        <Route path="/basquet" exact component={BasquetPage} />
        <Route path="/consultas" exact component={ConsultasPage} />
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App;
