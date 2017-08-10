import firebase, { auth, db } from './';

export const emailSignup = async (email, password) => {
	try {
		await auth.createUserWithEmailAndPassword(email, password);
		return user;
	} catch (err) {
		console.log(err);
		return err;	
	}
}

export const emailLogin = async (email, password) => {
	try {
		await auth.signInWithEmailAndPassword(email, password);
		return user;
	} catch (err) {
		console.log(err);
		return err;
	}
}