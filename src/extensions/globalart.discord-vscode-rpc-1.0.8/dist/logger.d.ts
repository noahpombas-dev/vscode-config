export declare enum LogLevel {
    Trace = "TRACE",
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}
export declare function log(level: LogLevel, message: string | Error | object): void;
