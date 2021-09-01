import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, _props) {
    // Customize the root error boundary for your microfrontend here.
    return (
      <div>
        Something went wrong {info.componentStack}: {err.message}
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
