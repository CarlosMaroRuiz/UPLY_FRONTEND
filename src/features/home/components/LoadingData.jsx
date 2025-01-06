const LoadingData = () => {
    return (
      <section className="flex justify-center items-center h-full">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-400"></div>
        </div>
      </section>
    );
  };
  
  export default LoadingData;
  