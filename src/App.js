import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={222}
          shares={333}
          name="SilvioPavan"
          description="Brecker o goleiro"
          music="musica epica"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
        />

        <Video
          likes={444}
          messages={555}
          shares={666}
          name="spavan"
          description="Bird olhando para a camara"
          music="Clap your hands"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b4977d1da"
        />
      </div>
    </div>
  );
}

export default App;
