import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Scrollbar from 'react-scrollbars-custom';
// import firebase from '../../config/fbConfig'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {

  render() {
    
    // console.log(this.props);
    const { projects, auth, notifications } = this.props;

    if(!auth.uid) return <Redirect to='/signin' />

    let projectList;
    if(projects){
      projectList = projects.length > 5 ? <Scrollbar style={{ minHeight: '75vh' }}><ProjectList projects={projects} /></Scrollbar> : projectList = <ProjectList projects={projects} />      
    }
    else{
      projectList = <div className="loader"><img src="/images/loader.svg" alt="Loading" /></div>
    }
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <div className="projectList-wrapper">
              {projectList}
            </div>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

/*firebase.firestore().collection('projects').get().then(function(querySnapshot) {
  if (querySnapshot.size > 0) {
    // Contents of first document
    console.log(querySnapshot.docs);
  } else {
    console.log("No such document!");
  }
})*/

const mapStateToProps = (state) => {
  console.log(state)
  return{
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notifications', limit: 10, orderBy: ['time', 'desc']},
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
  ])
)(Dashboard)