import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './component/Homepage';
import Company from './component/Company';
import Product from './component/Product';
import Attachment from './component/Attachment';
import Contact from './component/Contact'
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/company" exact component={Company} />
          <Route path="/attachment" exact component={Attachment} />
          <Route path="/company/product" exact component={Product} /> 
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;