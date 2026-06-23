import * as foam from '@foam-ai/node-opentelemetry';
import { InstrumentationBase } from '@opentelemetry/instrumentation';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';

foam.init({
  serviceName: 'integration-gateway',
  isProduction: process.env.NODE_ENV === 'production',
  apiKey: process.env.FOAM_API_KEY || '',
  additionalInstrumentations: [
    new ExpressInstrumentation({}) as unknown as InstrumentationBase,
  ],
});
