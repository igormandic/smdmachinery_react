import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './component/Homepage';
import Company from './component/Company';
import Product from './component/Product';
import Attachment from './component/Attachment';
import AllAttachments from './component/AllAttachments'
import ContactPage from './component/ContactPage';
import AllProducts from './component/AllProducts';
import UseAgreement from './component/UseAgreement';
import CookiePolicy from './component/CookiePolicy';
class App extends React.Component {

  render() {
    
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/company/:name" exact component={Company} />
          <Route path="/company/:name/attachments" exact component={AllAttachments} />
          <Route path="/company/:name/attachments/:attachment" exact component={Attachment} />
          <Route path="/company/:name/product/:product" exact component={Product} /> 
          <Route path="/company/:name/product" exact component={AllProducts} /> 
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/useAgreement" exact component={UseAgreement} />
          <Route path="/cookiePolicy" exact component={CookiePolicy} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;