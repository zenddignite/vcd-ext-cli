import program from "commander";
import { UiPlugin } from "./classes/UiPlugin";
import { colors } from "./utilities/colors";

export const launcher = () => {
    program
        .command("deploy <url> <org> <user> <password>")
        .option("-a, --all", "Publish extension for all tenants.")
        .alias("D")
        .description("Deploy plugin with given endpoint, user and password.")
        .action((url, org, user, password, cmd) => {
            const ui = new UiPlugin(url, org, user, password, cmd.all);
            ui.deploy();
        });
};