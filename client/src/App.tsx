import './App.css'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { saveAs } from 'file-saver'
import { useRef } from 'react'
import store from './app/store'
function App() {

  const componentToPrint = useRef(null);






  return (
    <Provider store={store}>
      <div>
        <video loop autoPlay muted src="../src/assets/film.mp4"></video>
        <Outlet />
      </div>
    </Provider>
  );

}

export default App;
