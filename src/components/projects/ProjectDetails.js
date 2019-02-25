import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
  
  // console.log(props)

  const { project } = props;
  if(project){
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{project.authorFirstName} {project.authorlastName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className="container center">
        <img style={{ marginTop : "40px" }} src="/images/loader.svg" alt="Loading" />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project
  }
}

export default compose(connect(mapStateToProps), firestoreConnect([{
  collection: 'projects'
}]))(ProjectDetails)
