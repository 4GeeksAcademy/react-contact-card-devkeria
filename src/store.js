

export const initialStore = {
  contacts: [],
  message: null
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "setContacts":
      return { ...store, contacts: action.payload };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

// ✅ correct API URL + slug
const AGENDA_SLUG = "keria123";
const BASE_URL = "https://playground.4geeks.com/contact/";

export const loadContacts = async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}agenda/${AGENDA_SLUG}`);
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    dispatch({ type: "setContacts", payload: data });
  } catch (err) {
    console.error("Load error:", err);
  }
};

export const addContact = async (contact, dispatch) => {
  try {
    // ✅ STEP 1: create agenda if missing
    await fetch(`${BASE_URL}agenda/${AGENDA_SLUG}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([]) // empty array = new agenda
    });

    // ✅ STEP 2: add contact
    await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: contact.full_name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        agenda_slug: AGENDA_SLUG
      })
    });

    // ✅ STEP 3: reload
    loadContacts(dispatch);
  } catch (err) {
    console.error("Add error:", err);
  }
};

export const updateContact = async (contact, dispatch) => {
  try {
    await fetch(`${BASE_URL}${contact.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: contact.full_name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        agenda_slug: AGENDA_SLUG
      })
    });
    loadContacts(dispatch);
  } catch (err) {
    console.error("Update error:", err);
  }
};

export const deleteContact = async (id, dispatch) => {
  try {
    await fetch(`${BASE_URL}${id}`, {
      method: "DELETE"
    });
    loadContacts(dispatch);
  } catch (err) {
    console.error("Delete error:", err);
  }
};

