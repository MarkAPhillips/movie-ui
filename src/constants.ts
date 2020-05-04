
type EnvironmentVariables = {
 API_URL: string | undefined;   
}

export const ENV_VARS: EnvironmentVariables = {
    API_URL: process.env.API_URL,
};
