import React from 'react';

const ProjectsAndInvolvement = () => {
  return (
    <div className="p-1">
      <section id="projects" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        
        <div className="project bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">File Sharing Application</h3>
          <p className="text-gray-600"><strong>Date:</strong> 15/12/2023</p>
          <p className="mt-2">Developed a full-stack mobile responsive file-sharing web application that offers password-protected functionality. Implemented advanced features such as file uploads, downloads, and share, with an intuitive interface. Successfully deployed the application in a production environment, optimizing performance and user experience.</p>
          <p className="mt-2"><strong>Technologies:</strong> Next.js, Node.js, React, Firebase</p>
        </div>

        <div className="project bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">Shift Sync</h3>
          <p className="text-gray-600"><strong>Date:</strong> 12/05/2024</p>
          <p className="mt-2">Developed an advanced scheduling algorithm within the web application that automates shift distribution, intelligently prioritizing senior employees and accommodating unique hours. Applied advanced algorithms to prioritize employee preferences and operational requirements. Significantly improved scheduling efficiency and workforce satisfaction.</p>
          <p className="mt-2"><strong>Technologies:</strong> Next.js, Node.js, Firebase, FastAPI, OR Tools</p>
        </div>

        <div className="project bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">Unit Testing Project</h3>
          <p className="text-gray-600"><strong>Date:</strong> 08/12/2023</p>
          <p className="mt-2">Implemented my knowledge of data structures and algorithms with the implementation of a singly linked list and serialization of user objects. Developed unit tests to validate the functionality of singly linked lists and the serialization of objects.</p>
          <p className="mt-2"><strong>Technologies:</strong> .NET 6, C#, Visual Studio</p>
        </div>
      </section>

      <section id="involvement">
        <h2 className="text-2xl font-bold mb-4">Involvement & Leadership</h2>
        
        <div className="involvement bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold">YYC Hacks</h3>
          <p className="text-gray-600"><strong>Role:</strong> Team Lead and Participant</p>
          <p className="text-gray-600"><strong>Date:</strong> 02/02/2024</p>
          <p className="mt-2">Participated and led a team of 8 members from the ideation to the presentation of our product in Calgary's largest hackathon, with over 300 participants. Pitched an idea along with a prototype of a lawyer marketplace web application, which received great feedback from the judges. My peers appreciated my ability to communicate my ideas effectively.</p>
        </div>
      </section>
    </div>
  );
};

export default ProjectsAndInvolvement;
