
### @ngInject ###
LegacyController = ['$timeout', 'webDevTec', ($timeout, webDevTec) ->

  vm = @
  vm.awesomeThings = []
  vm.classAnimation = ''
  vm.creationDate = 1437089589536
  vm.showToastr = @showToastr

  @activate = =>
    @getWebDevTec()
    $timeout (->
      vm.classAnimation = 'rubberBand'
      return
    ), 4000
    return

  @getWebDevTec = ->
    vm.awesomeThings = webDevTec.getTec()
    angular.forEach vm.awesomeThings, (awesomeThing) ->
      awesomeThing.rank = Math.random()
      return
    return

  @showToastr = ->
    toastr.info 'Fork <a href="https://github.com/OR13/OR13hApp" target="_blank"><b>OR13hApp</b></a>'
    vm.classAnimation = ''
    return

  @activate()
  return

]
angular.module("OR13hApp").controller('LegacyController', LegacyController)
