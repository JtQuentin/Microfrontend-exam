import Header from '../../sharedComponent/shared/Header/header';
import Footer from '../../sharedComponent/shared/Footer/footer';
import LocalButton from './Button';
import Card from '../component/card';
import UploadFile from '../component/uploadFile';

const App = () => (
  <div className="d-flex flex-column min-vh-100">
    <Header title="Client view"/>
    <div className="flex-grow-1">
      <Card title="Unique component" />
      <UploadFile />
      <h1>Basic Host-Remote</h1>
      <h2>Remote</h2>
      <LocalButton />
    </div>
    <Footer />
  </div>
);

export default App;
