import React from 'react';

const Tambah = () => {
  return (
    <div className="w-1/2 flex justify-center items-start px-4 py-20 bg-gray-300">
      <div className="w-full flex flex-col gap-4 bg-white rounded-md p-4">
        <Input label="Name" type="text" placeholder="Name" value={state.name} />
        <Input
          label="Email"
          type="Email"
          placeholder="Email"
          value={state.email}
        />
        <SelectIput
          value={state.status}
          label="Status"
          placeholder="Role"
          optionList={[
            { value: '1', label: 'Active' },
            { value: '2', label: 'Inactive' },
          ]}
        />
        <SelectIput
          value={state.role}
          label="Role"
          placeholder="Role"
          optionList={[
            { value: '1', label: 'Admin' },
            { value: '2', label: 'User' },
          ]}
        />
        <button className="w-28 text-white rounded-md p-2 text-center bg-green-600 float-right">
          Add User
        </button>
      </div>
    </div>
  );
};

export default Tambah;
