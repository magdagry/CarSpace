export function getParamValueFromUrl(paramName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    if (!urlParams.has(paramName)) return null;
    const paramValue = urlParams.get(paramName)
    return paramValue;
}

