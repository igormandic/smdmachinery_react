import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './component/Homepage';
import Company from './component/Company';
import Product from './component/Product';
import Attachment from './component/Attachment';
import ContactPage from './component/ContactPage';
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/company/:name" exact component={Company} />
          <Route path="/attachment" exact component={Attachment} />
          <Route path="/company/:name/product" exact component={Product} /> 
          <Route path="/contact" exact component={ContactPage} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;