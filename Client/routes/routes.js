import Email from "../src/components/Email";
import Main from "../src/pages/Main";


const routes ={
    main :{
        path:'/',
        element: Main
    },
    emails:{
        path:'/emails',
        element: Email,
    },
    invalid:{
        path:'/*',
        element: Email,
    }
}

export {routes}