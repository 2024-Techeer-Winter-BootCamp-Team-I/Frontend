import Button from '../components/Button';
import MultiViewBox from '../components/MultiViewBox';
import Navbar from '../components/Navbar';

function Design() {
    return (
        <div className="bg-[#1E1E1E] min-h-[100vh] flex flex-col">
            <>
                < Navbar />
            </>
            <>
                <MultiViewBox />
            </>
            <>
                <Button />
            </>
        </div>
    );
}

export default Design;
