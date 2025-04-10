import { EXPERIENCE } from "../consts"

const Experience = () => {
    return (
        <>
            <section className="animate">
                <div className="my-4">
                    <h2 className="font-semibold text-black dark:text-white">Experiences</h2>
                </div>
                <div>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {EXPERIENCE.map((item, index) => (
                            <li key={index}>
                                {index !== 0 && <hr />}
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path>
                                    </svg>
                                </div>
                                <div className={`timeline-${index % 2 === 0 ? "start" : "end"} mb-10 ${index % 2 === 0 ? "md:text-end" : ""}`}>
                                    <time className="font-mono italic ">
                                        {item.DURATION}</time>
                                    <div className="font-semibold text-xl mt-1 text-black dark:text-white">{item.COMPANY}</div>
                                    <div className="inline-block text-base font-semibold text-black/80 dark:text-white/80 my-0.5 dark:bg-white/5 bg-black/5 py-1 px-2 rounded-sm shadow-md text-justify">{item.ROLE}</div>
                                    <div className="text-base text-black/70 dark:text-white/70 mb-4 text-justify">{item.DESCRIPTION}</div>
                                </div>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Experience
