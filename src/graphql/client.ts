import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/generated/graphql";

export const GRAPHQL_ENDPOINT =
    "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clfpzpa5r1awd01t9f233dfk6/master";

const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
    headers: {
        "Content-Type": "application/json",
    },
});

export const sdk = getSdk(client);
