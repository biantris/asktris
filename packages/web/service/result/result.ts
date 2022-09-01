import service from '../api';

export const getAllResults = () =>
  service({
    method: 'GET',
    url: `api/results`,
  });

export const getResult = (id: string | undefined) =>
  service({
    method: 'GET',
    url: `api/results/${id}`,
  });

export const createResult = (body: any) =>
  service({
    method: 'POST',
    url: `api/results`,
    data: JSON.stringify(body),
  });

export const updateResult = (id: string, body: any) =>
  service({
    method: 'PUT',
    url: `api/results/${id}`,
    data: JSON.stringify(body),
  });

export const deleteResult = (id: string) =>
  service({
    method: 'DELETE',
    url: `api/results/${id}`,
  });
