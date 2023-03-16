import moment from 'moment';

export const formatDateAndTime = (date: Date) => moment(date).format('DD-MM-YYYY HH:mm:ss');
