
import PageWrapper from './Components/PageWrapper';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//pages
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Services from './Components/Common/Services';
import Portfolio from './Components/Common/Portfolio';
import TeamItem from './Components/Common/TeamItems';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <Router>
      <PageWrapper>
        
          <Route
          exact = {true}
          path="/" 
          component={Home}
          />
          <Route
          path="/about"
          component={About}
          />
          
          <Route
          path="/services"
          component={Services}
          />
          <Route
          path="/portfolio"
          component={Portfolio}
          />
          
          <Route
          path="/team"
          component={TeamItem}
          />
          
          <Route
          path="/contact"
          component={Contact}
          />


        
      </PageWrapper>
    </Router>
  );
}

export default App;
