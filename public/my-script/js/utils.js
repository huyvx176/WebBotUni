var Utils = {
    jwtToken: {
        checkValidateToken: function checkValidateToken(token){
            // console.log("token "+token)
            if(typeof token != 'undefined' && token != null && token !=""){
                 return true
            }
            else return false
        },
        
    }
}