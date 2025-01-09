import Link from 'next/link';



const Home = async () => {
  const res = await fetch('https://677e9db794bde1c1252cc15f.mockapi.io/datas'); // Replace with your API URL
  const hobbies = await res.json();

  return (
    <div>
    
      <h1 className="text-center text-3xl font-bold my-6">Hobbies Blog</h1>
      <p className="text-center text-gray-700 mb-8">
        Explore posts about various hobbies!
      </p>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {hobbies.map((data: any, index: number) => (
          <div
            key={data.id}
            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={data.image} 
              alt={data.title}
              className="mb-4 w-full h-40 object-cover rounded"
            />

            {/* Link and text */}
            <Link href={`/Posts/${data.id}`} passHref>
              <div className="text-center">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {data.title}
                </h5>
                <p className="font-normal text-gray-700">
                  Click to explore this hobby!
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
