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
            ACTUAL:'menu/objective/actual',
            HISTORICAL:'menu/objective/historical',
        },
        EVENTS:{
            EVENTS_MENU:'events/menu',
            SOCIAL:'events/social',
            CREATE_EVENT:'events/createEvent',
            
        },
        SHARED:{
            USER_INFO:"user/info"
        }
    },
    MODULE:{
        USER_MODULE:'../app/User/user.module'
    }
})
