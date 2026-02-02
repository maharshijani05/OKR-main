import type { OKRType } from '../types/okr_types.tsx';

const SERVER_URL = 'http://localhost:3000/okr';

export const getAllOkrs = async (): Promise<OKRType[]> => {
  const response = await fetch(SERVER_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch OKRs');
  }
  const data = await response.json();
  return data.data
};

export const createOkr = async (okr: OKRType): Promise<void> => {
  const response = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(okr),
  });

  if (!response.ok) {
    throw new Error('Failed to create OKR');
  }
};

export const updateOkr = async (okr: OKRType): Promise<void> => {
  const response = await fetch(`${SERVER_URL}/${okr.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(okr),
  });

  if (!response.ok) {
    throw new Error('Failed to update OKR');
  }
};
