import {Fragment} from 'react';
import Main from './Pages/Main_Page/Main';
import Footer from './Pages/Footer/Footer';
import Content from './Pages/Content/Content';

function App () {
  return (
    <Fragment>
      <Main />
      <Content />
      <Footer />
    </Fragment>
  );
}

export default App;
