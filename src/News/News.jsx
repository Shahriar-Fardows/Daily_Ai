import  { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Link } from 'react-router-dom';

const News = () => {
    const alanKey = '18e5e0baa76c3de458f462a92ce2770a2e956eca572e1d8b807a3e2338fdd0dc/stage';
    const [articles, setArticles] = useState([]);
    console.log(articles, 'hlllllllllll');

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: (commandData) => {
                if (commandData.command === 'newHeadlines') {
                    console.log(commandData.articles, 'news'); // Log articles to console
                    setArticles(commandData.articles); // Update state with articles
                }
            }
        });
    }, [alanKey]);

    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto py-5'>
                {articles.map((article, index) => (
                     <div key={index} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                     {/*  <!-- Image --> */}
                     <figure>
                       <img
                         src={article.urlToImage || 'https://via.placeholder.com/300'}
                         alt="card image"
                         className="aspect-video w-full"
                       />
                     </figure>
                     {/*  <!-- Body--> */}
                     <div className="p-6">
                       <header className="mb-4 flex flex-grow gap-4">
                         <div>
                          
                           <p className="text-xl text-slate-400">{article.title}</p>
                         </div>
                       </header>
                       <p>
                         {article.description}
                       </p>
                     </div>
                     {/*  <!-- Action base sized link button --> */}
                     <div className="flex justify-end gap-2 p-2 pt-0">
                       <Link to={article.url} className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                         <span>Read more</span>
                       </Link>
                     </div>
                   </div>
                   
                ))}
            </div>
        </div>
    );
};

export default News;
