import { LitElement, html, css } from 'lit-element';

class QuesoConfirm extends LitElement {
	
   static get properties() {
	return {			
			text: {type: String},
	       };
   }

   static get styles()
   {
	return css `:host{
		position: absolute;
    		top: 300px;
    		left: 40%;
		width:50%;
    		transform: translate(-50%, -50%);
		}`;
   }	

   constructor() {

		super();
		this.title="Confirmar"
		this.text="";
		this.close();
   }
	
  render() {
    return html`	
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<div class='border rounded border-secondary bg-light'>
			
			<div class="modal-header bg-dark text-white">
        			<h3>${this.title}</h3>
    			</div>
			
			<div class='border m-2 p-2'>
				<form>
					<div class="form-group">
						<label>${this.text}</label>
					</div>
			
				</form>
			</div>

	                <div class="modal-footer bg-dark">
  	                      <button type="submit" class="btn btn-primary" @click=${this.close} ><strong>Cancelar</strong></button>
                              <button type="submit" @click=${this.confirm} class="btn btn-success"><strong>Confirmar</strong></button>
                        </div>
			
		</div>
	`;
  }
  
  close(e) 
  {
	 this.classList.add("d-none");		  
  }

  show()
  {
	this.classList.remove("d-none");
  }

  //override
  confirm(e)
  {

  }

}

customElements.define('queso-confirm', QuesoConfirm)
