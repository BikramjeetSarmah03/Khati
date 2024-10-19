import winston, { LoggerOptions } from "winston";
const { combine, timestamp, printf, colorize, align } = winston.format;

const loggerConfig: LoggerOptions = {
  level: "info",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()],
};

const logger = winston.createLogger(loggerConfig);

export default logger;
