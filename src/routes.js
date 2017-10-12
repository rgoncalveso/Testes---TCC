angular
    .module('app')
    .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            component: 'consultaProfessor'
        })
        .state('hello', {
            url: '/hello',
            component: 'app'
        })
        .state('hero', {
            url: '/hero',
            templateUrl: 'app/hero.html'
        })
        .state('consultaProfessor', {
            url: '/consultaProfessor',
            //           templateUrl: 'app/consultaProfessor.html'
            component: 'consultaProfessor'
        })
        .state('incluirProfessor', {
            url: '/incluirProfessor',
            component: 'incluirProfessor'
        })
        .state('alterarProfessor', {
            url: '/alterarProfessor',
            component: 'alterarProfessor'
        })
        .state('consultaAluno', {
            url: '/consultaAluno',
            //           templateUrl: 'app/consultaProfessor.html'
            component: 'consultaAluno'
        })
        .state('incluirAluno', {
            url: '/incluirAluno',
            component: 'incluirAluno'
        })
        .state('alterarAluno', {
            url: '/alterarAluno',
            component: 'alterarAluno'
        })
        .state('distribuirTurma', {
            url: '/distribuirTurma',
            component: 'distribuirTurma'
        });
}