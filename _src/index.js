import configureStore from './store'
import { toggleFilter, swapFilterDisposition } from './actions'

const store = configureStore()
window.store = store
window.toggleFilter = toggleFilter
window.swapFilterDisposition = swapFilterDisposition
