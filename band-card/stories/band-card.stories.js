import { html } from 'lit';
import '../src/band-card.js';

export default {
  title: 'BandCard',
  component: 'band-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <band-card
      style="--band-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </band-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
