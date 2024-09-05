import { Api } from "@/services/api-client"
import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"
import { useSet } from "react-use"

interface ReturnProps {
    ingredients: Ingredient[],
    loading: boolean,
    selecredIngredients: Set<string>;
    onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const [selecredIds, { toggle }] = useSet(new Set<string>([]));

    useEffect(() => {
        async function fetchIngredients() {
            try {
                const ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients) 
                setLoading(true)
            } catch(err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchIngredients()
    }, [])

    return { ingredients, loading, onAddId: toggle, selecredIngredients: selecredIds }
}