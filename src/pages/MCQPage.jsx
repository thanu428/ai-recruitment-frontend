import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MCQPage() {

  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    axios.get("https://ai-recruitment-backend-production.up.railway.app/api/questions")
      .then(res => setQuestions(res.data));

  }, []);

  function checkAnswer(selected){

    const correct =
      questions[currentQuestion].correctAnswer;

    if(selected === correct){
      setScore(prev => prev + 1);
    }

    if(currentQuestion + 1 < questions.length){

      setCurrentQuestion(prev => prev + 1);

    } else {

      setFinished(true);
    }
  }

  if(questions.length === 0){

    return <h1>Loading...</h1>;
  }

  if(finished){

    return (

      <div
        style={{
          minHeight:"100vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          background:
            "linear-gradient(to right, #667eea, #764ba2)"
        }}
      >

        <div
          style={{
            background:"white",
            padding:"40px",
            borderRadius:"20px",
            textAlign:"center",
            width:"400px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.2)"
          }}
        >

          <h1>Test Completed 🎉</h1>

          <h2>
            Final Score:
            {score}/{questions.length}
          </h2>
          <button
  onClick={() => navigate("/voice")}
  style={{
    marginTop:"20px",
    background:"orange",
    color:"white",
    border:"none",
    padding:"12px 25px",
    borderRadius:"10px",
    cursor:"pointer",
    fontSize:"16px",
    marginRight:"15px"
  }}
>
  Start Voice Interview
</button>

          <button
            onClick={() => navigate("/analytics")}
            style={{
              marginTop:"20px",
              background:"green",
              color:"white",
              border:"none",
              padding:"12px 25px",
              borderRadius:"10px",
              cursor:"pointer",
              fontSize:"16px"
            }}
          >
            View Analytics
          </button>

        </div>

      </div>
    );
  }

  const q = questions[currentQuestion];

  return (

    <div
      style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:
          "linear-gradient(to right, #667eea, #764ba2)"
      }}
    >

      <div
        style={{
          background:"white",
          padding:"40px",
          borderRadius:"20px",
          width:"600px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.2)"
        }}
      >

        <h1
          style={{
            textAlign:"center",
            marginBottom:"20px"
          }}
        >
          MCQ Test
        </h1>

        <h3
          style={{
            color:"#555"
          }}
        >
          Question
          {currentQuestion + 1}
          / {questions.length}
        </h3>

        <h2
          style={{
            marginBottom:"30px"
          }}
        >
          {q.question}
        </h2>

        <button
          onClick={() => checkAnswer(q.optionA)}
          style={buttonStyle}
        >
          {q.optionA}
        </button>

        <button
          onClick={() => checkAnswer(q.optionB)}
          style={buttonStyle}
        >
          {q.optionB}
        </button>

        <button
          onClick={() => checkAnswer(q.optionC)}
          style={buttonStyle}
        >
          {q.optionC}
        </button>

        <button
          onClick={() => checkAnswer(q.optionD)}
          style={buttonStyle}
        >
          {q.optionD}
        </button>

      </div>

    </div>
  );
}

const buttonStyle = {

  width:"100%",
  padding:"15px",
  marginBottom:"15px",
  border:"none",
  borderRadius:"10px",
  background:"#f1f1f1",
  cursor:"pointer",
  fontSize:"16px",
  transition:"0.3s"
};

export default MCQPage;