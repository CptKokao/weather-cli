import { getArgs } from "./helpers/args.js";

const initCli = () => {
  const args = getArgs(process.argv);
  console.log(args);

  if (args.h) {
    // Вывод help
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
