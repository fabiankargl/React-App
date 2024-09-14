export const Container = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-slate-300 m-4 rounded-3xl p-4 w-1/2 mx-auto hover:shadow-lg hover:shadow-blue-500/50">
      {children}
    </div>
  );
};