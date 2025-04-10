import React from "react"

export default function ReferenceLetter() {
    return (
        <>      
            <section className="animate">
                <div className="my-4">
                    <h2 className="font-semibold text-black dark:text-white">Reference Letter</h2>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-col space-y-1">
                                <div className="font-semibold text-black dark:text-white">To whom it may concern,</div>
                                <div className="text-black dark:text-white text-justify">
                                    <p>I am writing this in reference to <span className="font-semibold">Anggun Caksono</span>.</p>
                                    <br />
                                    <p>During the Developer Handal (<a href="https://www.devhandal.id/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">DevHandal</a>) organized by <a href="https://www.codepolitan.com/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">CODEPOLITAN</a> and <a href="https://www.alibabacloud.com/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Alibaba Cloud</a>, Anggun Caksono showed dedication and skill in completing all tasks and effectively
                                        using Alibaba Cloud ECS. His/Her ability to convey complex technical concepts was
                                        evidenced in his submissions, which recognized as one of competent participants.</p>
                                    <br />
                                    <p>Anggun Caksono’s knowledge and technical skills make him an asset to any team in the
                                        Information Technology department.</p>
                                    <br />
                                    <br />
                                    <p>
                                        Bandung, 10th September 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-col space-y-2">
                            <div className="font-semibold text-black dark:text-white">Sincerely,</div>
                            <div className="text-black dark:text-white">
                                <p><a href="https://www.linkedin.com/in/kresnagaluh/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Kresna Galuh D. Herlangga</a></p>
                                <p>CEO Codepolitan</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <a href="/ReferenceLetter/ReferenceLetter.pdf" target="_blank" rel="noreferrer" className="text-blue-500 dark:text-blue-400">Download PDF</a>
                        <a href="https://ecert.codepolitan.com/rl/YQM79JTX" target="_blank" rel="noreferrer"
                            className="text-blue-500 dark:text-blue-400">Check Validity</a>
                    </div>
                </div>
            </section>
        </>
    )
}
