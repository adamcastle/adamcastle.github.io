import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class HelloWorld extends LitElement {
  
    
  static properties = {
    who: {type: String},
  };
    
    static getData() {
    return {
      controlName: 'Hello World',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        who: {
          type: 'string',
          title: 'Who',
          description: 'Who to say hello to'
        },
        me: {
          type: 'string',
          title: 'me',
          description: 'Who to say hello to'
        }
      }
    };
  }

  
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Hello World',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        who: {
          type: 'string',
          title: 'Who',
          description: 'Who to say hello to'
        },
        me: {
          type: 'string',
          title: 'me',
          description: 'Who to say hello to'
        }
      }
    };
  }
  
  constructor() {
	  debugger;
    super();
    this.who = 'World';
  }

  render() {
	  debugger;
	  
    return html`
	<body onload="alert('init');">${this.who} - ${this.me}<p/>
	<input type='button' value="a" onclick="alert('text click');">
	<input type='button' value="b" onclick="alert('text click');">
	`;
  }
}

// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);