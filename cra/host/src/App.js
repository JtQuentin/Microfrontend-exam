import React from 'react';
import Header from '../../sharedComponent/shared/header';
import Footer from '../../sharedComponent/shared/footer';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Header />
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <Footer />
  </div>
);

export default App;
