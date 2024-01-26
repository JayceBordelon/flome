import Typewriter from 'typewriter-effect';
import React, { useEffect } from 'react';

export default function Intro({ setDoneTyping }) {
    const Future = "The Future Leaders of McKelvey Engineering!";
    const FLOME = "FLOME!";
    const typingDelay = 25; // Delay per character in ms
    const additionalDelay = 4000; // Additional delay to account for pauses

    // Calculate total duration
    const totalDuration = (Future.length + FLOME.length) * typingDelay + additionalDelay;

    useEffect(() => {
        const timer = setTimeout(() => {
            setDoneTyping(true);
            console.log("Setting!!!!!");
        }, totalDuration);

        return () => clearTimeout(timer); // Clean up the timer
    }, [setDoneTyping, totalDuration]);

    return (
        <Typewriter
            options={{
                strings: [Future, FLOME],
                autoStart: true,
                delay: typingDelay,
                deleteSpeed: 10,
                loop: false,
            }}
        />
    );
}
