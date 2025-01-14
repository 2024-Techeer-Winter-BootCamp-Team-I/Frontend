import Button from '../components/Button';
import MultiViewBox from '../components/MultiViewBox';
import Layout from '../components/Layout';
import RouteTabs from '../components/RouteTabs';

function Design() {
    return (
        <div className="bg-[#1E1E1E] min-h-[100vh] flex flex-col">
            <>
                <MultiViewBox />
            </>
            <>
                <RouteTabs />
            </>
            <>
                <Layout />
            </>
            <>
                <Button />
            </>
        </div>
    );
}

export default Design;
