import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";



function App() {
 
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dishapatani" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
      </Switch>
    </>
  );
}

export default App;
