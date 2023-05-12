import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class HelloWorld extends LitElement {
  
    
	  static properties = {
		jsondata: {type: String},
		who: {type: String},
		me: {type: String},
	  };


    static getData() {
    return {
      controlName: 'Hello World',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        jsondata: {
          type: 'string',
          title: 'JSON Data',
          description: 'JSON structure for the '
		  maxLength: 999999,		  
        },
        who: {
          type: 'string',
          title: 'Who',
          description: 'Who to say hello to'
        },
        me: {
          type: 'string',
          title: 'me',
          description: 'Who to say hello to'
        },
        you: {
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
        jsondata: {
          type: 'string',
          title: 'JSON Data',
          description: 'JSON structure for the ',
		  maxLength: 9999999,		  
        },
        who: {
          type: 'string',
          title: 'Who',
          description: 'Who to say hello to'
        },
        me: {
          type: 'string',
          title: 'me',
          description: 'Who to say hello to'
        },
        you: {
          type: 'string',
          title: 'you',
          description: 'Who to say hello to'
        }
      }
    };
  }
  
  constructor() {
    super();
//    this.who = 'World';
	
	//put JSON in dom and work of it. 
	//that way when we update it it won't refresh the control.
	
//	window.document.questionJSON = this.jsondata;
//	this
	debugger;
	
	setTimeout(function() { alert('timer v2 ');
	
	debugger;
	//JSON.parse($('hello-world').shadowRoot.querySelector('#data').textContent)

	}, 2000);
	
	
  }

  render() {
	  debugger;
	  
    return html`
	
	<div id="data">${this.who}</div>
	`;
  }
}

// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);