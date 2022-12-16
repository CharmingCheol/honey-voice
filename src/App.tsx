// import { useRef, useState } from "react";
// import axios from "axios";

// import Spinner from "./Spinner";
// import "./App.css";

// const App = () => {
//   const [text, setText] = useState("");
//   const [actor, setActor] = useState<string>("default");

//   const [showAudio, setShowAudio] = useState(false);
//   const [showSpinner, setShowSpinner] = useState(false);

//   const audioRef = useRef<HTMLAudioElement>(null);

//   const handleChangeTextInput = (
//     event: React.ChangeEvent<HTMLTextAreaElement>
//   ) => {
//     setText(event.target.value);
//   };

//   const handleChangeActorOption = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setActor(event.target.value);
//   };

//   const handleClickSubmitBtn = async () => {
//     setShowSpinner(true);
//     setShowAudio(false);

//     const resposne = await axios.post("/api/v1/synthesize", {
//       text,
//       type: actor === "default" ? "" : actor,
//       source: "final",
//     });
//     const blobUrl = convertB64ToBlobUrl(resposne.data.data);
//     setShowSpinner(false);
//     setShowAudio(true);

//     if (audioRef.current) {
//       audioRef.current.src = blobUrl;
//     }
//   };

//   const convertB64ToBlobUrl = (base64: string) => {
//     const decoded = window.atob(base64);
//     const arraybuffer = new ArrayBuffer(decoded.length);
//     const view = new Uint8Array(arraybuffer);

//     for (let i = 0; i < decoded.length; i++) {
//       view[i] = decoded.charCodeAt(i) & 0xff;
//     }

//     const blob = new Blob([arraybuffer]);
//     return URL.createObjectURL(blob);
//   };

//   return (
//     <div className="App">
//       <h1>꿀보이스</h1>
//       <textarea value={text} onChange={handleChangeTextInput}></textarea>
//       <div className="actor">
//         <h2>성우 선택</h2>
//         <div>
//           <input
//             type="radio"
//             id="default"
//             name="actor"
//             value="default"
//             checked
//             onChange={handleChangeActorOption}
//           ></input>
//           <label htmlFor="default">default</label>
//         </div>
//         <div>
//           <input
//             type="radio"
//             id="miji"
//             name="actor"
//             value="miji"
//             onChange={handleChangeActorOption}
//           ></input>
//           <label htmlFor="miji">miji</label>
//         </div>
//       </div>
//       <button onClick={handleClickSubmitBtn}>전송하기</button>
//       <audio
//         className={showAudio ? "show" : ""}
//         controls
//         ref={audioRef}
//       ></audio>
//       {showSpinner && <Spinner />}
//     </div>
//   );
// };

// export default App;

import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import RoutesComponent from "./Routes";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (location.pathname === "/login") {
      setShowHeader(false);
    }
    return () => {
      setShowHeader(true);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!window.sessionStorage.getItem("id")) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <>
      {showHeader && <Header />}
      <RoutesComponent />
    </>
  );
};

export default App;
