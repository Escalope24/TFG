export const CONSTANTS=Object.freeze({
    
    MODULES:{
        USER:'user',
        MENU:'menu',
        BILLS:'bills',
        OBJECTIVES:'objectives',
    },
    ROUTES:{
        USER:{
            USERMENU:'',
            LOGIN:'login',
            REGISTER:'register',
        },
        MENU:{
            HOME:'home',
    
        },
        BILLS:{
            BILS:'/bills',
            BILS_NEW:'/bills/new',
            BILS_EDIT:'/bills/edit',
        },
        OBJECTIVES:{
            OBJECTIVE:'menu/objective',
            OBJECTIVE_NEW:'menu/objective/new',
            OBJECTIVE_LIST:'menu/objective/list',
            PROGRESS:'menu/objective/progress',
            HISTORICAL:'menu/objective/historical',
        },
        EVENTS:{
            EVENTS_MENU:'/events',
            SOCIAL:'/social',
            CREATE_EVENT:'/createEvent',
            
        },
        SHARED:{
            USER_INFO:"user/info"
        }
    },
    MODULE:{
        USER_MODULE:'../app/User/user.module'
    }
})
