import { LitElement, html } from 'lit-element';

class QuesoHeader extends LitElement {
	
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
                        <nav class="navbar navbar-inverse fixed-top bg-dark">
                          <div class="container-fluid">
                            <div class="navbar-header">
                              <a class="navbar-brand" href="">Queso APP</a>	
                            </div>
                        </div>
                        </nav>	
	`;
  }    
}

customElements.define('queso-header', QuesoHeader)
