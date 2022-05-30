import axios from 'axios';

const BASE_URL = `http://127.0.0.1:8000/api/v1`;

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
