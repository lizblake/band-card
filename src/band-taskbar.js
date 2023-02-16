import { LitElement, html, css } from 'lit';

class BandTaskbar extends LitElement {
  static properties = {
    title: { type: String },
    paragraphText: { type: String },
    imageLink: { type: String },
    buttonText: { type: String },
  };

  static styles = css`
    button {
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
    .band-add-button,
    .band-background-button,
    .band-title-button,
    .band-delete-button {
      border-color: #220032;
      margin: 10px;
    }
    .band-taskbar {
      display: block;
      width: 20%;
    }
  `;
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="band-taskbar">
        <button class="band-add-button">Add</button>
        <button class="band-background-button">Background</button>
        <button class="band-title-button">Title</button>
        <button class="band-delete-button">Delete</button>
      </div>
    `;
  }
}

customElements.define('band-taskbar', BandTaskbar);
