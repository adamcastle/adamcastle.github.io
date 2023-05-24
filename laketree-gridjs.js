
import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class LakeTree_GridJS extends LitElement {

  // static styles = css`
  // `

  static properties = {
    firstname: {type: String},
    jsonData: {type: String},
  };
  
  gridScript() {
    
    let script = document.createElement('script');
    script.onload = this.onLoad.bind(this);
    script.src = 'https://unpkg.com/gridjs-jquery/dist/gridjs.production.min.js';

    return script;
  }

  jQueryScript() {
    
    let script = document.createElement('script');
    script.onload = this.onLoad.bind(this);
    script.src = 'https://unpkg.com/jquery/dist/jquery.min.js';

    return script;
  }

  kendoStyles() {
    
    let style = document.createElement('link');
    style.onload = this.onLoad.bind(this);
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = 'https://unpkg.com/gridjs/dist/theme/mermaid.min.css';

    return style;
  }

  onLoad() {
    console.log("onLoad");

    debugger;

        $.getScript('https://unpkg.com/gridjs-jquery/dist/gridjs.production.min.js', function(){

        debugger;

          $($('laketree-grid')[0].renderRoot.querySelector('#grid')).Grid({
            columns: ['Name', 'Age', 'Email'],
            data: [
              ['John', 25, 'john@k.com'],
              ['Mark', 59, 'mark@e.com']
            ],
          });
    

        });




    // this.grid = new In({
    //   columns: [{
    //     id: 'columnheader1',
    //     name: this.ColumnHeader1
    //   }, {
    //     id: 'columnheader2',
    //     name: this.ColumnHeader2
    //   }, {
    //     id: 'columnheader3',
    //     name: this.ColumnHeader3
    //   }, {
    //     id: 'columnheader4',
    //     name: this.ColumnHeader4
    //   }],
    //   data: JSON.parse(this.Data),
    //   sort: this.sortable
    // });
        
  }

  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'LakeTree Grid JS',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        firstname: {
          type: 'string',
          title: 'firstname',
          description: 'Who to say hello to'
        }
      },
      properties: {
        jsonData: {
          type: 'string',
          title: 'jsonData'
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
    return html`<span @click=${this.toggleName} >Hello ${this.firstname}<span/>
    ${this.jQueryScript()}	
    ${this.gridScript()}	
    ${this.kendoStyles()}	
    <div id="grid">this is a grid</div>
    `;

  }


  toggleName() {
    this.firstname = 'you clicked bob';
  }

}

// registering the web component
const elementName = 'laketree-gridjs';
customElements.define(elementName, LakeTree_GridJS);