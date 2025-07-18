import ky from 'ky';

export const api = ky.create({
  prefixUrl: process.env.BASE_API_URL
});
