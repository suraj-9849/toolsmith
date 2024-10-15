import React from 'react';
import { useParams } from 'react-router-dom';

function DataComp() {
  const { database } = useParams();
  return <div>{database}</div>;
}

export default DataComp;
