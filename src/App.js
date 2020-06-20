import React from 'react';
import './css/App.scss';
import './css/skeleton.css';
import './css/normalize.css';




function App() {
  return (
    <div className='container'>
      <div className='input'>
        <input type='search' id='filter' name='filter' placeholder='Filter by author...'/>
      </div>
      <div className='row'>
        <div className='four columns post'>
          <h3>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
          <p>Quia et suscipit suscipit recusandae consequuntur
              expedita et cum reprehenderit molestiae ut ut quas
              totam nostrum rerum est autem sunt rem eveniet architecto</p>
          <p className='author'>Leanne Graham</p>
        </div>

        <div className='four columns post'>
          <h3>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
          <p>Quia et suscipit suscipit recusandae consequuntur
              expedita et cum reprehenderit molestiae ut ut quas
              totam nostrum rerum est autem sunt rem eveniet architecto</p>
          <p className='author'>Leanne Graham</p>
        </div>

        <div className='four columns post'>
          <h3>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
          <p>Quia et suscipit suscipit recusandae consequuntur
              expedita et cum reprehenderit molestiae ut ut quas
              totam nostrum rerum est autem sunt rem eveniet architecto</p>
          <p className='author'>Leanne Graham</p>
        </div>
      </div>

      <div className='row'>
        <div className='four columns post'>
          <h3>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
          <p>Quia et suscipit suscipit recusandae consequuntur
              expedita et cum reprehenderit molestiae ut ut quas
              totam nostrum rerum est autem sunt rem eveniet architecto</p>
          <p className='author'>Leanne Graham</p>
        </div>

        <div className='four columns post'>
          <h3>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
          <p>Quia et suscipit suscipit recusandae consequuntur
              expedita et cum reprehenderit molestiae ut ut quas
              totam nostrum rerum est autem sunt rem eveniet architecto</p>
          <p className='author'>Leanne Graham</p>
        </div>

        <div className='four columns post'>
          <h3>Sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
          <p>Quia et suscipit suscipit recusandae consequuntur
              expedita et cum reprehenderit molestiae ut ut quas
              totam nostrum rerum est autem sunt rem eveniet architecto</p>
          <p className='author'>Leanne Graham</p>
        </div>
      </div>


    </div>
  )
}



fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
export default App;
