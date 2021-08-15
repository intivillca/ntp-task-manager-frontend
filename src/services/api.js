import { getToken } from "../components/auth/jwt";

const apiRoot = 'https://localhost:2443';

function getFullPath(path) {
  // Remove "/" from beggining if present.
  // Otherwise we can end up with multiple "/" at beginning
  const cleanPath = path.replace(/^\/+/, '');

  return `${apiRoot}/${cleanPath}`;
}

async function maybeDecodeJSON(response) {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    // If server says the content type is JSON, then decode it like JSON
    return await response.json();
  } else {
    // Otherwise don't!
    const textContent = await response.text();
    console.warn(`Got non-JSON response from API: `, textContent);
    return textContent;
  }
}

async function doRequest(method, path, bodyData = null) {
  const authToken = getToken();

  const body = bodyData ? JSON.stringify(bodyData) : null;
  const contentHeaders = bodyData ? { 'Content-Type': 'application/json' } : {};
  const authHeaders = authToken ? { 'Authorization': `Bearer ${authToken}` } : {};
  const headers = { ...contentHeaders, ...authHeaders };

  const response = await fetch(
    getFullPath(path),
    { method, body, headers }
  );

  return maybeDecodeJSON(response);
}

export const apiGet = (path) => doRequest('GET', path);
export const apiDelete = (path) => doRequest('DELETE', path);
export const apiPost = (path, body) => doRequest('POST', path, body);
export const apiPatch = (path, body) => doRequest('PATCH', path, body);
export const apiPut = (path, body) => doRequest('PUT', path, body);
