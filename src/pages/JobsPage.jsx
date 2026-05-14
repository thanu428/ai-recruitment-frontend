import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobsPage() {

  const [file, setFile] = useState(null);

  const [result, setResult] = useState("");

  const [score, setScore] = useState(0);

  const [uploaded, setUploaded] = useState(false);

  const navigate = useNavigate();

  const uploadResume = async () => {

    const formData = new FormData();

    formData.append("file", file);

    try {

      const res = await axios.post(
        "http://localhost:8083/api/auth/upload",
        formData
      );

      setResult(res.data);

      const matchRes = await axios.get(
        "http://localhost:8083/api/match?resumeSkills=Java,Spring Boot,React&jobSkills=Java,Spring Boot,React,Docker"
      );

      setScore(matchRes.data);

      setUploaded(true);

    } catch(error){

      console.log(error);
    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #4facfe, #00f2fe)"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "450px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }}
      >

        <h1
          style={{
            marginBottom: "30px",
            color: "#333"
          }}
        >
          AI Resume Ranking
        </h1>

        <input
          type="file"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <br /><br />

        <button
          onClick={uploadResume}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Upload Resume
        </button>

        <br /><br />

        <div
          style={{
            whiteSpace: "pre-line",
            color: "#444"
          }}
        >
          {result}
        </div>

        <h2
          style={{
            marginTop: "20px",
            color: "#222"
          }}
        >
          Match Score: {score}%
        </h2>
        {score >= 70 ? (
                <h3 style={{color:"green"}}>

                    Eligible for MCQ Test

                </h3>
                ) : (
                <h3 style={{color:"red"}}>

                    Not Eligible

                </h3>
)}

        {uploaded && (

          <button
            onClick={() => navigate("/mcq")}
            style={{
              marginTop: "20px",
              background: "green",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Start MCQ Test
          </button>
        )}

      </div>

    </div>
  );
}

export default JobsPage;