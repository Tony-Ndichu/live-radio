import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import routes from './routes';


const App = () => {

  const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Palanquin Dark', sans-serif !important;
    margin: 0 !important;
    background-color: white;
  }
`;

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
          <Switch>
          {routes.map((prop) => {
              return <Route exact path={prop.path} component={prop.component} key={prop.path} />;
            })}
          </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
