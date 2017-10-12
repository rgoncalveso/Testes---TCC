angular
    .module('app')
    .component('app', {
        templateUrl: 'app/hello.html',
        // MathFactory, MathService
        controller: function(ContactFactory, $http) {
            var vm = this;
            var id = 0;
            var nomeAba = nomeAba;
            console.log(nomeAba);
            nomeAba = function(aba) {
                switch (aba) {
                    case "incluirFuncao":
                        vm.nomeAba = "incluirFuncao";
                    case "incluirFunc":
                        vm.nomeAba = "incluirFunc";
                }
                console.log(aba);
            };
            vm.hero = 'New contact';
            vm.heroList = 'List a contacts';
            /*             vm.listas = [ 
                            { nome: "Jao", email: "camila@mail.com", nota1: "65", nota2: "80", nota3: "55" },
                            { nome: "Pedro", email: "pedro@mail.com", nota1: "75", nota2: "80", nota3: "55" },
                            { nome: "Murilo", email: "murilo@mail.com", nota1: "65", nota2: "60", nota3: "55" },
                            { nome: "Joao", email: "joao@mail.com", nota1: "95", nota2: "80", nota3: "55" },
                            { nome: "Ana", email: "ana@mail.com", nota1: "65", nota2: "30", nota3: "55" }
                        ]; */
            vm.alunos = [
                { nome: "Jao", email: "camila@mail.com", nota1: "65", nota2: "80", nota3: "55" },
                { nome: "Pedro", email: "pedro@mail.com", nota1: "75", nota2: "80", nota3: "55" },
                { nome: "Murilo", email: "murilo@mail.com", nota1: "65", nota2: "60", nota3: "55" },
                { nome: "Joao", email: "joao@mail.com", nota1: "95", nota2: "80", nota3: "55" },
                { nome: "Ana", email: "ana@mail.com", nota1: "65", nota2: "30", nota3: "55" }
            ];
            console.log(vm.alunos);
            // alert($index);
            var contar = 0;


            init = function() {
                vm.alunos.forEach(function(aluno) {
                    aluno.media = media(aluno);
                });
            };
            var media = function(Aluno) {
                var media = ((Number(Aluno.nota1) + Number(Aluno.nota2) + Number(Aluno.nota3)) / 3);
                return media.toFixed(2);
            };
            init();
            $http.get('app/lista.json').then(function(dados) {
                vm.lista = dados.data;
                console.log(vm.lista);
            });

            vm.ordenar = function(keyname) {
                vm.sortKey = keyname;
                vm.reverse = !vm.reverse;
            };
            //


            //
            /* 
            vm.form = {
                id: 0,
                name: '',
                telephone: '',
                email: ''
            };

            vm.add = add;
            vm.edit = edit;
            vm.remove = remove;

            (function onInit() {
                return vm.list = ContactFactory.list();
            })();

            function add(contact) {
                if (!contact) {
                    alert('You must need a valid contact');
                    return;
                }

                if (contact.id) {
                    clean();
                    return ContactFactory.edit(contact);
                }

                contact.id = id = id + 1;

                clean();
                ContactFactory.add(contact);
            }

            function edit(contact, indexList) {
                if (!contact) {
                    alert('You must need a valid contact');
                    return;
                }

                vm.form.name = contact.name;
                vm.form.telephone = contact.telephone;
                vm.form.email = contact.email;
                vm.form.id = contact.id;
            }

            function remove(contact) {
                if (!contact) {
                    alert('You must need a valid contact');
                    return;
                }

                return ContactFactory.remove(contact);
            }

            function clean() {
                return vm.form = {
                    id: 0,
                    name: '',
                    telephone: '',
                    email: ''
                };
            }


            // vm.hello = 'Hello School of net!';
            // vm.person = {
            //   name : 'Leonan',
            //   lastname: 'Luppi'
            // };

            // vm.list = [{
            //   name: 'Leonan',
            //   lastname: 'Luppi'
            // },
            // {
            //   name: 'Wesley',
            //   lastname: 'Willians'

            // }, {
            //   name: 'Luiz',
            //   lastname: 'Carlos'
            // }];

            // vm.alertMe = function() {
            //   alert(vm.person.name + ' ' + vm.person.lastname);
            // };

            // vm.sum = function(num1, num2) {
            //   return alert(MathService.sumService(num1, num2));
            // };

            // vm.sub = function(num1, num2) {
            //   return alert(MathService.subService(num1, num2));
            // };
 */
        }
    });