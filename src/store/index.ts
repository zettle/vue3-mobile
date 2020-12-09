import { createStore } from 'vuex';
import { useHttpPost } from '@hooks/useAxios';
import { FetchRegion } from '@/types';

interface RegionType {
    [index: string]: FetchRegion[];
}

export interface StoreState {
    regionInfo: RegionType;
}

export default createStore<StoreState>({
    strict: true,
    state: {
        regionInfo: {}
    },
    mutations: {
        saveRegion (state, payload: {parentId: string; result: FetchRegion[]}) {
            state.regionInfo[payload.parentId] = payload.result;
        }
    },
    actions: {
        getProCityAction ({ state, commit }, parentId = '0'): Promise<FetchRegion[]> {
            return new Promise(resolve => {
                if (state.regionInfo[parentId]) {
                    resolve(state.regionInfo[parentId]);
                    return false;
                }
                (async () => {
                    const { data: result } = await useHttpPost<FetchRegion[]>('/common/region', { parentId });
                    commit('saveRegion', { parentId, result });
                    resolve(result);
                })();
            });
        }
    },
    modules: {
    }
});
