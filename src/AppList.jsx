import React from 'react';

export default function AppList({ items, deleteItem }) {
  return (
    <div className='d-flex align-items-start py-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 col-lg-8 mx-auto'>
            {items?.map(({ id, title, description }) => (
              <div
                key={id}
                className='rounded-3 border-3 border-start border-info my-3'
              >
                <div className='card w-100'>
                  <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='card-text'>{description}</p>
                    <button
                      onClick={() => deleteItem(id)}
                      className='btn btn-primary'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
