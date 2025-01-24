import Layout from './Layout';
import RouteTab from '../components/RouteTab/RouteTab';
import MultiViewBox from '../components/MultiViewBox/MultiViewBox';

const ERD = () => {
  return (
    <Layout>
      {/* 전체 컨테이너 */}
      <div className="relative mx-auto justify-end gap-10">
        {/* MultiViewBox는 왼쪽에 배치 */}
        <MultiViewBox />

        {/* RouteTab은 오른쪽 중앙에 배치 */}
        <div className="absolute right-0 top-1/2 mx-10 -translate-y-1/2 transform">
          <RouteTab />
        </div>
      </div>
    </Layout>
  );
};

export default ERD;
