import { useState, useEffect } from 'react';
import './App.css';
import { CustomCard as Card } from './components/card';
import { CustomNavbar as Navbar } from './components/navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [theme, setTheme] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
      .then((res) => res.json())
      .then((res) => setPokemons(res.results));
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: theme ? 'light' : 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar darkToggle={theme} onToggle={() => setTheme(!theme)} />
        <div className='flex justify-center h-screen p-10'>
          {!!!pokemons ? (
            'loading'
          ) : (
            <div className='grid gap-4 grid-cols-3'>
              {pokemons.map((item: any, index: number) => (
                <Card name={item.name} url={item.url} key={index} />
              ))}
            </div>
          )}
        </div>
      </ThemeProvider>
    </>
  );
}
export default App;
