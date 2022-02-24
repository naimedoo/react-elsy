import Personne from './Components/Personne';
import './Components/Personne.css';

export default function App() {
    return (     
    <div>
        <h1> Bonjour !</h1>
        <ul>
          <li>exemple</li>
          <li id="salut">salut</li>
        </ul>
        <Personne name="Jean"  />
        <Personne name="elsa"  />
      </div>
    )
}

