import template from './timer.template.html';

class TimerController {
  $onInit() {
    this.time = new Date().getFullYear();
  }
}

export const timerComponent = angular.module('timer', []).component('timer', {
  template,
  controller: TimerController,
  controllerAs: 'vm',
}).name;
