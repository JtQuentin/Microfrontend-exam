import Footer from '../../sharedComponent/shared/footer';
import Header from '../../sharedComponent/shared/header';
import LocalButton from './Button';

const App = () => (
  <div>
    <Header/>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <Footer />
  </div>
);

export default App;
