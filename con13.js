import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class HelloWorld extends LitElement {
  
    
	  static properties = {
		who: {type: String},
		me: {type: String},
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
	
//	this
	debugger;
	
	setTimeout(function() { alert('timer');
	
	debugger;


	}, 5000);
	
	
  }

  render() {
	  debugger;
	  
    return html`
	
	<div id="data">${this.who}</div>
	<img onload="alert('init');" src=''>${this.who} - ${this.me}
	<body onload="alert('init');">${this.who} - ${this.me}
	<input type='button' value="a" onclick="alert('text click');">
	<input type='button' value="b" onclick="alert('text click');">
	`;
  }
}

// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);









