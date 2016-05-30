import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/base.scss';
import './assets/scripts/base';
import './assets/scripts/index';

import Vue from 'vue'
import App from './App'


/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
