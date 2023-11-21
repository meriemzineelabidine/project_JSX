
import './App.css';
import Getdescription from './Description';
import GetImage from './component/Image';
import Getname from './component/Name';
import Getprice from './component/Price';
import Card from 'react-bootstrap/Card';

function App() {
  return (
  <div className='cardProduit'>
     <Card style={{ width: '18rem' }}>
     <GetImage></GetImage>
      <Card.Body>
        <Card.Title><Getname></Getname></Card.Title>
        <Card.Text>
        <Getprice></Getprice>
        <Getdescription></Getdescription>
        </Card.Text>
       
      </Card.Body>
    </Card>
  
  </div>
  );
}

export default App;
