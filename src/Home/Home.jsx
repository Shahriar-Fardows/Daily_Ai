import { NavLink } from 'react-router-dom';
import ai from '../../public/ai.png'
import { TypeAnimation } from 'react-type-animation';
const Home = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex  lg:px-24 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1>
                        <TypeAnimation
                                    preRenderFirstString={true}
                                    sequence={[
                                        500,
                                        'Welcome to Daily AI:', // initially rendered starting point
                                        1000,
                                        'Welcome to Daily AI:Your Source for the Latest in Artificial Intelligence',
                                        1000,
                                        
                                    ]}
                                    speed={{type: '', value: 250}}
                                    style={{ fontSize: '2em' }}
                                    repeat={Infinity}
                                />
                        </h1>
                        <p className="mb-8 hidden md:block leading-relaxed">Stay updated with Daily AI, your go-to portal for the most recent advancements, trends, and insights in the world of artificial intelligence. Discover cutting-edge research, expert opinions, and in-depth analyses all in one place.</p>
                        <div className="flex justify-center">
                            <NavLink to='news' className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-600 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-700 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
                                <span>Try it free</span>
                            </NavLink>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={ai} />
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Home;