import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class HelloWorld extends LitElement {
  
    
  static properties = {
	jsondata: {type: String},
	value: {type: String},
  };


	_greet() {
		debugger;
	}	  
	  	  
	_answered(a)
	{
		debugger;
	//set answer, set new question 

		window.document.questionJSON.questions[window.document.questionJSON.idx].answer = a.innerText;
		window.document.questionJSON.idx++;

		if (window.document.questionJSON.questions.length == window.document.questionJSON.idx)
		{
		$('.question-title').html("Thank you for answer the questions. Can you now submit the form.");
		$('.answer').toggle();
		} else {
			$('.question-title').html((window.document.questionJSON.idx + 1) + ". - " + window.document.questionJSON.questions[window.document.questionJSON.idx].title);	
		}	
	}
		  
		  
		  
		  
    static getData() {
    return {
      controlName: 'Hello World',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        jsondata: {
          type: 'string',
          title: 'JSON Data',
          description: 'JSON structure for the ',
		  maxLength: 999999,		  
        },
        value: {
          type: 'string',
          title: 'JSON Result',
          description: 'JSON structure for the ',
		  maxLength: 999999,		  
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
		  maxLength: 999999,		  
        },
        value: {
          type: 'string',
          title: 'JSON Result',
          description: 'JSON structure for the ',
		  maxLength: 999999,		  
        }
      }
    };
  }
  
  constructor() {
    super();
//    this.who = 'World';
	
	//put JSON in dom and work of it. 
	//that way when we update it it won't refresh the control.
	
//	
//	this
	debugger;
	
	setTimeout(function() {

	
	//JSON.parse($('hello-world').shadowRoot.querySelector('#data').textContent)

	}, 2000);
	
	
  }

  render() {
	  debugger;

	window.document.questionJSON = this.jsondata;

	//try and pass this.jsondata.
	//if there is an issue then set error message and set default JSON


	//write out first question and answers
	
		window.document.questionJSON = this.json;
		window.document.questionJSON.idx = 0;

		var container = "";

		container += "<span class='question' idx='1'><p class='question-title'>1. - " + window.document.questionJSON.questions[0].title + "</p></span>";

			for (let i = 0; i < window.document.questionJSON.answers.length; i++) {
				container += "<span class='answer' @click=${this._answered(this)} idx='0'><p class='answer-title'>" + window.document.questionJSON.answers[i].title + "</p></span>"
			}
		} 
	  
    return html`

		

	<style>
	.question {
		font-size: 20px;
		margin: 5px auto;
		max-width: 530px;
		min-width: 530px;
		display: block;
		font-weight: bold;
	}

	.answer {
		border-radius: 6px;
		box-shadow: 0 1px 3px rgba(0,0,0,.2);
		font-size: 16px;
		margin: 5px auto;
		max-width: 530px;
		min-width: 530px;
		display: block;
		cursor: pointer;
		border: 1px solid transparent;	
	}

	.answer:hover {
		border: 1px solid cornflowerblue;
		background-color: aliceblue;
		transition: .8s;
	}

	.answer-title {
		padding-left: 10px;
	}

	</style>
	<div id="jsondata" ></div>
	
	<div id="data">${this.jsondata}</div>
	<button @click=${this._answered(this)}>Greet</button>
	` + container;
  }
}

// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);