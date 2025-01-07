

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Admin</h1>
      {children}
    </div>
  );
}
