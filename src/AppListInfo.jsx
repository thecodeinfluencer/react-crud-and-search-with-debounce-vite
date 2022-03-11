import React from 'react';

export default function AppListInfo({ info, severity, visible }) {
  return (
    <div className={`infobox d-${visible ? 'flex' : 'none'} align-items-start`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 col-lg-8 mx-auto'>
            <div
              className={`rounded-3 border-3 border-start border-${severity} my-3`}
            >
              <div className={`alert alert-${severity}`}>{info}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
