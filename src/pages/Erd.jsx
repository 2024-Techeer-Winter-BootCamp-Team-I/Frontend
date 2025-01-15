import Button from '../components/Button';
import MultiViewBox from '../components/MultiViewBox';
import Frame from '../components/Frame';
import RouteTabs from '../components/RouteTabs';

function Erd() {
    return (
        <div className="bg-[#1E1E1E] min-h-[100vh] flex flex-col">
             <>
                <Frame />
            </>
            <>
                <MultiViewBox />
            </>
            <>
                <RouteTabs />
            </>
            <>
                <Button />
            </>
        </div>
    );
}

export default Erd;
