import service from '../api';

export const getAllResults = () => service.get(`api/result`);

export const getResult = (id: string | undefined) => service.get(`api/result/${id}`);

export const createResult = (body: any) => service.post(`api/result`, body);

export const updateResult = (id: string, body: any) => service.put(`api/result/${id}`, body);

export const deleteResult = (id: string) => service.delete(`api/result/${id}`);
