import { GetSkillCategoriesQuery } from "@/generated/graphql";

type SkillCategoryType = GetSkillCategoriesQuery["skillCategories"][0];

export default SkillCategoryType;
