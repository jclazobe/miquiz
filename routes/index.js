var express = require('express');
var router = express.Router();
// Importamos el controlador básico
var quizController = require('../controllers/quiz_controller');
var commentController = require('../controllers/comment_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'miQuiz',errors:[]});
});

// Autoload de comandos con :quizId
router.param('quizId',quizController.load);

// Enlazamos las rutas con el controlador que debe gestionarlas
router.get('/quizes',quizController.index);
router.get('/quizes/:quizId(\\d+)',quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',quizController.answer);
router.get('/quizes/new',quizController.new);
router.post('/quizes/create',quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',quizController.edit);
router.put('/quizes/:quizId(\\d+)',quizController.update);
router.delete('/quizes/:quizId(\\d+)',quizController.destroy)

// Enlazamos las rutas que gestionan los comentarios
router.get('/quizes/:quizId(\\d+)/comments/new', commentController.new);
router.post('/quizes/:quizId(\\d+)/comments', commentController.create);

// Enlace a la página que muestra los créditos
router.get('/author',function(req,res){
	res.render('author',{nombre:'Juan Carlos Lázaro',foto:'images/avatar_admin.png',errors:[]});
});

module.exports = router;
