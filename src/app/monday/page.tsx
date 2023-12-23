export default function Monday() {
  return (
    <main className="flex flex-col items-center font-bold text-[#320250] bg-[#8c52ff]">
      <h1 className="text-2xl mb-3">MONDAY</h1>
      <table className="w-[80%] md:w-[600px] border border-[rgb(72,22,102)]">
        <thead className="bg-[#320250]">
          <tr className="text-white border-[#481666] border">
            <th className="p-3">Subject</th>
            <th className="p-3">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border-[#481666] border">Seni Teater</td>
            <td className="p-3 border-[#481666] border">07.30-09.00</td>
          </tr>
          <tr>
            <td className="p-3 border-[#481666] border">Bahasa Indonesia</td>
            <td className="p-3 border-[#481666] border">09.00-10.30</td>
          </tr>
          <tr>
            <td className="p-3 border-[#481666] border">Pendidikan Agama</td>
            <td className="p-3 border-[#481666] border">10.50-13.00</td>
          </tr>
          <tr>
            <td className="p-3 border-[#481666] border">PJOK</td>
            <td className="p-3 border-[#481666] border">13.40-15-40</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
