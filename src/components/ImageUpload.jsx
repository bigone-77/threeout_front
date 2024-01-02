import { AiOutlineCloudUpload } from "react-icons/ai";

import { useRef } from "react";
import { useFileUpload } from "../utils/useFileUpload";
import styled from "styled-components";

const ImageUpload = ({ onFileUrlChange, value }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = useFileUpload({ onFileUrlChange });

  console.log(value);

  return (
    <StyledDiv>
      <HiddenInput type="file" ref={fileInputRef} onChange={handleFileUpload} />
      <AiOutlineCloudUpload
        size={50}
        color="#5e5e5e"
        onClick={handleButtonClick}
      />
      {value && <StyledImage src={value} alt="" />}
    </StyledDiv>
  );
};

export default ImageUpload;

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 208px;
  border: dashed 2px;
  color: #8c8c8c;
  padding: 20px;
  transition: all 0.3s;
  border-radius: 50%;
  margin: 0 auto;

  border-color: var(--border-neutral-300);
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

const StyledImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 210px;
  height: 210px;
  border-radius: 50%;
`;
