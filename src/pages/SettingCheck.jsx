import GitRepository from '../components/GitRepository';
import Frame from '../components/Frame';

function SettingCheck() {
    return (
        <div className="bg-[#1E1E1E] min-h-[100vh] flex flex-col">
             <>
                <GitRepository />
            </>
            <>
                <Frame />
            </>
        </div>
    );
}


export default SettingCheck;