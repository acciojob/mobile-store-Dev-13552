import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./../styles/App.css";
import Navigation from "./Navigation";
import ProductList from "../Pages/ProductList";
import ProductDetails from "../Pages/ProductDetails";
import AdminPanel from "../Pages/AdminPanel";
import AdminUpdate from "../Pages/AdminUpdate";
import { data } from "../data/mobileData";
import AdminCreate from "../Pages/AdminCreate";

const App = () => {
  const [filterData, setFilterData] = useState(data);
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <ProductList
                {...routeProps}
                filterData={filterData}
                setFilterData={setFilterData}
              ></ProductList>
            )}
          ></Route>
          <Route path="/products/:id" component={ProductDetails}></Route>
          <Route
            exact
            path="/admin"
            render={(routeProps) => (
              <AdminPanel
                {...routeProps}
                filterData={filterData}
                setFilterData={setFilterData}
              />
            )}
          />
          <Route
            exact
            path="/admin/products/:id"
            render={(routeProps) => (
              <AdminUpdate
                {...routeProps}
                filterData={filterData}
                setFilterData={setFilterData}
              />
            )}
          />
          <Route
            exact
            path="/admin/add"
            render={(routeProps) => (
              <AdminCreate
                {...routeProps}
                filterData={filterData}
                setFilterData={setFilterData}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
