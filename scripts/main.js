"use strict";!function(){if("3000"!==window.location.port){var e="https://milligram.github.io",t=document.querySelectorAll(".navigation .popover-link"),o=void 0;for(o=0;o<t.length;o++)t[o].href.match(/#/g)&&(t[o].href=e+"/#"+t[o].href.split("#")[1])}}(),function(){function e(e,t,o,n,r,i,c){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,i=t.createElement(o),c=t.getElementsByTagName(o)[0],i.async=1,i.src=n,c.parentNode.insertBefore(i,c)}if("3000"!==window.location.port){var t="UA-24389952-15";e(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create",t,"auto"),ga("send","pageview")}}(),function(){function e(e,t,o,n,r,i,c,a){a=t.createElement(o),a.async=1,a.src=n,a.setAttribute("data-org-id",r),a.setAttribute("data-app-id",i),c=t.getElementsByTagName(o)[document.querySelectorAll(o).length-1],c.parentNode.insertBefore(a,c)}if("localhost"!==window.location.hostname){var t="39e235ed58",o="bfc2d2b1867d4ade86c9030c6985cfa2";e(window,document,"script","//d3tvtfb6518e3e.cloudfront.net/3/opbeat.min.js",o,t)}}(),function(){function e(e){for(r=0;r<n.length;r++)n[r].classList.remove("popover-open")}function t(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).classList.contains("popover-open")?document.querySelector(this.getAttribute("href")).classList.remove("popover-open"):(e(),document.querySelector(this.getAttribute("href")).classList.add("popover-open")),t.stopImmediatePropagation()}var o=document.querySelectorAll("[data-popover]"),n=document.querySelectorAll(".popover"),r=void 0;for(r=0;r<o.length;r++)o[r].addEventListener("click",t);document.addEventListener("click",e)}(),function(){function e(e){return String(e).replace(/[&<>"']/g,function(e){return o[e]})}var t=document.querySelectorAll(".code-content"),o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},n=void 0;for(n=0;n<t.length;n++)t[n].innerHTML=e(t[n].innerHTML);!function(e,t,o,n,r,i){r=t.createElement(o),r.async=1,r.src=n,i=t.getElementsByTagName(o)[document.querySelectorAll(o).length-1],i.parentNode.insertBefore(r,i)}(window,document,"script","//cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js")}(),function(){function e(){this.status<200&&this.status>=400&&console.error("[error] There was a connection error of some sort"),i=JSON.parse(this.response).version,t&&(t.innerHTML=t.innerHTML+" <br><i><small>Currently v"+i+"</small></i>"),o.setAttribute("href","https://github.com/"+r+"/archive/v"+i+".zip")}var t=document.querySelector(".description"),o=document.querySelector(".download"),n=new window.XMLHttpRequest,r="milligram/milligram",i=void 0;t&&o&&(n.open("GET","//raw.githubusercontent.com/"+r+"/master/package.json",!0),n.onload=e,n.send())}();