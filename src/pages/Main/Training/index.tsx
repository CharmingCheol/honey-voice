import { useEffect, useRef, useState } from "react";
import { Overlay, Tooltip, Button } from "react-bootstrap";

import { UserService } from "services";

import scriptFile from "./script";
import * as S from "./index.style";

const TrainingComponent = () => {
  const [script, setScript] = useState("");
  const [isTraining, setIsTraining] = useState(false);
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  const audioElemRef = useRef<HTMLAudioElement>(null);
  const tariningStartElemRef = useRef<HTMLDivElement>(null);

  const mediaRecoderRef = useRef<MediaRecorder>();
  const recordBlobRef = useRef<Blob>();

  const handleClickTrainingEnd = () => {
    mediaRecoderRef.current?.stop();
    UserService.addPoint(20, window.sessionStorage.getItem("id") as string);
    setIsTraining(false);
    setIsShowTooltip(true);
  };

  const handleClickTrainingStart = () => {
    const index = Math.floor(Math.random() * scriptFile.length);
    const randomScript = scriptFile[index];
    mediaRecoderRef.current?.start();
    setScript(randomScript);
    setIsTraining(true);
  };

  const registerRecordEvent = async () => {
    const mediaStream = await window.navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    const mediaRecoder = new MediaRecorder(mediaStream);

    mediaRecoder.addEventListener("dataavailable", (event) => {
      recordBlobRef.current = event.data;
    });

    mediaRecoder.addEventListener("stop", () => {
      if (!recordBlobRef.current || !audioElemRef.current) {
        return;
      }
      const blobUrl = window.URL.createObjectURL(recordBlobRef.current);
      audioElemRef.current.src = blobUrl;
    });

    mediaRecoderRef.current = mediaRecoder;
  };

  useEffect(() => {
    registerRecordEvent();
  }, []);

  return (
    <S.PageWrapper>
      <h1>주어진 문장을 학습하세요</h1>
      <p>{script}</p>
      <audio controls ref={audioElemRef}></audio>
      <div className="button-wrapper" ref={tariningStartElemRef}>
        {isTraining ? (
          <Button onClick={handleClickTrainingEnd}>학습 종료</Button>
        ) : (
          <>
            <Button onClick={handleClickTrainingStart}>학습 시작</Button>
            <Overlay target={tariningStartElemRef} show={isShowTooltip}>
              {(props) => (
                <Tooltip {...props}>20 포인트를 획득 했습니다</Tooltip>
              )}
            </Overlay>
          </>
        )}
      </div>
    </S.PageWrapper>
  );
};

export default TrainingComponent;
