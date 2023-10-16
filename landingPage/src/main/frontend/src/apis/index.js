import axios from "axios";

const apiClient = axios.create({
  //  baseURL: "192.168.100.102",
  headers: {
    "Content-Type": "application/json",
  },
});

export const emailSender = async (emailData) => {
  const comName = "이게답솔루션";
  const adminEmail = "ansrlgur12@eanswer.co.kr";
  const emailRequest = {
    comName: comName,
    adminEmail: adminEmail,
    contents: "",
    ...emailData,
  };
  try {
    console.log(emailData);
    const data = await apiClient.post("/email", emailRequest);
    console.log(data.data);
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
};
