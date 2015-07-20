var OR13hApp;!function(t){"use strict";var e=function(){function t(t){t.date=new Date}return t.$inject=["$scope"],t}();t.NavbarCtrl=e}(OR13hApp||(OR13hApp={}));var OR13hApp;!function(t){"use strict";var e=(function(){function t(t,e,o,r){this.title=t,this.url=e,this.description=o,this.logo=r,this.rank=Math.random()}return t}(),function(){function t(t){t.stackComponents=new Array,[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"Github Pages",url:"https://pages.github.com/",description:"Websites for you and your projects.",logo:"github.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"},{title:"TypeScript",url:"http://www.typescriptlang.org/",description:"TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",logo:"typescript.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"}].forEach(function(e){t.stackComponents.push(e)})}return t.$inject=["$scope"],t}());t.DeveloperFeaturesController=e}(OR13hApp||(OR13hApp={}));var OR13hApp;!function(t){"use strict";var e=function(){function t(t){t.sortableOptions={},t.draggableObjects=[{name:"Demo Item 1"},{name:"Demo Item 2"},{name:"Demo Item 3"},{name:"Demo Item 4"},{name:"Demo Item 5"}]}return t.$inject=["$scope"],t}();t.DemoController=e}(OR13hApp||(OR13hApp={}));var OR13hApp;!function(t){"use strict";var e=function(){function t(t,e){void 0===t&&(t="default"),void 0===e&&(e=!1),this.count=0}return t}();t.DemoItem=e}(OR13hApp||(OR13hApp={}));var OR13hApp;!function(t){var e;!function(t){"use strict";var e=function(){function t(t){this.item=t.item,this.item.count=0}return t.prototype.count=function(){this.item.count+=1},t.$inject=["$scope"],t}();t.DemoItemController=e}(e=t.Controllers||(t.Controllers={}))}(OR13hApp||(OR13hApp={}));var OR13hApp;!function(t){var e;!function(e){"use strict";function o(){return{restrict:"E",scope:{item:"="},controller:t.Controllers.DemoItemController,controllerAs:"vm",templateUrl:"app/demo/demo-items/demo-item/demo-item.partial.html",replace:!0}}e.altgcDemoItem=o}(e=t.Directives||(t.Directives={}))}(OR13hApp||(OR13hApp={}));var OR13hApp;!function(t){"use strict";angular.module("OR13hApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap","ui.sortable","firebase"]).controller(t.Controllers).directive(t.Directives).controller("NavbarCtrl",t.NavbarCtrl).controller("DeveloperFeaturesController",t.DeveloperFeaturesController).controller("DemoController",t.DemoController).config(["$locationProvider","$stateProvider","$urlRouterProvider",function(t,e,o){t.html5Mode(!0),e.state("typescript",{url:"/typescript",templateUrl:"app/demo/demo.html",controller:"DemoController"}),e.state("developer-features",{url:"/developer-features",templateUrl:"app/developer-features/developer-features.html",controller:"DeveloperFeaturesController"}),o.otherwise("/typescript")}])}(OR13hApp||(OR13hApp={})),function(){angular.module("OR13hApp").constant("malarkey",malarkey).constant("toastr",toastr),toastr.options.timeOut=3e3,toastr.options.positionClass="toast-top-right",toastr.options.preventDuplicates=!0,toastr.options.progressBar=!0}.call(this),function(){angular.module("OR13hApp").factory("githubContributor",["$log","$http",function(t,e){var o,r,a;return o="https://api.github.com/repos/OR13/OR13hApp",r=function(r){var a,i;return a=function(t){return t.data},i=function(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))},r||(r=30),e.get(o+"/contributors?per_page="+r).then(a)["catch"](i)},a={apiHost:o,getContributors:r}}])}.call(this),function(){angular.module("OR13hApp").directive("altgcMalarkey",function(){var t,e,o;return t=["$log","githubContributor",function(t,e){var o,r,a;a=this,o=function(){return r().then(function(){t.info("Activated Contributors View")})},r=function(){return e.getContributors(10).then(function(t){return a.contributors=t,a.contributors})},a.contributors=[],o()}],o=function(t,e,o,r){var a,i;i=void 0,a=malarkey(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),e.addClass("altgc-malarkey"),angular.forEach(t.extraValues,function(t){a.type(t).pause()["delete"]()}),i=t.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(t){a.type(t.login).pause()["delete"]()})}),t.$on("$destroy",function(){i()})},e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:t,controllerAs:"vm"}})}.call(this),function(){angular.module("OR13hApp").directive("altgcNavbar",["$log",function(t){var e,o;return t.debug("testing altgcNavbar debug..."),e=["$log",function(t){var e;t.debug("testing LegacyNavbarController debug..."),e=this,e.relativeDate=e.creationDate}],o={restrict:"E",templateUrl:"app/legacy/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0}}])}.call(this),function(){var t;t=["$log",function(t){var e,o;t.debug("testing webDevTec debug..."),e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"}],o=function(){return e},this.getTec=o}],angular.module("OR13hApp").service("webDevTec",t)}.call(this),function(){angular.module("OR13hApp").config(["$stateProvider",function(t){return t.state("coffeescript",{url:"/coffeescript",templateUrl:"app/legacy/legacy/legacy.html",controller:"LegacyController",controllerAs:"legacy"})}])}.call(this),function(){var t;t=["$timeout","webDevTec",function(t,e){var o;o=this,o.awesomeThings=[],o.classAnimation="",o.creationDate=1437089589536,o.showToastr=this.showToastr,this.activate=function(e){return function(){e.getWebDevTec(),t(function(){o.classAnimation="rubberBand"},4e3)}}(this),this.getWebDevTec=function(){o.awesomeThings=e.getTec(),angular.forEach(o.awesomeThings,function(t){t.rank=Math.random()})},this.showToastr=function(){toastr.info('Fork <a href="https://github.com/OR13/OR13hApp" target="_blank"><b>OR13hApp</b></a>'),o.classAnimation=""},this.activate()}],angular.module("OR13hApp").controller("LegacyController",t)}.call(this),angular.module("OR13hApp").run(["$templateCache",function(t){t.put("app/developer-features/developer-features.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="container"><div class="row"><div class="col-sm-12 col-md-12" style="margin-top: 32px; margin-bottom: 64px"><div ng-include="\'app/components/footer/footer.html\'"></div></div></div><div class="row"><div class="col-sm-12 col-md-12"><h1 style="margin-bottom: 64px;">Demo Code</h1></div></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="techComponent in stackComponents | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/specs/{{techComponent.logo}}" alt="{{techComponent.title}}"><div class="caption"><h3>{{techComponent.title}}</h3><p>{{techComponent.description}}</p><p><a ng-href="{{techComponent.url}}">{{techComponent.url}}</a></p></div></div></div></div></div>'),t.put("app/demo/demo.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="container"><div class="col-sm-12 col-md-12" style="margin-top: 32px; margin-bottom: 64px"><div ng-include="\'app/components/footer/footer.html\'"></div></div><div class="col-sm-12 col-md-8 col-lg-8"><h1 style="margin-bottom: 64px;">TypeScript is the future of angular.</h1><hr><p class="lead">Demo code for <strong>controllers</strong>, <strong>directives</strong>, and <strong>services</strong> using <strong>typescript modules, interfaces</strong> and <strong>classes</strong>.</p><hr><h3>Migrating to TypeScript</h3><p>The app assumes you are trying to migrate away from coffeescript. Its a reference implementation -- suggestions are welcome.</p><hr><h4>Migrating to CoffeeScript</h4><p>Maybe copy from <a href="https://github.com/OR13/ALCG" target="_blank">this</a>.</p><hr><h4>TypeScript + CoffeeScript</h4><p><i class="fa fa-bolt"></i> Polyglots are only for true wizards.</p></div><div class="col-sm-12 col-md-4 col-lg-4"><h4>Sortable Demo...</h4><div class="well"><div class="list-group" as-sortable="sortableOptions" ng-model="draggableObjects"><div ng-repeat="demoItem in draggableObjects" as-sortable-item="" class="list-group-item"><div as-sortable-item-handle=""><altgc-demo-item item="demoItem"></altgc-demo-item></div></div></div></div></div></div>'),t.put("app/components/footer/footer.html",'<div class="footer"><ul class="nav nav-pills"><li ui-sref-active="active" role="presentation"><a ui-sref="typescript"><i class="fa fa-windows"></i> TypeScript</a></li><li ui-sref-active="active" role="presentation"><a ui-sref="coffeescript"><i class="fa fa-coffee"></i> CoffeeScript</a></li><li ui-sref-active="active" role="presentation"><a ui-sref="developer-features"><i class="fa fa-code"></i> Dev Features</a></li><li role="presentation"><a href="https://github.com/OR13/OR13hApp" target="_blank"><i class="fa fa-github"></i> View Source</a></li></ul></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-default" ng-controller="NavbarCtrl"><div class="container"><div class="navbar-header"><a class="navbar-brand" href="/"><span class="fa fa-life-bouy"></span> TypeScript + CoffeeScript</a></div></div></nav>'),t.put("app/legacy/legacy/legacy.html",'<div ng-include="\'app/components/navbar/navbar.html\'"></div><div class="container"><div class="row"><div class="col-sm-12 col-md-12" style="margin-top: 32px; margin-bottom: 64px"><altgc-navbar></altgc-navbar></div></div><div class="row"><div class="col-sm-6 col-md-6"><h1 style="margin-bottom: 64px;"><altgc-malarkey extra-values="[\'CoffeeScript\', \'Yeoman\', \'Gulp\', \'Angular\']"></altgc-malarkey></h1></div><div class="col-sm-6 col-md-6"><h1 style="margin-bottom: 64px;"><button ng-class="legacy.classAnimation" type="button" class="btn btn-lg btn-success animated infinite pull-right" ng-click="legacy.showToastr()">Get Started!</button></h1></div></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in legacy.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/specs/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/demo/demo-items/demo-item/demo-item.partial.html",'<div><h4 class="list-group-item-heading">{{vm.item.name || \'Demo Item\'}} <button class="btn btn-sm btn-primary pull-right" ng-click="vm.count()"><i class="fa fa-plus"></i></button></h4><div class="list-group-item-text"><span class="label label-info">{{ vm.item.count }}</span></div></div>'),t.put("app/legacy/components/navbar/navbar.html",'<ul class="nav nav-pills"><li ui-sref-active="active" role="presentation"><a ui-sref="typescript"><i class="fa fa-windows"></i> TypeScript</a></li><li ui-sref-active="active" role="presentation"><a ui-sref="coffeescript"><i class="fa fa-coffee"></i> CoffeeScript</a></li><li ui-sref-active="active" role="presentation"><a ui-sref="developer-features"><i class="fa fa-code"></i> Dev Features</a></li><li><a ng-href="https://github.com/OR13/OR13hApp" target="_blank"><i class="fa fa-github"></i> View Source</a></li></ul>')}]);