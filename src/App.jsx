import { useState } from 'react';
import GrayBox from './components/GrayBox'; // GrayBox 불러오기
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <GrayBox /> {/* GrayBox 컴포넌트 사용 */}
    </div>
  );
}


export default App;
