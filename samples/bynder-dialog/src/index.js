import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@contentful/forma-36-react-components';
import { init, locations } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.css';
import extension from '../extension.json';

class Dialog extends React.Component {
  componentDidMount() {
    this.loadBynderScript();
    this.props.sdk.window.updateHeight();
    document.addEventListener('BynderAddMedia', e => {
      var assetIds = e.detail.map(asset => asset.id);
      this.props.sdk.close(assetIds || []);
    });
  }

  loadBynderScript = () => {
    const script = document.createElement('script');
    script.src =
      'https://d8ejoa1fys2rk.cloudfront.net/modules/compactview/includes/js/client-1.1.0.min.js';
    script.async = true;

    document.body.appendChild(script);
  };

  render() {
    return (
      <div style={{ height: 800 }}>
        <div
          id="bynder-compactview"
          data-assetTypes="image,video"
          data-autoload="true"
          data-button="Load media from bynder.com"
          data-collections="true"
          data-folder="bynder-compactview"
          data-fullScreen="true"
          data-header="true"
          data-language="en_US"
          data-mode="multi"
          data-zindex="300"
          data-defaultEnvironment="https://contentful.getbynder.com"
        />
      </div>
    );
  }
}

function Field({ sdk }) {
  const [ids, setIds] = useState(sdk.field.getValue() || []);

  useEffect(() => {
    sdk.window.updateHeight();
  });

  return (
    <div>
      <div className="logo" />
      <Button
        buttonType="muted"
        onClick={() => {
          sdk.dialogs
            .openExtension({
              id: extension.id,
              width: 1000,
            })
            .then(ids => {
              console.log(ids);
              sdk.field.setValue(ids);
              setIds(ids);
            });
        }}
      >
        Open Bynder
      </Button>
      <ul>
        {ids.map(id => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}

init(sdk => {
  if (sdk.location.is(locations.LOCATION_DIALOG)) {
    ReactDOM.render(<Dialog sdk={sdk} />, document.getElementById('root'));
  } else {
    ReactDOM.render(<Field sdk={sdk} />, document.getElementById('root'));
  }
});
