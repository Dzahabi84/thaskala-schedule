export default function Friday() {
    return (
      <main className="flex items-center flex-col font-bold text-[#320250] bg-[#8c52ff]">
        <h1 className="text-2xl mb-3">FRIDAY</h1>
        <table className="table-fixed w-[80%] md:w-[600px] border border-[rgb(72,22,102)]">
          <thead className="bg-[#320250]">
            <tr className="text-white border-[#481666] border">
              <th className="p-3">Subject</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-[#481666] border">Ekonomi</td>
              <td className="p-3 border-[#481666] border">07.00-09.15</td>
            </tr>
            <tr>
              <td className="p-3 border-[#481666] border">Bahasa Indonesia</td>
              <td className="p-3 border-[#481666] border">09.15-11.00</td>
            </tr>
            <tr>
              <td className="p-3 border-[#481666] border">Biologi</td>
              <td className="p-3 border-[#481666] border">11.00-14.20</td>
            </tr>
            <tr>
              <td className="p-3 border-[#481666] border">Pramuka</td>
              <td className="p-3 border-[#481666] border">14.20-15.40</td>
            </tr>
          </tbody>
        </table>
      </main>  
    
        
    );
  }
  