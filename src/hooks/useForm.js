import { useState } from 'react';

export const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const _handleFormChange = (event) => {
    const { value, name } = event.target;

    setState((p) => ({
      ...p,
      [name]: value,
    }));
  };

  return {
    state,
    setForm: setState,
    handleFormChange: _handleFormChange,
    resetForm: () => setState(initialState),
  };
};
