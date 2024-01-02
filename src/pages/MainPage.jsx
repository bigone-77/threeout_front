import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import splash from "../assets/image/splash.png";

export default function MainPage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/auth/signin");
  };

  return (
    <Background>
      <Button onClick={goToLogin}>시작하기</Button>
    </Background>
  );
}

const Background = styled.div`
  background-image: url(${splash});
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; /* 세로 방향으로 배치 */
  align-items: center;
  justify-content: flex-end; /* 하단 정렬로 변경 */
`;

const Button = styled.button`
  width: 308px;
  height: 54px;
  border: none;
  border-radius: 10px;
  background: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 90px; /* 버튼과 하단 간격을 조절 */
`;
