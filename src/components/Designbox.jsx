import React from 'react';

const GrayBox = () => {
    return (
        <div
            style={{
                position: 'absolute', // 절대 위치 지정
                top: '26.375rem',
                bottom: '9.9375rem', 
                left: '41.0625rem',
                right: '14.6875rem',
                width: '80.1875rem',
                height: '40.125rem',
                flexShrink: 0,
                backgroundColor: '#D9D9D9',
                borderRadius: 30
            }}
        ></div>
    );
};

export default GrayBox;

