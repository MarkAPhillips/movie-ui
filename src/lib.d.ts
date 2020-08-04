type EnvironmentVariables = {
    MOVIE_API_URL: string | undefined;
    AUTH_API_URL: string | undefined;
    VERSION: string | undefined;
}

export {};

declare global {
    interface Window { _env_: EnvironmentVariables }
}
