import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from 'firebase/firestore'
import { Category } from '../../store/categories/categories.type'

const firebaseConfig = {
  apiKey: 'AIzaSyCSjfzn2_u62i_D0FP3pxz98g1UXXtuENw',
  authDomain: 'ecommerce-db-59ad6.firebaseapp.com',
  projectId: 'ecommerce-db-59ad6',
  storageBucket: 'ecommerce-db-59ad6.appspot.com',
  messagingSenderId: '1043066423469',
  appId: '1:1043066423469:web:145dbd729c44594bc49e24'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export type ObjectToAdd = {
  title: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })
  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async (key: string): Promise<Category[]> => {
  const collectionRef = collection(db, key)
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category)
}

export type AddtionalInformation = {
  displayName?: string
}

export type UserData = {
  createAt: Date
  displayName: string
  email: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  addtionalInformation = {} as AddtionalInformation
): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...addtionalInformation
      })
    } catch (err) {
      console.error('Error creating the user: ', err)
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}
