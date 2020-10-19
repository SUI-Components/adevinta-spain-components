export const eventReporterFactory = reporter =>
  (reporter && asyncReporter(reporter)) || noopReporter

const noopReporter = () => null
const asyncReporter = reporter => (eventName, payload) =>
  Promise.resolve()
    .then(() => reporter(eventName, payload))
    .catch(ignored => null)
