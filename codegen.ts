import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clfpzpa5r1awd01t9f233dfk6/master",
    documents: ["src/**/*.graphql"],
    generates: {
        "./src/generated/graphql.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-graphql-request",
            ],
            config: {
                pureMagicComment: true,
                skipTypename: true,
            },
        },
    },
};
export default config;
