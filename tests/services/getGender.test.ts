import { getGenres } from "@/services/getGender";

describe("Services: getGender", () => {
    test("Testing with male it should bring the detail of the type", async () => {
        const result = await getGenres({ name: 'male' });
        expect(result).toHaveProperty('name');
        expect(result.name).toEqual('male')
        expect(result).toHaveProperty('required_for_evolution');
    });

    test("Testing with female it should bring the detail of the type", async () => {
        const result = await getGenres({ name: 'female' });
        expect(result).toHaveProperty('name');
        expect(result.name).toEqual('female')
        expect(result).toHaveProperty('required_for_evolution');
    });
});

