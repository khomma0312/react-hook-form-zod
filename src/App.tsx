import "./App.css";
import { FormCard } from "./components/FormCard";
import { ProfileForm } from "./components/ProfileForm";

function App() {
  return (
    <div className="my-3 mx-auto w-1/2">
      <FormCard title="プロフィール" content={<ProfileForm />} />
    </div>
  );
}

export default App;
