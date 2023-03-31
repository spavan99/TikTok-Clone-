import React from 'react';
import './videoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@silviopavan</h3>
        <p>Descrição do VIDEO</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter_icon" />
          <div className="videoMusicFooter__text">
            <p>musica - titulo da musicia ......</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter_record"
        alt="Imagem do vinil"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
