import React from 'react';
import MenuManagement from '../components/MenuManagement';
import AmenitiesManagement from '../components/AmenitiesManagement';
import SpacesManagement from '../components/SpacesManagement';
import TimingsManagement from '../components/TimingsManagement';
import TypingAnimation from '../components/TypingAnimation';

const AdminDashboard = () => {
    return (
        <div className="p-4 bg-[#F9F4F3]">
            <TypingAnimation />
            <h1 className='text-xl font-semibold font-sans mb-8'>Unlock the full potential of your food delivery service with our state-of-the-art admin tools. Our platform allows you to efficiently manage orders, streamline restaurant listings, and oversee user activities from one centralized dashboard. With powerful analytics and customizable features, you can make data-driven decisions and enhance operational efficiency. Experience seamless integration, robust security, and intuitive design that makes managing your service both effective and straightforward. Empower your team and elevate customer satisfaction with our comprehensive admin solution.</h1>
            <div className="mb-6">
                <MenuManagement />
            </div>
            <div className="mb-6">
                <AmenitiesManagement />
            </div>
            <div className="mb-6">
                <SpacesManagement />
            </div>
            <div className="mb-6">
                <TimingsManagement />
            </div>
        </div>
    );
};

export default AdminDashboard;
