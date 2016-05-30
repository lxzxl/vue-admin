// css or scss
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/index.scss";
import "vue-strap";
import "./assets/scripts/base";
import "./assets/scripts/index";
import Vue from "vue";
import App from "./App";
// import store from "./vuex/store";

/* eslint-disable no-new */
new Vue({
  // store, // inject store to all children
  el: 'body',
  vuex: {
    getters: {
      cls: (state) => 'flat-blue'
    }
  },
  components: {App}
});
