import { Spinner } from "@material-tailwind/react";

const PageLoading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-bodyColor">
      <Spinner />
    </div>
  );
};

export default PageLoading;
