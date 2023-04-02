import { FormElement } from './components/form/Form';
import './index.html'; 
import './style.css';

const app = new FormElement()
const main = document.createElement('main')
main.classList.add('main-container')

document.body.append(main)
app.render(main)