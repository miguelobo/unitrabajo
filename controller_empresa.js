angular.module('myapp')


.factory('service', function($http, $q, $timeout) {
        var servicios = {};
        var wait = $q.defer();
        servicios.User = {};
        servicios.removeUser =function(){
            localStorage.removeItem('user');
             servicios.User = {};
        }
        servicios.getUser = function() {
           var tempUser = servicios.User;

            //console.log("salir session");
            return servicios.User;
        }
        servicios.setUser = function(user) {
            servicios.User = user;
            localStorage.setItem('user', JSON.stringify(user));
            servicios.User.telefono = parseInt(user.telefono);
            console.log();
          //  console.log(user);
            //  console.log("entrar session");
        }
        servicios.finduser = function(id) {
            return $http.get("http://unitrabajoweb-92158.onmodulus.net/API/empresashow/" + id)
            }
            //////-*********empresa ---//////
        servicios.empresanew = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/empresanew", JSON.stringify(datos))
        }
        servicios.empresaupdate = function(_id, datos) {
            return $http.put("http://unitrabajoweb-92158.onmodulus.net/API/empresaupdate/" + _id, JSON.stringify(datos))
        }
        servicios.empresaauth = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/empresaauth", JSON.stringify(datos))
        }
        servicios.experiencianew = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/experiencianew", JSON.stringify(datos))
        }
        servicios.experienciadelete = function(id, idcv) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/experienciadelete/" + id, { '_idcv': idcv })
        }
        servicios.experienciaupdate = function(datos) {
            return $http.put("http://unitrabajoweb-92158.onmodulus.net/API/experienciaupdate/" + datos._id, JSON.stringify(datos))
        }
        servicios.estudionew = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/estudionew", JSON.stringify(datos))
        }
        servicios.estudiodelete = function(id, idcv) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/estudiodelete/" + id, { '_idcv': idcv })
        }
        servicios.estudioupdate = function(datos) {

            return $http.put("http://unitrabajoweb-92158.onmodulus.net/API/estudioupdate/" + datos._id, JSON.stringify(datos))
        }
        servicios.idiomanew = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/idiomanew", JSON.stringify(datos))
        }
        servicios.idiomadelete = function(id, idcv) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/idiomadelete/" + id, { '_idcv': idcv })
        }
        servicios.competencianew = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/competencianew", JSON.stringify(datos))
        }
        servicios.competenciadelete = function(id, idcv) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/competenciadelete/" + id, { '_idcv': idcv })
        }
        return servicios;

    })





.controller('registro',function($scope,service){
    
}

.controller('registro',function($scope,service){
	
$scope.empresa={};
$scope.errores="";

$scope.registrar=function(empresa){
				
			service.empresanew(data).then(
				function(res){
					console.log(res.data);
					alert(res.data.email);
				},
				function(error){console.log(error);
					alert(error.data.message);
					$scope.errores=error.data.message;
				                     
				})

}


$scope.actualizar=function(empresa){
            var id="";
            id='5807ec010a2c2217c4bc7d99';
            empresa.password="jose123";
			service.empresaupdate(id,empresa).then(
				function(res){
					console.log(res.data);
                    alert("actualizo empresa")
					alert(res.data.email);
				},
				function(error){console.log(error);
                    alert("error")
					alert(error.data.message);
					$scope.errores=error.data.message;
				                     
				})

}


$scope.registrar_experiencia=function(data){
            data._id='580a88c27f82e000f606cc53'
            data.id='580a88c27f82e000f606cc53'
            alert(data);
            console.log(data);
            service.experiencianew(data).then(
                function(res){
                    console.log(res.data);
                    alert("agrego experiencia");
                },
                function(error){console.log(error);
                    alert(error.data.message);
                     alert(" no  error");
                    $scope.errores=error.data.message;
                                     
                })

}

})