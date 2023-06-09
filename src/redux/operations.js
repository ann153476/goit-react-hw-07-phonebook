import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../api/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.deleteContact(id);
      return data.id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
