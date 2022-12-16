import {useLayoutEffect, useState} from "react";
import {Button, ListGroup} from "react-bootstrap";

import {UserService} from "../../services";
import {User} from "../../types";

import * as S from "./index.style";
import PlayListItem from "./ListItem";

const ProfilePage = () => {
    const [user, setUser] = useState<User>();

    const getUser = async () => {
        const id = window.sessionStorage.getItem("id");
        if (!id) {
            return;
        }
        const profile = await UserService.getUser(id);
        if (!profile) {
            return;
        }
        setUser(profile);
    };

    useLayoutEffect(() => {
        getUser();
    }, []);

    return (
        <S.PageWrapper>
            <div className="page-body">
                <article className="my-info">
                    <h2>{user?.id} 님</h2>
                    <div className={'point-area'}>
                        <span>내 포인트: {user?.point}</span>
                        <Button variant="success">포인트 충전하기</Button>
                    </div>
                </article>
                <article className="list">
                    <h2>내 음성 기록</h2>
                    <ListGroup>
                        {user?.list.map((listItem) => (
                            <PlayListItem key={listItem.text} listItem={listItem}/>
                        ))}
                    </ListGroup>
                </article>
            </div>
        </S.PageWrapper>
    );
};

export default ProfilePage;
