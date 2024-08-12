// @refresh reload
import * as Sentry from '@sentry/solidstart';
import {mount, StartClient} from "@solidjs/start/client";

Sentry.init({
  dsn: "https://a23a8ca3cf9402c4d3e05e872322db20@o447951.ingest.us.sentry.io/4507764690386944",
  debug: true
});

mount(() => <StartClient/>, document.getElementById("app")!);
