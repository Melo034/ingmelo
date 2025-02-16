import { useState, useEffect } from 'react';
import about_3 from "../assets/about_3.jpg"

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://v1.nocodeapi.com/melo/medium/tuBPqgiJiffPyluM')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    const getFirstImage = (content) => {
        const imgRegex = /<img[^>]+src="([^">]+)"/;
        const match = content.match(imgRegex);
        return match ? match[1] : null;
    };


    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section className="mt-5 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-neutral-200 font-semibold">
                    Blog
                </h1>
                <p className="mt-3 text-neutral-500">
                    Blogs that are loved by the community. Updated every hour.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {posts.slice(0, 6).map((post, index) => {
                    const postImage = getFirstImage(post.content);
                    return (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border-neutral-800 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-md duration-300 hover:shadow-sm" key={index}>
                            <a href={post.link} target="_blank" rel="noopener noreferrer">
                                <img src={postImage}
                                    loading="lazy"
                                    alt={post.title}
                                    className="w-full h-48 rounded-t-md object-cover"
                                    onError={() => {
                                        ;
                                    }}
                                />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 object-cover h-10 rounded-full">
                                        <img src={about_3}
                                            className="w-full h-full rounded-full"
                                            alt={post.author}
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-green">{post.author}</span>
                                        <span className="block text-neutral-300 text-sm">
                                            {formatDate(post.published)}
                                        </span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-neutral-200">
                                        {post.title}
                                    </h3>
                                </div>
                            </a>
                        </article>
                    )
                })}
            </div>
            <div className="mt-8 text-center">
                <a href="https://medium.com/@kanujosephmelvin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-neutral-900 bg-green rounded-md hover:bg-[#CCFF00]">
                    Show More
                </a>
            </div>
        </section>
    );
}

export default Blog;