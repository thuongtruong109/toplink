import { defineStore } from 'pinia'
import jsonData from '~/data/url.json';
import type { IUrl, IUrlField } from '~/types';

interface CounterState {
  urls: IUrl[]
}

export const useUrl = defineStore('url', {
  state: (): CounterState => ({
    urls: jsonData as unknown as IUrl[]
  }),
  getters: {
    getAllUrls(state): IUrl[] {
        return state.urls
    },

    getCategories(state): IUrlField[] {
      return state.urls.map(obj => {
        const { items, ...rest } = obj;
        return rest;
      })
    },
  },
})
