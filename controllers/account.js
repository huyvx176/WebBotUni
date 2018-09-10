const url = require('../config').url
const rp = require('request-promise');

// function verifyJwtUser(token){
//     return (req,res,next) =>{
//         if(checkValidateToken(token)){
//             jwt.verify(token, fs.readFileSync('./key/myKey.pub'), function (err, decode) {
//                 if (err) req.user = undefined;
//                 req.user = decode;
//                 console.log(JSON.stringify(decode))
//                 next();
//               });
//         }else{
//             req.user=undefined
//             next()
//         }
//     }
// }

// function checkValidateToken(token){
//     // console.log("token "+token)
//     if(typeof token != 'undefined' && token != null && token !=""){
//          return true
//     }
//     else return false
// }

exports.signUp = (req,res) =>{
    if(!req.user){
        return res.send({
            'status': 0,
            "message": "User is not exist"
        })
    }else{
        var options = {
            uri: url.SOCKET_HOST_PRE_TRADE + '/pre_trade/order',
            body: {
                
            }
        };
    }
}

exports.signIn = (req,res) =>{
    console.log("signIn")
    var options = {
        method:"POST",
        uri: url.HOST_SERVER_UNI + '/api/v1/account/login',
        // headers:{
        //     "x-access-token": req.headers['x-access-token']
        // },
        body: {
            "phone":req.body.phone,
            "password": req.body.password
        },
        json:true
    };
    console.log(options)
    rp(options)
        .then(function (body){
            console.log(JSON.stringify(body))
            // verifyJwtUser(body['token'])
            return res.send(JSON.stringify(body))
        })
        .catch(function (err){
            console.log(JSON.stringify(err))
        })
}

exports.logOut = (req,res) =>{
    console.log("logOut")
    if(!req.user){
        return res.send({
            'status': 0,
            "message": "User is not exist"
        })
    }else{
        var options = {
            method:"POST",
            uri: url.HOST_SERVER_UNI + '/api/v1/account/logout',
            headers:{
                "x-access-token": req.headers['x-access-token']
            },
            json:true
        };
        console.log(options)
        rp(options)
            .then(function (body){
                console.log(JSON.stringify(body))
                return res.send(JSON.stringify(body))
            })
            .catch(function (err){
                console.log(JSON.stringify(err))
            })
    }
}

