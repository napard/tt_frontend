// Basado en ejemplo de la clase.

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    const showError = (input, message) => {
        const parent_div = input.parentNode;
        const error_text = parent_div.querySelector(".form-error");
        error_text.innerText = message;
        error_text.style.visibility = "visible";
    };

    const hideError = input => {
        const parent_div = input.parentNode;
        const error_text = parent_div.querySelector(".form-error");
        error_text.style.visibility = "hidden";
    };

    // Función de validación de campo genérico.
    const validateField = (field_id, message) => {
        const field = document.getElementById(field_id);
        if (field.value.trim() == "") {
            showError(field, message);
            return false;
        } else {
            hideError(field);
            return true;
        }
    };

    function isValidEmail(text) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(text);
    }

    // Función para validar el campo E-mail.
    const validateEmailField = (field_id, message) => {
        const field = document.getElementById(field_id);
        const email = field.value.trim();
        if (email === "") {
            showError(field, "El campo e-mail no puede estar vacío");
            return false;
        } else if (!isValidEmail(email)) {
            showError(field, message);
            return false;
        } else {
            hideError(field);
            return true;
        }
    };

    const validateForm = () => {
        valid = true;
        valid = validateEmailField("email", "El E-mail no es válido") && valid;
        valid = validateField("nombre", "El campo nombre no puede estar vacío") && valid;
        valid = validateField("comentario", "El comentario no puede estar vacío") && valid;
        return valid;
    }

    // Verificar si los campos son válidos para quitar
    //  los errores al ir completándolos.
    form.querySelectorAll("input").forEach(input => {
        input.addEventListener("change", () => {
            // Obtenemos el valor del campo seleccionado.
            const value = input.value.trim();
            if (value !== "")
                hideError(input);
        });
    });

    // Agregar un evento de escucha para cuando se envía el formulario.
    form.addEventListener("submit", event => {
        event.preventDefault();
        if (!validateForm()) {
            event.preventDefault();
            console.log("El formulario no es válido...");
        } else {
            event.preventDefault();
            console.log("El formulario es válido...");
        }
    });
});
