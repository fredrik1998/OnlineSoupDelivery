import React from "react";
import Products from "./components/Products";
import store from "./store";
import { Provider } from "react-redux";
import Filter from "./components/filter"
import Cart from "./components/Cart"


class appPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <div className="grid-container">
            <header>
              <a href to="/">Online Soup Delivery</a>
            </header>           
            <main>
              <div className="content">
                <Filter/>
              <div className="main">
                <Products/>
                </div>
              <div className="sidebar"></div>
              <Cart/>
              </div>
            </main>
            <footer>Online Soup Delivery</footer>
          </div> 
          </Provider>
    );
  }
}
export default appPage;
