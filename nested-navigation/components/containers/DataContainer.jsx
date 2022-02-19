import React from 'react';
import { Loader } from '../common/Loader';

function DataContainer({ dataSource, dataRenderer }) {
  const { loading, error, data } = dataSource;
  const { isComponent = false, Renderer } = dataRenderer;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        <h3>Error</h3>
        <p>{error.message}</p>
      </div>
    );
  }
  return isComponent ? <Renderer data={data}></Renderer> : Renderer(data);
}

export { DataContainer };
