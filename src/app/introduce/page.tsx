import type { NextPage } from 'next';
import Navbar from '../../components/Navbar';

const Introduce: NextPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Giới thiệu</h2>
      <p className="text-center text-gray-600">Đây là trang Giới thiệu.</p>
    </div>
  );
};

export default Introduce;