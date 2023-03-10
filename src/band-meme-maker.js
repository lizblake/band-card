import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

class BandMemeMaker extends LitElement {
  static properties = {
    title: { type: String },
    paragraphText: { type: String },
    imageLink: { type: String },
    buttonText: { type: String },
  };

  static styles = css`
    @keyframes card_hover {
      from {
        background-color: dark grey;
      }
      to {
        background-color: #46055b;
      }
      from {
        color: black;
      }
      to {
        color: white;
      }
    }
    .band-card {
      color: #220032;
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
      color: #220032;
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
      color: #220032;
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

    @media screen and (max-width: 800px) and (min-width: 500px) {
      .band-button-container {
        visibility: visible;
      }
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
    this.paragraphText = 'A local State College band specializing in grunge and centered around \
    the lore of the Squonk. Scotia was originally established before March \
    2020 and made a post-covid return in September 2022 with two new \
    members.';
    this.imageLink =
      'https://thesquonkisrealandthirstsforyourtears.com/IMG_3167.JPG';
    this.buttonText = 'details';
  }


  render() {
    return html`
      <div class="band-card">
        <meme-maker image-url="${this.imageLink}" top-text="${this.title}"></meme-maker>
      </div>
    `;
  }

}
customElements.define('band-meme-maker', BandMemeMaker);