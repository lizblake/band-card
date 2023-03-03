import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

//const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BandCard extends LitElement {
  static properties = {
    title: { type: String },
    imageLink: { type: String },
    buttonText: { type: String },
    topText: {type: String},
    bottomText: {type: String},
    showInformation: {type: String, reflect: true},
    lightBackground: { type: Boolean, reflect: true, attribute: 'light-background'},
    openDetails: {type: Boolean, reflect: true},
  };

  static styles = css`
    :host {
      --band-card-background-color: #46055b;
      --band-card-text-color: #220032;
    }
    @keyframes card_hover {
      from {
        background-color: grey;
      }
      to {
        background-color: var(--band-card-background-color);
      }
      from {
        color: black;
      }
      to {
        color: white;
      }
    }
    .band-card {
      display: inline-block;
      vertical-align: text-top;
      color: var(--band-card-text-color);
      /* display: flex;
      flex-direction: column; */
      margin-bottom: 5px;
      padding: none;
      width: 400px;
      border-radius: 10px;
      background-color: grey;
      background-image: linear-gradient(
        to right,
        rgba(255, 0, 0, 0),
        rgba(255, 0, 0, 1)
      );
    }

    :hover.band-card {
      animation-name: card_hover;
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
    .band-title {
      text-align: center;
      font-family: 'Anton', sans-serif;
      margin: none;
      padding: none;
    }
    .band-paragraph {
      display: none;
      text-align: center;
      font-family: 'Anton', sans-serif;
      font-size: 12px;
      padding: 10px;
      padding-top: none;
      padding-bottom: none;
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: 370px;
      width: 70%;
      border: none;
    }
    .band-details {
      text-align: center;
      padding: 10px;
    }

    button {
      justify-content: center;
      border: solid;
      border-color: transparent;
      color: var(--band-card-text-color);
      margin: 10px;
      border-radius: 15px;
      width: 200px;
      height: 30px;
      background-color: white;
      font-family: 'Anton', sans-serif;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      opacity: 0.6;
    }

    button:active {
      box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
      transform: translateY(4px);
    }
    button:hover,
    button:focus {
      background-color: white;
      color: var(--band-card-text-color);
      border-color: transparent;
      box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
      opacity: 1;
    }

    h1 {
      margin: 0;
      padding-top: 20px;
    }

    p {
      margin: 0;
      padding-bottom: 5px;
      display: none;
    }

    :host([light-background]) .band-card {
      background-color: lightblue;
    }

    @media screen and (max-width: 500px) {
      .band-card {
        transform: scale(0.7);
      }
    }
  `;

  constructor() {
    super();
    this.title = 'scotia';
    this.imageLink =
      'https://thesquonkisrealandthirstsforyourtears.com/IMG_3167.JPG';
    this.showInformation = "Info";
    this.lightBackground = false;
    this.openDetails = false;
    this.topText = "best band";
    this.bottomText = "EVER";
  }

  ToggleEvent(e) {
    //calls tag
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true: false;
    this.openDetails = state;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if(propName === "openDetails") {
        this.dispatchEvent(new CustomEvent('openDetails-toggled', {
          composed: true,
          bubbles: true,
          cancelable: false,
          detail: {
            value: this[propName]
          }
        }));
        console.log(`${propName} toggled. oldValue: ${oldValue}`);
      }
    });
  }


  render() {
    return html`
      <div class="band-card">
        <div class="band-header">
          <h1 class="band-title">${this.title}</h1>
        </div>
        <meme-maker class="band-image" image-url="${this.imageLink}" top-text="${this.topText}" bottom-text="${this.bottomText}"></meme-maker>
        <!-- <img class="band-image" src="${this.imageLink}" /> -->
        <details class="band-details" .open="${this.openDetails}" @toggle="${this.ToggleEvent}">
            <summary>${this.showInformation}</summary>
              <div>
              <slot></slot>
              </div>
          </details> 
        </div>
      </div>
    `;
  }
}
customElements.define('band-card', BandCard);