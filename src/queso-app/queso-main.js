import { LitElement, html,css } from 'lit-element';
import './queso-ficha-plantilla.js';
import './queso-sidebar.js';
import './queso-ficha.js';

class QuesoMain extends LitElement {
	
	static get properties() {
		return {			
			cheeses: {type: Array},
			showCheeseData: {type: Boolean}
		};
	}

	static get styles()
	{
		return css `main{margin-top:60px; margin-bottom:70px;}`
	}

	
	constructor() {
		super();
		this.cheeses = [];
		this.showCheeseData = false;		
		this.getCheeses();
	}
	
	
    render() {

    return html`	
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<main>		
			<div class="row" id="cheeseCatalog">			
				<div class="row row-cols-1 row-cols-md-4 mb-3">
				${this.cheeses.map(
					cheese => 
					html`										
						<queso-ficha-plantilla 
								name="${cheese.name}" 
								.image="${cheese.image}" 
								recommended="${cheese.recommended}"
								@delete-cheese=${this.deleteCheese}
								@info-cheese=${this.infoCheese}							
								>
						</queso-ficha-plantilla>
				`					
				)}
				</div>
			</div>

			<div class="row justify-content-center">

				<queso-ficha id="quesoFicha" class="d-none col-md-8 col-sm-10 mt-2 p-0" 
					@info-cheese-close=${this.infoCheeseClose}
					@info-cheese-store=${this.infoCheeseStore}
				></queso-ficha>
			</div>
		</main>
	`;
  }


  getCheeses()
  {
        let xhr = new XMLHttpRequest();

        xhr.onload = function(){

            if (xhr.status === 200) {
                let APIResponse = JSON.parse(xhr.responseText);
                this.cheeses = APIResponse.cheeses;
            }

        }.bind(this);

        xhr.open("GET", "http://localhost:8000/data/quesos.json");
        xhr.send();
   }


  deleteCheese(e) {
          console.log("deleteCheese en queso-main");
          console.log("Se va a borrar el queso de nombre " + e.detail.name);

          this.cheeses = this.cheeses.filter(
                cheese => cheese.name != e.detail.name
          );
  }

  infoCheese(e) {
	  let chosenCheese = this.cheeses.filter(
                cheese => cheese.name == e.detail.name
          )

          this.shadowRoot.getElementById("quesoFicha").cheese = chosenCheese[0];
          this.showCheeseForm();
  }

  showCheeseForm(newCheese) {
          this.shadowRoot.getElementById("quesoFicha").classList.remove("d-none");
          this.shadowRoot.getElementById("cheeseCatalog").classList.add("d-none");

          if (newCheese) {
                  this.shadowRoot.getElementById("quesoFicha").newCheese = true;
          }
  }

  infoCheeseClose(e) {
          this.showCheeseData = false;
          this.showCheeseCatalog();
  }	  


  showCheeseCatalog() {
          console.log("showCheeseCatalog");
          this.shadowRoot.getElementById("cheeseCatalog").classList.remove("d-none");
          this.shadowRoot.getElementById("quesoFicha").classList.add("d-none");
  }















	
    
  /**
  updated(changedProperties) {
	  console.log("updated");
	  console.log(changedProperties);
	  if (changedProperties.has("showCheeseData")) {
		  console.log("Ha cambiado el valor de la propiedad showCheeseForm en queso-main");		  
		  if (this.showCheeseData) {
			  this.showCheeseForm(true);			  
		  } else {
			  this.showCheeseCatalog();
		  }
	  }
	  
	  if (changedProperties.has("cheeses")) {
		  console.log("Ha cambiado el valor de la propiedad cheeses en queso-main");
		  this.dispatchEvent(new CustomEvent("cheeses-updated", {
				detail: {
					cheeses: this.cheeses
				}
			  }
			)
		  )
	  }
  }
  
  
  infoCheeseStore(e) {
	  console.log("infoCheeseStore");
	  console.log("Se va a almacenar un queso");
	  console.log(e.detail.cheese);
	  
	  console.log(this.cheeses);
	  
	  let indexOfCheese = this.cheeses.findIndex(cheese => cheese.name === e.detail.cheese.name);	  
	  if (indexOfCheese >= 0) {
		  this.cheeses[indexOfCheese] = e.detail.cheese;
	  } else {		  
		  this.cheeses.push(e.detail.cheese);
	  }	  	  
	  
	  console.log(this.cheeses);	  	 	  	  
	  // Hablar de esto durante el proceso de generación del botón de guardar, si no se actualiza el array entero
	  // no se llama a la función y push no genera un nuevo array.	  	  
	  this.requestUpdate();
	  
	  this.showCheeseCatalog();
  }
**/
  
}

customElements.define('queso-main', QuesoMain)
