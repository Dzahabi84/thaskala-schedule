export default function Wednesday() {
    return (
          
      <main className="flex items-center flex-col font-bold text-[#320250] bg-[#8c52ff]">
        <h1 className="text-2xl mb-3">WEDNESDAY</h1>
        <table className="table-fixed w-[80%] md:w-[600px] border border-[rgb(72,22,102)]">
          <thead className="bg-[#320250]">
            <tr className="text-white border-[#481666] border">
              <th className="p-3">Subject</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-[#481666] border">Informatika</td>
              <td className="p-3 border-[#481666] border">07.00-09.15</td>
            </tr>
            <tr>
              <td className="p-3 border-[#481666] border">BK</td>
              <td className="p-3 border-[#481666] border">09.15-10.00</td>
            </tr>
            <tr>
              <td className="p-3 border-[#481666] border">Bahasa Inggris</td>
              <td className="p-3 border-[#481666] border">10.40-12.10</td>
            </tr>
            <tr>
              <td className="p-3 border-[#481666] border">Matematika</td>
              <td className="p-3 border-[#481666] border">12.10-14.20</td>
            </tr>
            <tr>
              <td className="p-3 border-[#481666] border">Bahasa Sunda</td>
              <td className="p-3 border-[#481666] border">14.20-15.40</td>
            </tr>
          </tbody>
        </table>
      </main>  
    
        
    );
  }
  