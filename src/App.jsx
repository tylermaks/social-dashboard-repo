import './Assets/Styles/App.scss';
import Header from './Components/Header';
import SummaryCard from './Components/SummaryCard';
import DailyCard from './Components/DailyCard';

function App() {
  return (
    <main className='app'>
      <Header />
      <SummaryCard />
      <DailyCard />
    </main>
  );
}

export default App;
