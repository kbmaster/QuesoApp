import { LitElement, html } from 'lit-element';
import './queso-header.js';
import './queso-main.js';
import './queso-sidebar.js';
import './queso-footer.js';

class QuesoApp extends LitElement {
	
	static get properties() {
		return {	
		};
	}

	
	constructor() {
		super();		
	}		

	
	render() {
		return html`
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
			<div>
				<queso-header class="text-center"></queso-header>
			</div>
			<div class="row mr-3"><!--El m para que no se rompan los gutters el tema-->
				<queso-sidebar class="col-2" @new-cheese="${this.newCheese}"></queso-sidebar>
				<queso-main @cheeses-updated=${this.cheesesUpdated} class="col-10"></queso-main>
			</div>			
			<div>
				<queso-footer class=" w-100 text-secondary text-center"></queso-footer>
			</div>
	`;
  }
  
  newCheese(e) {
	  console.log("newCheese en QuesoApp");
	  console.log(this.shadowRoot.querySelector("queso-main").showCheeseData);	  
	  this.shadowRoot.querySelector("queso-main").showCheeseData = true; 	  
	  console.log(this.shadowRoot.querySelector("queso-main").showCheeseData);	  
  }
  
  cheesesUpdated(e) {
	  console.log("cheesesUpdated en QuesoApp");
	  console.log("Enviando quesos a queso-sidebar");
	  this.shadowRoot.querySelector("queso-sidebar").cheeses = e.detail.cheeses;
  }
}

customElements.define('queso-app', QuesoApp)
