import { useRouter } from "next/navigation"

export const useSearchQuery = () => {
    const router = useRouter()

    return (searchBoxValue: string) => {
    const url = new URL(window.location.href)
    
    if (!searchBoxValue) {
        router.push(`${url.href.split("?")[0]}`)    
    } else {
        router.push(`${url.href.split("?")[0]}?search=${searchBoxValue}`)
    }
}}