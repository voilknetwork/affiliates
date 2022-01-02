import React, { useContext } from 'react'
import Link from "next/link"
import {LoginContext, UserContext} from '../../contexts'
import { isLoggedIn } from '../../constants/isloggedin'

export default function Header() {

    const {username, password} = useContext(LoginContext)
    const {isLoading, userdata} = useContext(UserContext)

    if(isLoading) return false
    return (
        <header class="header header-nav-menu header-nav-links">
        <div class="logo-container">
        <Link href="/">
            <a class="logo">
                <img src="img/logo-modern.png" class="logo-image" width="90" height="24" alt="Porto Admin" />
                <img src="img/logo-default.png" class="logo-image-mobile" width="90" height="41" alt="Porto Admin" />
            </a>
            </Link>
            <button class="btn header-btn-collapse-nav d-lg-none" data-bs-toggle="collapse" data-bs-target=".header-nav">
                <i class="fas fa-bars"></i>
            </button>

            
            <div class="header-nav collapse">
                <div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 header-nav-main-square">
                    <nav>
                        <ul class="nav nav-pills" id="mainNav">
                            <li class="">
                                <Link href="/">
                                <a class="nav-link">
                                    Dashboard
                                </a>
                                </Link>
                                   
                            </li>
                            <li class="">
                                    <Link href="/deposit">
                                        <a class="nav-link">
                                            Deposit
                                        </a></Link>
                                    </li><li class="">
                                    <Link href="/bonus">
                                        <a class="nav-link">
                                            Bonus
                                        </a></Link>
                                    </li>
                                    <li class="">
                                    <Link href="/withdraw"><a class="nav-link">
                                            Withdraw
                                        </a></Link>
                                        
                                    </li>
                                    <li class="">
                                    <Link href="/plans">
                                        <a class="nav-link">
                                            Packages
                                        </a></Link>
                                    </li>
                                    <li class="">
                                    <Link href="/faq"><a class="nav-link">
                                            Faq
                                        </a></Link>
                                        
                                    </li>
                                    <li class="">
                                    <Link href="/customers">
                                        <a class="nav-link">
                                            Customers
                                        </a></Link>
                                    </li>
                                    <li class="">
                                    <Link href="/history"><a class="nav-link">
                                            History
                                        </a></Link>
                                        
                                    </li>
                                    <li class="">
                                    <Link href="/stats"><a class="nav-link">
                                            Statistics
                                        </a></Link>
                                        
                                    </li>
                            {username==="voilk"?<li class="dropdown">
                            <a class="nav-link dropdown-toggle" href="#">
                                    Admin
                                </a>
                                <ul class="dropdown-menu">
                                <li>
                                    <Link href="/deposits">
                                        <a class="nav-link">
                                            Deposits
                                        </a></Link>
                                    </li>
                                    <li>
                                    <Link href="/withdrawals"><a class="nav-link">
                                            Withdrawals
                                        </a></Link>
                                        
                                    </li>
                                </ul>
                            </li>:null}
                        </ul>
                    </nav>
                </div>
            </div>
            
        </div>

        {isLoggedIn()?
        <div class="header-right">


            <span class="separator"></span>

            <div id="userbox" class="userbox">
                <a href="#" data-bs-toggle="dropdown">

                    <span class="profile-picture profile-picture-as-text">
                        <img src={userdata.json_metadata.profile_image}></img>
                    </span>
                    <div class="profile-info profile-info-no-role">
                        <span class="name">Hi, <strong class="font-weight-semibold">{userdata.name}</strong></span>
                    </div>

                    <i class="fas fa-chevron-down text-color-dark"></i>
                </a>

                <div class="dropdown-menu">
                    <ul class="list-unstyled">
                        <li>
                        <Link href="/board">
                            <a role="menuitem" 
                            tabIndex="-1"
                            
                            ><i class="fas fa-plane"></i> 
                             Board</a>
                            </Link>
                        </li>
                        <li>
                            <a role="menuitem" 
                            tabIndex="-1"
                            onClick={(e) => {
                                if(localStorage){
                                    localStorage.setItem("username", null)
                                    localStorage.setItem("wif", null)
                                    window.location.href = "/signin"
                                }
                            }}
                            ><i class="bx bx-log-out"></i> 
                            Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        :null}
    </header>
    )
}
