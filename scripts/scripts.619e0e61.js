"use strict";angular.module("portfolioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/euler",{templateUrl:"views/euler.html",controller:"EulerCtrl",controllerAs:"euler"}).when("/page1",{templateUrl:"views/page1.html",controller:"Page1Ctrl",controllerAs:"page1"}).when("/page2",{templateUrl:"views/page2.html",controller:"Page2Ctrl",controllerAs:"page2"}).when("/page3",{templateUrl:"views/page3.html",controller:"Page3Ctrl",controllerAs:"page3"}).when("/page4",{templateUrl:"views/page4.html",controller:"Page4Ctrl",controllerAs:"page4"}).when("/page5",{templateUrl:"views/page5.html",controller:"Page5Ctrl",controllerAs:"page5"}).otherwise({redirectTo:"/"})}]),angular.module("portfolioApp").controller("MainCtrl",["$scope",function(a){function b(){var a=$(this).scrollTop();Math.abs(d-a)<=e||(a>d&&a>f?$("header").removeClass("nav-down").addClass("nav-up"):a+$(window).height()<$(document).height()&&$("header").removeClass("nav-up").addClass("nav-down"),d=a)}this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.clicked=!1,a.menu=function(){a.clicked===!1?a.clicked=!0:a.clicked=!1},a.hoverIn=function(){this.hoverEdit=!0},a.hoverOut=function(){this.hoverEdit=!1};var c,d=0,e=5,f=$("header").outerHeight();$(window).scroll(function(a){c=!0}),setInterval(function(){c&&(b(),c=!1)},250)}]),angular.module("portfolioApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioApp").controller("EulerCtrl",["$scope",function(a){}]),angular.module("portfolioApp").controller("Page1Ctrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioApp").controller("Page2Ctrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioApp").controller("Page3Ctrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioApp").controller("Page4Ctrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioApp").controller("Page5Ctrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("portfolioApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/euler.html",""),a.put("views/main.html",'<div class="pstatement1"> <img src="https://i.imgur.com/enVQvaW.png" class="big"> <img src="https://i.imgur.com/fcg4ZfH.png" class="small"> </div> <h1>Work</h1> <div class="works" id="works"> <div class="mainwork"> <img class="primework" src="https://i.imgur.com/5GQ81KU.png"> <div class="overlay0"> <div class="text0"> <p>Site content and more for Fluke, a major biomedical device manufacturer.</p> <h3><a href="#!page1">More Info</a></h3> </div> </div> </div> <div class="subwork0" id="subworks"> <div class="description0" id="bigview"><h3>My capstone project. A Wiki built from scratch in Django, using Django\'s RESTful API functionality.</h3></div> <img class="subwork0" src="http://i.imgur.com/3kUMod4.png"> <div class="overlay1"> <div class="text1"> <p class="description0" id="smallview">My capstone project. A Wiki built from scratch in Django, using Django\'s RESTful API functionality.</p> <h3><a href="#!page2">More Info</a></h3> </div> </div> </div> <div class="subwork1" id="subworks"> <div class="description1" id="bigview"><h3>Stormy Weather: An application that finds concerts and returns weather for them. Made with AngularJS and Songkick/Weather Underground. Currently being rebuilt!</h3></div> <img class="subwork1" src="http://i.imgur.com/N9V9dfI.png"> <div class="overlay2"> <div class="text2"> <p class="description1" id="smallview">Stormy Weather: An application that finds concerts and returns weather for them. Made with AngularJS and Songkick/Weather Underground. Currently being rebuilt!</p> <h3><a href="#!page3">More Info</a></h3> </div> </div> </div> <div class="subwork2" id="subworks"> <div class="description0" id="bigview"><h3>Web Chess: A work in progress demonstration of DOM manipulation and simple matrix math made with pure JS.</h3></div> <img class="subwork0" src="https://i.imgur.com/DDM0qJV.png"> <div class="overlay3"> <div class="text3"> <p class="description0" id="smallview">Web Chess: A work in progress demonstration of DOM manipulation and simple matrix math made with pure JS.</p> <h3><a href="#!page4">More Info</a></h3> </div> </div> </div> <div class="subwork3" id="subworks"> <div class="description1" id="bigview"><h3>Project Euler! It\'s mathematical (programming)! In Python and JS.</h3></div> <img class="subwork1" src="http://i.imgur.com/kvTrLmZ.png"> <div class="overlay4"> <div class="text4"> <p class="description1" id="smallview">Project Euler! It\'s mathematical (programming)! In Python and JS.</p> <h3><a href="#!page5">More Info</a></h3> </div> </div> </div> </div> <div class="techused"> <h1 class="toolbox">My Toolbox</h1><br> <div class="items"> <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><img class="techitem" src="https://i.imgur.com/XwyTYVI.png"></a> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"><img class="techitem" src="https://i.imgur.com/IR6rqkC.png"></a> <a href="https://www.javascript.com/"><img class="techitem" src="https://i.imgur.com/kmBnrdf.png"></a> <a href="https://www.python.org/"><img class="techitem" src="https://i.imgur.com/mZGljth.png"></a> <a href="https://angular.io/"><img class="techitem" src="https://i.imgur.com/Z6NYYcH.png"></a> <a href="https://www.djangoproject.com/"><img class="techitem" src="https://i.imgur.com/k70GirZ.png"></a> <a href="https://httpd.apache.org/"><img class="techitem" src="https://i.imgur.com/HJLIaLf.png"></a> </div><br> </div> <div class="statement2" id="about"> <img class="photo2" src="https://i.imgur.com/km2R5ZK.png"> <h3>Raised in CO and Bangkok, I’ve cut my teeth in Seattle pursuing science, building sites, and doing pure programming. I emphasize functionality in my sites and work hard to make sure they are as versatile as possible, using JS, Python, and the rest of the full stack to the best of its capabilities. Currently seeking work in the greater Seattle area.</h3> </div><br><br><br> <div class="location"> <h1>Most recently spotted near</h1> <iframe width="90%" height="450" frameborder="0" style="border:0," src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDewu_y2p1svD30vhMuIEsCTS8r4v-y19M&q=narbeck+wetland+sanctuary,Everett+WA" allowfullscreen> </iframe> </div>'),a.put("views/page1.html",'<h1 class="projecttitle" class="maintitle">F L U K E</h1> <div class="explainer" id="exptext1"> <div class="exptext"> <div class="overview"> <h2>Overview</h2> <p>I was hired by Adecco in March of 2018 to do work for Fluke Biomedical to port their website content over from Microsoft CMS 2002 to Drupal 7. It was a long process, and one that I learned a great deal in. I\'m very glad I got the chance that I did, and that I can take from this experience new ways of thinking about writing and deploying sites. </p> </div> <div class="technology"> <h2>Technology</h2> <p>At Adecco, I used the LAMP stack of Ubuntu, Apache, MySQL, and PHP to locally develop and alter the site. I also used Python to automate the transition of HTML content from the old site to the new one, changing product specifications from a mess of tables to cleaner, easier-to-read, accessible HTML, as well as JQuery to add usability and SASS to style. </p> </div> </div> </div> <br><br><br> <h1><a href="http://www.flukebiomedical.com/biomedical/usen/home/">Old</a> / <a href="http://live-flukebiomedical.flukedev.com">New</a></h1> <br><br><br> <a class="back" href="#works"><button type="button" class="btn btn-info"><h2>Back</h2></button></a>'),a.put("views/page2.html",'<h1 class="projecttitle" class="maintitle">E N S C I C L O P E D I A</h1> <div class="explainer" id="exptext2"> <div class="exptext"> <div class="overview"> <h2>Overview</h2> <p>One of the main reasons I even began to take an interest in the internet is the sheer amount of things there were to read on it. I hugely value the ability of the web as a service to let me read vast amounts of information about the world, and I thought that a great way to give back (at least symbolically) would be to create, even if only as a demonstration, a place where users can create and exchange ideas and information.</p> </div> <div class="technology"> <h2>Technology</h2> <p>For this project, I used Django, a frontend framework built from the ground up in Python (supporting Python 3). I used it because it seemed like a great way to introduce myself to the use of a database and component-based development, and to allow users to easily maintain their own rich text content. Django\'s built in templating engine and Object Relational Mapping came in very, very handy. I also used Apache to host, running on a virtual private server on DigitalOcean.</p> </div> </div> </div> <br><br><br> <h1><a href="https://github.com/jls47/wiki">GitHub</a> / <a href="wiki.jlukes.com">Site</a></h1> <br><br><br> <a class="back" href="#works"><button type="button" class="btn btn-info"><h2>Back</h2></button></a>'),a.put("views/page3.html",'<h1 class="projecttitle">S T O R M Y W E A T H E R</h1> <div class="explainer" id="exptext3"> <div class="exptext"> <div class="overview"> <h2>Overview</h2> <p>This project represented my first foray into more complex application development. During my time at Seattle University, I consistently pushed myself to go one step beyond, and this project is one example of this attitude. I grabbed data from one API, returned it to the view, and sent said data off to another API so that I could return data whose contents depended upon the data I had already grabbed. In this case, I grabbed weather data based on the date of concerts I found by searching for artist or location.</p> </div> <div class="technology"> <h2>Technology</h2> <p>For this project, I used AngularJS, one of the most popular frontend frameworks on the web at the moment. This framework was chosen so as to be a great introduction to the development concept of Model-View-Controller. This allows users to see multiple data points from multiple sources at roughly the same time! In tandem with AngularJS, I used SASS, Grunt, NPM, and Yeoman to get everything off the ground.</p> </div> </div> </div> <br><br><br> <h1><a href="https://github.com/jls47/stormyweather">GitHub</a> / <a href="www.jlukes.com/stormyweather/">Site</a></h1> <br><br><br> <a class="back" href="#works"><button type="button" class="btn btn-info"><h2>Back</h2></button></a>'),a.put("views/page4.html",'<a class="back" href="#works"><button type="button" class="btn btn-info"><h2>Back</h2></button></a> <h1 class="projecttitle">C H E S S</h1> <div class="explainer" id="exptext4"> <div class="exptext"> <div class="overview"> <h2>Overview</h2> <p>As I kept programming, I started to enjoy challenges based on how I could approach a task logically. I started going through UW\'s introductory Computer Science assignments, which were fun, but I realized that I wanted something a bit bigger to sink my teeth into; hence, chess! This is a game all about logic and rules, and building it from the ground up has proven to be just as rewarding as actually playing it.</p> </div> <div class="technology"> <h2>Technology</h2> <p>This is simple, bread and butter WebDev. Nothing but HTML5, CSS3, and JavaScript (not even Jquery). In order to make sure I fully understood how to recreate the game, I wanted to reduce the overhead that comes with a proper framework and let nothing stand in the way of the JavaScript. It\'s a fun game for users, and for me it\'s a fun exercise in DOM manipulation, Object-Oriented Principles, and simple matrix math.</p> </div> </div> </div> <br><br><br> <h1><a href="https://github.com/jls47/chess">GitHub</a> / <a href="www.jlukes.com/chess/">Site</a></h1> <br><br><br> <a class="back" href="#works"><button type="button" class="btn btn-info"><h2>Back</h2></button></a>'),a.put("views/page5.html",'<h1 class="projecttitle">P R O J E C T E U L E R</h1> <div class="explainer" id="exptext5"> <div class="exptext"> <div class="overview"> <h2>Overview</h2> <p>Project Euler is a site I\'ve had a solid amount of fun with. It\'s a series of mathematical challenges that test one\'s ability to understand the ins and outs of at times complex mathematical concepts and one\'s ability to translate said concepts into programming. I took this up as a sort of litmus test, to see that I was capable of some of the more complicated aspects of pure programming, and am happy to say that I have not disappointed myself.</p> </div> <div class="technology"> <h2>Technology</h2> <p>At the moment, this is written in nothing but pure Python 3, so it can\'t be run outside of a compiler or terminal. It has about a dozen challenges completed, with more to surely come.</p> </div> </div> </div> <br><br><br> <a href="https://github.com/jls47/Euler"><h1>GitHub</h1></a> <br><br><br> <a class="back" href="#works"><button type="button" class="btn btn-info"><h2>Back</h2></button></a>')}]);