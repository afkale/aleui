import { App, Plugin } from "vue";
import * as components from "@/components";

const componentsList = (components as any)?.default;

const AleuiComponents: Plugin = {
	install(app: App) {
		Object.keys(componentsList).forEach((key) => {
			app.component(key, componentsList[key]);
		});
	}
};

export default AleuiComponents;

