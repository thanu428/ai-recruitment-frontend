import axios from "axios";
import { useState } from "react";

function UploadPage() {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const uploadResume = async () => {

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://ai-recruitment-backend.up.railway.app/api/auth/upload",
      formData
    );

    setResult(res.data);
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>Resume Upload</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={uploadResume}>
        Upload Resume
      </button>

      <pre>{result}</pre>

    </div>
  );
}

export default UploadPage;