interface Config {
  GEO_API_URL: string;
  GEO_API_LIST_PER_PAGE: number;
}

export const config: Config = {
  GEO_API_URL: process.env.NEXT_PUBLIC_GEO_API_URL || "localhost:3000",
  GEO_API_LIST_PER_PAGE:
    Number(process.env.NEXT_PUBLIC_GEO_API_LIST_PER_PAGE) || 10,
};
