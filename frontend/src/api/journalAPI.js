const BASE_URL = "http://localhost:8000/";

const getInit = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const tryCatchFetch = async (url, init) => {
  try {
    let response = await fetch(url, init);
    if (response.ok) {
      if (response.status !== 204) {
        let data = await response.json();
        return data;
      } else {
        return { success: true };
      }
    }
  } catch (error) {
    console.error(":ERR:", error);
    return null;
  }
};

const getJournals = async () => {
  let url = `${BASE_URL}api/journals/`;
  return await tryCatchFetch(url, getInit());
};

const getJournalById = async (journalId) => {
  let url = `${BASE_URL}api/journals/${journalId}/`;
  return await tryCatchFetch(url, getInit());
};

const createJournal = async (newJournal) => {
  let url = `${BASE_URL}api/journals/`;
  let init = getInit();
  init["method"] = "POST";
  init["body"] = JSON.stringify(newJournal);
  return await tryCatchFetch(url, init);
};

const deleteJournal = async (journalId) => {
  let url = `${BASE_URL}api/journals/${journalId}/`;
  let init = getInit();
  init["method"] = "DELETE";
  return await tryCatchFetch(url, init);
};

const updateJournal = async (journalId, updatedJournal) => {
  let url = `${BASE_URL}api/journals/${journalId}/`;
  let init = getInit();
  init["method"] = "PUT";
  init["body"] = JSON.stringify(updatedJournal);
  return await tryCatchFetch(url, init);
};

const myExports = {
  getJournals,
  getJournalById,
  createJournal,
  deleteJournal,
  updateJournal,
};

export default myExports;
