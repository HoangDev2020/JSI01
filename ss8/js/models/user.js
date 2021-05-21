export async function register(data, success, fail) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        
        success()
    } catch(error) {
        fail(error)
    }
    
}