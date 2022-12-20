import React from 'react';
import Project from './Project';

const project1 = {
    image: 'https://i.postimg.cc/t42jLfNP/Screenshot-31.png',
    website: 'https://reyno405.github.io/T-REX-MOVIES/',
    title: 'T-Rex Movies',
    repository: 'https://github.com/reyno405/T-REX-MOVIES',
    
};

const project2 = {
    image: 'https://user-images.githubusercontent.com/106449899/186727174-b4b89795-d067-4d86-ae99-cf8971e8824c.jpeg',
    website: 'https://reyno405.github.io/weather-conditions/',
    title: 'Weather Conditions',
    repository: 'https://github.com/reyno405/weather-conditions',
   
};

const project3 = {
    image: 'https://user-images.githubusercontent.com/106449899/193715995-fa8778d7-b865-42c3-8c0e-a6f50b4f3f2a.jpeg',
    website: 'https://reyno405.github.io/Note-Taker/',
    title: 'Note Taker',
    repository: 'https://github.com/reyno405/Note-Taker',
   
};

const project4 = {
    image: 'https://user-images.githubusercontent.com/106449899/185487656-ee6f1686-323d-4183-8461-ce0b18b2c8f1.jpeg',
    website: 'https://reyno405.github.io/work-day-planner/',
    title: 'Work-Day Scheduler',
    repository: 'https://github.com/reyno405/work-day-planner',
   
};

const project5 = {
    image: 'https://i.postimg.cc/vT6kT2nP/Screenshot-30.png',
    title: 'Random Flight Generator',
    website: 'https://reyno405.github.io/Random-Flight-Generator/',
    repository: 'https://github.com/reyno405/Random-Flight-Generator',
   
};

const project6 = {
    image: 'https://i.postimg.cc/Sx5Z2fy3/Screenshot-33.png',
    website: 'https://reyno405.github.io/-EastsideBoom/',
    title: 'Actor Portfolio Site',
    repository: 'https://github.com/reyno405/-EastsideBoom',
    
};

export default function Portfolio() {
    return (

        <div>
            <h1 style={{ color: '#000000', margin: '17px' }}>Projects</h1>
                
                <Project
                    image={project1.image}
                    website={project1.website}
                    title={project1.title}
                    repository={project1.repository}
                    description={project1.description}

                    image2={project2.image}
                    website2={project2.website}
                    title2={project2.title}
                    repository2={project2.repository}
                    description2={project2.description}

                    image3={project3.image}
                    website3={project3.website}
                    title3={project3.title}
                    repository3={project3.repository}
                    description3={project3.description}

                    image4={project4.image}
                    website4={project4.website}
                    title4={project4.title}
                    repository4={project4.repository}
                    description4={project4.description}

                    image5={project5.image}
                    website5={project5.website}
                    title5={project5.title}
                    repository5={project5.repository}
                    description5={project5.description}

                    image6={project6.image}
                    website6={project6.website}
                    title6={project6.title}
                    repository6={project6.repository}
                    description6={project6.description}
                />
                
        </div>
    );
}


