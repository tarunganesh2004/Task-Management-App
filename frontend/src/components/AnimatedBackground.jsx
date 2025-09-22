// @ts-nocheck
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Create particles for background animation
        const newParticles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            size: Math.random() * 4 + 1,
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDuration: Math.random() * 30 + 20,
            animationDelay: Math.random() * 5,
        }));

        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden -z-10">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-90 animate-gradient-xy"></div>

            {/* Animated particles */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-blue-200 dark:bg-blue-800 opacity-30 animate-float"
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        animationDuration: `${particle.animationDuration}s`,
                        animationDelay: `${particle.animationDelay}s`,
                    }}
                />
            ))}

            {/* Animated grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 animate-grid-move"></div>
        </div>
    );
};

export default AnimatedBackground;