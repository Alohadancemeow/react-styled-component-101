import GlobalStyles from './globalStyles'
import { Footer, Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />

      <Switch>
        <Route path='/' exact component={Home}></Route>
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
