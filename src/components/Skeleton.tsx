import {FC} from 'react';

const Skeleton: FC = () => {
    return (
        <div className="flex items-center w-full space-x-4">
            <div className="h-3.5 bg-gray-200 rounded-full mb-8 dark:bg-gray-700 w-full"></div>
            <div className="h-3.5 bg-gray-300 rounded-full mb-8 dark:bg-gray-600 w-full"></div>
            <div className="h-3.5 bg-gray-300 rounded-full mb-8 dark:bg-gray-600 w-full"></div>
            <div className="h-3.5 bg-gray-300 rounded-full mb-8 dark:bg-gray-600 w-full"></div>
        </div>
      );
  }
  
  export default Skeleton;
  