import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Table from './ui/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const CustomTable = styled(Table)`
    th:nth-child(1),
    td:nth-child(1) {
      width: 260px;
    }

    th:nth-child(2),
    td:nth-child(2),
    th:nth-child(3),
    td:nth-child(3) {
      width: 180px;
    }

    th:nth-child(5),
    td:nth-child(5) {
      width: 40px;
    }
  `;



const TargetTimeframe = ({ targetTimeframeData }) => {
  const currentDate = new Date();
  const { t } = useTranslation();

  const HighlightedDate = styled.td`
    background-color: rgba(255, 0, 0, 0.6);
    color: white;
  `;

  const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    padding: 0;
    font-size: 16px;
    border-radius: 0;
    border: none;
    background-color: inherit;
    box-sizing: border-box;
  `;

  const IconColumn = styled.td`
    width: 40px;
  `;

  const IconHeader = styled.th`
    width: 40px;
  `;

  const FirstColumn = styled.td`
    width: 180px;
  `;

  const FirstHeader = styled.th`
    width: 180px;
  `;

  return (
    <>
      <h2>{t('targetTimeframeTitle')}</h2>
      <CustomTable>
        <thead>
          <tr>
            <FirstHeader>{t('target')}</FirstHeader>
            <th>{t('plannedDate')}</th>
            <th>{t('actualDate')}</th>
            <th>{t('comments')}</th>
            <IconHeader></IconHeader>
          </tr>
        </thead>
        <tbody>
          {targetTimeframeData.map((item, index) => {
            const suunniteltuDate = new Date(item.planned_date);
            const isHighlighted = suunniteltuDate < currentDate && !item.actual_date;

            return (
              <tr key={item.id}>
                <FirstColumn>{index === 0 ? <Link to="/inspection-plan">{t('inspectionPlan')}</Link> : item.goal}</FirstColumn>
                {isHighlighted ? (
                  <HighlightedDate>
                    <StyledDatePicker selected={new Date(item.planned_date)} />
                  </HighlightedDate>
                ) : (
                  <td>
                    <StyledDatePicker selected={new Date(item.planned_date)} />
                  </td>
                )}
                <td>
                  <StyledDatePicker
                    selected={item.actual_date ? new Date(item.actual_date) : null}
                  />
                </td>
                <td>{item.comments}</td>
                <IconColumn>
                  {index === 0 ? (
                    <Link to="/inspection-plan">
                      <FontAwesomeIcon icon={faFile} />
                    </Link>
                  ) : (
                    <a href={item.document_id}>{item.document_id}</a>
                  )}
                </IconColumn>
              </tr>
            );
          })}
        </tbody>
      </CustomTable>
    </>
  );
};

export default TargetTimeframe;
