import React, { useState } from 'react';
import './App.css';
import { postAPI } from './API-options';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AppSub from './AppSub';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

function App() {

  const [value, setValue] = useState('');
  let [options, setOptions] = useState([]);
  let [open, setOpen] = useState(false)

  const getSuggestions = (e) => {
    // setValue(postAPI.postQuery(e.currentTarget.value));
    // setOptions(postAPI.postQuery(e.currentTarget.value));
    postAPI.postQuery(e.currentTarget.value)
    .then(response => response.json())
    .then(result => setOptions(result.suggestions))
    .then(console.log(options))
     
    setValue(e.currentTarget.value);
    setOpen(true);
    console.log(value);
    
  }

  return (
    <div className="App">
      <h2>Тестовое задание CatCode</h2>
      <h4>Выполнил Сарсенов Муратбек</h4>
      <div className={"form-group"}>
        <input type="text" value={value} onChange={getSuggestions} />
        {open && options.length > 0 &&
        <ul className={"list-group"}>
          {options.map(option =>
            <li className={"list-group-item"} onClick={(e) => {
              setOpen(false);
              setValue(option.value)}} >         
              {option.value}
            </li>
          )}
        </ul>
        }        
       
      </div>

    </div>
  );
}

export default App;


{/* <Autocomplete
        inputValue={value}
        onInputChange={getSuggestions}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        freeSolo
        id="free-solo-2-demo"
        
        options={options.map((option) => option.value)}
        getOptionSelected={(option, value) => option = value}
        // options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
        /> */}