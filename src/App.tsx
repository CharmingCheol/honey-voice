import { useRef, useState } from "react";
import axios from "axios";

import Spinner from "./Spinner";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [showAudio, setShowAudio] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleChangeTextInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };

  const handleClickSubmitBtn = async () => {
    setShowSpinner(true);
    setShowAudio(false);

    const resposne = await axios.post("/api/v1/synthesize", {
      text,
      type: "",
      source: "final",
    });
    const blobUrl = convertB64ToBlobUrl(resposne.data.data);
    setShowSpinner(false);
    setShowAudio(true);

    if (audioRef.current) {
      audioRef.current.src = blobUrl;
      setText("");
    }
  };

  const convertB64ToBlobUrl = (base64: string) => {
    const decoded = window.atob(base64);
    const arraybuffer = new ArrayBuffer(decoded.length);
    const view = new Uint8Array(arraybuffer);

    for (let i = 0; i < decoded.length; i++) {
      view[i] = decoded.charCodeAt(i) & 0xff;
    }

    const blob = new Blob([arraybuffer]);
    return URL.createObjectURL(blob);
  };

  return (
    <div className="App">
      <h1>꿀보이스</h1>
      <textarea value={text} onChange={handleChangeTextInput}></textarea>
      <button onClick={handleClickSubmitBtn}>전송하기</button>
      <audio
        className={showAudio ? "show" : ""}
        controls
        ref={audioRef}
      ></audio>
      {showSpinner && <Spinner />}
    </div>
  );
};

export default App;
