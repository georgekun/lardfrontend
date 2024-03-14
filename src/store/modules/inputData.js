
export default {
    namespaced:true,
    state:{
        gender:[
            {id: 0, title: "Мужской", slug:'муж.'},
            {id: 1, title: "Женский",  slug:'жен.'}
        ],
        citizenship:[
            {id: 0,icon:'', title: "Российская Федерация", slug:'РФ'},
            {id: 1,icon:'', title: "Таджикистан", slug:'ТД'},
            {id: 2,icon:'', title: "Узбекистан", slug:'УБ'},
        ],
        typesContract:[
                {id:0,title:'', slug:'ТД'},
                {id:1,title:'', slug:'ГПХ'},
                {id:2,title:'', slug:'СМЗ'},
                {id:3,title:'', slug:'Кандидат'},
        ],
        tags:[
            {id:0, color:"#B0BCC7", title:"Весь список", slug:''},
            {id:1, color:"#E2BD06", title:"Проблемные", slug:''},
            {id:2, color:"#E52E2E", title:"Критические", slug:''},
            {id:3, color:"#00B6ED", title:"Есть замечания", slug:''},
            {id:4, color:"#00AE5B", title:"Выполнено", slug:''},
        ],
    },
    getters:{
        getTags(state){return state.tags},
        getTypesContract(state){return state.typesContract},
    },

}