import React from 'react';
import 'antd/dist/antd.css';
import './static/style/pages/common.css'
import { Header, Footer } from './components';
import { Route, Switch } from 'react-router';
import { BlogHome, BlogPage } from './pages';


function App(props) {


  return (
    <div>
      <Header />
      <Switch>
        <Route path='/BlogPage/:id' component={BlogPage} />
        <Route path='/bloghome' component={BlogHome} />
        <Route path='/' component={BlogHome} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
