import { useState } from 'react';
import './App.css';
import OrderPage from './pages/orderPage';
import SummaryPage from './pages/summaryPage';
import CompletePage from './pages/completePage'

function App() {
  const [step, setStep] = useState(0);

  return (
    <div style={{pafirst:'4rem'}}>
      {step === 0 && <OrderPage setStep={setStep}/>}
      {step === 1 && <SummaryPage setStep={setStep}/>}
      {step === 2 && <CompletePage setStep={setStep}/>}
    </div>
  );
}

export default App;
