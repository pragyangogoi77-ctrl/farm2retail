import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Product, Farm } from '@/backend';

export function useGetAllProducts() {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetProductById(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Product>({
    queryKey: ['product', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getProductById(id);
    },
    enabled: !!actor && !isFetching && id > BigInt(0),
  });
}

export function useGetAllFarms() {
  const { actor, isFetching } = useActor();

  return useQuery<Farm[]>({
    queryKey: ['farms'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllFarms();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetFarmById(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Farm>({
    queryKey: ['farm', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getFarmById(id);
    },
    enabled: !!actor && !isFetching && id > BigInt(0),
  });
}

export function useGetProductsByFarmId(farmId: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['products', 'farm', farmId.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProductsByFarmId(farmId);
    },
    enabled: !!actor && !isFetching && farmId > BigInt(0),
  });
}

