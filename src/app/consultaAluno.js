angular
    .module('app')
    .component('consultaAluno', {
        templateUrl: 'app/consultaAluno.html',
        // MathFactory, MathService
        controller: function(ContactFactory, $http) {
            var vm = this;
            var id = 0;

            $http.get('app/listaAluno.json').then(function(dados) {
                vm.lista = dados.data;
                console.log(vm.lista);
            });

            vm.ordenar = function(keyname) {
                vm.sortKey = keyname;
                vm.reverse = !vm.reverse;
            };
        }
    });