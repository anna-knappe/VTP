import React from 'react';
import { useTranslation } from 'react-i18next';
import Table from './ui/Table';
import styled from 'styled-components';

const InspectionInformationWrapper = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
`;

const InspectionInformation = ({ inspectionData }) => {
  const data = inspectionData || {};
  const { t } = useTranslation();
  const colWidths = ['260px', 'calc(100% - 240px)'];

  return (
    <InspectionInformationWrapper>
      <h2>{t('inspectionInformationTitle')}</h2>
      <Table colWidths={colWidths}>
        <thead>
          <tr>
            <th>{t('subjectOfInspection')}</th>
            <th>{data.subjectOfInspection || ''}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('issue')}</td>
            <td>{data.issue || ''}</td>
          </tr>
          <tr>
            <td>{t('riskArea')}</td>
            <td>{data.riskArea || ''}</td>
          </tr>
          <tr>
            <td>{t('officialDuration')}</td>
            <td>{data.officialDuration || ''}</td>
          </tr>
          <tr>
            <td>{t('totalDuration')}</td>
            <td>{data.totalDuration || ''}</td>
          </tr>
          <tr>
            <td>{t('participants')}</td>
            <td>{data.participants || ''}</td>
          </tr>
          <tr>
            <td>{t('responsibleInspector')}</td>
            <td>{data.responsibleInspector || ''}</td>
          </tr>
          <tr>
            <td>{t('office')}</td>
            <td>{data.office || ''}</td>
          </tr>
          <tr>
            <td>{t('department')}</td>
            <td>{data.department || ''}</td>
          </tr>
          <tr>
            <td>{t('subjectContactInformation')}</td>
            <td>{data.subjectContactInformation || ''}</td>
          </tr>
          <tr>
            <td>{t('inspectionContactPerson')}</td>
            <td>{data.inspectionContactPerson || ''}</td>
          </tr>
        </tbody>
      </Table>
    </InspectionInformationWrapper>
  );
};

export default InspectionInformation;
