import { createStore } from 'vuex'
import employee from "./modules/employee";
import inputData from "./modules/inputData";
export default  createStore({
    modules: {
        employee,
        inputData
    }
})
