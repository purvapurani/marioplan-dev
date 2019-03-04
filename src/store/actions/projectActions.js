export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
        // make async call to database 

        const store = getFirebase().firestore();
        const profile = getState().firebase.profile;

        store.collection('projects').add({
            ...project,
            title: project.title,
            content: project.content,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: getState().firebase.auth.uid,
            createdAt: new Date()
        }).then(()=>{
            dispatch({
                type: 'CREATE_PROJECT',
                project
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            })
        })
    }
} 