import React from 'react';
import '../Hexagon.css'; // 추가된 CSS 파일 import

const Profile = () => {
    return (
        <div
            className="
                w-[10rem] h-[10.625rem] flex-shrink-0 bg-[rgba(97,223,126,0.6)]
                hexagon flex items-center justify-center
            "
        >
            <div
                className="
                    w-[6.875rem] h-[7.5rem] flex-shrink-0 bg-[rgba(97,223,126,0.6)]
                    hexagon
                "
            ></div>
        </div>
    );
};

export default Profile;
