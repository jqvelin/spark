import { api } from '@/shared/api';

import { searchResultsSchema } from '../model/searchResults.schema';

export const getSearchResults = async (searchQuery: string) => {
  const searchResults = await api.get(`search?query=${searchQuery}`).json();
  return searchResultsSchema.parse(searchResults);
};
