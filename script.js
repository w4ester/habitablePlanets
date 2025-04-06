document.addEventListener('DOMContentLoaded', function() {
    // Planet data - based on current scientific findings of potentially habitable exoplanets
    const planets = [
        {
            id: 1,
            name: 'Proxima Centauri b',
            distance: 4.2, // Light years
            imagePath: 'images/proxima-b.jpg',
            imageCredit: 'ESO/M. Kornmesser',
            star: 'Proxima Centauri (Red Dwarf)',
            earthSimilarity: 0.87, // Earth Similarity Index (ESI)
            radius: 1.08, // In Earth radii
            mass: 1.27, // In Earth masses (estimated)
            temperature: 234, // In Kelvin (estimated surface)
            discoveryYear: 2016,
            description: 'Our closest potentially habitable exoplanet. Orbits a red dwarf star in the habitable zone, but may be tidally locked, with one side always facing its star.'
        },
        {
            id: 2,
            name: 'TRAPPIST-1e',
            distance: 39.6,
            imagePath: 'images/trappist-1e.jpg',
            imageCredit: 'NASA/JPL-Caltech',
            star: 'TRAPPIST-1 (Ultra-cool Dwarf)',
            earthSimilarity: 0.89,
            radius: 0.92,
            mass: 0.77,
            temperature: 251,
            discoveryYear: 2017,
            description: 'Part of a remarkable system of seven rocky planets. TRAPPIST-1e is considered the most likely in this system to host conditions favorable for liquid water.'
        },
        {
            id: 3,
            name: 'Kepler-442b',
            distance: 1206, // Fixed: removed comma to make it a valid number
            imagePath: 'images/kepler-442b.jpg',
            imageCredit: 'NASA Ames/JPL-Caltech/T. Pyle',
            star: 'Kepler-442 (K-type)',
            earthSimilarity: 0.84,
            radius: 1.34,
            mass: 2.3, // estimated
            temperature: 270,
            discoveryYear: 2015,
            description: 'One of the most Earth-like planets discovered in terms of size and estimated temperature. Orbits a K-type star which is more stable than red dwarfs.'
        },
        {
            id: 4,
            name: 'TOI-700 d',
            distance: 101.5,
            imagePath: 'images/toi-700d.jpg',
            imageCredit: 'NASA\'s Goddard Space Flight Center',
            star: 'TOI-700 (Red Dwarf)',
            earthSimilarity: 0.82,
            radius: 1.19,
            mass: 1.72, // estimated
            temperature: 268,
            discoveryYear: 2020,
            description: 'The first Earth-size habitable-zone planet discovered by TESS. In a favorable position to maintain an atmosphere and possibly liquid water.'
        },
        {
            id: 5,
            name: 'Teegarden\'s Star b',
            distance: 12.5,
            imagePath: 'images/teegarden-b.jpg',
            imageCredit: 'University of Göttingen',
            star: 'Teegarden\'s Star (Ultra-cool Dwarf)',
            earthSimilarity: 0.95,
            radius: 1.02, // estimated
            mass: 1.05, // estimated
            temperature: 264,
            discoveryYear: 2019,
            description: 'Has one of the highest Earth Similarity Index values of any known exoplanet. Its star is extremely old (8+ billion years), suggesting long-term stability.'
        },
        {
            id: 6,
            name: 'K2-18b',
            distance: 124,
            imagePath: 'images/k2-18b.jpg',
            imageCredit: 'ESA/Hubble, M. Kornmesser',
            star: 'K2-18 (Red Dwarf)',
            earthSimilarity: 0.73,
            radius: 2.6,
            mass: 8.63,
            temperature: 265,
            discoveryYear: 2015,
            description: 'The first super-Earth exoplanet with water vapor detected in its atmosphere, located in the habitable zone. May be a mini-Neptune rather than rocky.'
        }
    ];

    // Travel technology specifications (theoretical values based on scientific literature)
    const travelTech = {
        chemical: { name: 'Chemical Rockets', speedFraction: 0.0001, description: 'Current technology, up to ~20 km/s' },
        nuclear: { name: 'Nuclear Propulsion', speedFraction: 0.01, description: 'Nuclear thermal or pulse propulsion' },
        fusion: { name: 'Fusion Drives', speedFraction: 0.1, description: 'Advanced fusion-powered propulsion' },
        antimatter: { name: 'Antimatter Engines', speedFraction: 0.3, description: 'Theoretical antimatter-catalyzed propulsion' },
        lightsail: { name: 'Laser Light Sail', speedFraction: 0.2, description: 'Light sail powered by ground-based lasers' },
        warp: { name: 'Theoretical Warp Drive', speedFraction: 1000, description: 'Alcubierre-type space-time manipulation' },
        wormhole: { name: 'Theoretical Wormhole', speedFraction: Infinity, description: 'Instantaneous travel via spacetime shortcuts' }
    };

    // Fill the planets grid
    const planetsContainer = document.getElementById('planets-container');
    
    function renderPlanets() {
        if (!planetsContainer) return; // Guard clause
        
        planetsContainer.innerHTML = '';
        
        planets.forEach(planet => {
            const planetCard = document.createElement('div');
            planetCard.className = 'planet-card';
            
            // Use placeholder images initially
            const placeholderImage = `https://placehold.co/600x400/123456/ffffff?text=${planet.name.replace(/ /g, '+')}`;  // Fixed space replacement
            
            planetCard.innerHTML = `
                <div class="planet-image" style="background-image: url('${placeholderImage}');"></div>
                <div class="planet-info">
                    <h3>${planet.name}</h3>
                    <div class="distance">${planet.distance} light years from Earth</div>
                    <p>${planet.description}</p>
                    <div class="planet-stats">
                        <div class="stat">
                            <span class="stat-name">Star</span>
                            <span class="stat-value">${planet.star}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-name">Earth Similarity</span>
                            <span class="stat-value">${planet.earthSimilarity.toFixed(2)}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-name">Radius</span>
                            <span class="stat-value">${planet.radius} Earth radii</span>
                        </div>
                        <div class="stat">
                            <span class="stat-name">Mass</span>
                            <span class="stat-value">${planet.mass} Earth masses</span>
                        </div>
                        <div class="stat">
                            <span class="stat-name">Temperature</span>
                            <span class="stat-value">${planet.temperature}K</span>
                        </div>
                        <div class="stat">
                            <span class="stat-name">Discovered</span>
                            <span class="stat-value">${planet.discoveryYear}</span>
                        </div>
                    </div>
                </div>
            `;
            
            planetsContainer.appendChild(planetCard);
        });
    }
    
    // Initialize planet selector for the calculator
    const planetSelect = document.getElementById('planet-select');
    const technologySelect = document.getElementById('technology-select');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultContainer = document.getElementById('result-container');
    const distanceResult = document.getElementById('distance-result');
    const travelTimeElement = document.getElementById('travel-time');
    const humanLifespanElement = document.getElementById('human-lifespan');
    
    function initializeCalculator() {
        // Check if all elements exist
        if (!planetSelect || !technologySelect || !calculateBtn || !resultContainer || 
            !distanceResult || !travelTimeElement || !humanLifespanElement) {
            console.error('Missing calculator elements');
            return;
        }
        
        // Clear existing options
        planetSelect.innerHTML = '';
        
        // Add planets to the selector
        planets.forEach(planet => {
            const option = document.createElement('option');
            option.value = planet.id;
            option.textContent = `${planet.name} (${planet.distance} light years)`;
            planetSelect.appendChild(option);
        });
        
        // Set up calculator button
        calculateBtn.addEventListener('click', calculateJourney);
    }
    
    function calculateJourney() {
        try {
            const selectedPlanetId = parseInt(planetSelect.value, 10);
            const selectedTech = technologySelect.value;
            
            const planet = planets.find(p => p.id === selectedPlanetId);
            const technology = travelTech[selectedTech];
            
            if (!planet || !technology) {
                throw new Error('Invalid selection');
            }
            
            const distance = planet.distance; // in light years
            let travelTimeYears;
            let relativistic = false;
            
            if (technology.speedFraction === Infinity) {
                travelTimeYears = 'nearly instantaneous';
            } else {
                // The speed fraction is the fraction of light speed
                // So if speedFraction is 0.1, that's 10% of light speed
                // To find travel time in years, divide distance by speed
                travelTimeYears = distance / technology.speedFraction;
                
                // Account for time dilation at relativistic speeds
                if (technology.speedFraction > 0.1) {
                    relativistic = true;
                }
            }
            
            // Format the output
            distanceResult.textContent = `Distance to ${planet.name}: ${distance.toLocaleString()} light years`;
            
            if (typeof travelTimeYears === 'number') {
                if (travelTimeYears > 1000000) {
                    travelTimeElement.textContent = `Travel time with ${technology.name}: ${(travelTimeYears / 1000000).toFixed(1)} million years`;
                } else if (travelTimeYears > 1000) {
                    travelTimeElement.textContent = `Travel time with ${technology.name}: ${(travelTimeYears / 1000).toFixed(1)} thousand years`;
                } else {
                    travelTimeElement.textContent = `Travel time with ${technology.name}: ${travelTimeYears.toFixed(1)} years`;
                }
                
                // Human lifespan assessment
                if (travelTimeYears <= 80) {
                    if (relativistic) {
                        humanLifespanElement.innerHTML = '<span style="color: #4fc3f7;">✓ POSSIBLE WITHIN HUMAN LIFESPAN</span><br>Due to relativistic time dilation, this journey could be completed within a human lifespan for the travelers, but centuries or millennia would pass on Earth.';
                    } else {
                        humanLifespanElement.innerHTML = '<span style="color: #4fc3f7;">✓ POSSIBLE WITHIN HUMAN LIFESPAN</span><br>This journey could be completed within a human lifespan without significant time dilation effects.';
                    }
                } else if (travelTimeYears <= 1000) {
                    humanLifespanElement.innerHTML = '<span style="color: #ff9800;">△ CHALLENGING</span><br>This journey would require multiple generations or advanced life extension/hibernation technology.';
                } else {
                    humanLifespanElement.innerHTML = '<span style="color: #f44336;">✗ NOT FEASIBLE</span><br>This journey is not feasible within a human timeframe without revolutionary propulsion technology.';
                }
            } else {
                travelTimeElement.textContent = `Travel time with ${technology.name}: ${travelTimeYears}`;
                humanLifespanElement.innerHTML = '<span style="color: #4fc3f7;">⚠ THEORETICAL ONLY</span><br>This theoretical technology could enable travel within a human lifespan, but may violate known physics laws.';
            }
            
            // Show the results
            resultContainer.classList.remove('hidden');
            
            // Add focus to the result container for accessibility
            resultContainer.setAttribute('tabindex', '-1');
            resultContainer.focus();
            
        } catch (error) {
            console.error('Calculation error:', error);
            distanceResult.textContent = 'Error in calculation. Please try again.';
            resultContainer.classList.remove('hidden');
        }
    }
    
    // Initialize the page
    renderPlanets();
    initializeCalculator();
});