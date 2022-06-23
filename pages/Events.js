import React from 'react'
import { getPosts } from '../Services/event'
import moment from 'moment'
function Courses({ events }) {
    return (<>
        <div className="container px-4 mx-auto my-12 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {events.map((event) => (
                    <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg">
                            <a href="#">
                                <img alt="Placeholder" className="block w-full h-auto" src={event.image.url} key={event.image} />
                            </a>
                            <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                                <h1 className="text-lg">
                                    <a className="text-black no-underline hover:underline" key={event.title}>
                                        {event.title}
                                    </a>
                                    <p className="text-sm text-grey-darker">
                                        {moment(event.timeDate).format('MMM DD,YYYY')}
                                    </p>
                                </h1>
                            </header>
                            <p className="ml-5 text-sm text-grey-darker" key={event.description}>
                                {event.description}
                            </p>

                            <button className="justify-center px-5 py-4 mb-5 ml-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                                <a key={event.link} href={event.link}>Button</a>
                            </button>
                        </article>
                    </div>))}
            </div></div>

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