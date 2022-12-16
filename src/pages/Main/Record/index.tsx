import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Dropdown, Spinner} from "react-bootstrap";
import axios from "axios";

import {UserService} from "../../../services";

import * as S from "./index.style";

const RecordComponent = () => {
    const [actor, setActor] = useState<"" | "miji">("");
    const [text, setText] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);
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
            prevRecord.current = {url: blobUrl, text};
        }
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
                <h1>문장을 입력하여 녹음 해보세요</h1>
                <Dropdown onSelect={handleChangeActorDropdown}>
                    <Dropdown.Toggle variant="secondary">
                        {actor === "" ? "기본 목소리" : actor}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="">기본 목소리</Dropdown.Item>
                        <Dropdown.Item eventKey="miji">미지</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <textarea value={text} onChange={handleChangeTextInput}></textarea>
                <audio controls ref={audioRef}></audio>
                <div className="button-wrapper">
                    <Button
                        variant="success"
                        className="submit-btn"
                        onClick={handleClickSubmitBtn}
                    >
                        전송하기
                    </Button>
                    <Button variant="success" onClick={handleClickSaveBtn}>
                        저장하기
                    </Button>
                </div>
            </S.PageWrapper>
            {showSpinner && (
                <S.SpinnerWrapper>
                    <Spinner/>
                </S.SpinnerWrapper>
            )}
        </>
    );
};

export default RecordComponent;
