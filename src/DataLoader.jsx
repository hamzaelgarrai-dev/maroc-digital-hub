import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  setStartups, setLoading as setLoadingStartups, setError as setErrorStartups
} from "../src/Slices/startupSlice";
import {
  setEvents, setLoading as setLoadingEvents, setError as setErrorEvents
} from "../src/Slices/eventsSlice";
import {
  setUsers, setLoading as setLoadingUsers, setError as setErrorUsers
} from "../src/Slices/usersSlice";
import {
  setMessages, setLoading as setLoadingMessages, setError as setErrorMessages
} from "./Slices/messageSlice";

function DataLoader({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllData = async () => {
      dispatch(setLoadingStartups(true));
      dispatch(setLoadingEvents(true));
      dispatch(setLoadingUsers(true));
      dispatch(setLoadingMessages(true));

      try {
        const [startupsRes, eventsRes, usersRes,messagesRes] = await Promise.all([
          axios.get("http://localhost:5000/startups"),
          axios.get("http://localhost:5000/events"),
          axios.get("http://localhost:5000/users"),
          axios.get("http://localhost:5000/messages"),
        ]);

        dispatch(setStartups(startupsRes.data));
        dispatch(setEvents(eventsRes.data));
        dispatch(setUsers(usersRes.data));
        dispatch(setMessages(messagesRes.data));
      } catch (err) {
        dispatch(setErrorStartups("Failed to load startups"));
        dispatch(setErrorEvents("Failed to load events"));
        dispatch(setErrorUsers("Failed to load users"));
        dispatch(setErrorMessages("Failed to load messages"));
      } finally {
        dispatch(setLoadingStartups(false));
        dispatch(setLoadingEvents(false));
        dispatch(setLoadingUsers(false));
        dispatch(setLoadingMessages(false));
      }
    };

    fetchAllData();
  }, [dispatch]);

  return children;
}

export default DataLoader;
