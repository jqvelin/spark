import { api } from '@/shared/api';

import { homePageDataSchema } from '../model/homePageData.schema';

export const getHomePageData = async () => {
  const homepageData = await api.get('homepage').json();
  return homePageDataSchema.parse(homepageData);
};
