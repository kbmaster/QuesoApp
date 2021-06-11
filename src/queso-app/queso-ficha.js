import { LitElement, html } from 'lit-element';

class QuesoFicha extends LitElement {
	
	static get properties() {
		return {			
			cheese: {type: Object},
			newCheese: {type: Boolean}
		};
	}
	
	
	constructor() {
		super();
		
		this.cheese = this.cheese || {};
		this.cheese.name = this.cheese.name || "";		
		this.cheese.name = this.cheese.description || "";
		this.newCheese = false;
		this.cheese.image = {
				"src": "./img/Caerphilly_cheese.jpg",
				"height": 100,
				"width": 50
			};
	}
	
  render() {
    return html`	
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<div class='border rounded border-secondary'>
			
			<div class="modal-header bg-dark text-white">
        			<h3>Queso Info</h3>
    			</div>
			
			<div class='border m-2 p-2'>
				<form>
					<div class="form-group">
						<label>Nombre</label>
						<input type="text" id="cheeseFormName" ?disabled=${this.newCheese} class="form-control" placeholder="Nombre" .value="${this.cheese.name}"/>
					</div>
					<div class="form-group">
						<label>Descripci&oacute;n</label>
						<textarea class="form-control" placeholder="Descripcion" rows="5">${this.cheese.description}</textarea>
					</div>
					<div class="form-group">
						<label>Meses maduraci&oacute;n</label>
						<input type="text" class="form-control" placeholder="Meses maduracion" .value="${this.cheese.age ? this.cheese.age : ""}"/>			
					</div>
			
				</form>
			</div>

	                <div class="modal-footer bg-dark">
  	                      <button type="submit" class="btn btn-primary" @click=${this.goBack} ><strong>Atras</strong></button>
                              <button type="submit" @click=${this.storeInfo} class="btn btn-success"><strong>Guardar</strong></button>
                        </div>
			
		</div>

	`;
  }
  
  goBack(e) {
	  console.log("goBack");	  
	  e.preventDefault();	  
	  this.cheese = {};
	  this.dispatchEvent(new CustomEvent("info-cheese-close",{}));
	  this.shadowRoot.getElementById("cheeseFormName").disabled = true;
  }
  
}

customElements.define('queso-ficha', QuesoFicha)
