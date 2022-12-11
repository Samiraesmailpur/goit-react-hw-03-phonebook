import styled from 'styled-components';

const Contacts = styled.ul`
  width: 400px;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  padding: 15px;
  justify-content: space-between;
`;

const ContactText = styled.p`
  margin-right: 10px;
`;

const DeleteBtn = styled.button`
  background-color: #d3d3d3;
  display: inline-block;
  border: navajowhite;
  padding: 5px 5px;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background-color: #ccc;
  }
`;

export { Contacts, ContactItem, ContactText, DeleteBtn };
