import {useRef} from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { ContentBody, ContentHeader, Header, SideBarLeft, SideBarRight } from '../../components';
export default function SecondLayout({children}) {


    return (
        <>
        <Head>
        <meta charSet="UTF-8" />

        <title>Login- mysharespay.com</title>
        <meta name="keywords" content="HTML5 Admin Template" />
        <meta name="description" content="Porto Admin - Responsive HTML5 Template" />
        <meta name="author" content="okler.net" />


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
