import axios from "axios";
import { useState } from "react";

function UploadPage() {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const uploadResume = async () => {

    if (!file) {
      alert("Please select a resume");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      const res = await axios.post(
        "https://ai-recruitment-backend.up.railway.app/api/auth/upload",
        formData
      );

      setResult(
        JSON.stringify(res.data, null, 2)
      );

    } catch (error) {

      console.log(error);

      alert("Upload failed");
    }
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

      <br /><br />

      <pre>{result}</pre>

    </div>
  );
}

export default UploadPage;