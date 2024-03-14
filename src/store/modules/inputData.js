
export default {
    namespaced:true,
    state:{
        genders:[
            {id: 0, title: "Без разницы", slug:'Без разницы'},
            {id: 1, title: "Мужской", slug:'муж.'},
            {id: 2, title: "Женский",  slug:'жен.'}
        ],
        citizenship:[
            {id: 0,icon:'', title: "Все страны", slug:''},
            {id: 1,icon:'@/assets/county_img/ru.png', title: "Российская Федерация", slug:'РФ'},
            {id: 2,icon:'@/assets/county_img/tj.png', title: "Таджикистан", slug:'ТД'},
            {id: 3,icon:'@/assets/county_img/tj.png', title: "Узбекистан", slug:'УБ'},
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
        positions:[
            {id:0, title:'Все должности'},
            {id:1, title:'Промышленный альпинист'},
            {id:2, title:'Токарь'},
            {id:3, title:'Пекарь'},
        ]
    },
    getters:{
        getTags(state){return state.tags},
        getTypesContract(state){return state.typesContract},
        getGenders(state){return state.genders},
        getCountry(state){return state.citizenship},
        getPositions(state){return state.positions}
    },

}