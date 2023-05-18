import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class LakeTree_Grid extends LitElement {
  
  static properties = {
    firstname: {type: String},
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Hello World',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        firstname: {
          type: 'string',
          title: 'firstname',
          description: 'Who to say hello to'
        }
      }
    };
  }
  
  constructor() {
    super();
    console.log("constructor");
    this.firstname = 'Adam';
  }

  render() {
    console.log("render");

    return html`<span @click=${this.toggleName} >Hello ${this.firstname}<span/>`;
  }

  toggleName() {

    console.log("toggleName");
    this.firstname = 'you clicked bob';
  }

}

// registering the web component
const elementName = 'LakeTree-Grid';
customElements.define(elementName, LakeTree_Grid);