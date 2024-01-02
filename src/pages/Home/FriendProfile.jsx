import React from "react";
import styled from "styled-components";
import { Button } from "./../../styles/Common";

export default function FriendProfile() {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImg alt="" />
        <Name>박승태</Name>
        <Detail>대학 동기 / 자주 만남</Detail>
      </ProfileWrapper>
      <Container>
        <Title>친구와 나의 관계</Title>
        <ListWrapper>
          <ListItem>
            <Emotion />
            <EmotionTxt>3개</EmotionTxt>
          </ListItem>
          <ListItem>
            <Emotion />
            <EmotionTxt>5개</EmotionTxt>
          </ListItem>
          <ListItem>
            <Emotion />
            <EmotionTxt>1개</EmotionTxt>
          </ListItem>
          <ListItem>
            <Emotion />
            <EmotionTxt>0개</EmotionTxt>
          </ListItem>
        </ListWrapper>
        <Button color="#71CACC">기록추가하기</Button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 18px;
`;

const ProfileImg = styled.img`
  object-fit: cover;
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background-color: #e3e3e3;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 28px;
`;

const Detail = styled.div`
  color: #666;
  font-weight: 500;
  margin-top: 12px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 4px rgba(101, 101, 101, 0.1);
  margin: 20px;
  padding: 20px;
`;
const Title = styled.div`
  font-size: 20px;
  text-align: center;
`;
const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const Emotion = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #e3e3e3;
`;
const EmotionTxt = styled.div`
  text-align: center;
  margin-top: 5px;
`;
