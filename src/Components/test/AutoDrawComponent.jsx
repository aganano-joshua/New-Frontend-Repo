import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
// '../../../index.js'

const AutoDrawComponent = () => {
  useEffect(() => {
    // Dynamically add external scripts to the body
    const script = document.createElement('script');
    script.src = '/index.js';
    script.async = true;
    document.body.appendChild(script);

    const cookieScript = document.createElement('script');
    cookieScript.src = 'https://www.gstatic.com/glue/cookienotificationbar/cookienotificationbar.min.js';
    cookieScript.setAttribute('data-glue-cookie-notification-bar-category', '2B');
    document.body.appendChild(cookieScript);

    return () => {
      // Clean up scripts on component unmount
      document.body.removeChild(script);
      document.body.removeChild(cookieScript);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="fb:app_id" content="1844937199098843" />
        <meta property="og:url" content="http://www.autodraw.com" />
        <meta property="og:image" content="http://www.autodraw.com/assets/images/autodraw-shareimage.png" />
        <meta itemProp="image" content="http://www.autodraw.com/assets/images/autodraw-shareimage.png" />
        <meta property="og:title" content="AutoDraw" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Fast drawing for everyone. AutoDraw pairs machine learning with drawings from talented artists to help you draw stuff fast." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@google" />
        <meta name="twitter:title" content="Cardboard" />
        <meta name="twitter:description" content="Fast drawing for everyone. AutoDraw pairs machine learning with drawings from talented artists to help you draw stuff fast." />
        <meta name="twitter:image" content="http://www.autodraw.com/assets/images/autodraw-shareimage.png" />
        <link href="/assets/artlab.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Anton|Archivo+Black|Bevan|Corben:700|Covered+By+Your+Grace|Crimson+Text|Didact+Gothic|Graduate|Karla|Pacifico|Roboto+Mono|Rubik+Mono+One|Stint+Ultra+Expanded|UnifrakturCook:700|Yellowtail" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="/assets/images/favicon.png" />
        <title>Cardboard</title>
        <link href="https://www.gstatic.com/glue/cookienotificationbar/cookienotificationbar.min.css" rel="stylesheet" />
        <script>
    {`window.dataLayer = window.dataLayer || [];`}
  </script>
      </Helmet>
      
      <noscript>
        <h1 itemProp="name">AutoDraw</h1>
        <p itemProp="description">Fast drawing for everyone. AutoDraw pairs machine learning with drawings from talented artists to help you draw stuff fast.</p>
        AutoDraw requires Javascript.
      </noscript>
    </div>
  );
};

export default AutoDrawComponent;
