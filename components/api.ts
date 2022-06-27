import axios from 'axios';

// const BASE_URL = `${process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/api/v1' : 'http://www.smart-gardening.kro.kr:8000'}`;
const BASE_URL = `${
  process.env.NODE_ENV === 'development' ? 'http://cashup.iptime.org:5050/api/v1' : 'http://cashup.iptime.org:5050/api/v1'
}`;

export function getFlowersList(word: string | undefined) {
  if (word) {
    return fetch(`${BASE_URL}/flowers/?word=${word}`).then((response) => response.json());
  }
  return fetch(`${BASE_URL}/flowers`).then((response) => response.json());
}

export function getFlowerDetail(id: string | string[] | undefined) {
  return fetch(`${BASE_URL}/flowers/${id}`).then((response) => response.json());
}

export function getMyStatus() {
  return fetch(`${BASE_URL}/core/1`).then((response) => response.json());
}

export function getGardens() {
  return fetch(`${BASE_URL}/gardens`).then((response) => response.json());
}

export function getGarden(id: string | string[] | undefined) {
  return fetch(`${BASE_URL}/gardens/${id}`).then((response) => response.json());
}

export function getDiary(id: string | string[] | undefined) {
  return fetch(`${BASE_URL}/gardens/${id}/diary`).then((response) => response.json());
}

interface DiaryForm {
  image: File;
  title: string;
  description: string;
}

export function createDiary(id: string | string[] | undefined, diaryForm: DiaryForm) {
  axios
    .postForm(`${BASE_URL}/gardens/${id}/diary/create`, diaryForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response);
}

export interface CommandProps {
  location: string | undefined;
  command: string;
  command_kor: string;
  is_done: boolean;
}

export async function waterCommand(command: CommandProps) {
  const response = await axios.post(`${BASE_URL}/core/1/command/`, command, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function goToHome(command: CommandProps) {
  const response = await axios.post(`${BASE_URL}/core/1/command/`, command, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
