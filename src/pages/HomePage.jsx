import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  return (

    <div>

      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#0f172a,#1e293b,#334155)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}
      >

        <div
          style={{
            width: "1100px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            borderRadius: "30px",
            overflow: "hidden",
            display: "flex",
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.4)"
          }}
        >

          <div
            style={{
              flex: 1,
              padding: "60px",
              color: "white"
            }}
          >

            <h1
              style={{
                fontSize: "55px",
                marginBottom: "20px"
              }}
            >
              AI Recruitment System
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "35px",
                color: "#dbeafe"
              }}
            >
              Smart AI-powered platform for
              resume screening, MCQ testing,
              voice interviews, and candidate
              analytics.
            </p>

            <div
              style={{
                marginTop: "40px",
                display: "flex",
                gap: "20px"
              }}
            >

              <button
                onClick={() => navigate("/resume")}
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "15px 35px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  cursor: "pointer"
                }}
              >
                Get Started
              </button>

              <button
                onClick={() => {

                  alert(

`AI Recruitment Screening System

This project automates recruitment using AI technologies.

Main Modules:
• Resume Screening
• Match Score
• MCQ Technical Test
• Voice Interview
• Analytics Dashboard

Technologies Used:
• React.js
• Spring Boot
• MySQL
• JWT Authentication
• REST APIs

Project Objective:
To simplify candidate shortlisting and improve recruitment efficiency using Artificial Intelligence.`
                  );

                }}
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid white",
                  padding: "15px 35px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  cursor: "pointer"
                }}
              >
                Learn More
              </button>

            </div>

            <div
              style={{
                marginTop: "60px",
                display: "flex",
                gap: "20px"
              }}
            >

              <div style={cardStyle}>
                <h2>Resume AI</h2>
                <p>Smart skill extraction</p>
              </div>

              <div style={cardStyle}>
                <h2>MCQ Test</h2>
                <p>Technical evaluation</p>
              </div>

              <div style={cardStyle}>
                <h2>Voice Round</h2>
                <p>Communication analysis</p>
              </div>

            </div>

          </div>

          <div
            style={{
              flex: 1,
              background:
                "linear-gradient(to bottom right,#3b82f6,#8b5cf6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px"
            }}
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="AI Recruitment"
              style={{
                width: "80%",
                filter:
                  "drop-shadow(0 10px 30px rgba(0,0,0,0.4))"
              }}
            />

          </div>

        </div>

      </div>

      <div
        style={{
          background:"#f8fafc",
          padding:"80px 50px"
        }}
      >

        <h1
          style={{
            textAlign:"center",
            marginBottom:"50px",
            color:"#111827"
          }}
        >
          About The Project
        </h1>

        <p
          style={{
            fontSize:"20px",
            lineHeight:"40px",
            textAlign:"center",
            color:"#475569",
            maxWidth:"1000px",
            margin:"auto"
          }}
        >
          AI Recruitment Screening System is a
          smart hiring platform developed to
          automate resume screening, technical
          evaluation, and candidate analysis
          using Artificial Intelligence.
        </p>

      </div>

      <div
        style={{
          background:"white",
          padding:"80px 50px"
        }}
      >

        <h1
          style={{
            textAlign:"center",
            marginBottom:"60px"
          }}
        >
          Key Features
        </h1>

        <div
          style={{
            display:"flex",
            justifyContent:"center",
            gap:"30px",
            flexWrap:"wrap"
          }}
        >

          <div style={featureCard}>
            <h2>AI Resume Screening</h2>
            <p>
              Automatically extracts candidate
              skills from resumes.
            </p>
          </div>

          <div style={featureCard}>
            <h2>MCQ Assessment</h2>
            <p>
              Technical evaluation using
              multiple-choice tests.
            </p>
          </div>

          <div style={featureCard}>
            <h2>Voice Interview</h2>
            <p>
              Communication skill analysis
              through voice recording.
            </p>
          </div>

          <div style={featureCard}>
            <h2>Analytics Dashboard</h2>
            <p>
              Displays candidate performance
              using charts and reports.
            </p>
          </div>

        </div>

      </div>

      <div
        style={{
          background:"#0f172a",
          color:"white",
          padding:"70px 50px",
          textAlign:"center"
        }}
      >

        <h1>Project Workflow</h1>

        <h2
          style={{
            marginTop:"40px",
            lineHeight:"50px",
            color:"#cbd5e1"
          }}
        >
          Resume Upload → Skill Extraction →
          MCQ Test → Voice Interview →
          Analytics Dashboard
        </h2>

      </div>

      <div
        style={{
          background:"#020617",
          color:"white",
          textAlign:"center",
          padding:"20px"
        }}
      >
        © 2026 AI Recruitment Screening System
      </div>

    </div>
  );
}

const cardStyle = {

  background: "rgba(255,255,255,0.1)",
  padding: "20px",
  borderRadius: "15px",
  width: "180px",
  color: "white"
};

const featureCard = {

  width:"250px",
  padding:"30px",
  borderRadius:"20px",
  background:"#f1f5f9",
  boxShadow:"0 5px 20px rgba(0,0,0,0.1)",
  textAlign:"center"
};

export default HomePage;