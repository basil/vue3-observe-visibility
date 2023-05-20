import ObserveVisibility from "./directives/observe-visibility";
import { App } from "vue";

export function install(app: App) {
  app.directive("observe-visibility", ObserveVisibility);
}

export default { ObserveVisibility, install };
export { ObserveVisibility };
