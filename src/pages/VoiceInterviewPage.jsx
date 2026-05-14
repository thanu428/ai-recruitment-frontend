import { useState, useRef } from "react";

function VoiceInterviewPage() {

  const [recording, setRecording] = useState(false);

  const [audioURL, setAudioURL] = useState("");

  const mediaRecorderRef = useRef(null);

  const audioChunksRef = useRef([]);

  async function startRecording() {

    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true
      });

    const mediaRecorder =
      new MediaRecorder(stream);

    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorder.onstop = () => {

      const audioBlob = new Blob(
        audioChunksRef.current,
        { type: "audio/wav" }
      );

      const audioUrl =
        URL.createObjectURL(audioBlob);

      setAudioURL(audioUrl);
      const formData = new FormData();

formData.append("file", audioBlob);

fetch(
  "http://localhost:8083/api/auth/voice",
  {
    method: "POST",
    body: formData
  }
);

      audioChunksRef.current = [];
    };

    mediaRecorder.start();

    setRecording(true);

    setTimeout(() => {

      mediaRecorder.stop();

      setRecording(false);

    }, 60000);
  }

  return (

    <div
      style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:
          "linear-gradient(to right,#ff9966,#ff5e62)"
      }}
    >

      <div
        style={{
          background:"white",
          padding:"40px",
          borderRadius:"20px",
          textAlign:"center"
        }}
      >

        <h1>Voice Interview Round</h1>

        <p>
          Speak for 1 minute about yourself
        </p>

        <button
          onClick={startRecording}
          disabled={recording}
          style={{
            padding:"15px 30px",
            border:"none",
            borderRadius:"10px",
            background:"red",
            color:"white",
            fontSize:"16px"
          }}
        >
          {recording
            ? "Recording..."
            : "Start Recording"}
        </button>

        <br /><br />

        {audioURL && (

          <audio controls src={audioURL} />

        )}

      </div>

    </div>
  );
}

export default VoiceInterviewPage;