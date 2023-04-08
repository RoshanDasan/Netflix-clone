import Banner from '../../components/Banner/Banner';
import NavBar from '../../components/NavBar/NavBar';
import RowPost from '../../components/RowPost/RowPost';
import {originals, action, romantic} from '../../URLs'

function Home() {
  return (
    <div className="App">
     <NavBar />
     <Banner/>
     <RowPost url={originals} title='Netflix originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={romantic} title='Romatic' isSmall/>


    </div>
  );
}

export default Home;
