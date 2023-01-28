const router = require('express').Router();
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const sessionRouter = require('./session');
const userRouter = require('./users');

router.use(restoreUser);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

// --------------------------------------------------------
module.exports = router;