// Verificar  correo electrónico  válido
function verificar_correo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    const esValido = regex.test(correo);

    if (esValido) {
        return {
            isValid: true,
            errorMessage: "El correo electrónico es válido",
            errorCode: null,
            parameters: {
                value: correo,
                regexUsed: regex.toString()
            }
        };
    } else {
        return {
            isValid: false,
            errorMessage: "El correo electrónico no es válido",
            parameters: {
                value: correo,
                regexUsed: regex.toString()
            }
        };
    }
}

//verificar que tenga 2 apellidos

function verificarApellidos(valor) {
    const regexApellido = /^[A-Za-z]+(?:-[A-Za-z]+)?$/;

    const limpio = valor.trim().replace(/\s+/g, " ");
    const partes = limpio.split(" ");

    if (partes.length !== 2) {
        return {
            isValid: false,
            errorMessage: "Debes ingresar exactamente dos apellidos sin tildes",
            errorCode: "INVALID_SURNAMES",
            parameters: { value: valor, partesDetectadas: partes }
        };
    }

    if (!regexApellido.test(partes[0])) {
        return {
            isValid: false,
            errorMessage: "El primer apellido no es válido",
            errorCode: "INVALID_SURNAMES",
            parameters: { value: valor, partesDetectadas: partes }
        };
    }

    if (!regexApellido.test(partes[1])) {
        return {
            isValid: false,
            errorMessage: "El segundo apellido no es válido",
            errorCode: "INVALID_SURNAMES",
            parameters: { value: valor, partesDetectadas: partes }
        };
    }

    
    return {
        isValid: true,
        errorMessage: "Los apellidos son válidos",
        errorCode: null,
        parameters: {
            value: valor,
            apellidosDetectados: partes
        }
    };
}
