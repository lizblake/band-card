import { LitElement, html, css } from 'lit';

//const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BandCard extends LitElement {
  static properties = {
    title: { type: String },
    imageLink: { type: String },
    buttonText: { type: String },
    lightBackground: { type: Boolean, reflect: true, attribute: 'light-background'}
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
      color: var(--band-card-text-color);
      display: flex;
      flex-direction: column;
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
    .band-button-container {
      text-align: center;
      visibility: hidden;
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
    this.buttonText = 'details';
    this.lightBackground = false;
  }


  render() {
    return html`
      <div class="band-card">
        <div class="band-header">
          <h1 class="band-title">${this.title}</h1>
        </div>
        <p class="band-paragraph">
         <slot></slot>
        </p>
        <img class="band-image" src="${this.imageLink}" />
        <div class="band-button-container">
          <button @click="${this._showDetails}" class="band-details-button">${this.buttonText}</button>
        </div>
      </div>
    `;
  }

  //change to details and summary
  _showDetails() {
    var pBand = this.shadowRoot.querySelector('.band-paragraph');
    if (pBand.style.display != "block") {
      pBand.style.display = "block";
    } else {
      pBand.style.display = "none";
    }
  }
}
customElements.define('band-card', BandCard);