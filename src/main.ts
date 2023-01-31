import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* add some free styles */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faTwitter, faArrowUpRightFromSquare)

createApp(App).mount('#app')
