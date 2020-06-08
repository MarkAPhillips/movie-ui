type EnvironmentVariables = {
    API_URL: string | undefined;
    VERSION: string | undefined;
}

export {}

declare global {
    interface Window { _env_: EnvironmentVariables }
}
