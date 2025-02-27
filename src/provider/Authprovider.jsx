import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";
export const Authcontex = createContext(null)
const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loding, setloding] = useState(true)
    const creactuser = (email,password)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

   const signInUser=( email, password) =>{
    setloding(true)
   return signInWithEmailAndPassword(auth, email, password)
   }

    const userInfo = {
        user,
        loding,
        creactuser,
        signInUser
    }


    return (


        <div>
            <Authcontex.Provider value={userInfo}>
                {children}

            </Authcontex.Provider>

        </div>
    )
}
export default Authprovider;