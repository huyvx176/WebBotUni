

exports.get_bot_detail = (req,res) =>{
    return res.render('bot-detail')
}

exports.get_bot_list = (req,res) =>{
    return res.render('bot-list')
}

exports.get_create_new_bot = (req,res) =>{
    return res.render('create-new-bot')
}