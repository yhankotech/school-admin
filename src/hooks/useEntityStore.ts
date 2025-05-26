import { create } from 'zustand'


type EntityType = {
  entidade: string;
  setEtidade: (entity: string) => void;
  loginHash: object;
  setLoginHash: (hash: object) => void; 
  id_clientes: number;
  setClientId: (id_clientes: number) => void
}

export const useEntityStore = create<EntityType>((set) => ({
  entidade: "",
  loginHash: {},
  id_clientes: Number(),
  setLoginHash: (hash) => set({ loginHash: hash }),
  setEtidade: (entity) => set({entidade: entity}),
  setClientId: (client_id: number) => set({id_clientes: client_id})
}));