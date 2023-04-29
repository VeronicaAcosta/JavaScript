
/* Pedir turno para servicio de maquillaje en la semana */

let dia = prompt("Los servicios de maquillajes se hacen de jueves a domingos, ingrese el día que desea su servicio.");

let hora = parseInt (prompt("Los horarios son de 16 a 22hs, ingrese el horario que desea."));

let agendar = prompt(`Desea agendar la cita para el ${dia} a las ${hora}?`);


while (agendar === "no") {
    let dia = prompt("Los servicios de maquillajes se hacen de jueves a domingos, ingrese el día que desea su servicio.");
    let hora = parseInt(prompt("Los horarios son de 16 a 22hs, ingrese el horario que desea (teniendo en cuenta a que hora le gustaria estar lista para el evento)"));
    let agendar = prompt(`Le gustaría confirmar el ${dia} a las ${hora} ?`);
    servicioDeMaquillaje(dia, hora, agendar); 
}

function servicioDeMaquillaje(dia, hora, agendar) {
    if (agendar === "si") {
    if (dia === "lunes" || dia === "martes" || dia === "miercoles") {
        alert ("No se agendan servicios de maquillaje para ese día, lo siento. Indique otro día.");
    }else {
        alert(`Su cita para el ${dia} a las ${hora}hrs queda agendado, nos comunicamos con usted a la brevedad.`);
    }
    } else if (agendar === "no") {
        alert("Indique nuevamente el día que desea un servicio o contactese directamente con nosotros");
    } else {
        alert("Intentelo nuevamente.");
    }
}

servicioDeMaquillaje(dia, hora, agendar);