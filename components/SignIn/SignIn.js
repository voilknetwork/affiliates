import { useMutation } from '@apollo/client';
import {useState} from 'react'
import { toast } from 'react-toastify';
import { AUTH_MUTATION } from './AUTH_MUTATION';

export default function SignIn() {

    const [username, setUsername] = useState("")
    const [postinKey, setPostingKey] = useState("")
    const [AuthPosting, { data, loading, error }] = useMutation(AUTH_MUTATION);
    

    return (
        <section class="body-sign">
            <div class="center-sign">
                <a href="/" class="logo float-left">
                    <img src="img/logo.png" height="70" alt="Porto Admin" />
                </a>

                <div class="panel card-sign">
                    <div class="card-title-sign mt-3 text-end">
                        <h2 class="title text-uppercase font-weight-bold m-0"><i class="bx bx-user-circle me-1 text-6 position-relative top-5"></i> Sign In</h2>
                    </div>
                    <div class="card-body">
                        <form onSubmit={async (e) => {
                            e.preventDefault()
                            const result = await AuthPosting({ variables: { username, wif: postinKey } });
                            
                            if(result && result.data && result.data.auth_posting&&result.data.auth_posting.authenticated){
                                if(localStorage){
                                    localStorage.setItem("username", username)
                                    localStorage.setItem("wif", postinKey)
                                    window.location.href = "/"
                                }
                            }
                            else{
                                if(localStorage){
                                    localStorage.setItem("username", null)
                                    localStorage.setItem("wif", null)
                                    toast.error("Posting Key not Valid.");
                                }
                            }
                        }} method="post">
                            <div class="form-group mb-3">
                                <label>Username</label>
                                <div class="input-group">
                                    <input name="username" type="text" 
                                    value={username}
                                    placeholder="Type username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    class="form-control form-control-lg" />
                                    <span class="input-group-text">
                                        <i class="bx bx-user text-4"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <div class="clearfix">
                                    <label class="float-left">Posting Key</label>
                                </div>
                                <div class="input-group">
                                    <input name="pwd" type="password" 
                                    value={postinKey}
                                    placeholder="Type Your Posting Key here."
                                    onChange={(e) => setPostingKey(e.target.value)}
                                    class="form-control form-control-lg" />
                                    <span class="input-group-text">
                                        <i class="bx bx-lock text-4"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-8">
                                    
                                </div>
                                <div class="col-sm-4 text-end">
                                    {loading?"Loading..":<button type="submit" class="btn btn-primary mt-2">Sign In</button>}
                                </div>
                            </div>

                            <span class="mt-3 mb-3 line-thru text-center text-uppercase">
                                <span>or</span>
                            </span>

                            <p class="text-center">Don't have an account yet? <a href="https://signup.voilk.com/register">Sign Up!</a></p>

                        </form>
                    </div>
                </div>

                <p class="text-center text-muted mt-3 mb-3">&copy; Copyright 2023. All Rights Reserved.</p>
            </div>
        </section>
    )
}
