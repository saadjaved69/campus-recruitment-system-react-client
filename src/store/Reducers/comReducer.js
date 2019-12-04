import CompanyAction from "../Actions/companyAction";


const CompanyReducer = (state = {
    
    CompanyName : '',
    Established : '',
    HR_Name : '',
    email : '',
    isLoading : false,
    submit: false
    

} , action) => {
     switch (action.type) {
         case CompanyAction.POST : 
         return {
             ...state ,
             isLoading : true
         }
         case CompanyAction.POST_SUCCESSFULL : 
         return {
             ...state ,
             isLoading : false,
             id : action.data.id,
             CompanyName : action.data.CompanyName,
             Established : action.data.Established,
             HR_Name : action.data.HR_Name ,
             email : action.data.email ,
             submit: true
         }

 
        default:
            return state 
     }
}



export default CompanyReducer