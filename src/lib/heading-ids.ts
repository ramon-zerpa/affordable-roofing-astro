export function slugifyHeading(heading: string): string {
  return heading
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[’']/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function createHeadingIds(heading: string) {
  const sectionId = slugifyHeading(heading);

  return {
    sectionId,
    titleId: `${sectionId}-title`,
  };
}
