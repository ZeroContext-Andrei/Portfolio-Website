import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
// If you need shapes like squares, text, etc., you might need the full bundle: 
// import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // Initialize the tsparticles instance (engine) here, adding custom shapes or presets
        // This loads the tsparticles package bundle, it's required right now and prevents loading the bundle in lazy mode
        // You can configure it to load only the features you need reducing the bundle size
        await loadSlim(engine); 
        // Or if using loadFull: await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

    // Configuration options for tsparticles
    // Find more options at: https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html
    const particlesOptions = {
        background: {
            // color: { value: "#0a0a0a" }, // Make background transparent/same as site
        },
        fpsLimit: 60, // Lower for performance if needed
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab", // Other modes: "bubble", "repulse"
                },
                // onClick: { // Optional: Add click interaction
                //     enable: true,
                //     mode: "push", // Other modes: "remove", "bubble"
                // },
            },
            modes: {
                grab: {
                    distance: 150,
                    links: {
                        opacity: 0.5,
                    }
                },
                bubble: {
                    distance: 200,
                    size: 40,
                    duration: 2,
                    opacity: 0.8,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
                push: {
                    quantity: 4,
                },
                remove: {
                    quantity: 2,
                },
            },
        },
        particles: {
            color: {
                value: "#4f46e5", // Use a color from the palette (indigo-600)
                // Or use multiple colors: value: ["#8b5cf6", "#4f46e5", "#22e6d2"]
            },
            links: {
                color: "#ffffff", // Link color
                distance: 150,
                enable: true,
                opacity: 0.1, // Make links subtle
                width: 1,
            },
            collisions: { // Optional: Particles bouncing off each other
                enable: false, 
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "out", // How particles behave when reaching canvas edge
                },
                random: true, // Random movement direction
                speed: 0.5, // Adjust speed
                straight: false, // Move in straight lines or curve
            },
            number: {
                density: {
                    enable: true,
                    area: 800, // Adjust density
                },
                value: 50, // Number of particles
            },
            opacity: {
                value: 0.3, // Base opacity
            },
            shape: {
                type: "circle", // Other shapes: "square", "triangle", "polygon", "star", "image", "char"
            },
            size: {
                value: { min: 1, max: 3 }, // Random size between 1 and 3
            },
        },
        detectRetina: true, // Improves sharpness on high-res displays
        fullScreen: {
             enable: true,
             zIndex: -1 // Ensure it's behind content
        }
    };


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
        />
    );
};

export default ParticlesBackground; 