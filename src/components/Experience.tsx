import { useState } from "react";
import { jobs } from "../data/experience";

export default function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    modalDescription: string;
  } | null>(null);

  const handleClose = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const handleShow = (job: { title: string; modalDescription: string }) => {
    setModalContent(job);
    setShowModal(true);
  };

  return (
    <div className="bg-white text-center py-12" id="experience">
      <h1 className="text-3xl font-semibold mb-8 text-blue-600">
        Work Experience
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
          >
            <div className="mb-4">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-36 object-cover rounded-t-lg"
              />
            </div>
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              {job.title}
            </h2>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <button
              className="text-blue-600 border border-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-300"
              onClick={() => handleShow(job)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {modalContent?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {modalContent?.modalDescription}
            </p>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
