import { LitElement, html, css } from 'lit';
import "./band-card.js";

export class BandList extends LitElement {
    static get tag() {
        return 'band-list';
    }
    static get properties() {
        return {
          bands: { type: Array },
          location: { type: String },
        }
    }

    constructor() {
        super();
        this.bands = [];
        this.location = 'State College';
        this.updateList();
    }

    updateList() {
        const address = '../api/band.js';
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.bands = data;
        });
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    render() {
        return html`
        <h2>${this.location}</h2>
        <div class="wrapper">
            ${this.bands.map(band => html`
            <div class="item">
                <band-card title="${band.title}" image="${band.image}" information="${band.information}" topText="${band.topText}" bottomText="${band.bottomText}" ></band-card>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(BandList.tag, BandList);

