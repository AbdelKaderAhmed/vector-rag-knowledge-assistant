export const EvaluationTable = () => (
  <div className="border rounded-lg overflow-hidden">
    <table className="w-full text-sm">
      <thead className="bg-muted/50 text-xs uppercase">
        <tr>
          <th className="px-6 py-3">Query</th>
          <th className="px-6 py-3">Faithfulness</th>
          <th className="px-6 py-3">Precision</th>
          <th className="px-6 py-3">Latency</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="px-6 py-4">"Explain the RAG pipeline"</td>
          <td className="px-6 py-4">0.95</td>
          <td className="px-6 py-4">0.88</td>
          <td className="px-6 py-4">120ms</td>
        </tr>
      </tbody>
    </table>
  </div>
);