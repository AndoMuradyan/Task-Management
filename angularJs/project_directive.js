(function () {
    'use strict'
    angular.module("code.demo").directive("projectRow", projectRowDirective);

    function projectRowDirective() {
        return {
            templateUrl: '/projectHtml/project_box.html',
            restrict: 'E',
            controller: ['$scope', function ($scope) {
                $scope.delete = function () {
                    for (var i = 0; i < $scope.$parent.projects.length; i++) {
                        if ($scope.$parent.projects[i].id == $scope.project.id) {
                            $scope.$parent.projects.splice(i, 1);
                        }
                    }
                    $scope.$parent.update_totals();
                }

            }],
        }
    }
})();