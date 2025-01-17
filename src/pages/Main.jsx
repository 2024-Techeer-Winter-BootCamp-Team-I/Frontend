import Frame from '../components/Frame';
import Layout from '../components/Layout';

function Main() {
    return (
        <div className="bg-[#1E1E1E] min-h-[100vh] flex flex-col">
            <Frame>
                <Layout />
            </Frame>
        </div>
    );
}

export default Main;