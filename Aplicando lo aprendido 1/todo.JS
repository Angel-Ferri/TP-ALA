const readline = require("readline");

class Tarea {
  constructor(titulo, descripcion = "", vencimiento = null, dificultad = 1) {
    this.titulo = titulo.substring(0, 100);
    this.descripcion = descripcion.substring(0, 500);
    this.estado = "Pendiente"; // por defecto
    this.creacion = new Date();
    this.ultimaEdicion = new Date();
    this.vencimiento = vencimiento ? new Date(vencimiento) : null;
    this.dificultad = dificultad; // 1=fácil, 2=medio, 3=difícil
  }

  cambiarEstado(nuevoEstado) {
    const estadosValidos = ["Pendiente", "En Curso", "Terminada", "Cancelada"];
    if (estadosValidos.includes(nuevoEstado)) {
      this.estado = nuevoEstado;
      this.ultimaEdicion = new Date();
    } else {
      console.log("Estado inválido.");
    }
  }

  mostrarDetalle() {
    const dificultadMap = { 1: "⭐ Fácil", 2: "⭐⭐ Medio", 3: "⭐⭐⭐ Difícil" };
    console.log(`
    -------------------------
    Título: ${this.titulo}
    Descripción: ${this.descripcion || "(sin descripción)"}
    Estado: ${this.estado}
    Creación: ${this.creacion.toLocaleString()}
    Última edición: ${this.ultimaEdicion.toLocaleString()}
    Vencimiento: ${this.vencimiento ? this.vencimiento.toLocaleString() : "(sin vencimiento)"}
    Dificultad: ${dificultadMap[this.dificultad]}
    -------------------------
    `);
  }
}

class ToDoApp {
  constructor() {
    this.tareas = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  menuPrincipal() {
    console.log(`
    === MENU PRINCIPAL ===
    [1] Ver mis tareas
    [2] Buscar una tarea
    [3] Agregar una tarea
    [0] Salir
    `);

    this.rl.question("Seleccione una opción: ", (opcion) => {
      switch (opcion) {
        case "1":
          this.listarTareas();
          break;
        case "2":
          this.buscarTarea();
          break;
        case "3":
          this.agregarTarea();
          break;
        case "0":
          console.log("Gracias por usar la agenda. ¡Hasta pronto!");
          this.rl.close();
          break;
        default:
          console.log("[!] Opción no disponible. Intente de nuevo.");
          this.menuPrincipal();
      }
    });
  }

  listarTareas() {
    if (this.tareas.length === 0) {
      console.log("No hay tareas registradas.");
    } else {
      this.tareas.forEach((t, i) => {
        console.log(`[${i + 1}] ${t.titulo} - ${t.estado}`);
      });
    }
    this.menuPrincipal();
  }

  buscarTarea() {
    this.rl.question("Ingrese texto a buscar en títulos: ", (texto) => {
      const resultados = this.tareas.filter((t) =>
        t.titulo.toLowerCase().includes(texto.toLowerCase())
      );
      if (resultados.length > 0) {
        resultados.forEach((t) => t.mostrarDetalle());
      } else {
        console.log("No se encontraron tareas con ese título.");
      }
      this.menuPrincipal();
    });
  }

  agregarTarea() {
    this.rl.question("Título: ", (titulo) => {
      this.rl.question("Descripción (opcional): ", (descripcion) => {
        this.rl.question("Vencimiento (YYYY-MM-DD opcional): ", (venc) => {
          this.rl.question("Dificultad [1=fácil, 2=medio, 3=difícil]: ", (dif) => {
            const dificultad = parseInt(dif) || 1;
            const tarea = new Tarea(titulo, descripcion, venc || null, dificultad);
            this.tareas.push(tarea);
            console.log("¡Tarea agregada con éxito!");
            tarea.mostrarDetalle();
            this.menuPrincipal();
          });
        });
      });
    });
  }
}

// Ejecutar la app
const app = new ToDoApp();
app.menuPrincipal();
