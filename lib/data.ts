export const links = [
  {
    name: "Politics",
    hash: "#politics",
  },
  {
    name: "Opinions",
    hash: "#opinions",
  },
  {
    name: "Style",
    hash: "#style",
  },
  {
    name: "Investigations",
    hash: "#investigations",
  },
  {
    name: "Climate",
    hash: "#climate",
  },
  {
    name: "Well being",
    hash: "#well-being",
  },
  {
    name: "Tech",
    hash: "#tech",
  },
  {
    name: "World",
    hash: "#world",
  },
  {
    name: "Sports",
    hash: "#sports",
  },
] as const;

export const getRecipeices = async () => {
  const res = await fetch(" https://dummyjson.com/recipes");

  return res.json();
};
