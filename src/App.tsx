import "./App.css";
import { FormCard } from "./components/FormCard";
import { ProfileForm } from "./components/ProfileForm";

function App() {
  return (
    <div className="my-10 mx-auto w-2/3 max-w-xl">
      <FormCard title="プロフィール" content={<ProfileForm />} />
    </div>
  );
}

export default App;
