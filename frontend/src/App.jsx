
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ItemList from './component/ItemList'
import AddItem from './component/AddItem'
import EditItem from './component/EditItem'

function App() {
  

  return (
    <>

    <Routes>
      <Route path='/' element={<ItemList/>}/>
      <Route path='/add' element={<AddItem/>}/>
      <Route path='/edit' element={<EditItem/>}/>
    </Routes>
      
    </>
  )
}

export default App
