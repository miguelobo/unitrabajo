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
           //console.log(user);
          //console.log(omica"entrar session");
        }
        servicios.finduser = function(id) {
            return $http.get("http://unitrabajoweb-92158.onmodulus.net/API/egresadoshow/" + id)
            }
            //////-*********egresado ---//////
        servicios.egresadonew = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/egresadonew", datos)
        }
        servicios.egresadoupdate = function(_id, datos) {
            return $http.put("http://unitrabajoweb-92158.onmodulus.net/API/egresadoupdate/" + _id, JSON.stringify(datos))
        }
        servicios.egresadoauth = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/egresadoauth", JSON.stringify(datos))
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
	


$scope.registrar=function(egresado){


egresado.CC ="llena este campo con tu cc";
egresado.tipo="llena este campo con tu tipo de cc ";
egresado.disponiblidad="llena este campo con tu disponibilidad ";
egresado.graduacion="2014-11-11";
egresado.fecha_nac="2014-11-11";
egresado.email2="example2@gmail.com ";
egresado.direccion="llena este campo con tu direccion ";
egresado.ciudad="llena este campo con tu ciudad";
egresado.departamento="llena este campo con tu departamento";
egresado.pais="llena este campo con tu pais";

console.log(egresado);

                var data={
                    email : egresado.usuario,
                    password : egresado.password,
                    nombres :egresado.password,
                    apellidos :egresado.apellidos,
                    telefono:egresado.telefono,
                    sexo:egresado.sexo,
                    email:egresado.email,

                    cc: egresado.CC  ,
                    tipo:egresado.tipo,

                    disponiblidad :egresado.disponiblidad,
                    graduacion :egresado.graduacion,
                    fecha_nac:egresado.fecha_nac,
                    email2:egresado.email2,
                    direccion:egresado.direccion,
                    ciudad:egresado.ciudad,
                    departamento:egresado.departamento,
                    pais:egresado.pais,


                    };
                    console.log(data);

				
			service.egresadonew(data).then(
				function(res){
					console.log(res.data);
					 swal(res.data.email+" email registrado con exito");
                                         window.location="index.html";
				},
				function(error){console.log(error);
					swal(error.data.message+"hola");
					$scope.errores=error.data.message;
				                     
				})

}
$scope.registrar_e=function(egresado){
                
            service.empresanew(egresado).then(
                function(res){
                    console.log(res.data);
                     swal(res.data.email+" email registrado con exito");
                                         window.location="index.html";
                },
                function(error){console.log(error);
                    swal(error.data.message);
                    $scope.errores=error.data.message;
                                     
                })

}

$scope.actualizar=function(egresado){

            var id="";
            alert(id);
            console.log(getUser().apellidos);
            id='580a88c27f82e000f606cc53';
            egresado._id='580a88c27f82e000f606cc53'
            egresado.password="jose123";
			service.egresadoupdate(id,egresado).then(
				function(res){
					console.log(res.data);
                    alert("actualizo")
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

$scope.registrar_estudio=function(data){
            data._id='580a88c27f82e000f606cc53'
            data.id='580a88c27f82e000f606cc53'
            console.log(data);
            service.estudionew(data).then(
                function(res){
                    console.log(res.data);
                    alert("agrego estudio");
                },
                function(error){console.log(error);
                    alert(error.data.message);
                     alert(" no  error");
                    $scope.errores=error.data.message;
                                     
                })

}
$scope.registrar_competencia=function(data){
            data._id='580a88c27f82e000f606cc53'
            data.id='580a88c27f82e000f606cc53'
            console.log(data);
            service.competencianew (data).then(
                function(res){
                    console.log(res.data);
                    alert("agrego comptencia");
                },
                function(error){console.log(error);
                    alert(error.data.message);
                     alert(" no  error");
                    $scope.errores=error.data.message;
                                     
                })

}
$scope.registrar_idioma=function(data){
            data._id='580a88c27f82e000f606cc53'
            data.id='580a88c27f82e000f606cc53'
            console.log(data);
            service.idiomanew(data).then(
                function(res){
                    console.log(res.data);
                    alert("agrego idioma");
                },
                function(error){console.log(error);
                    alert(error.data.message);
                     alert(" no  error");
                    $scope.errores=error.data.message;
                                     
                })

}
})