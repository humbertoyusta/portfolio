import { GetPositionsQuery } from "@/generated/graphql";

type PositionType = GetPositionsQuery["positions"][0];

export default PositionType;
