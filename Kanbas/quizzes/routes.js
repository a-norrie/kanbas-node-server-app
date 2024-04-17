import * as dao from "./dao.js";
export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    const { cid } = req.params;
    const newQuiz = {
      ...req.body,
      course: cid,
    };
    const quiz = await dao.createQuiz(newQuiz);
    res.json(quiz);
  };
  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.quizId);
    res.json(status);
};
const findAllQuizzes = async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findAllQuizzes({ course: cid });
    res.send(quizzes.filter((q) => q.course === cid));
  };
  const findQuizById = async (req, res) => { 
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    res.json(quiz);
  };
  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  };


  app.post("/api/courses/:cid/quizzes", createQuiz);
  app.get("/api/courses/:cid/quizzes", findAllQuizzes);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
}
