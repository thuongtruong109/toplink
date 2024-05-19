import { defineStore } from 'pinia'
import jsonData from '~/data/url.json';
import type { IUrl } from '~/types';

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
    }
  },
  actions: {
    // setUrls(data: Array<any>) {
    //     this.urls = data
    // }
  },
})
