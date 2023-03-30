import { GetAboutMeQuery } from "@/generated/graphql";

type AboutMeType = GetAboutMeQuery["aboutMes"][0];

export default AboutMeType;
