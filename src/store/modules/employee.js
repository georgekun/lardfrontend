import inputData from "@/store/modules/inputData";

const genders = inputData.state.genders
const tags = inputData.state.tags
const positions = inputData.state.positions
const type_contract = inputData.state.typesContract
const country = inputData.state.citizenship

export default {
    namespaced: true,
    state:{
        employees:[
            {
                id:0,
                full_name:'Иванова Иван Иванович',
                inn: '2321312321',
                address:'Сакнт-Петербург',
                date_birth:'22.22.2023',
                age:22,
                type_contract:type_contract[1],
                type_contact_id:type_contract[1].id,
                gender:genders[1],
                gender_id:genders.id,
                country:country[1],
                country_id:country[1].id,
                position:positions[1],
                position_id:positions[1].id,
                status:{
                    tag_id:tags[1].id,
                    tag:tags[1],
                    description:'Истекают документы'
                }
            }
        ]
    },
    getters:{
        getEmployees( state){
            return state.employees
        }
    },
    mutations:{

    },
    actions: {
        findEmployeeById({ state }, id) {
            const employee = state.employees.find(emp => emp.id === id);
            return employee || null;
        }
    }
}