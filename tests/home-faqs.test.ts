import { describe, expect, it } from "vitest";
import { homeFaqs } from "../src/data/home";
import { translations } from "../src/i18n/ui";
import { createFaqPageSchema } from "../src/lib/structured-data";

const localizedFaqs = homeFaqs.map((faq) => ({
  ...faq,
  question: translations.en[faq.questionKey],
  answer: translations.en[faq.answerKey],
}));

describe("homepage FAQs", () => {
  it("keeps ten unique, fully answered questions", () => {
    expect(localizedFaqs).toHaveLength(10);
    expect(new Set(localizedFaqs.map(({ id }) => id)).size).toBe(10);

    for (const faq of localizedFaqs) {
      expect(faq.question.length).toBeGreaterThan(10);
      expect(faq.answer.length).toBeGreaterThan(40);
    }
  });

  it("opens only the two questions shown open in Pencil", () => {
    expect(localizedFaqs.filter(({ defaultOpen }) => defaultOpen)).toHaveLength(
      2,
    );
  });

  it("builds FAQPage JSON-LD from the same visible content", () => {
    const schema = createFaqPageSchema(localizedFaqs);

    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(localizedFaqs.length);
    expect(schema.mainEntity[0]?.name).toBe(localizedFaqs[0]?.question);
    expect(schema.mainEntity[0]?.acceptedAnswer.text).toBe(
      localizedFaqs[0]?.answer,
    );
  });
});
