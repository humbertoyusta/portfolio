import { GetProjectsQuery } from "@/generated/graphql";

type ProjectType = GetProjectsQuery["projects"][0];

export default ProjectType;
