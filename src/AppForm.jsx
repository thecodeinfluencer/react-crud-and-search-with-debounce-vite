import React from 'react';
import AppListInfo from './AppListInfo';

export default function AppForm({
  items,
  setItems,
  formData,
  setFormData,
  error,
  setError,
}) {
  const validateAndSubmit = () => {
    if (!formData.title || !formData.description) {
      setError('Please provide all values');
      return;
    }

    for (let i = 0; i < items.length; i++) {
      if (items[i].title == formData.title) {
        setError('That title has already been used');
        return;
      }
    }

    setItems([
      ...items,
      {
        id: Math.random() * 1000,
        title: formData.title,
        description: formData.description,
      },
    ]);

    setFormData({
      title: '',
      description: '',
    });

    setError('');
  };

  return (
    <div className='col-md-6 col-lg-6'>
      <div className='d-flex align-items-start pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9 col-lg-8 mx-auto'>
              <h3 className='login-heading mb-4'>Add Item</h3>
              <form>
                <div className='form-floating mb-3'>
                  <input
                    value={formData.title}
                    onChange={e => {
                      setFormData({
                        ...formData,
                        title: e.target.value,
                      });
                      setError('');
                    }}
                    type='title'
                    className='form-control'
                    id='floatingTitle'
                    placeholder='Item Title'
                  />
                  <label htmlFor='floatingTitle'>Title</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    value={formData.description}
                    onChange={e => {
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      });
                      setError('');
                    }}
                    type='description'
                    className='form-control'
                    id='floatingDescription'
                    placeholder='Description'
                  />
                  <label htmlFor='floatingDescription'>Description</label>
                </div>
                <div className='d-grid'>
                  <button
                    className='btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2'
                    onClick={e => {
                      e.preventDefault();
                      validateAndSubmit();
                    }}
                  >
                    Add Item
                  </button>
                </div>
              </form>
            </div>

            {/*  */}
          </div>
        </div>
      </div>

      <AppListInfo visible={error} severity='danger' info={error} />

      <div className='d-flex align-items-start pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9 col-lg-8 mx-auto mt-4'>
              <div className='card w-100'>
                <div className='card-body'>
                  <h4 className='card-title'>Tech Used</h4>
                  <span className='card-text'>
                    <ul>
                      <li>
                        Used <code>vite.js</code> for project setup
                      </li>
                      <li>
                        Functional components using React Hooks{' '}
                        <code>useState</code>, <code>useEffect</code> etc
                      </li>
                      <li>
                        Implemented search using <code>debounce</code> from{' '}
                        <code>lodash</code>
                      </li>
                      <li>
                        Used css <code>prefers-color-scheme</code> (Try to
                        switch dark/light theme on your system)
                      </li>
                    </ul>
                  </span>

                  {/* <a href='#' className='btn btn-primary'>
                  See Profile
                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
