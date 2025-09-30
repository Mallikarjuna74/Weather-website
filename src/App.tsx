
import { WeatherProvider } from "./context/WeatherProvider";
import Background from './components/layout/Background';


function App() {
  return (
    <WeatherProvider>
      <Background />
    </WeatherProvider>
  )
}

export default App;
