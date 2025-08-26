import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store/store';

export const ReportFormHook: React.FC = () => {
  const aData = useSelector((state: RootState) => state.form.submittedData);

  if (aData.length === 0) return null;

  return (
    <div className="report">
      {aData.map((data, i) => (
        <div className="report-item" key={i}>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Email: {data.mail}</p>
          <p>Gender: {data.gender}</p>
          <p>Password: OK</p>
          <p>Accept: OK</p>
        </div>
      ))}
    </div>
  );
};
