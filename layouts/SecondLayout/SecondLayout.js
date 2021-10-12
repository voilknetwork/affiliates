import {useRef} from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { ContentBody, ContentHeader, Header, SideBarLeft, SideBarRight } from '../../components';
export default function SecondLayout({children}) {


    return (
        <>
        <Head>
        <meta charSet="UTF-8" />

        <title>Login- affiliates.voilk.com</title>
        <meta name="keywords" content="voilk voilknetwork affiliates" />
        <meta name="description" content="Affiliates Rewards Network" />
        <meta name="author" content="Voilk Network" />
        <meta property="og:type" content="website" data-reactid="7" />
    <meta property="og:site_name" content="Voilk.com" data-reactid="8" />
    <meta property="og:title" content="Voilk - Affiliates Rewards Network" data-reactid="9" />
    <meta property="og:description"
        content="Affiliates Revenue Social Network." data-reactid="10" />
    <meta property="og:image" content="https://graphql.voilk.com/image/2f5a2c18ed6f008fa48f7dcbab293293.png"
        data-reactid="11" />
    <meta property="og:url" content="https://voilk.com" />
    <meta property="fb:app_id" content="588295505354973" data-reactid="12" />
    <meta name="twitter:card" content="summary" data-reactid="13" />
    <meta name="twitter:site" content="@voilk" data-reactid="14" />
    <meta name="twitter:title" content="#voilk" data-reactid="15" />
    <meta name="twitter:image" content="https://graphql.voilk.com/image/2f5a2c18ed6f008fa48f7dcbab293293.png"
        data-reactid="16" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />


        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css" />


        <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="vendor/animate/animate.compat.css" />
        <link rel="stylesheet" href="vendor/font-awesome/css/all.min.css" />
        <link rel="stylesheet" href="vendor/boxicons/css/boxicons.min.css" />
        <link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.css" />
        <link rel="stylesheet" href="vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css" />

		
        <link rel="stylesheet" href="vendor/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="vendor/jquery-ui/jquery-ui.theme.css" />
        <link rel="stylesheet" href="vendor/bootstrap-multiselect/css/bootstrap-multiselect.css" />
        <link rel="stylesheet" href="vendor/morris/morris.css" />

		<link rel="stylesheet" href="vendor/bootstrap-fileupload/bootstrap-fileupload.min.css" />
        <link rel="stylesheet" href="css/theme.css" />


        <link rel="stylesheet" href="css/layouts/modern.css" />


        <link rel="stylesheet" href="css/custom.css" />


        <script src="vendor/modernizr/modernizr.js"></script>

        <script src="master/style-switcher/style.switcher.localstorage.js"></script>
        </Head>
		<>
            {children}
		</>
        <script src="vendor/jquery/jquery.js"></script>
          <script src="vendor/jquery-browser-mobile/jquery.browser.mobile.js"></script>
          <script src="vendor/jquery-cookie/jquery.cookie.js"></script>
          <script src="master/style-switcher/style.switcher.js"></script>
          <script src="vendor/popper/umd/popper.min.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="vendor/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
          <script src="vendor/common/common.js"></script>
          <script src="vendor/nanoscroller/nanoscroller.js"></script>
          <script src="vendor/magnific-popup/jquery.magnific-popup.js"></script>
          <script src="vendor/jquery-placeholder/jquery.placeholder.js"></script>

          <script src="vendor/autosize/autosize.js"></script>
		<script src="vendor/bootstrap-fileupload/bootstrap-fileupload.min.js"></script>

          <script src="vendor/jquery-ui/jquery-ui.js"></script>
          <script src="vendor/jqueryui-touch-punch/jquery.ui.touch-punch.js"></script>
          <script src="vendor/jquery-appear/jquery.appear.js"></script>
          <script src="vendor/bootstrapv5-multiselect/js/bootstrap-multiselect.js"></script>
          <script src="vendor/jquery.easy-pie-chart/jquery.easypiechart.js"></script>
          <script src="vendor/flot/jquery.flot.js"></script>
          <script src="vendor/flot.tooltip/jquery.flot.tooltip.js"></script>
          <script src="vendor/flot/jquery.flot.pie.js"></script>
          <script src="vendor/flot/jquery.flot.categories.js"></script>
          <script src="vendor/flot/jquery.flot.resize.js"></script>
          <script src="vendor/jquery-sparkline/jquery.sparkline.js"></script>
          <script src="vendor/raphael/raphael.js"></script>
          <script src="vendor/morris/morris.js"></script>
          <script src="vendor/gauge/gauge.js"></script>
          <script src="vendor/snap.svg/snap.svg.js"></script>
          <script src="vendor/liquid-meter/liquid.meter.js"></script>
          <script src="vendor/jqvmap/jquery.vmap.js"></script>
          <script src="vendor/jqvmap/data/jquery.vmap.sampledata.js"></script>
          <script src="vendor/jqvmap/maps/jquery.vmap.world.js"></script>
          <script src="vendor/jqvmap/maps/continents/jquery.vmap.africa.js"></script>
          <script src="vendor/jqvmap/maps/continents/jquery.vmap.asia.js"></script>
          <script src="vendor/jqvmap/maps/continents/jquery.vmap.australia.js"></script>
          <script src="vendor/jqvmap/maps/continents/jquery.vmap.europe.js"></script>
          <script src="vendor/jqvmap/maps/continents/jquery.vmap.north-america.js"></script>
          <script src="vendor/jqvmap/maps/continents/jquery.vmap.south-america.js"></script>


          <script src="js/theme.js"></script>


          <script src="js/custom.js"></script>


          <script src="js/theme.init.js"></script>

	
          <script src="js/examples/examples.dashboard.js"></script>
        </>
    )
}
