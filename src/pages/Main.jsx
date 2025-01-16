import Frame from '../components/Frame';
import RouteTabs from '../components/RouteTabs';

function Main() {
    return (
        <div className="bg-[#1E1E1E] min-h-[100vh] flex flex-col">
             <>
                <Frame />
            </>
            <>
                <RouteTabs />
            </>
        </div>
    );
}

export default Main;
