import { LitElement, html } from 'lit-element';

class QuesoCtrlBar extends LitElement {
	
	static get properties() {
		return {
			count:{type:Number}			
		};
	}
	
	constructor() {
		this.count=0;
		super();			
	}
	
  render() {
    return html`
		      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
                          <div class="float-right">
				
                          </div>
	`;
  }    
}

customElements.define('queso-header', QuesoHeader)
