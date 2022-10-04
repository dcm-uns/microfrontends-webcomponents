// Este archivo lo incluyo en la carpeta "externo"
// porque es el que corresponde al fragmento obtenido
// en otro sistema.

class MiComponente extends HTMLElement {
  // Custom Element tiene otras funciones predefinidas
  // que permiten realizar acciones ante diferentes
  // eventos de la vida del elemento (por ejemplo, cuando
  // se lo quita o agrega al DOM). Aqui usamos solo el constructor
  // para simplificar. 
  constructor(){
    super();
    this.innerHTML = `
    <p>The Room (2003)</p>
  `;

  }
}

// registramos el nuevo componente.
customElements.define("team-a", MiComponente);
