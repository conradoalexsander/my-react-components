import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Clock from "./components/clock";
import LoadingSpinnerSUI from "./components/LoadingSpinnerSUI";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            This is the Clock component: <Clock />
          </li>

          <li>
            Uncomment the LoadingSpinnerSUI in the source code to see it working
            here
            {/* Uncomment the line below to see the result in the app */}
            {/* <div>
               This is the LoadingSpinnerSUI component: <LoadingSpinnerSUI />
               </div> */}
          </li>

        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
