import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/image/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const moveMainPage = () => {
    navigate('/');
  };

  // 클릭된 내비게이션 아이템을 저장하는 state
  const [activeNav, setActiveNav] = useState('');

  // 각 메뉴별 path 등을 배열로 관리
  const navItems = [
    { label: '기능명세', path: '/spec' },
    { label: '설계', path: '/design' },
    { label: '세팅', path: '/setup' },
  ];

  // 버튼 클릭 시 state를 업데이트하고, 필요한 경우 페이지 이동
  const handleClick = (item) => {
    setActiveNav(item.label);
    // 필요 시 페이지 이동 가능
    // navigate(item.path);
  };

  return (
    <div className="flex h-[150px] bg-black-background font-sans text-white">
      {/* 로고 클릭 시 메인 페이지 이동 */}
      <img
        src={logo}
        alt="logo"
        className="over:cursor-pointer ml-[50px] mt-[35px] h-[80px] w-[250px]"
        onClick={moveMainPage}
      />

      <div className="container mb-[15px] ml-[82px] mr-[50px] flex w-full items-end justify-between py-4 text-[18px]">
        {/* 왼쪽 메뉴들 */}
        <div className="flex gap-[32px]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`ease-ou transition-colors duration-100 ${
                activeNav === item.label ? 'text-green-main' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

     {/* 오른쪽 끝에 추가할 메뉴들(로그인, 마이페이지) */}
    <div className="mr-[50px] flex gap-8 text-[18px]">
      <button
        onClick={() => handleClick({ label: '로그인', path: '/login' })}
        className={`transition-colors duration-100 ease-out ${
          activeNav === '로그인' ? 'text-green-main' : ''
        }`}
      >
        로그인
      </button>
      <button
        onClick={() =>
          handleClick({ label: '마이페이지', path: '/mypage' })
        }
        className={`transition-colors duration-100 ease-out ${
          activeNav === '마이페이지' ? 'text-green-main' : ''
        }`}
      >
        마이페이지
      </button>
    </div>
  </div>
</div>
  );
};

export default Navbar;
