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

  questionTemplate() {
	  debugger;
    return html`<span class="question" idx="1"><p class="question-title">q1</p></span>`;
  }

  answerTemplate() {
	  debugger;
    return html`<span class="answer" @click=${this._answered(this)} idx="0"><p class="answer-title">a1</p></span`;
  }

  
  render() {
	  debugger;

	// window.document.questionJSON = this.jsondata;
		// window.document.questionJSON = this.json;
		// window.document.questionJSON.idx = 0;

		// var container = "";

		// container += "<span class='question' idx='1'><p class='question-title'>1. - " + window.document.questionJSON.questions[0].title + "</p></span>";

			// for (let i = 0; i < window.document.questionJSON.answers.length; i++) {
				// container += "<span class='answer' @click=${this._answered(this)} idx='0'><p class='answer-title'>" + window.document.questionJSON.answers[i].title + "</p></span>"
			// }
		// } 
	// <div id="data">${this.jsondata}</div>
	// <button @click=${this._answered(this)}>Greet</button>


		
    return html`
	<div id="jsondata" ></div>
	${this.questionTemplate()}	
	${this.answerTemplate()}	
	`;
  }
}

// registering the web component
const elementName = 'hello-world';
customElements.define(elementName, HelloWorld);