import { LitElement, html,css } from 'lit-element';
import './queso-ficha-plantilla.js';
import './queso-sidebar.js';

class QuesoMain extends LitElement {
	
	static get properties() {
		return {			
			cheeses: {type: Array},
		};
	}

	static get styles()
	{
		return css `main{margin-top:60px; margin-bottom:70px;}`
	}

	
	constructor() {
		super();
		this.cheeses = [];
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

}

customElements.define('queso-main', QuesoMain)
