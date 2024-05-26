import { getWikiResults } from "@/lib/get-wiki-results"

type Props = {
    params: { searchTerm: string }
}

export default async function SearchPage({ params }: Props) {
    const wikiData: Promise<SearchResults> = getWikiResults(params.searchTerm)
    const data = await wikiData

    const results: Result[] | undefined = data?.query?.pages

    return (
        <main>
            <br />
            { 
                results ? Object.values(results).map(result => {
                    return <p key={result.pageid}>{ JSON.stringify(result) }</p>
                }) : ( <h2>No results found!</h2> )
            }
            <br />
        </main>
    )
}

