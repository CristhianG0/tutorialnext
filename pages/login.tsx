import {signIn, useSession ,getProviders} from 'next-auth/react'
import {useRouter} from 'next/router'
/*import { useEffect } from 'react' */
function LoginPage(){

   const {data: session, status} = useSession()
   const router = useRouter()
/**useEffect(()=>{
(async()=>{
    const providers = await getProviders()
    console.log(providers);
})();
},[]) */
    if(status !=='loading' && status ==='authenticated'){
        router.push('/')
    }
    return(
        <div>
           <div className="buttons">
           <button className='btn' onClick={() =>signIn('github')}>
                Signin with Github
            </button>
           </div>
        </div>
    )
}
export default LoginPage