const router = require('express').Router();
const sessionRouter = require('./session');
const userRouter = require('./users');

router.get('/csrf/restore', (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie('XSRF-TOKEN', csrfToken);
  res.status(200).json({'XSRF-Token': csrfToken});
});

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});
router.get('/getImageData', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.send(`<input type="file" /><script>let input = document.querySelectorAll('input')[0];input.addEventListener(onchange, () =>console.log(input.value))</script>`)
})

// --------------------------------------------------------
module.exports = router;