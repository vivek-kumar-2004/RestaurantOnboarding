import React from 'react'

function ScrollingAnimation() {
    return (
        <div id="content" className="pt-[88px] w-full h-[calc(150vh-14vh)]">
      <div id="content-bottom" className="w-full h-[48vh] mt-[68px] flex overflow-x-hidden relative">
        <div className="container flex h-full animate-scroll">
          <div className="elem h-full w-[18vw] mx-[1.1vw] rounded-xl overflow-hidden relative flex-shrink-0">
            <img 
              src="https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=320x399&vertical=center"
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="post absolute bottom-0 h-[20%] w-full ml-[20px] bg-black bg-opacity-50 p-2">
              <h2 className="text-white text-sm">Dan Mall</h2>
              <h5 className="text-white mt-[3px] text-sm">Design Educator</h5>
            </div>
          </div>
          {/* Repeat .elem divs as needed */}
        </div>
        <div className="container flex h-full animate-scroll">
          <div className="elem h-full w-[18vw] mx-[1.1vw] rounded-xl overflow-hidden relative flex-shrink-0">
            <video 
              autoPlay 
              loop 
              muted 
              src="https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402" 
              className="h-full w-full object-cover object-center"
            />
            <div className="post absolute bottom-0 h-[20%] w-full ml-[20px] bg-black bg-opacity-50 p-2">
              <h2 className="text-white text-sm">Cris Owens</h2>
              <h5 className="text-white mt-[3px] text-sm">Creative Director</h5>
            </div>
          </div>
          {/* Repeat .elem divs as needed */}
        </div>
      </div>
    </div>
  );
};
export default ScrollingAnimation