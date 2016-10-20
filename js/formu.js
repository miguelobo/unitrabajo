  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        message:'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            ID: {
                validators: {

                    stringLength: {
                        min: 4,
                        max: 12,
                    },
                    notEmpty: {
                        message: 'Debe dijitar su Numero De Identificacion'
                    },
                }
            },
             Tipo_ID: {
                validators: {
                        notEmpty: {
                        message: 'Debe dijitar el Tipo De Identificacion'
                    }
                }
            },
             Grado: {
                validators: {
                        notEmpty: {
                        message: 'Debe dijitar la Fecha de Graduacion'
                    }
                }
            },
            Fecha_Nac: {
                validators: {
                        notEmpty: {
                        message: 'Debe dijitar la Fecha de Nacimiento'
                    }
                }
            },
            Disponibilidad: {
                validators: {
                        notEmpty: {
                        message: 'Debe dijitar la Disponibilidad'
                    }
                }
            },
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Debe dijitar su primer nombre'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Debe dijitar su segundo nombre'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Debe dijitar su direccion e-mail'
                    },
                    emailAddress: {
                        message: 'Debe dijitar su direccion e-mail'
                    }
                }
            },
            email2: {
                validators: {
                    notEmpty: {
                        message: 'Debe dijitar su direccion e-mail'
                    },
                    emailAddress: {
                        message: 'Debe dijitar su direccion e-mail'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Debe dijitar su numero celular'
                    },
                    phone: {
                        country: 'COL',
                        message: 'Debe dijitar su numero celular con el codigo de su pais'
                    }
                }
            },
            Telefono: {
                validators: {
                    stringLength: {
                        min: 7,
                        max: 7,
                    },
                    notEmpty: {
                        message: 'Debe dijitar su numero telefono  (Colombia,7 numeros)'
                    },
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Debe dijitar su Direccion de residencia'
                    }
                }
            },
            Nacionalidad: {
                validators: {
                     stringLength: {
                        min: 4,

                    },
                    notEmpty: {
                        message: 'Debe dijitar su Nacionalidad'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Debe dijitar su ciudad'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Debe dijitar su Departamento'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Debe dijitar su zipCode'
                    },
                    zipCode: {
                        country: 'BG',
                        message: 'Debe dijitar su zipcode'
                    }
                }
            },
            
            comment: {
                validators: {
                              stringLength: {
                                min: 10,
                                max: 200,
                                message:'La Biografia debe tener entre 10 y 200 caracteres '
                            },
                            notEmpty: {
                                message: 'Debe dijitar su Biografia o perfil'
                            }
                    }
                },
                Imagen: {
                validators: {
                            notEmpty: {
                                message: 'Debe Seleccionar una imagen'
                            }
                    }
                },
            Genero: {
                validators: {
                    notEmpty: {
                        message: 'El Genero es requerido'
                    }
                }
            }


        }
    })



$('#contact_form2').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        message:'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {

            Programa: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Debe dijitar el nombre del programa'
                    }
                }
            },

             Grado: {
                validators: {
                        notEmpty: {
                        message: 'Debe dijitar la Fecha de Graduacion'
                    }
                }
            },
            Nivel_Estudio: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Debe Seleccionar el nivel de estudio'
                    }
                }
            },
            Estado: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Debe Seleccionar el estado de estudio'
                    }
                }
            },
            Perfil:{
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Debe Seleccionar su perfil laboral'
                    }
                }
            },
            Idioma:{
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Debe Seleccionar el idioma'
                    }
                }
            },
             'languages[]': {
                validators: {
                    choice: {
                        min: 1,
                        max: 2,
                        message: 'Please choose 1 - 2 languages you can speak'
                    }
                }

            }
            





        }
    })




$('#contact_form3').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        message:'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {

            Empresa: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Debe dijitar el nombre de la Empresa'
                    }
                }
            },
            Cargo: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Debe dijitar el nombre del cargo'
                    }
                }
            },

             Fecha_ini: {
                validators: {
                        notEmpty: {
                        message: 'Debe dijitar la Fecha de inicio'
                    }
                }
            },
             Fecha_fin: {
                validators: {
                        notEmpty: {
                        message: 'Debe dijitar la Fecha de Culminacion'
                    }
                }
            },
            Estado_empleo: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Debe Seleccionar el estado del empleo'
                    }
                }
            }
        }
    })


$('#contact_form4').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        message:'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {


        }
    })






        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});