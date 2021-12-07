import logo from './logo.svg';
import './App.css';
import foto from './risorse/foto.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
      <img className="fotoHead" src={foto}/>
      <h1>Roberto Tirrito</h1>
      <h2>Descrizione</h2>
      <p>Classe 1988, presenterà il suo romanzo d’esordio “La seconda era
spaziale”. Da sempre appassionato di letteratura, inizia a scrivere durante l'adolescenza e
ancor prima sviluppa la sua vena creativa.
Perché scrive questo romanzo?
“Ho scritto questo libro perché avevo necessità di esprimere un concetto balenato in mente
mentre stavo in campagna e ho preso subito degli appunti su un’agendina.
Ho disegnato una libellula e un drone. Mi sono chiesto se avessimo, noi esseri umani,
sempre imitato la natura o se fosse una qualità intrinseca nell’evoluzione.
Siamo portati a emulare ciò che vediamo oppure è un atteggiamento già scritto come il
codice genetico?”</p>

        <p></p>
      </header>


      <div className="body">
        <div className="cont">
        <h3>esperienze lavorative</h3>
          <p>Ho praticato diversi sport fin da piccolo, spinto dalla curiosità di imparare le dinamiche peculiari di 
ognuno e cercare di impiegarle trasversalmente. Ho iniziato a praticare più assiduamente il calcio 
a 5 partecipando a tornei amatoriali fino alla novità del rugby nel mio paese, alla quale mi sono 
appassionato sia come giocatore che non.
Grazie alla mie esperienza musicale sono sempre stato in gruppo, qualità fondamentale in ogni sport 
di squadra; motivo per cui sono sempre stato scelto per le categorie u16, facendo spogliatotoio e 
accompagnando i ragazzi fino a che non sono diventati miei compagni di squadra.</p>
        </div>

        <div className="cont">
        <h3>lingue</h3>
          <p>Italiano, inglese</p>
        </div>

        <div className="cont">
        <h3>hobby</h3>
          <p>Ho sempre contribuito con le società appieno, avendo una cura particolare della loro immagine, 
contribuendo a svilupparle in una direzione fin troppo sottovalutata del nostro sport anche a livello federale.
Ho già fatto il grafico per i Tauri e tutto il visual della Nissa Rugby fino alla stagione 19/20.
Il caso ha voluto che per la grafica dell’ultimo pallone (2020-2021) della federazione siciliana, l’azienda 
che avrebbe poi stampato i palloni chiese proprio a me una mano con le grafiche standard; io presentai 
comunque una mia idea e il consiglio scelse proprio quella link</p>
        </div>

      </div>
      <div className="contattami">
      <h2>contattami</h2>
      <p>Oggetto</p>
      <textarea></textarea>
      <p>Messaggio</p>
      <textarea id="mess"></textarea>

      </div>
      <div className="footer">
      mail
      </div>
    </div>

  );
}

export default App;
