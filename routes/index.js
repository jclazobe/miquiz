var express = require('express');
var router = express.Router();
// Importamos el controlador básico
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'miQuiz' });
});

// Enlazamos las rutas con el controlador que debe gestionarlas
router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);

// Enlace a la página que muestra los créditos
router.get('/author',function(req,res){
	res.render('author',{nombre:'Juan Carlos Lázaro',foto:'images/avatar_admin.png'});
});

module.exports = router;
