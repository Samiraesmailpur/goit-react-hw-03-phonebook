import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #000;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #7b68ee;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  min-width: 100px;
  cursor: pointer;

  :hover {
    background-color: #7964ec;
  }
`;

export { Form, Input, Button };
