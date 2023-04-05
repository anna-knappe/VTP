import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  table-layout: fixed;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border: none;
    box-sizing: border-box;
  }

  thead th {
    background-color: var(--secondary-blue);
    color: white;
    font-weight: bold;
    height: 50px;
  }

  tbody tr {
    height: 40px;
  }

  tbody tr:nth-child(odd) {
    background-color: var(--light-background);
  }

  tbody tr:nth-child(even) {
    background-color: white;
  }

  tbody tr:hover {
    background-color: #f0f0f0;
    transition: background-color 0.2s;
  }
`;

const Table = ({ children, className, ...props }) => {
    return (
      <StyledTable className={className} {...props}>
        {children}
      </StyledTable>
    );
  };

export default Table;
