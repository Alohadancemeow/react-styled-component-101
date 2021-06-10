import GlobalStyles from './globalStyles'
import { Footer, Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/HomePage/Home';
import Signup from './pages/Signup/Signup';
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />

      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/services' component={Services}></Route>
        <Route path='/products' component={Products}></Route>
        <Route path='/sign-up' component={Signup}></Route>
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
