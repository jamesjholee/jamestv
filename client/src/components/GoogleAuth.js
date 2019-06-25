import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '128776665272-qa7uv6ackeiqvo1sqb3jcbq2rmvsed10.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }

  render() {
    return <div>google Auth</div>;
  }
}

export default GoogleAuth;
