import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import _ from 'lodash';
import $ from 'jquery';
import './css/index.css';

let screenArray = [];

$(document).ready(function() {
  createScreen();
  renderScreen();
});

function createScreen() {
  for (let n = 0; n < 505; n++) {
    screenArray.push({key: n});
  }
}

function renderScreen() {
  $('.container div:nth-child(101n)').css('clear', 'right'); //101n
  renderReactApp();
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let newArray = this.props.screenArray.map((data) => {
      return(<div id={data.key} className="dark"/>);
    });
    return(
      <div className="container">
        {newArray}
      </div>
    );
  }
}

// function renderReactApp() {
  ReactDOM.render(
    <App screenArray={screenArray} />,
    document.getElementById('app')
  );
// }
