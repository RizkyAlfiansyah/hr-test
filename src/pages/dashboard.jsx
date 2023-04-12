import { useState } from 'react';
import Input from '../components/input';
import SelectIput from '../components/select';
import { useForm } from '../hooks/useForm';

function App() {
  const [data, setData] = useState([]);
  const { state, handleFormChange } = useForm({
    name: '',
    email: '',
    status: '',
    role: '',
  });

  const _handleSubmit = () => {
    localStorage.setItem('data', JSON.stringify(state));
  };

  return (
    <div className="w-full h-screen flex bg-slate-200">
      <div className="w-1/2 flex justify-center items-start px-4 py-20 bg-gray-300">
        <div className="w-full flex flex-col gap-4 bg-white rounded-md p-4">
          <Input
            name="name"
            label="Name"
            type="text"
            placeholder="Name"
            value={state.name}
            onChange={handleFormChange}
          />
          <Input
            name="email"
            label="Email"
            type="Email"
            placeholder="Email"
            value={state.email}
            onChange={handleFormChange}
          />
          <Input
            name="status"
            label="Status"
            type="text"
            placeholder="Statue"
            value={state.status}
            onChange={handleFormChange}
          />
          <Input
            name="role"
            label="Role"
            type="text"
            placeholder="Role"
            value={state.role}
            onChange={handleFormChange}
          />

          <button
            className="w-28 text-white rounded-md p-2 text-center bg-green-600 float-right"
            onClick={_handleSubmit}
          >
            Add User
          </button>
        </div>
      </div>
      <div className="w-1/2 flex px-4 py-20 flex-col gap-4 justify-start items-start overflow-auto">
        <div className="w-full h-48 bg-white rounded-md p-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Status</th>
                <th className="text-left">Role</th>
                <th className="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>JohnDoe@gmail.com</td>
                <td>Active</td>
                <td>Admin</td>
                <td className="flex gap-2">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white rounded-md px-2 py-1">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
