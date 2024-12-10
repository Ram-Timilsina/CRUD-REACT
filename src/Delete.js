import axios from "axios";

export const deleteItem = async (id, refreshData) => {
  try {
    await axios.delete(
      `https://67567a9d11ce847c992ce542.mockapi.io/CRUD/${id}`
    );
    if (typeof refreshData === "function") {
      refreshData(); // Ensure refreshData is a function before calling it
    }
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};
