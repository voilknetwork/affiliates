import { useRef } from 'react'
import Link from "next/link"
export default function SideBarLeft() {
    const nanoRef = useRef(null)


    return (
        <aside id="sidebar-left" class="sidebar-left">

            <div class="sidebar-header">
                <div class="sidebar-toggle d-none d-md-flex" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
                    <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
                </div>
            </div>

            <div class="nano">
                <div class="nano-content" ref={nanoRef}>
                    <nav id="menu" class="nav-main" role="navigation">

                        <ul class="nav nav-main">
                            <li>
                                <Link href="/">
                                    <a class="nav-link">
                                        <i class="fas fa-tachometer-alt" aria-hidden="true"></i>
                                        
                                        <span>Dashboard</span>
                                    </a>
                                </Link>
                            </li>
                            
                            <li class="nav-group-label">Activity</li>
                            <li class="nav-parent">
                                <Link href="/airdrop">
                                    <a class="nav-link">
                                        <i class="fas fa-newspaper"></i>
                                        <span>AirDrop</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/board">
                                    <a class="nav-link">
                                        <i class="fas fa-cubes"></i>
                                        <span>Leader board</span>
                                    </a>   
                                </Link>
                            </li>
                            <li class="nav-group-label">More</li>

                            <li class="nav-parent">
                                <Link href="/referrals">
                                    <a class="nav-link">
                                        <i class="fas fa-users"></i>
                                        <span>Referrals</span>
                                    </a>
                                </Link>
                            </li>
                            <li class="nav-parent">
                                <Link href="/faq">
                                    <a class="nav-link">
                                        <i class="fas fa-newspaper"></i>
                                        <span>Faq</span>
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </nav>

                    <hr class="separator" />

                    <div class="sidebar-widget widget-tasks">
                        <div class="widget-header">
                            <h6>Settings</h6>
                        </div>
                        <div class="widget-content">
                            <ul class="list-unstyled m-0">
                                <li>
                                    <a 
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if(localStorage){
                                            localStorage.setItem("username", null)
                                            localStorage.setItem("wif", null)
                                            window.location.href = "/signin"
                                        }
                                    }}
                                    >Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>



            </div>

        </aside>

    )
}
