import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../axiosConfig';
import { FaBackward } from "react-icons/fa";

function CreateSpace() {
  const [ spaces, setSpaces ] = useState({
    imageUrl:'',
    spaceTitle:'',
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('Upload Image...');

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.name === 'imageUrl') {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    } else {
      setSpaces({ ...spaces, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('spaceTitle', spaces.spaceTitle);


    try {
      await axios.post('/api/restaurant/addSpace', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success("Space added successfully");
      navigate(-1);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add space");
    }
  };

  return (
    <div>
      <button onClick={() => navigate(-1)} className="w-[5.5vw] ml-12 mt-4 py-1 font-semibold text-white text-lg bg-red-800 rounded-lg hover:bg-red-700 transition duration-200 flex items-center justify-center gap-2">
            <FaBackward /> Back
      </button>
      <div className="flex items-center translate-x-[14%] min-h-[90vh] bg-[#FFFFFF] ">
        <div className="flex  rounded-lg overflow-hidden max-w-[70vw] w-full ">
          <div className='w-1/2'>
            <img className='w-full h-full object-contain' src="https://res.cloudinary.com/dqsqywrrk/image/upload/v1723290733/uploadFolder/aslqbemvisepaytbbvil.jpg" alt="" />
          </div>

          <div className="w-full md:w-[42%] p-8 -ml-[6vw]">
            <form onSubmit={handleSubmit} className="space-y-5 shadow-xl p-8 py-16">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add New Space</h2>
              <div>
                <label htmlFor="file" className="block text-m font-semibold text-gray-700 mb-2">Upload Image</label>
                  <input
                    id="file_input"
                    type="file"
                    name="imageUrl"
                    onChange={onChange}
                    className="hidden "
                  />
                <label htmlFor="file_input" className="flex items-center justify-between border border-gray-300 bg-white/80 shadow-xl rounded-md p-2 cursor-pointer">
                  <span className="text-gray-600">{fileName}</span>
                  <span className="bg-gray-200 text-gray-500 px-3 py-1 rounded-md">Choose File</span>
                </label>
              </div>
              <div>
                <label htmlFor="spaceTitle" className="block text-m font-semibold text-gray-700 ">Space Name</label>
                <input
                  type="text"
                  name="spaceTitle"
                  value={spaces.spaceTitle}
                  onChange={onChange}
                  className="mt-1 border border-gray-300 rounded-md w-full p-3 shadow-xl focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                  placeholder="Enter space name"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-red-800 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-200">
                Add New Space
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSpace;


