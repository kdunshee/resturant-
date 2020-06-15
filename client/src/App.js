import React, {useState, useEffect} from 'react';
import axios from 'axios'
import MenuList from './components/MenuList'
import MenuForm from './components/MenuForm'
import './App.css';

function App() {
const [menus, setMenu] = useState([]);


  function addMenu(name) {
    console.log("add item called with: ", name)
    axios.post('/api/menus',{name})
    .then(res => {
      console.log(res)
      setMenu([res.data, ...menus]);

    }).catch(err => {
      console.log(err)

    })
  }

  function deleteMenu(id) {
    axios
      .delete(`/api/menus/${id}`)
      .then((res) => {
        const filterMenus = menus.filter((m) => m.id !== res.data.id);
        setMenu(filterMenus);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  useEffect(() => {
    axios
      .get("/api/menus")
      .then((res) => {
        console.log(res.data);
        setMenu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      
      <MenuForm addMenu = {addMenu}/>
      <h1>Check out da Menus</h1>
      <MenuList deleteMenu={deleteMenu} menus={menus} />
      
    </div>
  );
}

export default App;
