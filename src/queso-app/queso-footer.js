import { LitElement, html } from 'lit-element';

class QuesoFooter extends LitElement {
	
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
                          <footer class="bg-dark text-center text-white fixed-bottom">
                                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                                        @Quesos quesote 2021
                                </div>
	                  </footer>			
	`;
  }    
}

customElements.define('queso-footer', QuesoFooter)
