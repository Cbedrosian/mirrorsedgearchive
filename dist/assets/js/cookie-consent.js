$.getScript("https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js",function(){if(console.log("Cookie consent loaded."),"true"==Cookies.get("cookie_consent"));else if("0"==Cookies.get("cookie_attempts"))Cookies.set("cookie_consent","true",{expires:30});else{if(Cookies.get("cookie_attempts")){var e=Cookies.get("cookie_attempts");Cookies.set("cookie_attempts",e-1,{expires:30})}else Cookies.set("cookie_attempts","3",{expires:30});$("#cookie_consent_placeholder").html("<div id='cookie_consent' class='alert alert-light alert-dismissible fade show' role='alert'><div class='media'><svg class='mr-3' style='width:24px;height:24px' viewBox='0 0 24 24'><path fill='#007bff' d='M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12C21,11.5 20.96,11 20.87,10.5C20.6,10 20,10 20,10H18V9C18,8 17,8 17,8H15V7C15,6 14,6 14,6H13V4C13,3 12,3 12,3M9.5,6A1.5,1.5 0 0,1 11,7.5A1.5,1.5 0 0,1 9.5,9A1.5,1.5 0 0,1 8,7.5A1.5,1.5 0 0,1 9.5,6M6.5,10A1.5,1.5 0 0,1 8,11.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 5,11.5A1.5,1.5 0 0,1 6.5,10M11.5,11A1.5,1.5 0 0,1 13,12.5A1.5,1.5 0 0,1 11.5,14A1.5,1.5 0 0,1 10,12.5A1.5,1.5 0 0,1 11.5,11M16.5,13A1.5,1.5 0 0,1 18,14.5A1.5,1.5 0 0,1 16.5,16H16.5A1.5,1.5 0 0,1 15,14.5H15A1.5,1.5 0 0,1 16.5,13M11,16A1.5,1.5 0 0,1 12.5,17.5A1.5,1.5 0 0,1 11,19A1.5,1.5 0 0,1 9.5,17.5A1.5,1.5 0 0,1 11,16Z' /></svg>\t\t\t<div class='media-body'><small>We use cookies to ensure that we give you the best experience on our website. By continuing to browse the site, you are agreeing to our use of cookies. <a href='/legal/privacy-policy.html'>Learn more</a></a></small><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div></div></div>"),setTimeout(function(){0<$("#overview").css("opacity")&&$("#cookie_consent").fadeTo("fast",1)},500)}$("#cookie_consent").on("closed.bs.alert",function(){Cookies.set("cookie_consent","true",{expires:30})})});