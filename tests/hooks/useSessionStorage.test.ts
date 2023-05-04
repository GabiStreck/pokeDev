import { renderHook, act } from "@testing-library/react";
import useSessionStorage from "@/hooks/useSessionStorage";

describe("Hooks: useSessionStorage", () => {
    afterEach(() => {
        jest.clearAllMocks();
        window.sessionStorage.clear();
    });

    test("should return null if the key is not found in sessionStorage and no initial value is provided", () => {
        const { result } = renderHook(() => useSessionStorage("nonExistentKey"));
        expect(result.current[0]).toBeNull();
    });

    test("should return the initial value if the key is not found in sessionStorage and an initial value is provided", () => {
        const initialValue = "initialValue";
        const { result } = renderHook(() =>
            useSessionStorage("nonExistentKey", initialValue)
        );
        expect(result.current[0]).toBe(initialValue);
    });

    test("should return the stored value from sessionStorage if the key exists in sessionStorage", () => {
        const storedValue = "storedValue";
        window.sessionStorage.setItem("storedKey", JSON.stringify(storedValue));
        const { result } = renderHook(() => useSessionStorage("storedKey"));
        expect(result.current[0]).toBe(storedValue);
    });

    beforeEach(() => {
        sessionStorage.clear();
    });

    it('should store the new value in sessionStorage when setValue is called', () => {
        const key = 'test-key';
        const initialValue = 'initial-value';
        const newValue = 'new-value';

        const { result } = renderHook(() =>
            useSessionStorage<string>(key, initialValue)
        );

        const [, setValue] = result.current;

        expect(sessionStorage.getItem(key)).toEqual(JSON.stringify(initialValue));

        act(() => {
            setValue(newValue);
        });

        expect(result.current[0]).toEqual(newValue);
        expect(sessionStorage.getItem(key)).toEqual(JSON.stringify(newValue));
    });
})




