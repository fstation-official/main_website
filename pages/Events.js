import React from 'react'
import { getPosts } from '../Services/event'
import moment from 'moment'
function Courses({ events }) {
    return (<>

        {events.map((event) => (

            <div className="container px-4 mx-auto my-12 md:px-12">
                <div className="flex flex-row -mx-1 lg:-mx-4">


                    <div className="flex flex-row w-full px-1 my-1  md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">


                        <article className="overflow-hidden rounded-lg shadow-lg">

                            <a href="#">
                                <img alt="Placeholder" className="block w-full h-auto" src={event.image.url} />
                            </a>

                            <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                                <h1 className="text-lg">
                                    <a className="text-black no-underline hover:underline" href="#">
                                        {event.title}
                                    </a>
                                </h1>

                                <p className="text-sm text-grey-darker">
                                    {moment(event.timeDate).format('MMM DD,YYYY')}
                                </p>

                            </header>
                            <p className='ml-2 mr-2 text-left'>{event.description}</p>

                            <footer className="flex items-center justify-between p-2 leading-none md:p-4">

                                <button className="justify-center px-5 py-4 mb-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                                    <a href={event.link}>Button</a>
                                </button>
                            </footer>

                        </article>

                    </div>






                </div>

            </div>

        ))}














    </>




    )
}

export default Courses


export async function getStaticProps() {
    const events = (await getPosts()) || [];

    return {
        props: { events },
        revalidate: 5,

    }
}