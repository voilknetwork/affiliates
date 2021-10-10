import React from 'react'

export default function SideBarRight() {
    return (
        <aside id="sidebar-right" class="sidebar-right">
        <div class="nano">
            <div class="nano-content">
                <a href="#" class="mobile-close d-md-none">
                    Collapse <i class="fas fa-chevron-right"></i>
                </a>

                <div class="sidebar-right-wrapper">

                    <div class="sidebar-widget widget-calendar">
                        <h6>calendar</h6>
                        <div data-plugin-datepicker data-plugin-skin="dark"></div>

                        <ul>
                            <li>
                                <time datetime="2021-04-19T00:00+00:00">04/19/2021</time>
                                <span>Company Meeting</span>
                            </li>
                        </ul>
                    </div>

                    

                </div>
            </div>
        </div>
    </aside>

    )
}
