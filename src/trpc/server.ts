import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { headers } from "next/headers.js";
//import { cache } from "react";

import { createCaller, type AppRouter } from "~/server/api/root.js";
import { createTRPCContext } from "~/server/api/trpc.js";
import { createQueryClient } from "./query-client.js";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = async () => {
  const heads = new Headers(await headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    headers: heads,
  });
};

// const createContext = cache(async () => {
//   const heads = new Headers(await headers());
//   heads.set("x-trpc-source", "rsc");

//   return createTRPCContext({
//     headers: heads,
//   });
// });

//const getQueryClient = cache(createQueryClient);
const getQueryClient = createQueryClient;

const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient
);
