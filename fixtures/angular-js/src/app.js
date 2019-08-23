import 'angular';
import { timerComponent } from './timer.component';

import template from './app.html';

class AppCtrl {}

const app = () => ({
  template,
  controller: AppCtrl,
  controllerAs: 'vm',
});

angular.module('myApp', [timerComponent]).directive('app', app);

angular.element(() => {
  angular.bootstrap(document, ['myApp']);
});
