import Footer from '../../sharedComponent/shared/footer';
import Header from '../../sharedComponent/shared/header';
import LocalButton from './Button';
import Card from '../component/card';

const App = () => (
  <div>
    <Header/>
    <Card title="Unique component" />
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <Footer />
  </div>
);

export default App;
