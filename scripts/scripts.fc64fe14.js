"use strict";angular.module("portfolioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/euler",{templateUrl:"views/euler.html",controller:"EulerCtrl",controllerAs:"euler"}).otherwise({redirectTo:"/"})}]),angular.module("portfolioApp").controller("MainCtrl",["$scope",function(a){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.clicked=!1,a.menu=function(){a.clicked===!1?a.clicked=!0:a.clicked=!1},a.hoverIn=function(){this.hoverEdit=!0},a.hoverOut=function(){this.hoverEdit=!1}}]),angular.module("portfolioApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioApp").controller("EulerCtrl",["$scope",function(a){var b=function(a){if(a%2===0&&a>2)return!1;for(i in range(3,Math.sqrt(a)))if(a%i===0)return!1;return!0};a.euler=function(){var a=2,c=0,d=2e6;for(i in range(a,d))b(a)==True&&(c+=a,console.log("Sum so far: "+c.toString())),a++;console.log("The sum is"+c.toString())}}]),angular.module("portfolioApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/euler.html","<p>This is the euler view.</p>"),a.put("views/main.html",'<div class="menuthing"> <h3 class="menu"><a ng-click="menu()"><span class="glyphicon glyphicon-menu-hamburger"></span></a></h3> <div class="menu1" ng-show="clicked" id="firstitem"><h3 class="entry"><a href="#works">Works</a></h3></div> <div class="menu2" ng-show="clicked"><h3 class="entry"><a href="#about">About</a><h3></h3></h3></div> <div class="menu3" ng-show="clicked"><h3><a href="#contact">Contact</a></h3></div> </div> <div class="pstatement1"> <h2 class="statement1">I\'m Luke! I\'m on a mission to program and build. </h2></div> <!--<canvas id="axes" width = "1920px" height = "300px"></canvas>--> <h1>Work</h1> <div class="works" id="works"> <div class="mainwork"> <img class="primework" src="http://i.imgur.com/3kUMod4.png"> <div class="overlay0"> <div class="text0"> <p>My capstone project. A Wiki built from scratch in Django, using Django\'s RESTful API functionality.</p> <p><a target="_blank" href="https://github.com/jls47/wiki">GitHub Repo</a> / <a href="http://wiki.jlukes.co">Site</a></p> </div> </div> </div> <div class="subwork0" id="subworks"> <div class="description0" id="bigview"><h3>Stormy Weather: An application that finds concerts and returns weather for them. Made with AngularJS and Songkick/Weather Underground.</h3></div> <img class="subwork0" src="http://i.imgur.com/N9V9dfI.png"> <div class="overlay1"> <div class="text1"> <p class="description0" id="smallview">Stormy Weather: An application that finds concerts and returns weather for them. Made with AngularJS and Songkick/Weather Underground.</p> <p><a target="_blank" href="https://github.com/jls47/FinalProject">GitHub Repo</a> / <a href="https://www.jlukes.co/FinalProject/">Site</a></p> </div> </div> </div> <div class="subwork1" id="subworks"> <div class="description1" id="bigview"><h3>Scientistpedia: A small wiki frontend mockup that allows local modification of the page. Made with HTML5, CSS, Javascript, and Jquery.</h3></div> <img class="subwork1" src="http://i.imgur.com/LWsvC1V.png"> <div class="overlay2"> <div class="text2"> <p class="description1" id="smallview">Scientistpedia: A small wiki frontend mockup that allows local modification of the page. Made with HTML5, CSS, Javascript, and Jquery.</p> <p><a target="_blank" href="https://github.com/jls47/3020-Final-Wiki">GitHub Repo</a> / <a href="http://www.jlukes.co/3020-Final-Wiki/">Site</a></p> </div> </div> </div> <div class="subwork2" id="subworks"> <div class="description0" id="bigview"><h3>Add-A-Map: A small project that emphasizes Leaflet and JQuery skills. Custom components made with JS and Leaflet.</h3></div> <img class="subwork0" src="http://i.imgur.com/wFz3mOb.jpg"> <div class="overlay3"> <div class="text3"> <p class="description0" id="smallview">Add-A-Map: A small project that emphasizes Leaflet and JQuery skills. Custom components made with JS and Leaflet.</p> <p><a target="_blank" href="https://github.com/jls47/wats1020-add-a-map">GitHub Repo</a> / <a href="http://www.jlukes.co/wats1020-add-a-map/">Site</a></p> </div> </div> </div> <div class="subwork3" id="subworks"> <div class="description1" id="bigview"><h3>Project Euler! It\'s mathematical (programming)! In Python and JS.</h3></div> <img class="subwork1" src="http://i.imgur.com/kvTrLmZ.png"> <div class="overlay4"> <div class="text4"> <p class="description1" id="smallview">Project Euler! It\'s mathematical (programming)! In Python and JS.</p> <p><a target="_blank" href="https://github.com/jls47/Euler">GitHub Repo</a></p> </div> </div> </div> </div> <div class="statement2" id="about"> <img class="photo2" src="http://i.imgur.com/OZk6jos.jpg"> <h3>Raised in CO and Bangkok, I’ve cut my teeth in Seattle pursuing science, building sites, and doing pure programming. I emphasize functionality in my sites and work hard to make sure they are as versatile as possible, using JS, Python, and the rest of the full stack to the best of its capabilities. Currently seeking work in Seattle.</h3> </div><br><br><br> <iframe width="90%" height="450" frameborder="0" style="border:0," src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDewu_y2p1svD30vhMuIEsCTS8r4v-y19M&q=Seattle+University,Seattle+WA" allowfullscreen> </iframe> <div class="footer1" id="contact"> <a target="_blank" href="https://github.com/jls47"><img src="http://i.imgur.com/Ml10exG.png" alt="contact"></a> <a target="_blank" href="mailto:schaef16@seattleu.edu"><img src="http://i.imgur.com/feuyFQK.png" alt="contact"></a> <a target="_blank" href="https://suwebdev.slack.com/messages/@jls47/"><img src="http://i.imgur.com/pGy0X7c.png" alt="contact"></a> <a target="_blank" href="https://www.linkedin.com/in/john-luke-schaefer-a2088684/"><img src="http://i.imgur.com/SpUPOMf.png" alt="contact"></a> <a target="_blank" href="https://stackoverflow.com/users/7454711/a-tank-called-frank"><img src="http://i.imgur.com/DimL42T.png" alt="contact"></a> </div>')}]);