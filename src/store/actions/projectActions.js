export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
        // make async call to database

        const store = getFirebase().firestore();

        store.collection('projects').add({
            ...project,
            authorFirstName: 'Jane',
            authorLastName: 'Doe',
            authorId: 12345,
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