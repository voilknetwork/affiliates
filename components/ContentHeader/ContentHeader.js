import Head from 'next/head'

export default function ContentHeader({name, title, fullname}) {
    return (
        <>

<Head>
                <title>{fullname} - affiliates.voilk.com</title>
            </Head>
        <header class="page-header">
        <h2>{fullname}</h2>

        <div class="right-wrapper text-end">
            <ol class="breadcrumbs">
                <li>
                    <a href="/">
                        <i class="bx bx-home-alt"></i>
                    </a>
                </li>

                <li><span>{title}</span></li>

                <li><span>{name}</span></li>

            </ol>

            <a class="sidebar-right-toggle" data-open="sidebar-right"><i class="fas fa-chevron-left"></i></a>
        </div>
    </header>
    </>
    )
}
