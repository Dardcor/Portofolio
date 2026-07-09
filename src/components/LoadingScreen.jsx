import { useEffect } from 'react';

const LoadingScreen = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => {};
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] bg-dark-950 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0%,_rgba(2,0,10,1)_60%)] animate-[pulseGlow_4s_ease-in-out_infinite]"
                    style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
                />
            </div>

            <div className="relative z-10 w-full flex items-center justify-center animate-[exitZoom_5s_cubic-bezier(0.8,0,0.2,1)_forwards]"
                style={{ willChange: "transform, opacity, filter", backfaceVisibility: "hidden" }}
            >
                <h1
                    className="text-transparent bg-clip-text text-center font-display font-bold relative leading-none"
                    style={{
                        backgroundImage: "linear-gradient(to right, #7c3aed, #a855f7, #6366f1, #a855f7, #7c3aed)",
                        backgroundSize: "200% auto",
                        WebkitTextStroke: "1px rgba(168,85,247,0.15)",
                        animation: "textReveal 3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards, shimmer 3s linear infinite",
                        fontSize: "clamp(4rem, 18vw, 14rem)",
                        willChange: "transform, opacity, filter, letter-spacing",
                        backfaceVisibility: "hidden"
                    }}
                >
                    DARDCOR

                    <span
                        className="absolute top-0 left-0 w-full h-full z-[-1] blur-[30px] opacity-0 animate-[shadowBloom_4s_cubic-bezier(0.2,0.8,0.2,1)_forwards] bg-clip-text text-transparent pointer-events-none"
                        style={{
                            backgroundImage: "linear-gradient(to right, #7c3aed, #a855f7, #7c3aed)",
                            willChange: "transform, opacity, filter",
                            backfaceVisibility: "hidden"
                        }}
                    >
                        DARDCOR
                    </span>

                    <span
                        className="absolute top-0 left-0 w-full h-full z-[2] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.8)_50%,transparent_100%)] bg-clip-text text-transparent opacity-0 animate-[flare_2.5s_ease-in-out_1.5s_forwards] pointer-events-none"
                        style={{
                            backgroundSize: "200% auto",
                            willChange: "background-position, opacity, filter",
                            backfaceVisibility: "hidden"
                        }}
                    >
                        DARDCOR
                    </span>
                </h1>
            </div>

            <style>{`
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.5; transform: translate3d(-50%, -50%, 0) scale(1); }
                    50% { opacity: 1; transform: translate3d(-50%, -50%, 0) scale(1.05); }
                }
                @keyframes textReveal {
                    0% { letter-spacing: -0.5em; filter: blur(30px); opacity: 0; transform: translate3d(0, 20px, 0) scale(0.6); }
                    40% { filter: blur(0px); opacity: 1; }
                    100% { letter-spacing: 0.1em; filter: blur(0px); opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
                }
                @keyframes shimmer {
                    to { background-position: 200% center; }
                }
                @keyframes shadowBloom {
                    0%, 30% { opacity: 0; filter: blur(50px); transform: translate3d(0,0,0) scale(0.9); }
                    100% { opacity: 0.9; filter: blur(30px); transform: translate3d(0,0,0) scale(1.02); }
                }
                @keyframes flare {
                    0% { background-position: 200% center; opacity: 0; filter: brightness(1); }
                    20% { opacity: 1; filter: brightness(1.5); }
                    80% { opacity: 1; filter: brightness(1.5); }
                    100% { background-position: -200% center; opacity: 0; filter: brightness(1); }
                }
                @keyframes exitZoom {
                    0%, 80% { transform: translate3d(0,0,0) scale(1); opacity: 1; filter: brightness(1); }
                    90% { transform: translate3d(0,0,0) scale(1.2); opacity: 1; filter: brightness(2); }
                    98% { transform: translate3d(0,0,0) scale(15); opacity: 0; filter: brightness(5); }
                    100% { transform: translate3d(0,0,0) scale(20); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;
