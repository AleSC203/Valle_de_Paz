
// =============================
// HORA
// =============================
function actualizarHora() {
    const preHora = new Date();
    const hora = preHora.toLocaleTimeString('es-CR', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    });

    // Actualizar en ambas pantallas
    document.getElementById('hora1').textContent = hora;
    document.getElementById('hora2').textContent = hora;
}

setInterval(actualizarHora, 1000); // Actualiza cada segundo
actualizarHora(); // Llamada inicial


// =============================
// CLIMA
// =============================
const apiKey = 'dea4699fd917e980ecc40fd6543d5b1a'; // <-- Pega tu API key aquí
const lat = 9.93358;
const lon = -84.09789;

function obtenerClima() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperatura = Math.round(data.main.temp);
            const descripcion = data.weather[0].description;
            const climaTexto = `${temperatura}°C, ${descripcion}`;

            // Actualizar en ambas pantallas
            document.getElementById('clima1').textContent = climaTexto;
            document.getElementById('clima2').textContent = climaTexto;
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
            document.getElementById('clima1').textContent = 'No disponible';
            document.getElementById('clima2').textContent = 'No disponible';
        });
}

obtenerClima();
setInterval(obtenerClima, 600000); // Actualiza cada 10 minutos