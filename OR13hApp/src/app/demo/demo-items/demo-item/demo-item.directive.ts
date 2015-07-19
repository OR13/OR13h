/// <reference path="../../../reference.ts" />


module OR13hApp.Directives {
    'use strict';

    export interface IDemoItemScope {
        item: DemoItem;
    }

    export function altgcDemoItem(): ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                item: '='
            },
            controller: Controllers.DemoItemController,
            controllerAs: 'vm',
            templateUrl: 'app/demo/demo-items/demo-item/demo-item.partial.html',
            replace: true
        };
    }
}
