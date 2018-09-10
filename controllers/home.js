


exports.show = (req,res)=>{
    console.log(JSON.stringify(req.headers))
    return res.render('home')
}