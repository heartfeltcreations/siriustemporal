let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
        if (!usuarioActivo) {
            window.location.href = "iniciar_sesion.html";
        } else {
            document.getElementById("nombreUsuario").textContent = usuarioActivo.username;
        }

        function cerrarSesion() {
            localStorage.removeItem("usuarioActivo");
            window.location.href = "iniciar_sesion.html";
        }