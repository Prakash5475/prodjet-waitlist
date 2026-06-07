import { useState } from "react";
import UserTypePage from "./pages/UserTypePage";
import FormPage from "./pages/FormPage";
import SuccessScreen from "./components/SuccessScreen";

function App() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="app-container">
      <div className="card">
        {step === 1 && (
          <UserTypePage
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            onContinue={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <FormPage
            userType={selectedType}
            onSuccess={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <SuccessScreen />
        )}
      </div>
    </div>
  );
}

export default App;