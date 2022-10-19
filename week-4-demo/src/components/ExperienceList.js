import React from 'react';
import Experience from './Experience';

const experiences = [
    {
        name: "UCLA ACM",
        start: "Nov 1996",
        end: "Now",
        title: "Owner",
        description: "Shadow owner of the club ACM @ UCLA. I secretly control everything that ACM does behind the scenes. To me, all ACM officers are just puppets that I use to achieve my idealistic regime."
    },
    { 
        name: "Badminton Club", 
        start: "Oct 2000",
        end: "Jan 2015",
        title: "Member", 
        description: "Long time member of the UCLA Badminton club. Still bad. Quit in the beginning of 2020 because I wasn't improving even after 15 years." 
    },
    { 
        name: "UCLA Dining", 
        start: "Oct 1996", 
        end: "Now",
        title: "President", 
        description: "Started off as a Dining Hall worker, now I'm here. Pionereed initiates and other projects that led to the creation of BPlate."
    },
    {
        name: "Scarship Co.",
        start: "Mar 2021",
        end: "Jun 2022",
        title: "CTO",
        description: "Served as the CTO of Scarship. Single-handedly designed the cutting edge robot: scarship, that delivers food to hungry UCLA students."
    }
]

function ExperienceList() {
    return (
        <div className="section">
            <h1>Experience</h1>
            <div style={{ margin: 'auto', width: '60%'}} >
                {experiences.map((experience) => 
                    <Experience 
                        name={experience.name}
                        start={experience.start}
                        end={experience.end}
                        title={experience.title}
                        description={experience.description}
                    />
                )}
            </div>
        </div>
    )
}

export default ExperienceList;

