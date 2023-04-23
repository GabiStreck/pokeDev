import { Sprites } from "@/types/pokemon"

export const getImage = (image: Sprites) => {
    const imageOther = image['other']
    return (
        imageOther['dream_world'].front_default
        ?? imageOther['official-artwork'].front_default
        ?? image.front_default
    )
}
