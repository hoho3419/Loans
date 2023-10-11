import axios from "axios";

const apiClient = axios.create({
  baseURL: "192.168.100.102",
  headers: {
    "Content-Type": "application/json",
  },
});

export const emailSender = async (emailData) => {
  try {
    console.log(emailData);
    const data = await apiClient.post("/email", { emailData });
    console.log(data.data);
  } catch (e) {
    console.log(e.message);
  }
};
