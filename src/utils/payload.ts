type Span = {
  name: string;
  start: number;
  end: number;
};

type InteractionError = {
  code: number;
  reason: string;
};

type Interaction = {
  name: string;
  start: number;
  end?: number;
  spans: Span[];
  errors: InteractionError[];
};

function convertSpanToBreakdownItem(interactionName: string, span: Span) {
  return {
    name: `${interactionName}/${span.name}`,
    from: span.start,
    to: span.end,
  };
}

// function getLastSpanEndTime(spans: Span[]) {
//   return spans.sort((a, b) => b.end - a.end)[0].end;
// }

// function getLastSpanEndTime(spans: Span[]) {
//   return spans.reduce(
//     (acc, cur) => (acc < cur.end ? cur.end : acc),
//     spans[0].end
//   );
// }

function getLastSpanEndTime(spans: Span[]) {
  return spans.reduce((acc, cur) => Math.max(acc, cur.end), spans[0].end);
}

const createPayloadWithoutError = (data: Interaction) => {
  const { name, spans, start } = data;

  const breakdown = spans.map((span) => convertSpanToBreakdownItem(name, span));
  const end = data.end ? data.end : getLastSpanEndTime(spans);

  return {
    timing: {
      start: start,
      end,
      duration: end - start,
    },
    breakdown,
    errors: undefined,
  };
};

const createPayloadWithError = (data: Interaction) => {
  const { errors } = data;

  return {
    ...createPayloadWithoutError(data),
    errors,
  };
};

const data = {
  name: 'homepage',
  start: 0,
  spans: [
    { name: 'navigation', start: 10, end: 30 },
    { name: 'sidebar', start: 2, end: 15 },
    { name: 'details', start: 0, end: 100 },
  ],
  errors: [{ code: 133, reason: 'operation timeout' }],
};

export {};
