
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Danhmuc from './components/Danhmuc';
import Trangchu from './components/Trangchu';
import Gioithieu from './components/Gioithieu';
import Lienhe from './components/Lienhe';
import Menu from './components/Menu';
import Dienthoai from './components/Dienthoai';
function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='trangchu' element={<Trangchu></Trangchu>}></Route> 
        <Route path='/danhmuc' element={<Danhmuc></Danhmuc>}>
          <Route path='dienthoai' element={<Dienthoai/>}></Route>
        </Route>
        <Route path='gioithieu' element={<Gioithieu/>}></Route>
        <Route path='lienhe' element={<Lienhe/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
