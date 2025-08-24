import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store/store';

export const ReportFormHook: React.FC = () => {
  const aData = useSelector((state: RootState) => state.form.submittedData);
  console.log('ReportFormHook', aData);

  if (aData.length === 0) return null;

  return (
    <div className="report">
      <h3>New input data:</h3>
      {aData.map((data, i) => (
        <div key={i}>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Email: {data.mail}</p>
          <p>Gender: {data.gender}</p>
          <p>Password: OK</p>
          <p>Accept: OK</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
