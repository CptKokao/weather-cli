import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";

const initCli = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
    // Вывод город
  }

  if (args.t) {
    // Вывод токен
  }

  //   Вывод погоды
};

initCli();
