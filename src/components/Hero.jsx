import frame from "../assets/frame.png";

export default function Hero() {
    return (
        <section className="p-10 px-4 md:mt-[100px]">
            <div className="container lg:px-20 m-auto">
                <div className="grid items-center gap-6 md:grid-cols-2">
                    <div className="flex justify-center md:order-2">
                        <img src={frame} width="250" height="250" alt="frame" />
                    </div>
                    <div>
                        <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
                            Tasker
                        </h1>
                        <p className="text-lg my-2 opacity-60">
                            Effortlessly Organize, Prioritize, and Conquer Tasks
                            with Tasker - Your Personal Productivity Ally for
                            Seamless Goal Achievement and Stress-Free Task
                            Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
