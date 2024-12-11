export function Card({ children }: { children: React.ReactNode }) {
    return <div className="bg-white shadow-md rounded-lg p-6">{children}</div>;
  }
  
  export function CardHeader({ children }: { children: React.ReactNode }) {
    return <div className="mb-4">{children}</div>;
  }
  
  export function CardContent({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  }
  
  export function CardTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-xl font-bold">{children}</h3>;
  }
  
  export function CardDescription({ children }: { children: React.ReactNode }) {
    return <p className="text-gray-600">{children}</p>;
  }
  