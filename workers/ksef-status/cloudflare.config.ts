import { bindings, defineConfig, triggers } from "cf/config";
import * as entrypoint from "./src/index.ts" with { type: "cf-worker" };

export default defineConfig({
	worker: {
		name: "ksef-status",
		compatibilityDate: "2026-09-30",
		entrypoint,
		workersDev: false,
		domains: ["ksef-status.shipailab.com"],
		triggers: [triggers.scheduled({ schedule: "*/5 * * * *" })],
		env: {
			STATUS: bindings.kv({ id: "19c7303f1ae1494589abd1f1d44095d0" }),
		},
	},
});
