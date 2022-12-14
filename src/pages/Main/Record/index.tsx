import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, Spinner, Modal } from "react-bootstrap";
import axios from "axios";

import { UserService } from "services";

import * as S from "./index.style";

const RecordComponent = () => {
  const [actor, setActor] = useState<"" | "miji">("");
  const [text, setText] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const audioRef = useRef<HTMLAudioElement>(null);
  const prevRecord = useRef<{ text: string; url: string }>();

  const handleChangeActorDropdown = (eventKey: any) => {
    setActor(eventKey);
  };

  const handleChangeTextInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };

  const handleClickSubmitBtn = async () => {
    setShowSpinner(true);
    const resposne = await axios.post("/api/v1/synthesize", {
      text,
      type: actor,
      source: "final",
    });
    const blobUrl = convertB64ToBlobUrl(resposne.data.data);
    if (audioRef.current) {
      audioRef.current.src = blobUrl;
      prevRecord.current = { url: blobUrl, text };
    }
    UserService.minusPoint(100, window.sessionStorage.getItem("id") as string);
    setShowModal(false);
    setShowSpinner(false);
  };

  const handleClickSaveBtn = async () => {
    if (!prevRecord.current?.url) {
      return;
    }
    await UserService.addRecord(
      {
        id: Math.random().toString(36),
        text: prevRecord.current.text,
        url: prevRecord.current.url,
      },
      window.sessionStorage.getItem("id") as string
    );
    navigate("/profile");
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
    <>
      <S.PageWrapper>
        <h1>????????? ???????????? ?????? ????????????</h1>
        <Dropdown onSelect={handleChangeActorDropdown}>
          <Dropdown.Toggle variant="secondary">
            {actor === "" ? "?????? ?????????" : actor}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="">?????? ?????????</Dropdown.Item>
            <Dropdown.Item eventKey="miji">??????</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <textarea value={text} onChange={handleChangeTextInput}></textarea>
        <audio controls ref={audioRef}></audio>
        <div className="button-wrapper">
          <Button
            variant="success"
            className="submit-btn"
            onClick={() => setShowModal(true)}
          >
            ????????????
          </Button>
          <Button variant="success" onClick={handleClickSaveBtn}>
            ????????????
          </Button>
        </div>
      </S.PageWrapper>
      <Modal show={showModal}>
        <Modal.Header>?????? ??????</Modal.Header>
        <Modal.Body>
          ?????? ????????? ??????????????????? ?????? ????????? ?????? ?????? 100????????? ?????? ?????????.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            ????????????
          </Button>
          <Button variant="primary" onClick={handleClickSubmitBtn}>
            ????????????
          </Button>
        </Modal.Footer>
      </Modal>
      {showSpinner && (
        <S.SpinnerWrapper>
          <Spinner />
        </S.SpinnerWrapper>
      )}
    </>
  );
};

export default RecordComponent;
