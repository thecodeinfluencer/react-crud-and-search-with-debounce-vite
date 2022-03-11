import React from 'react';
import { debounce } from 'lodash';

export default function AppSearch({ debouncedOnChange }) {
  return (
    <div className=' d-flex align-items-start pt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 col-lg-8 mx-auto'>
            <h3 className='login-heading mb-4'>Search Items</h3>
            <form>
              <div className='form-floating mb-3'>
                <input
                  onChange={debouncedOnChange}
                  type='title'
                  className='form-control'
                  id='floatingSearch'
                  placeholder='Type to search'
                />
                <label htmlFor='floatingSearch'>Search</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
