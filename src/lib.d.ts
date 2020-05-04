type EnvironmentVariables = {
    API_URL: string | undefined;   
}

export {}

declare global {
    interface Window { _env_: EnvironmentVariables }
}