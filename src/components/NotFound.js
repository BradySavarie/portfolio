import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
export default function NotFound() {
    const error = useRouteError();
    let errorMessage;
    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.error?.message || error.statusText;
    }
    else if (error instanceof Error) {
        errorMessage = error.message;
    }
    else if (typeof error === 'string') {
        errorMessage = error;
    }
    else {
        console.error(error);
        errorMessage = 'Unknown error';
    }
    return (_jsxs("div", { children: [_jsx("h1", { children: "Oops!" }), _jsx("p", { children: "Sorry, an unexpected error has occurred." }), _jsx("p", { children: _jsx("i", { children: errorMessage }) })] }));
}
