# jev-cardgen

**Turn a small versioned verdict object into a clean self-contained SVG and, when available, a PNG.**

[![Tests](https://github.com/gbesse/jev-cardgen/actions/workflows/test.yml/badge.svg)](https://github.com/gbesse/jev-cardgen/actions/workflows/test.yml) [MIT](LICENSE) · Node.js 22+ · Zero runtime dependencies · Public alpha

Cardgen is a pure renderer. It makes no Jev call and needs no `TYPESAFE_API_KEY`. Judgment Wall, Roast and Duel Arena vendor their own small export paths so every sibling remains independently installable; this repository is the fuller themeable renderer for future tools.

## Try it in 30 seconds

```sh
git clone https://github.com/gbesse/jev-cardgen.git && cd jev-cardgen
npm run demo
node bin/jev-cardgen.mjs render examples/verdict.json --out card.svg --theme dark
```

Open `examples/demo-card.svg` or `card.svg` in any browser.

## PNG when available

```sh
node bin/jev-cardgen.mjs render verdict.json --out card.svg --png card.png
```

At startup the renderer probes `rsvg-convert`, `resvg`, then Chromium-compatible binaries on `PATH`, with an explicit conversion timeout. When no compatible renderer exists, SVG remains the deliberate zero-dependency fallback. Errors include subprocess stderr.

Import `validateVerdict`, `renderCardSVG`, `detectRenderer`, `renderCardPNG`, `cardGeometry`, or use `browser/card.js` for canvas. See [schema 1](docs/schema.md).

## How it decides

It does not. Schema 1 carries one headline, normalized bars, optional verbatim citations and provenance. Layout math is deterministic and shared with the browser renderer. Light and dark themes change color tokens only.

## Boundaries

No fonts or assets are fetched. Sixteen bars and two displayed citations keep the square card legible. SVG is guaranteed; PNG depends on an installed system renderer.

## Shareable demo report

Run `npm run demo:report` to capture this repository’s bundled example as one JSON object with the project purpose, version and complete demo output. The command fails if the demo fails, so the report is useful when sharing a reproducible first look or reporting unexpected behavior. The bundled demo’s data and safety boundaries still apply.

## Validation

`npm run check`, `npm run typecheck`, `npm test`, and `npm run demo` run in CI on Node 22 and 24. Geometry parity is unit-tested; the project does not use fragile full-pixel snapshots.

## Related projects

[DecisionPacks](https://github.com/gbesse/decisionpacks) · [jev-judgmentwall](https://github.com/gbesse/jev-judgmentwall) · [Question Forge](https://github.com/gbesse/question-forge)

Independent project; not affiliated with TypeSafe AI. [TypeSafe API](https://docs.typesafe.ai/api) · [known model limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13)
