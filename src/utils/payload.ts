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

const createPayload = (data: Interaction, sendError: boolean) => {
  const breakdown = data.spans.map((span) =>
    convertSpanToBreakdownItem(data.name, span)
  );

  const end = data.end
    ? data.end
    : data.spans.sort((a, b) => b.end - a.end)[0].end;

  return {
    timing: {
      start: data.start,
      end,
      duration: end - data.start,
    },
    breakdown,
    errors: sendError ? data.errors : undefined,
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
