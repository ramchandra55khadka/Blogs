const trends = [
     {
       title: "The Future of Quantum Computing: Are We There Yet?",
       author: "Dr. Aiden Foster",
     },
     {
       title: "Web3 and the Decentralized Internet Revolution",
       author: "Samantha Lee",
     },
     {
       title: "5G Rollout: How It’s Changing Connectivity Worldwide",
       author: "Ethan Clarke",
     },
     
     {
       title: "Cybersecurity in 2025: Emerging Threats and Defenses",
       author: "Jordan Hayes",
     },
   ];
   
   
   const TrendsList = () => {
        return (
             <div className="bg-white p-4 rounded-lg shadow mt-8">
                  <h3 className="font-semibold text-lg mb-4">Today's Top Trends</h3>
                  <ul className="space-y-4">
                       {trends.map((trends, index) => (
                            <li key={index} className="flex flex-col">
                                 <span className="font-medium">{trends.title}</span>
                                 <span className="text-sm text-gray-500">By {trends.author}</span>
                            </li>
                       ))}
                  </ul>
          </div>
     )
   }
   
   export default TrendsList