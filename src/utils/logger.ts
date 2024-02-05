import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
  messageKey: "message",
  formatters: {
    level(label, number) {
      return { level: label };
    },
  },
});

export default log;
