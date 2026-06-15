// components/documents/DataTable.tsx
import { StatusBadge } from "./StatusBadge";

interface Document {
  id: number;
  name: string;
  size: string;
  date: string;
  chunks: number;
  status: "processed" | "pending" | "error";
}

interface DataTableProps {
  data: Document[];
}

export const DataTable = ({ data }: DataTableProps) => (
  <div className="rounded-xl border border-[#27272A] bg-[#18181B] overflow-hidden">
    <table className="w-full text-sm">
      <thead className="bg-[#09090B]/50 border-b border-[#27272A]">
        <tr>
          <th className="px-6 py-4 text-left font-medium text-zinc-400">Name</th>
          <th className="px-6 py-4 text-left font-medium text-zinc-400">Size</th>
          <th className="px-6 py-4 text-left font-medium text-zinc-400">Chunks</th>
          <th className="px-6 py-4 text-left font-medium text-zinc-400">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-[#27272A]">
        {data.map((doc) => (
          <tr key={doc.id} className="hover:bg-[#27272A]/30 transition-colors">
            <td className="px-6 py-4 font-medium text-white">{doc.name}</td>
            <td className="px-6 py-4 text-zinc-400">{doc.size}</td>
            <td className="px-6 py-4 text-zinc-400">{doc.chunks}</td>
            <td className="px-6 py-4">
              <StatusBadge status={doc.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);