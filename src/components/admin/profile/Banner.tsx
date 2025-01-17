import Card from 'components/card';
import { useUser } from 'contexts/UserContext';
import { humanizeRole } from 'utils/humanize';
import Avatar from './Avatar';
import banner from '/public/img/profile/banner.png';

const Banner = () => {
   const { user, loading } = useUser();

   if (loading) return <p>Loading...</p>;

   return (
      <Card extra={'items-center w-full h-full p-[16px] bg-cover pb-[25px]'}>
         {/* Background and profile */}
         <div
            className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
            style={{ backgroundImage: `url(${banner.src})` }}
         >
            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
               <Avatar username={user?.username} size="4xl" />
            </div>
         </div>

         {/* Name and position */}
         <div className="mt-16 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">{user?.username}</h4>
            <h5 className="text-base font-normal text-gray-600">{humanizeRole(user?.role)}</h5>
         </div>

         {/* Post followers */}
         {/* <div className="mb-3 mt-6 flex gap-4 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
               <h4 className="text-2xl font-bold text-navy-700 dark:text-white">17</h4>
               <p className="text-sm font-normal text-gray-600">Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
               <h4 className="text-2xl font-bold text-navy-700 dark:text-white">9.7K</h4>
               <p className="text-sm font-normal text-gray-600">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
               <h4 className="text-2xl font-bold text-navy-700 dark:text-white">434</h4>
               <p className="text-sm font-normal text-gray-600">Following</p>
            </div>
         </div> */}
      </Card>
   );
};

export default Banner;
