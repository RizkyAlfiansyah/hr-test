import { useForm } from './hooks/useForm';
import Dashboard from './pages/dashboard';

function App() {
  const { state, handleChangeForm } = useForm({
    name: '',
    email: '',
    status: '',
    role: '',
  });

  return <Dashboard />;
}

export default App;
