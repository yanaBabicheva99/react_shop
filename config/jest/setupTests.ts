import '@testing-library/jest-dom';
import 'whatwg-fetch';

global.ResizeObserver = class MockedResizeObserver {
    observe = jest.fn();

    unobserve = jest.fn();

    disconnect = jest.fn();
};
