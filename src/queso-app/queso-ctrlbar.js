import { LitElement, html,css } from 'lit-element';

class QuesoCtrlBar extends LitElement {
	
	static get properties() {
		return {
			num_cheeses: {type:Number}
		};
	}

	constructor() {
		super();		

		this.num_cheeses = this.cheeses || 0;
	}
	
  render() {
    return html`	
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<div class='float-right'>
			Hay <span class="badge badge-pill badge-primary">${this.num_cheeses}</span> quesos
		</div>
	`;
  }
  
  newCheese(e) {

	  this.dispatchEvent(new CustomEvent("new-cheese", {})); 
  }
}

customElements.define('queso-ctrlbar', QuesoCtrlBar)
