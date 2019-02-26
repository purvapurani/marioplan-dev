import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer';
import fbConfig from './config/fbConfig'
import firebase from './config/fbConfig'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore'

const store = createStore(rootReducer, {}, compose(
  applyMiddleware(
    thunk.withExtraArgument(getFirebase) // Pass getFirebase function as extra argument
  ),
  reduxFirestore(firebase),
  reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
));

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
})