import FadeInOnScroll from "../animations/FadeInOnScroll";
import TextReveal from "../animations/TextReveal";
import { COMPARISON } from "@/lib/services";

// Me vs agency vs cheap dev shop vs DIY. The comparison founders already
// run in their head, laid out so the answer is obvious.
export default function CompareSection() {
  return (
    <section id="compare" className="bg-white border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeInOnScroll className="mb-12 md:mb-16 text-center">
          <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium mb-4">
            Your options
          </p>
          <h2
            className="text-neutral-900 font-bold leading-tight"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            <TextReveal text="Me, or everything else." inView />
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full min-w-[720px] border-collapse text-left text-[15px]">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th scope="col" className="py-4 pr-4 text-neutral-500 text-xs uppercase tracking-[0.2em] font-medium w-1/5" />
                  {COMPARISON.columns.map((col, i) => (
                    <th
                      key={col}
                      scope="col"
                      className={`py-4 px-4 text-xs uppercase tracking-[0.2em] font-bold ${
                        i === 0 ? "text-neutral-900 bg-neutral-50 rounded-t-2xl" : "text-neutral-500"
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.rows.map((row, r) => (
                  <tr key={row.label} className="border-b border-neutral-200">
                    <th scope="row" className="py-4 pr-4 text-neutral-900 font-semibold align-top">
                      {row.label}
                    </th>
                    {row.values.map((v, i) => (
                      <td
                        key={i}
                        className={`py-4 px-4 align-top ${
                          i === 0
                            ? `text-neutral-900 font-semibold bg-neutral-50 ${
                                r === COMPARISON.rows.length - 1 ? "rounded-b-2xl" : ""
                              }`
                            : "text-neutral-600"
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
