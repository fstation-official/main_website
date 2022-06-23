import React from 'react'
import { getPosts } from '../Services/event'
import moment from 'moment'
function Courses({ events }) {
    return (<>









        {events.map((event) => (
            <div className="justify-center inline-block grid-cols-2 gap-2 mt-10 ml-10 sm:ml-20 sm:grid-cols-4">


                <div class="max-w-xs mx-2 mb-2 rounded-lg shadow-lg">
                    <img class="w-full h-48"
                        src={event.image.url}
                        alt="product" />
                    <div class="px-6 py-4">
                        <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">{event.title}</h4>
                        <p class="leading-normal text-gray-700">{event.description}
                        </p>
                        {moment(event.timeDate).format('MMM DD,YYYY')}

                        <button class="bg-blue-500 mb-5 ml-20  mt-2  hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                            Button
                        </button>
                    </div>

                </div></div>

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