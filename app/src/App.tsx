import React from 'react';
import {fetchPhotos} from "./store/services/services";



function App() {
  const {data: photos} = fetchPhotos.useFetchPhotosQuery(5)



  return (
    <div className="App">
       <h4>Photos</h4>
        <div style={{display: 'inline-block', width: '100%'}}>
        {photos?.map(photo =>
            <div key={photo.id} style={{width: '30%', float: 'right', margin: '15px'}}>
                <img src={photo.url} alt={photo.title} style={{maxWidth: '100%', height: 'auto'}}/>
                <p>{photo.title}</p>
            </div>
        )}
        </div>
    </div>
  );
}

export default App;
