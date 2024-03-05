import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Button from '@material-ui/core/Button';
import JSONInput from 'react-json-editor-ajrm/index';
import locale from 'react-json-editor-ajrm/locale/en';
import Loading from '../components/Loading';

const SiteConfig = () => {
  const [loading, setLoding] = useState(true);
  const [JsonData, setJson] = useState({ Status: 'Loading...' });

  useEffect(() => {
    instance
      .get('backend_config/')
      .then((res) => {
        setJson(res.data);
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  function handleSubmit() {
    console.log(JsonData);
    setLoding(true);
    instance
      .put('backend_config/', JsonData)
      .then(window.alert('Config updated successfully'))
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ margin: '8%', maxHeight: '100%', width: '80%' }}>
          <JSONInput
            placeholder={JsonData} // data to display
            onChange={(e) => setJson(e.jsObject)}
            locale={locale}
            colors={{
              string: '#DAA520', // overrides theme colors with whatever color value you want
            }}
            width="100%"
            height="500px"
          />
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            style={{ marginTop: '10px' }}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </div>
      )}
    </div>
  );
};

export default SiteConfig;
