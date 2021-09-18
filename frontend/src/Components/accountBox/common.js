import styled from "@emotion/styled";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${props => props.type === "top" ? "10px" : "0px"};

  @media screen and (max-width: 320px){
      margin-top: -20px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  align-self: ${props => props.type === "right" && "flex-end"};
  text-decoration: ${props => props.type === "right" ? "underline" : "none"};
  color: #111;
  &:hover{
      color: ${props => props.type === "right" ? "#00A19D" : "#111"}
  }
`;

export const BoldLink = styled.a`
  font-size: 15px;
  color: #1CAAB4;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  margin: 0 2px;
  &:hover{
      color: #3DB2FF;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 15px;
  height: 42px;
  background: #EFEFEF;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  font-size: 14px;
  font-weight: bold;
  &::placeholder {
    color: #111;
    font-weight: bold;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
    font-weight: bold;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px;
  outline: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  transition: all, 240ms ease-in-out;
  background: rgb(255,118,117);
  background: linear-gradient(90deg, rgba(255,118,117,1) 20%, rgba(255,163,117,1) 100%, rgba(0,212,255,1) 100%);
  &:hover {
    filter: brightness(1.03);
  }
`;