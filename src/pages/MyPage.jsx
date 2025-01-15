import Myproject from "../components/MyProject";
import Frame from '../components/Frame';

function MyPage() {
    return (
        <div className="bg-[#1E1E1E] min-h-[100vh] flex flex-col">
             <>
                <Frame />
            </>
             <>
                <Myproject />
            </>
        </div>
    );
}

export default MyPage;