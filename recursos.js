module.exports = {
    mascotas:
      [
        { tipo: "perro", nombre: "Trosky1", dueno: "Camilo" },
        { tipo: "perro", nombre: "Trosky2", dueno: "Camilo" },
        { tipo: "perro", nombre: "Trosky3", dueno: "Camilo" },
        { tipo: "perro", nombre: "Trosky4", dueno: "Camilo" }
      ],
      veterinarias:
      [
        { nombre: "Alexandra", apellido: "Perez", documento: "1234567890" },
        { nombre: "Alexder", apellido: "Gomez", documento: "9999999999" },
        { nombre: "Natalia", apellido: "Vazques", documento: "7777777777" },
      ],
      duenos:
      [
        { nombre: "Alejandra", apellido: "Ramirez", documento: "1234567890" },
        { nombre: "Alejandro", apellido: "Martienez", documento: "9999999999" },
        { nombre: "Nicolas", apellido: "Marquez", documento: "7777777777" },
      ],    
      consultas:
      [
        {
          mascota: 0,
          veterinarias: 0,
          fechaCreacion: new Date(),
          fechaEdicion: new Date(),
          historia: "",
          diagnostico: "",
        }
      ]
  }