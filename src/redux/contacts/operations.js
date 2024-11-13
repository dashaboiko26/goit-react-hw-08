import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { toast } from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      toast.success("Contact added!");
      return data;
    } catch (error) {
      toast.error("Failed to add Contact!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      toast.success("Contact deleted!");
      return data;
    } catch (error) {
      toast.error("Failed to delete contact!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  "contacts/updateContacts",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success("Contact updated succsessfully!");
      return data;
    } catch (error) {
      toast.error("Failed to update contact!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
