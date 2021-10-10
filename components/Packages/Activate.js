import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { LoginContext } from '../../contexts';
import { ACTIVATE_PACKAGE } from './ACTIVATE_PACKAGE';
export default function Activate({mem}) {
    const {username, password} = useContext(LoginContext)
    const [activatePackage, {loading, data, error}] = useMutation(ACTIVATE_PACKAGE);

    if(loading) return <p><h4>Activating package.. </h4></p>

    return (
        <a class="btn btn-lg btn-success" 
                onClick={(e) => {
                    e.preventDefault()
                    const options = { 
                        variables: { 
                            username: username, 
                            wif: password,
                            package_id: mem.id
                        } 
                    }
                    activatePackage(options)
                    .then(x => {
                        if(x && x.data && x.data.activate_package && x.data.activate_package.username){
                            
                            toast.success("Success: Package activated successfully.")
                            
                        }
                        else {
                            toast.error("Error: There was some error. contact support")
                        }
                    })
                    .catch(e => {
                        toast.error("Error: " + e.message)
                    })
                }}
                >Activate Now!</a>
    )
}
