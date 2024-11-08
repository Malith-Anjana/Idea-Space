import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {searchParams: Promise<{ query? : string}>  }) {
    const query = (await searchParams).query;

    const posts = [
        {
        _createdAt: new Date(),
        views: 55,
        author:{_id: 1, name: "Dave"},
        _id: 1,
        description: "This is sample description",
        image: "https://plus.unsplash.com/premium_photo-1683121426841-a2d69b1b330e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlJTIwcm9ib3RzfGVufDB8fDB8fHww",
        category: "Robots",
        title: "We Robots"
        },
        {
            _createdAt: new Date(),
            views: 52,
            author:{_id: 1, name: "Tom"},
            _id: 2,
            description: "This is sample description1",
            image: "https://plus.unsplash.com/premium_photo-1683121426841-a2d69b1b330e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlJTIwcm9ib3RzfGVufDB8fDB8fHww",
            category: "Robots",
            title: "We Robots1"

        },
        {
            _createdAt: new Date(),
            views: 23,
            author:{_id: 1, name: "Adrian"},
            _id: 3,
            description: "This is sample description",
            image: "https://plus.unsplash.com/premium_photo-1683121426841-a2d69b1b330e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlJTIwcm9ib3RzfGVufDB8fDB8fHww",
            category: "Robots",
            title: "We Robots2"

        },
        {
            _createdAt: new Date(),
            views: 24,
            author:{_id: 3, name: "Steve"},
            _id: 4,
            description: "This is sample description",
            image: "https://plus.unsplash.com/premium_photo-1683121426841-a2d69b1b330e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlJTIwcm9ib3RzfGVufDB8fDB8fHww",
            category: "Robots",
            title: "We Robots4"

        }
    ]
    return (
        <>
            <section className='pink_container'>

            <h1 className='heading'>Pitch Your Startup, <br/> connect with Entrepreneurs</h1>
            <p className='sub-heading !max-w-3xl'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
            <SearchForm query={query}/>
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : 'All Startups'}
                </p>
                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? posts.map((post: StartupCardType)=> (
                        <StartupCard key={post?._id} post={post}/>
                    )):
                    <p className="no-results">No startups found</p>
                    }
                </ul>
            </section>
        </>
    );
}