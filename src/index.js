import 'bootstrap' // importeer bootstrap JavaScript code
import 'bootstrap/dist/css/bootstrap.css' // importeer bootstrap CSS code
import './css/style.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import initHome from './js/home.js'
import initZoeken from "./js/zoeken.js";
import initDetail from "./js/detail.js";
import initNew from "./js/new.js";
import {navigateToDetail} from "./js/zoeken.js"
import * as commonUI from './js/commonUI.js'


initZoeken()
initHome()
initDetail()
initNew()
