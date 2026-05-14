import axios from "axios";
import { useState } from "react";

function MatchPage() {

    const [file, setFile] = useState(null);

    const [result, setResult] = useState("");

    const [score, setScore] = useState(0);

    const uploadResume = async () => {

        const formData = new FormData();

        formData.append("file", file);

        try {

            const res = await axios.post(
                "https://ai-recruitment-backend.up.railway.app/api/auth/upload",
                formData
            );

            setResult(res.data);

            const matchRes = await axios.get(
                "https://ai-recruitment-backend.up.railway.app/api/match?resumeSkills=Java,Spring Boot,React&jobSkills=Java,Spring Boot,React,Docker"
            );

            setScore(matchRes.data);

        } catch(error){

            console.log(error);
        }
    };

    return (

        <div>

            <h1>AI Resume Ranking</h1>

            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <br /><br />

            <button onClick={uploadResume}>
                Upload Resume
            </button>

            <br /><br />

            <pre>{result}</pre>

            <h2>Match Score: {score}%</h2>

        </div>
    );
}

export default MatchPage;