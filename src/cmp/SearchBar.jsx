import { useState } from "react"

export function SearchBar(){

    const [query,setQuery] = useState('')

    

    return (
        <div className="search-bar-container">
            <form>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
        
    )
}