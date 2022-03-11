import { debounce } from 'lodash';
import { useState } from 'react';
import AppForm from './AppForm';
import AppList from './AppList';
import AppListInfo from './AppListInfo';
import AppSearch from './AppSearch';

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      title: 'Item One',
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 1,
      title: 'Another Item',
      description: 'lorem ipsum dolor sit amet',
    },
  ]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const deleteItem = itemId => {
    let filtered = items.filter(({ id }) => id !== itemId);
    setItems(filtered);
  };

  const setSearchQuery = e => {
    setQuery(e.target.value);
    console.log('etv: ', e.target.value, ' qry: ', query);
  };

  const filteredItems = getFilteredItems(query, items);
  const debouncedOnChange = debounce(setSearchQuery, 200);

  // Persist using local storage
  // Add deletion

  return (
    <div className='container-fluid ps-md-0'>
      <div className='row g-0'>
        <AppForm
          formData={formData}
          setFormData={setFormData}
          items={items}
          setItems={items => setItems(items)}
          error={error}
          setError={err => setError(err)}
        />
        <div className='col-md-6 col-lg-6'>
          <AppSearch query={query} debouncedOnChange={debouncedOnChange} />
          <AppList deleteItem={id => deleteItem(id)} items={filteredItems} />
          <AppListInfo
            visible={items?.length < 1}
            severity='info'
            info={'No items yet'}
          />
          <AppListInfo
            visible={
              query?.length > 1 &&
              filteredItems?.length < 1 &&
              items?.length > 0
            }
            severity='info'
            info={'No items found'}
          />
        </div>
      </div>
    </div>
  );
}

function getFilteredItems(query, items) {
  console.log('in getfiltereditems');
  if (query?.length > 1) {
    return items?.filter(item =>
      JSON.stringify(item).toLowerCase().includes(query.toLowerCase())
    );
  } else {
    return items;
  }
}

export default App;
