export const API_PORT = 8000;

export function getApiBaseUrl(codespaceName = process.env.CODESPACE_NAME): string {
  return codespaceName
    ? `https://${codespaceName}-${API_PORT}.app.github.dev`
    : `http://localhost:${API_PORT}`;
}
