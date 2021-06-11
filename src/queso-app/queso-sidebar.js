import { LitElement, html } from 'lit-element';

class QuesoSidebar extends LitElement {
	
	static get properties() {
		return {
			cheeses: {type: Array}
		};
	}
	
	constructor() {
		super();		

		this.cheeses = this.cheeses || [];
	}
	
  render() {
    return html`	
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<aside>
			<section>
				<div>
					Hay <span class="badge badge-pill badge-primary">${this.cheeses.length}</span> quesos
				<div>
				<div class="mt-5">
					<button class="w-100 btn bg-success" style="font-size: 50px" @click="${this.newCheese}"><strong>+</strong></button>								
				<div>				
			</section>
		</aside>
		
	`;
  }
  
  newCheese(e) {

	  this.dispatchEvent(new CustomEvent("new-cheese", {})); 
  }
}

customElements.define('queso-sidebar', QuesoSidebar)
