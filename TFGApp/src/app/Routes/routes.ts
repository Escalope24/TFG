export const CONSTANTS=Object.freeze({
    
    MODULES:{
        USER:'user',
        MENU:'menu',
        BILLS:'bills',
        OBJECTIVES:'objectives',
    },
    ROUTES:{
        USER:{
            HOME:'wall',
            LOGIN:'login',
            REGISTER:'register',
        },
        MENU:{
            HOME:'',
    
        },
        BILLS:{
            BILS:'/bills',
            BILS_NEW:'/bills/new',
            BILS_EDIT:'/bills/edit',
        },
        OBJECTIVES:{
            OBJECTIVE:'/objective',
            OBJECTIVE_NEW:'/objective/new',
            OBJECTIVE_LIST:'/objective/list',
            PROGRESS:'/objective/progress',
            HISTORICAL:'/objective/historical',
        },
    },
    MODULE:{
        USER_MODULE:'../app/User/user.module'
    }
})