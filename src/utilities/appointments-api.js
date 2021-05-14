import sendRequest from "./send-request";
const BASE_URL = "/api/appointments";

export function getBarbers() {
  return sendRequest(`${BASE_URL}/getBarbers`);
}

export function addAppointment(payload) {
  return sendRequest(BASE_URL, "POST", payload);
}

