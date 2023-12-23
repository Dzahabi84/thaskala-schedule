export default function Thursday() {
    return (
          
      <main className="flex items-center flex-col font-bold text-[#320250] bg-[#8c52ff]">
        <h1 className="text-2xl mb-3">THURSDAY</h1>
        <table className="table-fixed w-[80%] md:w-[600px] border border-[rgb(72,22,102)]">
          <thead className="bg-[#320250]">
            <tr className="text-white border-[#481666] border">
              <th className="p-3">Subject</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-[#481666] border">Geografi</td>
              <td className="p-3 border-[#481666] border">07.00-09.15</td>
            </tr>
            <tr>
              <td className="p-3 border-[#481666] border">Fisika</td>
              <td className="p-3 border-[#481666] border">09.15-12.10</td>
            </tr>
            <tr>
              <td className="p-3 border-[#481666] border">Kimia</td>
              <td className="p-3 border-[#481666] border">12.10-15.00</td>
            </tr>
          </tbody>
        </table>
      </main>  
    
        
    );
  }
  