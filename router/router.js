const express = require('express'), router = express.Router();
const homeController = require('../controllers/home')
const jobController = require('../controllers/job')
const botController = require('../controllers/bot')
const scriptController = require('../controllers/script')
const makerController = require('../controllers/maker')
const walletController = require('../controllers/wallet')
const middleware = require('../middleware/middleware')
const accountController = require('../controllers/account')

//account
router.post('/sign-up',accountController.signUp)
router.post('/sign-in',accountController.signIn)
router.post('/log-out',middleware.loginRequired, accountController.logOut)


// home
router.get('/home',homeController.show);
router.get('/',homeController.show);

//bot
router.get('/bot-detail',botController.get_bot_detail);
router.get('/bot-list',middleware.loginRequired, botController.get_bot_list);
router.get('/create-new-bot',middleware.loginRequired, botController.get_create_new_bot);

//job
router.get('/jobs',jobController.show)


//script
// router.get('/')

//maker
router.get('/makers',makerController.show)
router.get('/maker-detail',makerController.get_maker_detail)

// wallet
router.get('/my-wallet',middleware.loginRequired, walletController.get_my_wallet)


module.exports = router
