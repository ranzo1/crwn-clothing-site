import styled from "styled-components";

export const ContactPreviewContainer = styled.div`
  width: 50%;
  display: flex;
  text-align: center;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    align-items: center;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 30px;
`;

export const TextArea = styled.textarea`
  width: auto;
  height: 300px;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  margin-bottom: 30px;
  background-color: #f6f6f6;
  border-top: none;
  border-left: none;
  border-right: none;

  @media screen and (max-width: 800px) {
    width: auto;
    height:200px;
    margin-bottom: 30px;
  }
`;

export const ButtonContainer = styled.div`
  height: auto;
`;
