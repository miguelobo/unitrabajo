
angular.module('myapp',[])

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

           //tempUser.graduacion=new Data(tempUser.graduacion);
            //console.log("salir session");
           // console.log( tempUser.graduacion);
            return tempUser;
        }
        servicios.setUser = function(user) {
            servicios.User = user;
            localStorage.setItem('user', JSON.stringify(user));
            servicios.User.telefono = parseInt(user.telefono);
            console.log();
           //console.log(user);
          //console.log(omica"entrar session");
        }

        servicios.removeOfertas =function(){
            localStorage.removeItem('ofertas');
             servicios.User = {};
        }
        servicios.getOfertas = function() {
           var tempUser = servicios.User;
            //console.log("salir session");
            return servicios.User;
        }
        servicios.setOfertas = function(user) {
            servicios.User = user;
            localStorage.setItem('ofertas', JSON.stringify(user));
            servicios.User.telefono = parseInt(user.telefono);
            console.log();
           //console.log(user);
          //console.log(omica"entrar session");
        }

        servicios.egresadoshow = function() {
            return $http.get("http://unitrabajoweb-92158.onmodulus.net/API/egresadoshow/")
            }
        servicios.finduser = function(id) {
            return $http.get("http://unitrabajoweb-92158.onmodulus.net/API/egresadoshow/" + id)
            }
            //////-********* egresado ---//////
        servicios.egresadonew = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/egresadonew", datos)
        }
        servicios.egresadoupdate = function(_id, datos) {
            return $http.put("http://unitrabajoweb-92158.onmodulus.net/API/egresadoupdate/" + _id, JSON.stringify(datos))
        }
        servicios.egresadoauth = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/egresadoauth", JSON.stringify(datos))
        }
///////////////////////////ofertaa //////////////////////////////////////////////////////////
         servicios.ofertashow = function() {
            return $http.get("http://unitrabajoweb-92158.onmodulus.net/API/ofertashow")
            }
        servicios.findoferta = function(id) {
            return $http.get("http://unitrabajoweb-92158.onmodulus.net/API/ofertashow/" + id)
            }
        servicios.ofertanew = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/ofertanew", datos)
        }
        servicios.ofertaupdate = function(_id, datos) {
            return $http.put("http://unitrabajoweb-92158.onmodulus.net/API/ofertaupdate/" + _id, JSON.stringify(datos))
        }
        servicios.ofertaaplicar = function(_id) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API//ofertaaplicar/" + _id)
        }
        
        servicios.ofertadelete = function(id, idcv) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/ofertadelete/" + id, { '_idcv': idcv })
        }


        /////////****empresa***///////
        servicios.findempresa = function(id) {
            return $http.get("http://unitrabajoweb-92158.onmodulus.net/API/empresashow/" + id)
            }
        servicios.empresanew = function(datos) {
            return $http.post("http://unitrabajoweb-92158.onmodulus.net/API/empresanew", datos)
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
	
$scope.egresado={};
 $scope.empresa={};
$scope.session={};
$scope.errores="";
$scope.user={};

$scope.modal1=function(){
   
   swal.setDefaults({
  input: 'text',
  confirmButtonText: 'Siguiente &rarr;',
  showCancelButton: true,
  imageUrl: 'http://www.aseuned.com/wb-content/icon-empleos-2.png',
  imageWidth: 75,
  imageHeight: 75,
  animation: true,
  progressSteps: ['1', '2']
})

var steps = [
  {
    title: 'Email',
    text: 'Ingresa Tu Email'
  },
  {
    title: 'Contraseña',
    text: 'Ingresa Tu Contraseña',
   input:'password'
  }
]

swal.queue(steps).then(function (result) {
  swal.resetDefaults()
  console.log(result);
  if ((result[0]=="" && result[1]=="" ) || result[1]=="" || result[0]=="") {
  swal("Campos Vacios","Complete los campos","error");
  }else{
    console.log(result[0]);
  console.log(result[1]);
  $scope.user.email=result[0];
  $scope.user.password=result[1];
$scope.login($scope.user);
  };
  

}, function () {
  swal.resetDefaults()

})
}

$scope.modal2=function(){
   swal.setDefaults({
  input: 'text',
  confirmButtonText: 'Siguiente &rarr;',
  showCancelButton: true,
  animation: true,
  imageUrl: 'http://www.aseuned.com/wb-content/icon-empleos-2.png',
  imageWidth: 75,
  imageHeight: 75,
  progressSteps: ['1', '2']
})

var steps = [
  {
    title: 'Email',
    text: 'Ingresa el email de la empresa'
  },
  {
    title: 'Contraseña',
    text: 'Ingresa Tu Contraseña',
   input:'password'
  }
]

swal.queue(steps).then(function (result) {
  swal.resetDefaults()
  console.log(result);
  if ((result[0]=="" && result[1]=="" ) || result[1]=="" || result[0]=="") {
  swal("Campos Vacios","Complete los campos","error");
  }else{
    console.log(result[0]);
  console.log(result[1]);
  $scope.user.email=result[0];
  $scope.user.password=result[1];
  console.log($scope.user);

$scope.login_e($scope.user);
  };
  

}, function () {
  swal.resetDefaults()

})
}
$scope.login=function(datos){
         $scope.loginData = {};
        $scope.registro = {};
        $scope.Session = {};
                service.egresadoauth($scope.user).then(
                function(res){
                     console.log(res);
                if (!res.data) {
                 
                   swal( "Oops..." , "Algo salió mal!, Email o contraseña incorrecta" , "error" );
                    //   service.setUser(JSON.parse(res.data));
                } else {
                    $scope.Session.user = res.data;
                    service.setUser($scope.Session.user);
                    $scope.Session.state = true;
                    $scope.Session.name = $scope.Session.user.nombres;
                      swal({
                      title: "Entrada exitosa!",
                      text: "Ingreso al sistema exitosa",
                      type: "success",
                      animation: "slide-from-top",
                      confirmButtonColor: "rgb(140, 212, 245)",
                      confirmButtonText: "Entrar",
                      closeOnConfirm: true
                    }).then(function () {
                         window.location="perfil.html";
                        $scope.session=service.getUser();
                        });

                      
                }
				       
				},
                function(error){console.log(error);
                   console.log(error.data.message);
                    $scope.errores=error.data.message;
                                     
                })

}
$scope.login_e=function(datos){
         $scope.loginData = {};
        $scope.registro = {};
        $scope.Session = {};
                service.empresaauth(datos).then(
                function(res){
                     console.log(res);
                if (!res.data) {
                    swal( "Oops..." , "Algo salió mal!, email o contraseña incorrecta" , "error" );
                    //swal("email o password invalido");
                    //   service.setUser(JSON.parse(res.data));
                } else {
                    $scope.Session.user = res.data;
                    service.setUser($scope.Session.user);
                    $scope.Session.state = true;
                    $scope.Session.name = $scope.Session.user.nombre;
                     swal({
                      title: "Entrada exitosa!",
                      text: "Ingreso al sistema exitosa",
                      type: "success",
                      animation: "slide-from-top",
                      confirmButtonColor: "rgb(140, 212, 245)",
                      confirmButtonText: "Entrar",
                      closeOnConfirm: true
                    }).then(function () {
                          window.location="Informacion_Empresa2.html";
                      $scope.session=service.getUser();
                        });


                     //swal("ha iniciado session correctamente")
                      
                }
                       
                },
                function(error){console.log(error);
                    swal("Error","Empresa no registrada, datos "+error.data.message,"error");
                    $scope.errores=error.data.message;
                                     
                })

}
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
                    swal({
                      title: "Registro con exito!",
                      text: "Ya puede ingresar al sistema",
                      type: "success",
                      animation: "slide-from-top",
                      confirmButtonColor: "rgb(140, 212, 245)",
                      confirmButtonText: "Volver",
                      closeOnConfirm: true
                    },
                    function(isConfirm){
                      if (isConfirm) {
                        window.location="index.html";
                      $scope.session=service.getUser();
                      }

                    });

					//swal(res.data.email+" email registrado con exito");
                    // sweetswal ( "Registado" ,res.data.email+"Se ha registrado correctamente" , "success" );
                     
				},
				function(error){console.log(error);
					swal(error.data.message +"hola2 angular");
					$scope.errores=error.data.message;
				                     
				})

}


$scope.actualizar=function(id,egresado){
				var data={
					email : egresado.usuario,
					password : egresado.password,
					nombres :'miguel',
					apellidos :'lobo',
					telefono:12333,
					sexo:'masculino'
					};

			service.egresadoupdate(id,data).then(
				function(res){
					console.log(res.data);
					swal(res.data.email);
				},
				function(error){console.log(error);
					swal(error.data.message);
					$scope.errores=error.data.message;
				                     
				})


}

})
.controller('admin',function($scope,service,$http){
$http.get("http://unitrabajoweb-92158.onmodulus.net/API/ofertashow").then(
        function(sucess){
            console.log(sucess.data);
           $scope.ofertas_todas=sucess.data;
        },
        function(err){
              console.log(err);
        }
        )


    $scope.todos=function(){
        service.ofertashow().then(
        function(sucess){
            console.log(sucess.data);
            $scope.todos=sucess.data;
        },
        function(err){
              console.log(err);
        }
        )
}

})

.controller('registro_egresado',function($scope,service,$http){


    $scope.egresado=JSON.parse(localStorage.getItem('user'));

    service.finduser($scope.egresado._id).then(
        function(sucess){
             service.setUser(sucess.data);
             console.log(service.getUser());
             $scope.egresado=service.getUser();
        },
        function(err){

            
        })



    
//$ofertas={};
//service.ofertashow().then(
//    function(sucess){
//        console.log(sucess.data);
//    $ofertas=sucess.data;},
//    function(err){}
//    )
//
$scope.mostrar_grafica=function() {

  new Morris.Bar({
          element: 'graph_bar',
          data: [
            { "hoja_de_vida": "Estudios", "componentes":$scope.egresado.estudios.length }, 
            { "hoja_de_vida": "Experiencias", "componentes": $scope.egresado.experiencias.length }, 
            { "hoja_de_vida": "Habilidades", "componentes": $scope.egresado.competencias.length }, 
            { "hoja_de_vida": "Idiomas", "componentes": $scope.egresado.idiomas.length}, 
            { "hoja_de_vida": "Aplicaciones", "componentes": $scope.egresado.aplicaciones.length }
          ],
          xkey: 'hoja_de_vida',
          hideHover: 'auto',
          barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
          ykeys: ['componentes', 'sorned'],
          labels: ['Cantidad'],
          xLabelAngle: 60,
          resize: true
        });
}


$scope.Departamentos = [
            'AMAZONAS',
            'ANTIOQUIA',
            'ARAUCA',
            'ATLANTICO',
            'BOLIVAR',
            'BOYACA',
            'CALDAS',
            'CAQUETA',
            'CASANARE',
            'CAUCA',
            'CESAR',
            'CHOCO',
            'CORDOBA',
            'CUNDINAMARCA',
            'GUAINIA',
            'GUAJIRA',
            'GUAVIARE',
            'HUILA',
            'MAGDALENA',
            'META',
            'N SANTANDER',
            'NARINO',
            'PUTUMAYO',
            'QUINDIO',
            'RISARALDA',
            'SAN ANDRES',
            'SANTANDER',
            'SUCRE',
            'TOLIMA',
            'VALLE DEL CAUCA',
            'VAUPES',
            'VICHADA',
        ];

        
$scope.habilidades = [
'Empatía',
'Liderazgo',
'Interrelación con otros',
'Escucha activa',
'Persuasión',
'Capacidad de comunicación',
'Trabajo en equipo',
'Liderazgo',
'Negociación',
'Control del estrés',
'Racionalización',
'Capacidad analítica',
'Capacidad de síntesis',
'Argumentación',
'Innovación y creatividad',
'Iniciativa',
'Respeto',
'Sinceridad',
'Calma',
'Elegancia',
];

 
$scope.errores="";
 $scope.obtener_empresa={};
$scope.usuario={};
$scope.usuario=JSON.parse(localStorage.getItem('user'));

$scope.buscar_empresa=function (empresa) {
             service.findempresa(empresa).then(function(res){
             $scope.obtener_empresa=res;
  },function  (err) {
  
  })
}


$scope.registrar=function(egresado){

                
            service.egresadonew(egresado).then(
                function(res){
                    console.log(res.data);
                      swal({
                      title: "Registro con exito!",
                      text: "Ya puede ingresar al sistema",
                      type: "success",
                      animation: "slide-from-top",
                      confirmButtonColor: "rgb(140, 212, 245)",
                      confirmButtonText: "Volver",
                      closeOnConfirm: true
                    },
                    function(isConfirm){
                      if (isConfirm) {
                        window.location="index.html";
                      $scope.session=service.getUser();
                      }

                    });
                },
                function(error){console.log(error);
                    swal(error.data.message);
                    $scope.errores=error.data.message;
                                     
                })

}
$scope.getoferta={};


$scope.getofertas=function(id) {


  $http.get("http://unitrabajoweb-92158.onmodulus.net/API/ofertashow/"+id).then(
        function(sucess){
       
            console.log(sucess.data);
          $scope.getoferta=sucess.data;
          console.log( $scope.getoferta);
          return(sucess.data)
},
        function(err){
              console.log(err);
        }
        )
  // body...
}

$scope.mostrar_fecha=function(date) {
var date = new Date();
var d  = date.getDate();
var day = (d < 10) ? '0' + d : d;
var m = date.getMonth() + 1;
var month = (m < 10) ? '0' + m : m;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
return day + "/" + month + "/" + year
}


$scope.ver_oferta=function(x){

  $http.get("http://unitrabajoweb-92158.onmodulus.net/API/ofertashow/"+x).then(
        function(sucess){
            console.log(sucess.data);
           x=sucess.data;

           $http.get("http://unitrabajoweb-92158.onmodulus.net/API/empresashow/"+x.empresa).then(
        function(sucess){
            console.log(sucess.data);
           m=sucess.data;

              swal(
                       {
                        title:'Mas informacion',
                      input: 'text',
                      confirmButtonText: 'Cerrar',
                      showCancelButton: true,
                      animation: true,
                      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTxI_t6mN6k0Sdbr_MlR52jQsYYUsxaXd5gt_oLynvkfcEOg4c-g',
                      imageWidth: 75,
                      imageHeight: 75,
                      text:'<p class="text right"><table><thead><th>Generales</th><th></th></thead><tbody><tr><td>Desde:</td><td>'+m.nombre+' </td></tr><tr><td>Desde:</td><td>'+$scope.mostrar_fecha(x.inicio)+' </td></tr><td>a :</td><td>'+$scope.mostrar_fecha(x.final)+'</td><tr><td>Perfil</td><td> '+x.perfil+'</td></tr><tr><td>Vacantes</td><td> '+x.vacantes+'</td></tr><tr><td>Jornada</td><td> '+x.jornada+'</td></tr><tr><td>Contrato</td><td> '+x.contracto+'</td></tr></td></tbody></table><table><thead><th>Localizacion</th><th></th></thead><tbody><tr><td>Ciudad:</td><td>'+x.cuidad+' </td></tr><td>Departamento:</td><td>'+x.departamento+'</td><tr><td>pais</td><td> '+x.pais+'</td></tr><tr><td>Residencia</td><td> '+x.residencia+'</td></tr></td></tbody></table><table><thead><th>Requisitos</th><th></th></thead><tbody><tr><td>educacion:</td><td>'+x.educacion+' </td></tr><td>experiencia:</td><td>'+x.experiencia+'</td><tr><td>viajar</td><td> '+x.viajar+'</td></tr></td></tbody></table>'
                    +'</p>',
                      html:true
                    })
          },function(err){
                        console.log(err);
                  })
        },function(err){
              console.log(err);
        }
        )

 

}


$scope.mas_informacion=function(x){
  $http.get("http://unitrabajoweb-92158.onmodulus.net/API/empresashow/"+x.empresa).then(
        function(sucess){
            console.log(sucess.data);
           m=sucess.data;
 swal(
   {
    title:'Mas informacion',
  input: 'text',
  confirmButtonText: 'Cerrar',
  showCancelButton: true,
  animation: true,
  imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTxI_t6mN6k0Sdbr_MlR52jQsYYUsxaXd5gt_oLynvkfcEOg4c-g',
  imageWidth: 75,
  imageHeight: 75,
   text:'<p class="text right"><table><thead><th>Generales</th><th></th></thead><tbody><tr><td>Desde:</td><td>'+m.empresa+' </td></tr><tr><td>Desde:</td><td>'+$scope.mostrar_fecha(x.inicio)+' </td></tr><td>a :</td><td>'+$scope.mostrar_fecha(x.final)+'</td><tr><td>Perfil</td><td> '+x.perfil+'</td></tr><tr><td>Vacantes</td><td> '+x.vacantes+'</td></tr><tr><td>Jornada</td><td> '+x.jornada+'</td></tr><tr><td>Contrato</td><td> '+x.contracto+'</td></tr></td></tbody></table><table><thead><th>Localizacion</th><th></th></thead><tbody><tr><td>Ciudad:</td><td>'+x.cuidad+' </td></tr><td>Departamento:</td><td>'+x.departamento+'</td><tr><td>pais</td><td> '+x.pais+'</td></tr><tr><td>Residencia</td><td> '+x.residencia+'</td></tr></td></tbody></table><table><thead><th>Requisitos</th><th></th></thead><tbody><tr><td>educacion:</td><td>'+x.educacion+' </td></tr><td>experiencia:</td><td>'+x.experiencia+'</td><tr><td>viajar</td><td> '+x.viajar+'</td></tr></td></tbody></table>'
+'</p>',
  html:true
}
)


  },function(err){
                        console.log(err);
                  })
  

}


$scope.aplicar=function (datos) {
  console.log("datos");
  datos._idcv=$scope.egresado._id;
  console.log(datos);
   console.log("datos");


$http.post("http://unitrabajoweb-92158.onmodulus.net/API/ofertaaplicar/"+datos._id, { '_idcv': datos._idcv }).then(
  function (res) {
    console.log(res);
    if (res.data.message) {
      swal("Error","El "+res.data.message,"error");
    }else{
       service.finduser($scope.egresado._id).then(
                    function(sucess){
                      //console.log(sucess);
                         service.setUser(sucess.data);
                         $scope.egresado=service.getUser();
                    })
    swal("Oferta aplicada","ah sido postulado a la oferta laboral con exito" +res.data.message,"success");
    }
    ;
   
    
  },
  function (err) {
    swal("Error","El "+err.data.message,"error");
    
  }
  )
}

$scope.actualizar=function(egresado){

  egresado.cuidad=egresado.ciudad;
    console.log(egresado);
    var data={
                    email : egresado.usuario,
                    password : egresado.password,
                    nombres :egresado.nombres,
                    apellidos :egresado.apellidos,
                    telefono:egresado.telefono,
                    sexo:egresado.sexo,
                    email:egresado.email,
                    cc: egresado.cc  ,
                    tipo:egresado.tipo,
                    disponiblidad:egresado.disponiblidad,
                    disponibilidad:egresado.disponiblidad,
                    graduacion :egresado.graduacion,
                    fecha_nac:egresado.fecha_nac,
                    email2:egresado.email2,
                    direccion:egresado.direccion,
                    ciudad:egresado.ciudad,
                    cuidad:egresado.ciudad,
                    departamento:egresado.departamento,
                    pais:egresado.pais,
                    perfil:egresado.perfil

                    };
                    console.log(data);


 var user=JSON.parse(localStorage.getItem('user'));
        var id=user._id;
        egresado._id=id;

    swal({
   title: "Desea Actualizar?",
   text: "Tu informacion sera Actualizada, si para guardar!",
   type: "success",
   showCancelButton: true,confirmButtonText: "Si, actualizar!",
   cancelButtonText: "No, cancelar!",
   closeOnConfirm: false,
   closeOnCancel: false }, 
function(isConfirm){ 
   if (isConfirm) { 
        
        service.egresadoupdate(id,egresado).then(
            function(res){
                console.log(res.data);

                service.setUser(res.data);
                 service.finduser($scope.egresado._id).then(
                    function(sucess){
                         service.setUser(sucess.data);
                         $scope.egresado=service.getUser();
                    })
                 swal("Actualizo!", "Tu informacion se actualizo correctamente.", "success");
            },
            function(error){console.log(error);
                swal("Error"+error.data.message);
                $scope.errores=error.data.message;
                                 
            })



    
   } else {
    swal("Actualizo!", "Tu informacion no ha sido actualizada.", "error");
    service.finduser($scope.egresado._id).then(
                    function(sucess){
                         service.setUser(sucess.data);
                         $scope.egresado=service.getUser();
                    })
   }
});

                                              
    

}


$scope.registrar_experiencia=function(data){
             var egresado=JSON.parse(localStorage.getItem('user'));
            var id=egresado._id;
            egresado.experiencia=data.experiencia;
            data._idcv=egresado._id;

            service.experiencianew(data).then(
                function(res){
                    console.log(res.data);
                    service.setUser(res.data);
                    ///actualizar localhost
                    service.finduser($scope.egresado._id).then(
                        function(sucess){
                             service.setUser(sucess.data);
                             $scope.egresado=service.getUser();
                              swal("Registro Exitoso!", "Ha sido registrada una nueva experiencia correctamente.", "success");
                        },
                        function(err){
                            swal("error asegure de estar conectado a una red");
                        }
                        )
                    ////
                   
                },
                function(error){console.log(error);
                    swal(error.data.message);
                     swal(" no  error");
                      swal("Error!", error.data.message, "error");
                     console.log(error.data.message);

                    $scope.errores=error.data.message;
                                     
                })
$scope.set2=false;
$scope.mtabla2=true;
}



$scope.actualizar_experiencia=function(egresado){
    var user=JSON.parse(localStorage.getItem('user'));
            var id=user._id;

swal({
   title: "Desea Actualizar?",
   text: "Tu informacion sera Actualizada, si para guardar!",
   type: "success",
   showCancelButton: true,confirmButtonText: "Si, actualizar!",
   cancelButtonText: "No, cancelar!",
   closeOnConfirm: false,
   closeOnCancel: false }, 
function(isConfirm){ 
   if (isConfirm) { 

                service.experienciaupdate(egresado).then(
                function(res){
                    console.log(res.data);
                   
                     service.setUser(egresado);
                     service.finduser($scope.egresado._id).then(
                        function(sucess){
                             service.setUser(sucess.data);
                             $scope.egresado=service.getUser();
                        })
                },
                function(error){console.log(error);
                    swal("error")
                    swal(error.data.message);
                    $scope.errores=error.data.message;           
                                    })
                    $scope.set2=false;
                    $scope.mtabla2=true;

  swal("Actualizo!", "Tu informacion se actualizo correctamente.", "success");

 } else {
    swal("Actualizo!", "Tu informacion no ha sido actualizada.", "error");
    service.finduser($scope.egresado._id).then(
                    function(sucess){
                         service.setUser(sucess.data);
                         $scope.egresado=service.getUser();
                    })
   }
           
})
}

$scope.actualizar_estudio=function(egresado){
    console.log(egresado);
    var user=JSON.parse(localStorage.getItem('user'));
            var id=user._id;

            swal({
   title: "Desea Actualizar?",
   text: "Tu informacion sera Actualizada, si para guardar!",
   type: "success",
   showCancelButton: true,confirmButtonText: "Si, actualizar!",
   cancelButtonText: "No, cancelar!",
   closeOnConfirm: false,
   closeOnCancel: false }, 
function(isConfirm){ 
   if (isConfirm) { 
    //////////////////
    service.estudioupdate(egresado).then(
        function(res){
            console.log(res.data);
             service.setUser(egresado);
             service.finduser($scope.egresado._id).then(
                function(sucess){
                     service.setUser(sucess.data);
                     $scope.egresado=service.getUser();
                })
        },
        function(error){console.log(error);
            swal("error")
            swal(error.data.message);
            $scope.errores=error.data.message;
                             
        })
        $scope.set=false;
        $scope.mtabla=true;
    //////////////////

 swal("Actualizo!", "Tu informacion se actualizo correctamente.", "success");

 } else {
    swal("Actualizo!", "Tu informacion no ha sido actualizada.", "error");
    service.finduser($scope.egresado._id).then(
                    function(sucess){
                         service.setUser(sucess.data);
                         $scope.egresado=service.getUser();
                    })
   }
   })
}

$scope.registrar_estudio=function(data){
     var egresado=JSON.parse(localStorage.getItem('user'));
            var id=egresado._id;
            egresado.estudio=data.estudio;
            data._idcv=egresado._id;
            console.log(data);

            service.estudionew(data).then(
                function(res){
                     service.setUser(res.data);
                     ///actualizar localhost
                    service.finduser($scope.egresado._id).then(
                        function(sucess){
                             service.setUser(sucess.data);
                             $scope.egresado=service.getUser();
                        swal("Registro Exitoso!", "Ha sido registrado un nuevo estudio correctamente.", "success");
                    
                        },
                        function(err){
                            swal("fallo buscando usuario, revise su internet");
                        }
                        )

                    ////
                },
                function(error){console.log(error);
                    console.log(error);
                    swal("error",error.data.message,"error");
                    $scope.errores=error.data.message;
                                     
                })

$scope.set=false;
$scope.mtabla=true;
}
$scope.registrar_competencia=function(datos){
  var b={
        competencia:datos.competencia,
        _idcv:$scope.egresado._id
       }
     
var esta={};
 esta=false; 
  for (var i = 0; i < $scope.egresado.competencias.length; i++) {

    if (b.competencia==$scope.egresado.competencias[i].competencia) {
      esta=true;
    };
    
  };
  if (esta==true) {
    swal("error","esta habilidad ya ha sido agregada","error")
      
  };
       if (esta==false) {
        service.competencianew(b).then(
                function(res){
                    console.log(res.data);
                    swal("agrego competencia");
                    service.finduser($scope.egresado._id).then(
                        function(sucess){
                             service.setUser(sucess.data);
                             $scope.egresado=service.getUser();
                        })
                     swal("Registro Exitoso!", "Ha sido registrado una nueva competencia  correctamente.", "success");
                },
                function(error){console.log(error);
                     swal(" no  error");
                    $scope.errores=error.data.message;
                                     
                })
$scope.set4=false;


       };

            
}
$scope.registrar_idioma=function(datos){
            var data={
                idioma:datos.idioma,
                nivel:datos.nivel,
                _idcv:$scope.egresado._id
            }
            service.idiomanew(data).then(
                function(res){
                    console.log(res.data);
                    swal("agrego idioma");
                    service.finduser($scope.egresado._id).then(
                        function(sucess){
                             service.setUser(sucess.data);
                             $scope.egresado=service.getUser();
                        })
                    swal("Registro Exitoso!", "Ha sido registrado un nuevo idioma correctamente.", "success");
                },
                function(error){console.log(error);
                    swal(error.data.message);
                    $scope.errores=error.data.message;
                                     
                })
$scope.set3=false;
}
$scope.eliminar_idioma=function(id){

    swal({
  title: "Desea eliminar este idioma?",
  text: "Tu informacion sera eliminada, si para eliminar!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Si, eliminar!",
  cancelButtonText: "No, cancelar!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {
     service.idiomadelete(id,$scope.egresado._id).then(
                function(res){
                    console.log(res.data);
                    service.finduser($scope.egresado._id).then(
                        function(sucess){
                             service.setUser(sucess.data);
                             $scope.egresado=service.getUser();
                        })
                },
                function(error){console.log(error);
                    swal(error.data.message);
                    $scope.errores=error.data.message;
                                     
                })

    swal("Eliminado!", "Tu idioma ha sido eliminado.", "success");
  } else {
    swal("Cancelado", "Tu idioma no se elimino", "error");
  }
});

           
}
$scope.eliminar_competencia=function(id){

    swal({
  title: "Desea eliminar esta competencia?",
  text: "Tu informacion sera eliminada, si para eliminar!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Si, eliminar!",
  cancelButtonText: "No, cancelar!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {
    service.competenciadelete(id,$scope.egresado._id).then(
                function(res){
                    console.log(res.data);
                    service.finduser($scope.egresado._id).then(
                        function(sucess){
                             service.setUser(sucess.data);
                             $scope.egresado=service.getUser();
                        })
                },
                function(error){console.log(error);
                    swal(error.data.message);
                    $scope.errores=error.data.message;
                                     
                })
    swal("Eliminado!", "Tu competencia ha sido eliminado.", "success");
  } else {
    swal("Cancelado", "Tu competencia no se elimino", "error");
  }
});
            

}
$scope.eliminar_experiencia=function(id){
    swal({
  title: "Desea eliminar esta experiencia ?",
  text: "Tu informacion sera eliminada, si para eliminar!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Si, eliminar!",
  cancelButtonText: "No, cancelar!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {
     service.experienciadelete(id,$scope.egresado._id).then(
                function(res){
                    console.log(res.data);
                    service.finduser($scope.egresado._id).then(
                        function(sucess){
                             service.setUser(sucess.data);
                             $scope.egresado=service.getUser();
                        })
                },
                function(error){console.log(error);
                    swal(error.data.message);
                    $scope.errores=error.data.message;
                                     
                })
    swal("Eliminado!", "Tu experiencia ha sido eliminado.", "success");
  } else {
    swal("Cancelado", "Tu experiencia no se elimino", "error");
  }
});
           

}
$scope.eliminar_estudio=function(id){
    swal({
  title: "Desea eliminar este estudio ?",
  text: "Tu informacion sera eliminada, si para eliminar!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Si, eliminar!",
  cancelButtonText: "No, cancelar!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {
    service.estudiodelete(id,$scope.egresado._id).then(
                function(res){
                    console.log(res.data);
                    service.finduser($scope.egresado._id).then(
                        function(sucess){
                             service.setUser(sucess.data);
                             $scope.egresado=service.getUser();
                        })
                },
                function(error){console.log(error);
                    swal(error.data.message);
                    $scope.errores=error.data.message;
                                     
                })
    swal("Eliminado!", "Tu estudio ha sido eliminado.", "success");
  } else {
    swal("Cancelado", "Tu estudio no se elimino", "error");
  }
});
            

}
$scope.salir=function(){
    swal({
  title: "Desea salir del sistema?",
  text: "salir de la plataforma de egresados!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Si, Salir!",
  cancelButtonText: "No, cancelar!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {

    swal("salida!", "Salida exitosa.", "success");
    service.removeUser();
            window.location="index.html";
  } else {
    swal("Cancelado", "permaneces en el sistema", "error");
  }
});
            

}


$scope.ver_aplicaciones=function(id_oferta){

$scope.egresado.aplicaciones

}

$scope.si_actualmente=function (data) {
  if (data) {
    return 'Si'
  }else{
    return 'No'
  };
}

$scope.b_ocultar=function () {
  $scope.set=false;
$scope.mtabla=true;
}
$scope.b_nuevo=function () {
    $scope.egresado.estudio={};
 $scope.set=true;
$scope.medit=false;
$scope.mtabla=false;
$scope.mbutton=true;
}
$scope.cargar_editar=function(exp){

$scope.egresado.estudio=exp;
$scope.set=true;
$scope.mtabla=false;
$scope.mbutton=false;
$scope.medit=true;

}

$scope.b_ocultar2=function () {
  $scope.set2=false;
$scope.mtabla2=true;
}
$scope.b_nuevo2=function () {
    $scope.egresado.experiencia={};
 $scope.set2=true;
$scope.medit2=false;
$scope.mtabla2=false;
$scope.mbutton2=true;
}
$scope.cargar_editar2=function(exp){

var egresado=JSON.parse(localStorage.getItem('user'));
var id=egresado._id;
           exp._idcv=egresado._id;

$scope.egresado.experiencia=exp;
$scope.set2=true;
$scope.mtabla2=false;
$scope.mbutton2=false;
$scope.medit2=true;

}




})
.controller('empresa',function($scope,service,$http){



  $scope.mostrar_fecha=function(date) {
var date = new Date();
var d  = date.getDate();
var day = (d < 10) ? '0' + d : d;
var m = date.getMonth() + 1;
var month = (m < 10) ? '0' + m : m;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
return day + "/" + month + "/" + year
}

$scope.ver_oferta=function(x){

  $http.get("http://unitrabajoweb-92158.onmodulus.net/API/ofertashow/"+x).then(
        function(sucess){
            console.log(sucess.data);
           x=sucess.data;

           $http.get("http://unitrabajoweb-92158.onmodulus.net/API/empresashow/"+x.empresa).then(
        function(sucess){
            console.log(sucess.data);
           m=sucess.data;

              swal(
                       {
                        title:'Mas informacion',
                      input: 'text',
                      confirmButtonText: 'Cerrar',
                      showCancelButton: true,
                      animation: true,
                      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTxI_t6mN6k0Sdbr_MlR52jQsYYUsxaXd5gt_oLynvkfcEOg4c-g',
                      imageWidth: 75,
                      imageHeight: 75,
                      text:'<p class="text right"><table><thead><th>Generales</th><th></th></thead><tbody><tr><td>Desde:</td><td>'+m.nombre+' </td></tr><tr><td>Desde:</td><td>'+$scope.mostrar_fecha(x.inicio)+' </td></tr><td>a :</td><td>'+$scope.mostrar_fecha(x.final)+'</td><tr><td>Perfil</td><td> '+x.perfil+'</td></tr><tr><td>Vacantes</td><td> '+x.vacantes+'</td></tr><tr><td>Jornada</td><td> '+x.jornada+'</td></tr><tr><td>Contrato</td><td> '+x.contracto+'</td></tr></td></tbody></table><table><thead><th>Localizacion</th><th></th></thead><tbody><tr><td>Ciudad:</td><td>'+x.cuidad+' </td></tr><td>Departamento:</td><td>'+x.departamento+'</td><tr><td>pais</td><td> '+x.pais+'</td></tr><tr><td>Residencia</td><td> '+x.residencia+'</td></tr></td></tbody></table><table><thead><th>Requisitos</th><th></th></thead><tbody><tr><td>educacion:</td><td>'+x.educacion+' </td></tr><td>experiencia:</td><td>'+x.experiencia+'</td><tr><td>viajar</td><td> '+x.viajar+'</td></tr></td></tbody></table>'
                    +'</p>',
                      html:true
                    })
          },function(err){
                        console.log(err);
                  })
        },function(err){
              console.log(err);
        }
        )

 

}

    $scope.Departamentos = [
            'AMAZONAS',
            'ANTIOQUIA',
            'ARAUCA',
            'ATLANTICO',
            'BOLIVAR',
            'BOYACA',
            'CALDAS',
            'CAQUETA',
            'CASANARE',
            'CAUCA',
            'CESAR',
            'CHOCO',
            'CORDOBA',
            'CUNDINAMARCA',
            'GUAINIA',
            'GUAJIRA',
            'GUAVIARE',
            'HUILA',
            'MAGDALENA',
            'META',
            'N SANTANDER',
            'NARINO',
            'PUTUMAYO',
            'QUINDIO',
            'RISARALDA',
            'SAN ANDRES',
            'SANTANDER',
            'SUCRE',
            'TOLIMA',
            'VALLE DEL CAUCA',
            'VAUPES',
            'VICHADA',
        ];

$scope.empresa=JSON.parse(localStorage.getItem('user'));


$scope.errores="";
$scope.usuario={};
$scope.usuario=JSON.parse(localStorage.getItem('user'));
$scope.registrar_empresa=function(empresa){
   console.log(empresa);
     empresa.razon="aqui va la razon de tu empresa ";
     empresa.direccion=" direccion de tu empresa";
     empresa.pais="pais donde esta tu empresa ";
     empresa.departamento="departamento";
     empresa.cuidad="ciudad";
     empresa.sector="sector";
     empresa.representante="representante"
     empresa.pagina="tuempresa.com";

     console.log(JSON.stringify(empresa));
            service.empresanew(empresa).then(
                function(res){
                    console.log(res.data);

                       swal({
                      title: "Registro con exito!",
                      text: "empresa agregada correctamente, ya puede ingresar al sistema",
                      type: "success",
                      animation: "slide-from-top",
                      confirmButtonColor: "rgb(140, 212, 245)",
                      confirmButtonText: "Volver",
                      closeOnConfirm: true
                    },
                    function(isConfirm){
                      if (isConfirm) {
                        window.location="index.html";
                      $scope.session=service.getUser();
                      }

                    });
                },
                function(error){
                  console.log(error);
                    swal(error.data.message);
                    $scope.errores=error.data.message;                                    
                })
}
$scope.actualizar_e=function(empresa){
    var user=JSON.parse(localStorage.getItem('user'));
            var id=user._id;  
   service.empresaupdate(id,empresa).then(
                function(res){
                    console.log(res.data);
                    swal("actualizo")
                     service.setUser(empresa);
                },
                function(error){console.log(error);
                    swal("error")
                    swal(error.data.message);
                    $scope.errores=error.data.message;
                                     
                })

}


$scope.registrar_oferta=function(datos){
    var user=JSON.parse(localStorage.getItem('user'));
            var id=user._id;
            console.log(datos);
var datos2={
            inicio: datos.ofertas.inicio,
            final:datos.ofertas.final,
            perfil:datos.ofertas.perfil,
            descripcion: datos.ofertas.descripcion,
            salario: datos.ofertas.salario,
            contracto: datos.ofertas.contracto,
            jornada: datos.ofertas.jornada,
            pais: datos.ofertas.pais,
            departamento: datos.ofertas.departamento,
            cuidad: datos.ofertas.cuidad,
            empresa:id,
            educacion: datos.ofertas.educacion,
            experiencia: datos.ofertas.experiencia,
            viajar: datos.ofertas.viajar,
            residencia: datos.ofertas.residencia,
            _idcv:id
}

 console.log(datos2);
            service.ofertanew(datos2).then(
                function(res){
                    console.log(res.data);
                    swal("oferta agregada correctamente");
                      service.findempresa($scope.empresa._id).then(
                        function(sucess){
                              service.setUser(sucess.data);
                             console.log(sucess.data);
                             $scope.empresa=service.getUser();
                        },function (err) {
                         console.log(err)
                        })
                },
                function(error){console.log(error);
                    swal(error.data.message);
                    $scope.errores=error.data.message;                                    
                })
}


$scope.actualizar_oferta=function(empresa){
    var user=JSON.parse(localStorage.getItem('user'));
            var id=user._id;
            empresa._idcv=user._id;
            console.log(empresa);
swal({
   title: "Desea Actualizar?",
   text: "Tu informacion sera Actualizada, si para guardar!",
   type: "success",
   showCancelButton: true,confirmButtonText: "Si, actualizar!",
   cancelButtonText: "No, cancelar!",
   closeOnConfirm: false,
   closeOnCancel: false }, 
function(isConfirm){ 
   if (isConfirm) {
                service.ofertaupdate(empresa._id,empresa).then(
                function(res){
                    console.log(res.data);
                   
                     service.setUser(empresa);
                    service.findempresa($scope.empresa._id).then(
                        function(sucess){
                             service.setUser(sucess.data);
                             console.log(sucess.data);
                             $scope.empresa=service.getUser();
                        })
                },
                function(error){
                    console.log(error);
                    swal("error")
                    swal(error.data.message);
                    $scope.errores=error.data.message;           
                    })
                    $scope.set3=false;
                    $scope.mtabla3=true;

  swal("Actualizo!", "Tu informacion se actualizo correctamente.", "success");

 } else {
    swal("Actualizo!", "Tu informacion no ha sido actualizada.", "error");
    service.findempresa($scope.empresa._id).then(
                    function(sucess){
                         service.setUser(sucess.data);
                         $scope.empresa=service.getUser();

                    })
   }
           
})
}

$scope.eliminar_Oferta=function(id,idcv){
    swal({
  title: "Desea eliminar esta oferta ?",
  text: "Tu informacion sera eliminada, si para eliminar!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Si, eliminar!",
  cancelButtonText: "No, cancelar!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {
console.log(idcv);
console.log(id);

     service.ofertadelete(id,idcv).then(
                function(res){
                  console.log(res.data);
                    service.findempresa($scope.empresa._id).then(
                        function(sucess){
                              service.setUser(sucess.data);
                             console.log(sucess.data);
                             $scope.empresa=service.getUser();
                        },function (err) {
                         console.log(err)
                        })

                },
                function(error){console.log(error);
                    swal(error.data.message);
                    $scope.errores=error.data.message;
                                     
                })
    swal("Eliminado!", "Tu oferta ha sido eliminada.", "success");
  } else {
    swal("Cancelado", "Tu oferta no se elimino", "error");
  }
});
}


$scope.b_ocultar3=function () {
  $scope.set3=false;
$scope.mtabla3=true;
}
$scope.b_nuevo3=function () {
    $scope.empresa.ofertas={};
 $scope.set3=true;
$scope.medit3=false;
$scope.mtabla3=false;
$scope.mbutton3=true;
}

$scope.cargar_editar3=function(exp){

var empresa=JSON.parse(localStorage.getItem('user'));
var id=empresa._id;
           exp._idcv=empresa._id;

$scope.empresa.ofertas=exp;
$scope.set3=true;
$scope.mtabla3=false;
$scope.mbutton3=false;
$scope.medit3=true;

}

$scope.salir_e=function(){
         swal({
  title: "Desea salir del sistema?",
  text: "salir de la plataforma de egresados!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Si, Salir!",
  cancelButtonText: "No, cancelar!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {

    swal("salida!", "Salida exitosa.", "success");
    service.removeUser();
            window.location="index.html";
  } else {
    swal("Cancelado", "permaneces en el sistema", "error");
  }
});
     

}


})

.controller('ctrl',function($scope,service){
$scope.egresado=JSON.parse(localStorage.getItem('user'));
$scope.ofertas_todas={};
$scope.todos={};
$scope.ofertas_1={};

  

$scope.oferta_id=function(id){
    service.findoferta(id).then(function (datos) {
        console.log(datos.data);
    $scope.ofertas_1=datos.data;
    console.log($scope.ofertas_1);
    // body...
},function (argument) {
    // body...
}) 
       
}


$scope.oferta_show=function(){
    swal("hola 1");
    service.ofertashow().then(function (datos) {
    console.log(datos.data);
    $scope.ofertas_todas=datos.data;
    console.log($scope.ofertas_todas);
    // body...
},function (argument) {
    // body...
})       
}



})

