import { MdCloudUpload } from "react-icons/md";

import { useRef } from 'react';
import { useFileUpload } from '../utils/useFileUpload';
import styled from 'styled-components';

const ImageUpload = ({
  onFileUrlChange,
  value
}) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
      fileInputRef.current?.click();
  };

  const handleFileUpload = useFileUpload({ onFileUrlChange });

  console.log(value);

  return (
      <StyledDiv>
          <HiddenInput 
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
          />
          <MdCloudUpload 
              size={50} 
              onClick={handleButtonClick}
          />
          {value && (
              <StyledImage 
                  src={value}
                  alt=''
              />
          )}
      </StyledDiv>
  )
}

export default ImageUpload

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 20px;
  transition: all 0.3s;
  border: 2px dashed;
  border-color: var(--border-neutral-300); 
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const HiddenInput = styled.input`
  visibility: hidden;
`

const StyledImage = styled.img`
  position: absolute;
  inset: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
