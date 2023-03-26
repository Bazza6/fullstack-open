import { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'https://restcountries.com/v3.1/name/'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState([])



  useEffect(() => {
    axios.get(`${url}${input}`)
      .then(res =>
        setResult(res.data)
      )
  }, [input])

  return (
    <div>
      <h1>Countries</h1>
      find countries
      <input
        placeholder='Italy, Spain...'
        value={input}
        onChange={(e => setInput(e.target.value))}
      />
      {(result.length >= 10) &&
        <p>Too many coutries...</p>
      }
      {(result.length > 1 & result.length < 10) &&
        <ul>
          {result.map(country =>
            <li>
              {country.name.common}
            </li>
          )}
        </ul>
      }
      {(result.length === 1) &&
        <>
          <h3>{result[0].name.common}</h3>
          <p>capital: {result[0].capital[0]}</p>
          <p>area: {result[0].area} m2</p>
          languages:<ul>
            {Object.values(result[0].languages).map(lan => <li>{lan}</li>)}
          </ul>
          <img src={result[0].flags.png} alt={`flag of ${result[0].name.common}`}></img>
        </>

      }
    </div >
  );
}

export default App;
