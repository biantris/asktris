import service from '../api';

export const getAllResults = () =>
  service({
    method: 'GET',
    url: `api/result`,
  });

export const getResult = (id: string | undefined) =>
  service({
    method: 'GET',
    url: `api/result/${id}`,
  });

export const createResult = (body: any) =>
  service({
    method: 'POST',
    url: `api/result`,
    data: JSON.stringify(body),
  });

export const updateResult = (id: string, body: any) =>
  service({
    method: 'PUT',
    url: `api/result/${id}`,
    data: JSON.stringify(body),
  });

export const deleteResult = (id: string) =>
  service({
    method: 'DELETE',
    url: `api/result/${id}`,
  });
