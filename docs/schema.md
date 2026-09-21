# Verdict schema 1

The stable envelope is `{ schemaVersion: 1, title, subtitle?, headline, bars, citations?, footer }`. Headline values use their optional `max` (100 by default). Bar values are normalized to 0–1 and clamped only for drawing; invalid non-numbers are rejected. Citations are verbatim strings supplied by the producing tool. The renderer performs no judgment and makes no Jev request.
