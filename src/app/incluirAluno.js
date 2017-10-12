angular
    .module('app')
    .component('incluirAluno', {
        templateUrl: 'app/incluirAluno.html',
        // MathFactory, MathService
        controller: function(ContactFactory, $http) {
            var vm = this;
            /*             var id = 0;

                        $http.get('app/lista.json').then(function(dados) {
                            vm.lista = dados.data;
                            console.log(vm.lista);
                        });

                        vm.ordenar = function(keyname) {
                            vm.sortKey = keyname;
                            vm.reverse = !vm.reverse;
                        }; */
            var acc = document.getElementsByClassName("accordion");
            var i;
            /*  */
            $http.get('app/lista.json').then(function(dados) {
                vm.lista = dados.data;
                console.log(vm.lista);
            });
            /*  */
            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function() {
                    /* Toggle between adding and removing the "active" class,
                    to highlight the button that controls the panel */
                    this.classList.toggle("active");

                    /* Toggle between hiding and showing the active panel */
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }
                }
            }
        }
    });