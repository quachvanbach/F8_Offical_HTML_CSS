import html from "../core.js";
import { connect } from "../store.js";


const connetor = connect()

function App({ cars }) {
    return html`
    <ul>
        ${cars.map(car => `<li>${car}</li>`)}
    </ul >

    <button onclick = "dispatch('ADD', 'Porcher')">Add car</button>
    `
}

export default connetor(App);